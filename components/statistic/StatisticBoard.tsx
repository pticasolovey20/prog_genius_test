import { useEffect } from "react";
import { observer } from "mobx-react-lite";

import EmotionStore from "@/stores/EmotionStore";
import { StatisticPeriod } from "@/types/emotionTypes";

import EmptyBoard from "@/components/board/EmptyBoard";
import StatisticCard from "@/components/statistic/StatisticCard";

interface StatisticBoardProps {
  statisticPeriod: StatisticPeriod;
}

const StatisticBoard = ({ statisticPeriod }: StatisticBoardProps) => {
  useEffect(() => {
    EmotionStore.getFromLocalStorage();
  }, []);

  const statistic = EmotionStore.getEmotionStatistic(statisticPeriod).sort((a, b) => b.count - a.count);

  if (statistic.length === 0) {
    return <EmptyBoard content="No cards for the selected period" />;
  }

  return (
    <div className="flex flex-col md:grid grid-cols-2 lg:grid-cols-3 gap-4">
      {statistic.map((element) => (
        <StatisticCard key={element.value} element={element} />
      ))}
    </div>
  );
};

export default observer(StatisticBoard);
