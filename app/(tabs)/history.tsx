import { FlatList, Text } from "react-native";
import { useGameStore } from "../../store/gameStore";
import GameCard from "../../components/GameCard";

export default function HistoryScreen() {
  const history = useGameStore((store) => store.history);
  return (
    <FlatList
      data={history}
      renderItem={({ item, index }) => (
        <GameCard gameRecord={item} gameId={index} />
      )}
      ListEmptyComponent={
        <Text>You must play and save a game to view history</Text>
      }
    />
  );
}
