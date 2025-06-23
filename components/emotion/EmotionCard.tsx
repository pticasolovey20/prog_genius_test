import { useMemo } from "react";
import { cn } from "@/lib/utils";

import { capitalize } from "@/helpers/capitalize";
import { EmotionData } from "@/types/emotionTypes";
import { getEmotionIcon } from "@/helpers/getEmotionIcon";

import { X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

interface EmotionCardProps {
  emotion: EmotionData;
  showDeleteButton?: boolean;
  onDelete: (id: string) => void;
}

const EmotionCard = ({ emotion, showDeleteButton = true, onDelete }: EmotionCardProps) => {
  const EmotionIcon = useMemo(() => getEmotionIcon(emotion.value), [emotion.value]);

  return (
    <Card
      className={cn(
        "relative flex flex-col items-center justify-center",
        "h-[300px] p-4 border-none rounded-none md:rounded-md shadow-md text-white"
      )}
      style={{ backgroundColor: emotion.color }}
    >
      <CardHeader className="flex flex-col items-center">
        <EmotionIcon className="w-16 sm:w-20 h-16 sm:h-20 mb-2" />

        <CardTitle className="text-xl sm:text-2xl font-semibold text-center">{capitalize(emotion.value)}</CardTitle>
      </CardHeader>

      <CardContent>
        <p className="text-center max-w-[200px] sm:max-w-[250px] break-words">{emotion.comment}</p>
      </CardContent>

      {showDeleteButton && (
        <Button
          size="icon"
          variant="ghost"
          aria-label="delete"
          className={cn("absolute top-2 right-2", "text-white hover:text-white hover:bg-white/10")}
          onClick={() => onDelete(emotion.id)}
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
