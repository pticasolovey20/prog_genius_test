import {
  Smile,
  Frown,
  Zap,
  ZapOff,
  Coffee,
  AlertTriangle,
  Trash2,
  Heart,
  Gift,
  HelpCircle,
  Sun,
  Star,
  Slash,
  SmilePlus,
  UserX,
  Feather,
  Zap as ExcitementIcon,
  Coffee as BoredomIcon,
  ThumbsUp,
} from "lucide-react";

export const emotionOptions = [
  {
    value: "joy",
    label: "Joy",
    icon: Smile,
  },

  {
    value: "sadness",
    label: "Sadness",
    icon: Frown,
  },

  {
    value: "anger",
    label: "Anger",
    icon: Zap,
  },

  {
    value: "surprise",
    label: "Surprise",
    icon: ZapOff,
  },

  {
    value: "calm",
    label: "Calm",
    icon: Coffee,
  },

  {
    value: "fear",
    label: "Fear",
    icon: AlertTriangle,
  },

  {
    value: "disgust",
    label: "Disgust",
    icon: Trash2,
  },

  {
    value: "love",
    label: "Love",
    icon: Heart,
  },

  {
    value: "gratitude",
    label: "Gratitude",
    icon: Gift,
  },

  {
    value: "anxiety",
    label: "Anxiety",
    icon: Zap,
  },

  {
    value: "confusion",
    label: "Confusion",
    icon: HelpCircle,
  },

  {
    value: "hope",
    label: "Hope",
    icon: Sun,
  },

  {
    value: "pride",
    label: "Pride",
    icon: Star,
  },

  {
    value: "shame",
    label: "Shame",
    icon: Slash,
  },

  {
    value: "embarrassment",
    label: "Embarrassment",
    icon: SmilePlus,
  },

  {
    value: "loneliness",
    label: "Loneliness",
    icon: UserX,
  },

  {
    value: "relief",
    label: "Relief",
    icon: Feather,
  },

  {
    value: "excitement",
    label: "Excitement",
    icon: ExcitementIcon,
  },

  {
    value: "boredom",
    label: "Boredom",
    icon: BoredomIcon,
  },

  {
    value: "confidence",
    label: "Confidence",
    icon: ThumbsUp,
  },
];

export const emotionColorMap: Record<string, string> = {
  joy: "#F7C948",
  sadness: "#5B8DEF",
  anger: "#F5564E",
  surprise: "#9F7AEA",
  calm: "#2F855A",
  fear: "#ED8936",
  disgust: "#718096",
  love: "#E53E3E",
  gratitude: "#38B2AC",
  anxiety: "#E9D8FD",
  confusion: "#ECC94B",
  hope: "#68D391",
  pride: "#D69E2E",
  shame: "#A0AEC0",
  embarrassment: "#F6AD55",
  loneliness: "#4FD1C5",
  relief: "#81E6D9",
  excitement: "#ED64A6",
  boredom: "#CBD5E0",
  confidence: "#3182CE",
};

export const periodOptions = [
  { value: "today", label: "Today" },
  { value: "week", label: "Week" },
  { value: "month", label: "Month" },
];
