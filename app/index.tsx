import { useState } from "react";
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import Square from "../components/Square";
import Row from "../components/Row";
import { Game } from "../store/gameStore";

export default function App() {
  const [game, setGame] = useState<Game>(
    Array(3).fill(Array(3).fill(undefined)),
  );

  const handleToggle = (i: number, j: number) => {
    setGame((oldGame) => {
      const newGame = JSON.parse(JSON.stringify(oldGame)) as Game;

      if (oldGame[i][j] === undefined || oldGame[i][j] === "O") {
        newGame[i][j] = "X";
      } else {
        newGame[i][j] = "O";
      }

      return newGame;
    });
  };

  return (
    <ScrollView
      style={styles.scrollView}
      contentContainerStyle={styles.container}
    >
      <View style={styles.game}>
        <Row row={game[0]} rowId={0} handleToggle={handleToggle} />
        <Row row={game[1]} rowId={1} handleToggle={handleToggle} />
        <Row row={game[2]} rowId={2} handleToggle={handleToggle} />
      </View>
      <TouchableOpacity style={styles.saveGameButton} activeOpacity={0.8}>
        <Text>Save this game!</Text>
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
  saveGameButton: {
    padding: 8,
    borderWidth: 2,
    borderRadius: 6,
  },
  game: { marginBottom: 12 },
});
