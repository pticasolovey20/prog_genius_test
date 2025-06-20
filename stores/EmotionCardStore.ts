import { makeAutoObservable } from "mobx";
import { EmotionCard } from "@/types/emotionCardTypes";

class EmotionCardStore {
  emotionCards: EmotionCard[] = [];

  constructor() {
    makeAutoObservable(this);
  }

  addEmotionCard(emotion: string, comment: string) {
    const newEmotionCard: EmotionCard = {
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
