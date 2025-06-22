import { cn } from "@/lib/utils";
import { ReactNode, useState, useCallback } from "react";
import { SwipeEventData, useSwipeable } from "react-swipeable";

import { Trash2 } from "lucide-react";
import { Button } from "@/components/ui/button";

interface SwipeableContainerProps {
  id: string;
  onDelete: (id: string) => void;
  children: ReactNode;
}

const ACTION_WIDTH = 96;

const SwipeableContainer = ({
  id,
  onDelete,
  children,
}: SwipeableContainerProps) => {
  const [translateX, setTranslateX] = useState<number>(0);
  const [isConfirm, setIsConfirm] = useState<boolean>(false);

  const onSwiping = useCallback(
    (event: SwipeEventData) => {
      if (isConfirm) return;

      if (event.deltaX < 0) {
        setTranslateX(Math.max(event.deltaX, -ACTION_WIDTH));
      }
    },

    [isConfirm]
  );

  const onSwipedLeft = useCallback(
    (event: SwipeEventData) => {
      if (isConfirm) return;

      if (Math.abs(event.deltaX) >= ACTION_WIDTH / 2) {
        setTranslateX(-ACTION_WIDTH);
        setIsConfirm(true);
      } else {
        setTranslateX(0);
      }
    },

    [isConfirm]
  );

  const onSwipedRight = useCallback(() => {
    setIsConfirm(false);
    setTranslateX(0);
  }, []);

  const swipeHandlers = useSwipeable({
    onSwiping,
    onSwipedLeft,
    onSwipedRight,
    preventScrollOnSwipe: true,
    trackMouse: false,
    trackTouch: true,
  });

  const handleDelete = () => onDelete(id);

  return (
    <div className="relative rounded-md overflow-hidden select-none">
      <div
        className={cn(
          "absolute inset-y-0 right-0",
          "flex w-24 items-center justify-center",
          "bg-destructive text-destructive-foreground transition-opacity",
          isConfirm ? "opacity-100" : "opacity-0"
        )}
      >
        <Button
          size="icon"
          variant="ghost"
          onClick={handleDelete}
          aria-label="confirm delete"
          className="hover:bg-destructive/90"
        >
          <Trash2 className="!h-7 !w-7" />
        </Button>
      </div>

      <div
        {...swipeHandlers}
        onTouchStart={(event) => event.stopPropagation()}
        className="touch-pan-y transition-transform duration-200 ease-out"
        style={{ transform: `translateX(${translateX}px)` }}
      >
        {children}
      </div>
    </div>
  );
};

export default SwipeableContainer;
