import { cn } from "@/lib/utils";
import { forwardRef } from "react";

import { Plus } from "lucide-react";
import { Button } from "@/components/ui/button";

interface AddEmotionButtonProps {
  onClick?: () => void;
  disabled?: boolean;
  classNames?: string;
}

const AddEmotionButton = forwardRef<HTMLButtonElement, AddEmotionButtonProps>(
  ({ onClick, disabled, classNames }, ref) => {
    return (
      <Button
        ref={ref}
        size="lg"
        onClick={onClick}
        disabled={disabled}
        className={cn("max-w-[200px] w-full flex items-center gap-2 px-4", classNames)}
      >
        <Plus />
        <span className="text-base font-semibold">Add Emotion</span>
      </Button>
    );
  }
);

AddEmotionButton.displayName = "AddEmotionButton";

export default AddEmotionButton;
