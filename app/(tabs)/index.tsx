import { useCallback, useEffect, useState } from "react";
import {
  Alert,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
} from "react-native";
import { Game, TicTacToe, useGameStore } from "../../store/gameStore";
import GameBoard from "../../components/GameBoard";

const initialState = Array(3).fill(Array(3).fill(null));

export default function App() {
  const [game, setGame] = useState<Game>(initialState);
  const [currentPlayer, setCurrentPlayer] = useState<TicTacToe>("X");
  const [winner, setWinner] = useState<TicTacToe>(null);

  useEffect(() => {
    // effects for winner
    if (winner) {
      Alert.alert("We have a winner!", `${winner} has won the game!`);
    }
  }, [winner]);

  const saveGame = useGameStore((store) => store.saveGame);

  const handleSaveGame = useCallback(() => {
    if (!winner) {
      Alert.alert(
        "There must be a winner before saving",
        "Play it out to save the game record",
      );
    } else {
      saveGame(game, winner);
    }
  }, [game, winner]);

  const handleToggle = useCallback(
    (i: number, j: number) => {
      setGame((oldGame) => {
        const newGame = JSON.parse(JSON.stringify(oldGame)) as Game;

        newGame[i][j] = currentPlayer;

        // check winner
        const winner = checkWinner(newGame);

        if (winner) {
          setWinner(winner);
        } else {
          setCurrentPlayer((current) => {
            if (current === "X") {
              return "O";
            } else {
              return "X";
            }
          });
        }

        return newGame;
      });
    },
    [winner, currentPlayer],
  );

  return (
    <ScrollView
      style={styles.scrollView}
      contentContainerStyle={styles.container}
    >
      <Text>{`Current Player: ${currentPlayer}`}</Text>
      <GameBoard winner={winner} game={game} handleToggle={handleToggle} />
      <TouchableOpacity
        style={styles.gameButton}
        activeOpacity={0.8}
        onPress={handleSaveGame}
      >
        <Text>Save this game!</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.gameButton}
        activeOpacity={0.8}
        onPress={() => {
          setGame(initialState);
          setWinner(null);
        }}
      >
        <Text>Reset board</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  scrollView: {
    flex: 1,
    backgroundColor: "#fff",
  },
  container: {
    padding: 12,
    alignItems: "center",
    justifyContent: "center",
  },
  gameButton: {
    padding: 8,
    borderWidth: 2,
    borderRadius: 6,
    marginBottom: 8,
  },
});

const checkWinner = (game: Game) => {
  // check rows
  for (let i = 0; i < 3; i++) {
    if (game[i][0] && game[i][0] === game[i][1] && game[i][1] === game[i][2]) {
      return game[i][0];
    }
  }

  // check columns
  for (let j = 0; j < 3; j++) {
    if (game[0][j] && game[0][j] === game[1][j] && game[1][j] === game[2][j]) {
      return game[0][j];
    }
  }

  // check diagonals
  if (game[0][0] && game[0][0] === game[1][1] && game[1][1] === game[2][2]) {
    return game[1][1];
  }
  if (game[0][2] && game[0][2] === game[1][1] && game[1][1] === game[2][0]) {
    return game[1][1];
  }

  return null;
};
