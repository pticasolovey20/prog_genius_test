import { makeAutoObservable } from "mobx";
import { EmotionCardData } from "@/types/emotionCardTypes";

class EmotionCardStore {
  emotionCards: EmotionCardData[] = [];

  constructor() {
    makeAutoObservable(this);
  }

  addEmotionCard(emotion: string, comment: string) {
    const newEmotionCard: EmotionCardData = {
      id: crypto.randomUUID(),
      emotion,
      comment,
    };

    this.emotionCards.push(newEmotionCard);
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
