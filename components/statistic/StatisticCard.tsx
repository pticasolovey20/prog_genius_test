import { useMemo } from "react";
import { cn } from "@/lib/utils";

import { capitalize } from "@/helpers/capitalize";
import { StatisticData } from "@/types/emotionTypes";
import { getEmotionIcon } from "@/helpers/getEmotionIcon";

import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

interface StatisticCardProps {
  element: StatisticData;
}

const StatisticCard = ({ element }: StatisticCardProps) => {
  const EmotionIcon = useMemo(() => getEmotionIcon(element.value), [element.value]);

  return (
    <Card
      className={cn(
        "relative flex flex-col items-center justify-center",
        "h-[300px] p-4 border-none rounded-md shadow-md text-white"
      )}
      style={{ backgroundColor: element.color }}
    >
      <CardHeader className="flex flex-col items-center">
        <EmotionIcon className="w-16 sm:w-20 h-16 sm:h-20 mb-2" />
        <CardTitle className="text-xl sm:text-2xl font-semibold text-center">{capitalize(element.value)}</CardTitle>
      </CardHeader>

      <CardContent>
        <p className="text-2xl text-center max-w-[200px] sm:max-w-[250px] break-words">{element.count}</p>
      </CardContent>
    </Card>
  );
};

export default StatisticCard;
