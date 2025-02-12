import { FlatList } from "react-native";
import { useGameStore } from "../store/gameStore";
import GameCard from "../components/GameCard";

export default function HistoryScreen() {
  const history = useGameStore((store) => store.history);
  return (
    <FlatList
      data={history}
      renderItem={({ item, index }) => <GameCard game={item} gameId={index} />}
    />
  );
}
