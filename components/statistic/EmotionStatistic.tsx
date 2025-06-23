"use client";

import { useState } from "react";
import dynamic from "next/dynamic";
import { observer } from "mobx-react-lite";

import { StatisticPeriod } from "@/types/emotionCardTypes";

import EmptyEmotionStatistic from "@/components/statistic/EmptyEmotionStatistic";
import SkeletonStatisticRadioButton from "@/components/statistic/SkeletonStatisticRadioButton";

const StatisticRadioButton = dynamic(() => import("@/components/statistic/StatisticRadioButton"), {
  ssr: false,
  loading: () => <SkeletonStatisticRadioButton />,
});

const EmotionStatistic = observer(() => {
  const [statisticPeriod, setStatisticPeriod] = useState<StatisticPeriod>("today");

  return (
    <div className="flex-1 flex flex-col">
      <StatisticRadioButton statisticPeriod={statisticPeriod} setStatisticPeriod={setStatisticPeriod} />

      <EmptyEmotionStatistic />
    </div>
  );
});

export default EmotionStatistic;
