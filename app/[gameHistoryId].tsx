import { ScrollView, Text, StyleSheet } from "react-native";
import GameBoard from "../components/GameBoard";
import { useGameStore } from "../store/gameStore";
import { useLocalSearchParams, useNavigation } from "expo-router";
import { useEffect } from "react";

export default function GameHistoryScreen() {
  const params = useLocalSearchParams();
  const navigation = useNavigation();

  const gameHistoryId = Number(params.gameHistoryId);

  const { winner, game } = useGameStore(
    (store) => store.history[gameHistoryId],
  );

  useEffect(() => {
    navigation.setOptions({
      title: `Game #${gameHistoryId}`,
    });
  }, [gameHistoryId, navigation]);

  return (
    <ScrollView
      style={styles.scrollView}
      contentContainerStyle={styles.container}
    >
      <Text style={styles.title}>{`Winner: ${winner}`}</Text>
      <GameBoard winner={winner} game={game} handleToggle={() => {}} />;
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
  title: {
    fontSize: 24,
  },
});
