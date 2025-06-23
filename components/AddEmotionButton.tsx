import { forwardRef } from "react";

import { Plus } from "lucide-react";
import { Button } from "@/components/ui/button";

interface AddEmotionButtonProps {
  onClick?: () => void;
  disabled?: boolean;
}

const AddEmotionButton = forwardRef<HTMLButtonElement, AddEmotionButtonProps>(({ onClick, disabled }, ref) => {
  return (
    <Button
      ref={ref}
      size="lg"
      variant="outline"
      onClick={onClick}
      disabled={disabled}
      className="w-full flex shrink items-center gap-2 px-4"
    >
      <Plus />
      <span className="text-base font-semibold">Add Emotion</span>
    </Button>
  );
});

AddEmotionButton.displayName = "AddEmotionButton";

export default AddEmotionButton;
