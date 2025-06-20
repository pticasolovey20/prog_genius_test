"use client";

import { observer } from "mobx-react-lite";
import emotionCardStore from "@/stores/EmotionCardStore";

import EmotionCard from "@/components/card/EmotionCard";

const EmotionCardsBoard = () => {
  const { emotionCards } = emotionCardStore;

  const handleCardDelete = (id: string) => {
    emotionCardStore.removeEmotionCard(id);
  };

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
      {emotionCards.map((emotionCard) => (
        <EmotionCard
          key={emotionCard.id}
          emotionCard={emotionCard}
          onDelete={handleCardDelete}
        />
      ))}
    </div>
  );
};

export default observer(EmotionCardsBoard);
