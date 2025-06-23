import { HelpCircle } from "lucide-react";

import { emotionOptions } from "@/constants/emotion";

export const getEmotionIcon = (value: string) => {
  return emotionOptions.find((option) => option.value === value)?.icon ?? HelpCircle;
};
