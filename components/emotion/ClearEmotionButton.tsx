"use client";

import { Button } from "@/components/ui/button";
import EmotionStore from "@/stores/EmotionStore";

const ClearEmotionButton = () => {
  const handleClearEmotions = () => EmotionStore.clearAllEmotions();

  return (
    <Button
      variant="destructive"
      className="h-10 max-w-[200px] w-full text-base font-semibold"
      onClick={handleClearEmotions}
    >
      Clear Emotions
    </Button>
  );
};

export default ClearEmotionButton;
