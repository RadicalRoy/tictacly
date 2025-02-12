import { TouchableOpacity, Text, StyleSheet } from "react-native";
import { Game, GameHistoryRecord } from "../store/gameStore";

type Props = {
  gameRecord: GameHistoryRecord;
  gameId: number;
};

export default function GameCard({ gameRecord, gameId }: Props) {
  return (
    <TouchableOpacity style={styles.card}>
      <Text>{`Id: ${gameId}`}</Text>
      <Text>{`Winner: ${gameRecord.winner}`}</Text>
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
