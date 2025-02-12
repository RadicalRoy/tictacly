import { Text, StyleSheet, Pressable } from "react-native";
import { GameHistoryRecord } from "../store/gameStore";
import { Link } from "expo-router";

type Props = {
  gameRecord: GameHistoryRecord;
  gameId: number;
};

export default function GameCard({ gameRecord, gameId }: Props) {
  return (
    <Link href={`/${gameId}`} asChild>
      <Pressable style={styles.card}>
        <Text>{`Id: ${gameId}`}</Text>
        <Text>{`Winner: ${gameRecord.winner}`}</Text>
      </Pressable>
    </Link>
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
