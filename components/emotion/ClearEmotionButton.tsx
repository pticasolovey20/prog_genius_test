"use client";
import EmotionStore from "@/stores/EmotionStore";

import { Button } from "@/components/ui/button";

const ClearEmotionButton = () => {
  const handleClearEmotions = () => EmotionStore.clearAllEmotions();

  return (
    <Button size="lg" variant="destructive" className="h-10 w-full flex shrink px-4" onClick={handleClearEmotions}>
      <span className="text-base font-semibold">Clear All</span>
    </Button>
  );
};

export default ClearEmotionButton;
