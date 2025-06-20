import { EmotionCardData } from "@/types/emotionCardTypes";

import EmotionCard from "@/components/EmotionCard";

interface EmotionCardsBoardProps {
  emotionCards: EmotionCardData[];
}

const EmotionCardsBoard = ({ emotionCards }: EmotionCardsBoardProps) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
      {emotionCards.map((emotionCard) => (
        <EmotionCard key={emotionCard.id} emotionCard={emotionCard} />
      ))}
    </div>
  );
};

export default EmotionCardsBoard;
