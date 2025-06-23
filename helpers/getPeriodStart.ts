import { StatisticPeriod } from "@/types/emotionTypes";

export const getPeriodStart = (period: StatisticPeriod): number => {
  const now = Date.now();
  const DAY_MS = 1000 * 60 * 60 * 24;

  switch (period) {
    case "today":
      return new Date(new Date().setHours(0, 0, 0, 0)).getTime();

    case "week":
      return now - DAY_MS * 7;

    case "month":
      return now - DAY_MS * 30;

    default:
      return 0;
  }
};
