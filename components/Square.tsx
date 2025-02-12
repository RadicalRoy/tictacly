import { useState } from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";
import type { TicTacToe } from "../store/gameStore";

type Props = {
  value: TicTacToe;
  onToggle: () => void;
  winner: TicTacToe;
};

export default function Square({ value, onToggle, winner }: Props) {
  return (
    <TouchableOpacity
      style={styles.button}
      onPress={onToggle}
      disabled={!!winner}
    >
      <Text style={styles.text}>{value}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    width: 100,
    height: 100,
    borderWidth: 2,
    borderRadius: 6,
    margin: 4,
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    justifyContent: "center",
    textAlign: "center",
    fontSize: 30,
  },
});
