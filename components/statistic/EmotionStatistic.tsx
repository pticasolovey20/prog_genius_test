"use client";

import { useState } from "react";
import { observer } from "mobx-react-lite";

import { periodOptions } from "@/constants/emotion";
import { StatisticPeriod } from "@/types/emotionCardTypes";

import { Button } from "@/components/ui/button";
import EmptyEmotionStatistic from "@/components/statistic/EmptyEmotionStatistic";

const EmotionStatistic = observer(() => {
  const [statisticPeriod, setStatisticPeriod] = useState<StatisticPeriod>("today");

  return (
    <div className="flex-1 flex flex-col mt-4">
      <div className="flex flex-wrap gap-2 mb-6">
        {periodOptions.map(({ value, label }) => (
          <Button
            key={value}
            variant={statisticPeriod === value ? "default" : "outline"}
            onClick={() => setStatisticPeriod(value as StatisticPeriod)}
            className="h-10"
          >
            {label}
          </Button>
        ))}
      </div>

      <EmptyEmotionStatistic />
    </div>
  );
});

export default EmotionStatistic;
