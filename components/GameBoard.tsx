import { View, StyleSheet } from "react-native";
import Row from "./Row";
import type { Game, TicTacToe } from "../store/gameStore";

type Props = {
  game: Game;
  handleToggle: (i: number, j: number) => void;
  winner: TicTacToe;
};

export default function GameBoard({ game, handleToggle, winner }: Props) {
  return (
    <View style={styles.gameBoard}>
      <Row
        row={game[0]}
        rowId={0}
        handleToggle={handleToggle}
        winner={winner}
      />
      <Row
        row={game[1]}
        rowId={1}
        handleToggle={handleToggle}
        winner={winner}
      />
      <Row
        row={game[2]}
        rowId={2}
        handleToggle={handleToggle}
        winner={winner}
      />
    </View>
  );
}

const styles = StyleSheet.create({ gameBoard: { marginBottom: 12 } });
