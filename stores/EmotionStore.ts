import { makeAutoObservable } from "mobx";

import { emotionColorMap } from "@/constants/emotion";
import { EmotionFormFields } from "@/types/emotionTypes";
import { getPeriodStart } from "@/helpers/getPeriodStart";
import { EmotionData, StatisticData, StatisticPeriod } from "@/types/emotionTypes";

const STORAGE_PREFIX = process.env.NEXT_PUBLIC_STORAGE_PREFIX ?? "UNIQUE_PREFIX";
const STORAGE_KEY = `${STORAGE_PREFIX}_EMOTIONS_LIST`;

class EmotionStore {
  emotions: EmotionData[] = [];

  constructor() {
    makeAutoObservable(this);
  }

  getEmotionStatistic(period: StatisticPeriod): StatisticData[] {
    const startPeriod = getPeriodStart(period);
    const filtered = this.emotions.filter((card) => card.createdAt >= startPeriod);

    const statistic = filtered.reduce<Record<string, StatisticData>>((state, card) => {
      if (!state[card.value]) {
        state[card.value] = {
          value: card.value,
          count: 1,
          color: card.color,
        };
      } else {
        state[card.value].count += 1;
      }

      return state;
    }, {});

    return Object.values(statistic);
  }

  getFromLocalStorage() {
    const savedEmotions = localStorage.getItem(STORAGE_KEY);

    if (savedEmotions) {
      try {
        this.emotions = JSON.parse(savedEmotions);
      } catch {
        console.warn("Failed to parse saved cards");
      }
    }
  }

  setEmotionCards(cards: EmotionData[]) {
    this.emotions = cards;
    this.saveToLocalStorage();
  }

  addEmotionCard({ emotion, comment }: EmotionFormFields) {
    const newEmotion: EmotionData = {
      id: crypto.randomUUID(),
      value: emotion,
      color: emotionColorMap[emotion] ?? "#FFFFFF",
      comment,
      createdAt: Date.now(),
    };

    this.emotions = [newEmotion, ...this.emotions];
    this.saveToLocalStorage();
  }

  removeEmotionCard(id: string) {
    this.emotions = this.emotions.filter((emotion) => emotion.id !== id);
    this.saveToLocalStorage();
  }

  clearAllEmotionCards() {
    this.emotions = [];
    this.saveToLocalStorage();
  }

  saveToLocalStorage() {
    if (this.emotions.length === 0) {
      localStorage.removeItem(STORAGE_KEY);
    } else {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(this.emotions));
    }
  }
}

const emotionStore = new EmotionStore();

export default emotionStore;
