import { Plus } from "lucide-react";
import { Button } from "@/components/ui/button";

interface AddEmotionButtonProps {
  onClick?: () => void;
  disabled?: boolean;
}

const AddEmotionButton = ({ onClick, disabled }: AddEmotionButtonProps) => {
  return (
    <Button
      size="lg"
      variant="outline"
      onClick={onClick}
      disabled={disabled}
      className="max-w-[200px] w-full flex items-center gap-2 px-4"
    >
      <Plus />
      <span className="text-base font-semibold">Add Emotion</span>
    </Button>
  );
};

export default AddEmotionButton;
