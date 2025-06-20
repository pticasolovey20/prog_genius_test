import { EmotionCardData } from "@/types/emotionCardTypes";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface EmotionCardProps {
  emotionCard: EmotionCardData;
}

const EmotionCard = ({ emotionCard }: EmotionCardProps) => {
  return (
    <Card className="rounded-md">
      <CardHeader>
        <CardTitle>{emotionCard.label}</CardTitle>
      </CardHeader>

      <CardContent>{emotionCard.comment}</CardContent>
    </Card>
  );
};

export default EmotionCard;
