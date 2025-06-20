import { makeAutoObservable } from "mobx";

import { EmotionCardData } from "@/types/emotionCardTypes";
import { EmotionFormFields } from "@/types/emotionFormTypes";
import { emotionColorMap, emotionOptions } from "@/constants/emotion";

import { HelpCircle } from "lucide-react";

class EmotionCardStore {
  emotionCards: EmotionCardData[] = [];

  constructor() {
    makeAutoObservable(this);
  }

  addEmotionCard({ emotion, comment }: EmotionFormFields) {
    const option = emotionOptions.find((option) => option.value === emotion);

    const newEmotionCard: EmotionCardData = {
      id: crypto.randomUUID(),
      value: emotion,
      label: emotion.charAt(0).toUpperCase() + emotion.slice(1),
      color: emotionColorMap[emotion] ?? "#FFFFFF",
      icon: option?.icon ?? HelpCircle,
      comment,
    };

    this.emotionCards = [newEmotionCard, ...this.emotionCards];
  }

  removeEmotionCard(id: string) {
    this.emotionCards = this.emotionCards.filter((card) => card.id !== id);
  }

  clearAllEmotionCards() {
    this.emotionCards = [];
  }
}

const emotionCardStore = new EmotionCardStore();

export default emotionCardStore;
