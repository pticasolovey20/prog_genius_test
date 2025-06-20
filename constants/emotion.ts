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
    label: "Радість / Joy",
    icon: Smile,
  },

  {
    value: "sadness",
    label: "Смуток / Sadness",
    icon: Frown,
  },

  {
    value: "anger",
    label: "Злість / Anger",
    icon: Zap,
  },

  {
    value: "surprise",
    label: "Подив / Surprise",
    icon: ZapOff,
  },

  {
    value: "calm",
    label: "Спокій / Calm",
    icon: Coffee,
  },

  {
    value: "fear",
    label: "Страх / Fear",
    icon: AlertTriangle,
  },

  {
    value: "disgust",
    label: "Огида / Disgust",
    icon: Trash2,
  },

  {
    value: "love",
    label: "Любов / Love",
    icon: Heart,
  },

  {
    value: "gratitude",
    label: "Вдячність / Gratitude",
    icon: Gift,
  },

  {
    value: "anxiety",
    label: "Тривога / Anxiety",
    icon: Zap,
  },

  {
    value: "confusion",
    label: "Розгубленість / Confusion",
    icon: HelpCircle,
  },

  {
    value: "hope",
    label: "Надія / Hope",
    icon: Sun,
  },

  {
    value: "pride",
    label: "Гордість / Pride",
    icon: Star,
  },

  {
    value: "shame",
    label: "Сором / Shame",
    icon: Slash,
  },

  {
    value: "embarrassment",
    label: "Ніяковість / Embarrassment",
    icon: SmilePlus,
  },

  {
    value: "loneliness",
    label: "Самотність / Loneliness",
    icon: UserX,
  },

  {
    value: "relief",
    label: "Полегшення / Relief",
    icon: Feather,
  },

  {
    value: "excitement",
    label: "Захоплення / Excitement",
    icon: ExcitementIcon,
  },

  {
    value: "boredom",
    label: "Нудьга / Boredom",
    icon: BoredomIcon,
  },

  {
    value: "confidence",
    label: "Впевненість / Confidence",
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
