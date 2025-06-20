import { makeAutoObservable } from "mobx";

import { emotionColorMap } from "@/constants/emotion";
import { EmotionCardData } from "@/types/emotionCardTypes";
import { EmotionFormFields } from "@/types/emotionFormTypes";

const STORAGE_PREFIX =
  process.env.NEXT_PUBLIC_STORAGE_PREFIX ?? "UNIQUE_PREFIX";
const STORAGE_KEY = `${STORAGE_PREFIX}_EMOTIONS_LIST`;

class EmotionCardStore {
  emotionCards: EmotionCardData[] = [];

  constructor() {
    makeAutoObservable(this);
  }

  getFromLocalStorage() {
    const savedEmotions = localStorage.getItem(STORAGE_KEY);

    if (savedEmotions) {
      try {
        this.emotionCards = JSON.parse(savedEmotions);
      } catch {
        console.warn("Failed to parse saved cards");
      }
    }
  }

  addEmotionCard({ emotion, comment }: EmotionFormFields) {
    const newEmotionCard: EmotionCardData = {
      id: crypto.randomUUID(),
      value: emotion,
      label: emotion.charAt(0).toUpperCase() + emotion.slice(1),
      color: emotionColorMap[emotion] ?? "#FFFFFF",
      comment,
    };

    this.emotionCards = [newEmotionCard, ...this.emotionCards];
    this.saveToLocalStorage();
  }

  removeEmotionCard(id: string) {
    this.emotionCards = this.emotionCards.filter((card) => card.id !== id);
    this.saveToLocalStorage();
  }

  clearAllEmotionCards() {
    this.emotionCards = [];
    this.saveToLocalStorage();
  }

  saveToLocalStorage() {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(this.emotionCards));
  }
}

const emotionCardStore = new EmotionCardStore();

export default emotionCardStore;
