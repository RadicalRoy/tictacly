import AsyncStorage from "@react-native-async-storage/async-storage";
import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

export type TicTacToe = "X" | "O" | null;
export type Game = TicTacToe[][];
export type GameHistoryRecord = { game: Game; winner: TicTacToe };

type GameState = {
  history: GameHistoryRecord[]; // will use index as history order
  saveGame: (game: Game, winner: TicTacToe) => void;
};

export const useGameStore = create(
  persist<GameState>(
    (set) => ({
      history: [],
      saveGame: (game: Game, winner: TicTacToe) => {
        set((state) => ({
          history: [
            ...state.history,
            { game: JSON.parse(JSON.stringify(game)) as Game, winner },
          ],
        }));
      },
    }),
    {
      name: "tictacly-store",
      storage: createJSONStorage(() => AsyncStorage),
    },
  ),
);
