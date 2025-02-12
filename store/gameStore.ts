import AsyncStorage from "@react-native-async-storage/async-storage";
import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

export type TicTacToe = "X" | "O" | undefined;
export type Game = TicTacToe[][];

type GameState = {
  history: Game[];
  saveGame: (game: Game) => void;
};

export const useGameStore = create(
  persist<GameState>(
    (set) => ({
      history: [],
      saveGame: (game: Game) => {
        set((state) => ({
          history: [...state.history, game],
        }));
      },
    }),
    {
      name: "tictacly-store",
      storage: createJSONStorage(() => AsyncStorage),
    },
  ),
);
