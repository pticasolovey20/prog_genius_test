import { cn } from "@/lib/utils";
import { EmotionCardData } from "@/types/emotionCardTypes";

import { X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

interface EmotionCardProps {
  emotionCard: EmotionCardData;
  onDelete: (id: string) => void;
}

const EmotionCard = ({ emotionCard, onDelete }: EmotionCardProps) => {
  const Icon = emotionCard.icon;
  const hasComment = !!emotionCard.comment?.length;

  return (
    <Card
      className={cn(
        "relative h-[300px] flex flex-col",
        "p-4 rounded-md shadow-md text-white",
        hasComment
          ? "items-center justify-between"
          : "justify-center items-center"
      )}
      style={{ backgroundColor: emotionCard.color }}
    >
      <CardHeader className="flex flex-col items-center">
        <Icon className="w-16 sm:w-20 h-16 sm:h-20 mb-2" />

        <CardTitle className="text-xl sm:text-2xl font-semibold text-center">
          {emotionCard.label}
        </CardTitle>
      </CardHeader>

      <CardContent className="text-center">{emotionCard.comment}</CardContent>

      <Button
        size="icon"
        variant="ghost"
        className={cn(
          "hidden sm:flex absolute top-2 right-2",
          "text-white hover:text-white hover:bg-white/10"
        )}
        onClick={() => onDelete(emotionCard.id)}
      >
        <X className="!w-5 !h-5" />
      </Button>
    </Card>
  );
};
export default EmotionCard;
