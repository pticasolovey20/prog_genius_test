import { LucideIcon } from "lucide-react";

export interface EmotionCardData {
  id: string;
  value: string;
  label: string;
  color: string;
  comment?: string;
  icon: LucideIcon;
}
