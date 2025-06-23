import { Dispatch, SetStateAction } from "react";
import { periodOptions } from "@/constants/emotion";
import { StatisticPeriod } from "@/types/emotionTypes";

import { Button } from "@/components/ui/button";

interface StatisticRadioButtonProps {
  statisticPeriod: StatisticPeriod;
  setStatisticPeriod: Dispatch<SetStateAction<StatisticPeriod>>;
}

const StatisticRadioButton = ({ statisticPeriod, setStatisticPeriod }: StatisticRadioButtonProps) => {
  return (
    <div className="md:max-w-[50%] w-full flex flex-col md:flex-row gap-2 mb-4">
      {periodOptions.map(({ value, label }) => (
        <Button
          key={value}
          variant={statisticPeriod === value ? "default" : "outline"}
          onClick={() => setStatisticPeriod(value as StatisticPeriod)}
          className="h-10 w-full flex shrink"
        >
          {label}
        </Button>
      ))}
    </div>
  );
};

export default StatisticRadioButton;
