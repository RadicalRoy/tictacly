import { TouchableOpacity, Text, StyleSheet } from "react-native";
import { Game } from "../store/gameStore";

type Props = {
  game: Game;
  gameId: number;
};

export default function GameCard({ game, gameId }: Props) {
  return (
    <TouchableOpacity style={styles.card}>
      <Text>{`Id: ${gameId}`}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    height: 100,
    borderWidth: 2,
    borderRadius: 6,
    margin: 12,
    padding: 12,
  },
});
