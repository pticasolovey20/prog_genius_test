import { useMemo } from "react";
import { cn } from "@/lib/utils";

import { emotionOptions } from "@/constants/emotion";
import { EmotionCardData } from "@/types/emotionCardTypes";

import { HelpCircle, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

interface EmotionCardProps {
  emotionCard: EmotionCardData;
  showDeleteButton?: boolean;
  onDelete: (id: string) => void;
}

const EmotionCard = ({
  emotionCard,
  showDeleteButton = true,
  onDelete,
}: EmotionCardProps) => {
  const EmotionIcon = useMemo(() => {
    return (
      emotionOptions.find((option) => option.value === emotionCard.value)
        ?.icon ?? HelpCircle
    );
  }, [emotionCard.value]);

  return (
    <Card
      className={cn(
        "flex flex-col items-center justify-center",
        "relative h-[300px] p-4 rounded-none shadow-md text-white"
      )}
      style={{ backgroundColor: emotionCard.color }}
    >
      <CardHeader className="flex flex-col items-center">
        <EmotionIcon className="w-16 sm:w-20 h-16 sm:h-20 mb-2" />

        <CardTitle className="text-xl sm:text-2xl font-semibold text-center">
          {emotionCard.label}
        </CardTitle>
      </CardHeader>

      <CardContent className="text-center">{emotionCard.comment}</CardContent>

      {showDeleteButton && (
        <Button
          size="icon"
          variant="ghost"
          aria-label="delete"
          className={cn(
            "absolute top-2 right-2",
            "text-white hover:text-white hover:bg-white/10"
          )}
          onClick={() => onDelete(emotionCard.id)}
          // Prevent pointer down to avoid triggering drag-and-drop
          onPointerDown={(event) => event.stopPropagation()}
        >
          <X className="!w-5 !h-5" />
        </Button>
      )}
    </Card>
  );
};
export default EmotionCard;
