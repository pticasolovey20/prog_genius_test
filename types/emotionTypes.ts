import * as zod from "zod";

import { EmotionFormSchema } from "@/schemas/EmotionFormSchema";

export type EmotionFormFields = zod.infer<typeof EmotionFormSchema>;

export interface EmotionData {
  id: string;
  value: string;
  color: string;
  comment: string;
  createdAt: number;
}

export interface StatisticData {
  value: string;
  count: number;
  color: string;
}

export type StatisticPeriod = "today" | "week" | "month";
