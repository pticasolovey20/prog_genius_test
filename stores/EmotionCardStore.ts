import { makeAutoObservable } from "mobx";
import { EmotionCardData } from "@/types/emotionCardTypes";
import { EmotionFormFields } from "@/types/emotionFormTypes";

class EmotionCardStore {
  emotionCards: EmotionCardData[] = [];

  constructor() {
    makeAutoObservable(this);
  }

  addEmotionCard({ emotion, comment }: EmotionFormFields) {
    const newEmotionCard: EmotionCardData = {
      id: crypto.randomUUID(),
      emotion,
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
