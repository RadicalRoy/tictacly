import { View, StyleSheet } from "react-native";
import Square from "./Square";
import type { TicTacToe } from "../store/gameStore";

type Props = {
  row: TicTacToe[];
  rowId: number;
  handleToggle: (i: number, j: number) => void;
};

export default function Row({ rowId, row, handleToggle }: Props) {
  return (
    <View style={styles.row}>
      <Square value={row[0]} onToggle={() => handleToggle(rowId, 0)} />
      <Square value={row[1]} onToggle={() => handleToggle(rowId, 1)} />
      <Square value={row[2]} onToggle={() => handleToggle(rowId, 2)} />
    </View>
  );
}

const styles = StyleSheet.create({
  row: {
    flexDirection: "row",
  },
});
