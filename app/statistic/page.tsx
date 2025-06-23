import { Metadata } from "next";
import { Fragment } from "react";

import BackHomeButton from "@/components/navigation/BackHomeButton";
import EmotionStatistic from "@/components/statistic/EmotionStatistic";

export const metadata: Metadata = {
  title: "Emotion Statistics",
  description: "View your emotion analytics",
};

const EmotionStatisticPage = () => {
  return (
    <Fragment>
      <div className="flex items-center gap-2 mb-4">
        <BackHomeButton />
        <h1 className="text-3xl font-bold">Statistic</h1>
      </div>

      <EmotionStatistic />
    </Fragment>
  );
};

export default EmotionStatisticPage;
