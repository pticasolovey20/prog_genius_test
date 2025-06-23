"use client";

import { useState } from "react";
import dynamic from "next/dynamic";
import { observer } from "mobx-react-lite";

import { StatisticPeriod } from "@/types/emotionTypes";

import SkeletonBoard from "@/components/board/SkeletonBoard";
import SkeletonStatisticRadioButton from "@/components/statistic/SkeletonStatisticRadioButton";

const StatisticRadioButton = dynamic(() => import("@/components/statistic/StatisticRadioButton"), {
  ssr: false,
  loading: () => <SkeletonStatisticRadioButton />,
});

const StatisticBoard = dynamic(() => import("@/components/statistic/StatisticBoard"), {
  ssr: false,
  loading: () => <SkeletonBoard />,
});

const EmotionStatistic = observer(() => {
  const [statisticPeriod, setStatisticPeriod] = useState<StatisticPeriod>("today");

  return (
    <div className="flex-1 flex flex-col">
      <StatisticRadioButton statisticPeriod={statisticPeriod} setStatisticPeriod={setStatisticPeriod} />
      <StatisticBoard statisticPeriod={statisticPeriod} />
    </div>
  );
});

export default EmotionStatistic;
