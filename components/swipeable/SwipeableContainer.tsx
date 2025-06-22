import { cn } from "@/lib/utils";
import { SwipeEventData, useSwipeable } from "react-swipeable";
import { ReactNode, useState, useEffect, useCallback } from "react";

interface SwipeableContainerProps {
  id: string;
  onDelete: (id: string) => void;
  children: ReactNode;
}

const SwipeableContainer = ({
  id,
  onDelete,
  children,
}: SwipeableContainerProps) => {
  const [isSwipingOut, setIsSwipingOut] = useState(false);
  const [translateX, setTranslateX] = useState(0);
  const [screenWidth, setScreenWidth] = useState(0);

  useEffect(() => {
    setScreenWidth(window.innerWidth);

    const handleResize = () => setScreenWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const onSwiping = useCallback((event: SwipeEventData) => {
    if (event.deltaX < 0) {
      setTranslateX(event.deltaX);
    }
  }, []);

  const onSwipedLeft = useCallback(
    (event: SwipeEventData) => {
      if (Math.abs(event.deltaX) >= screenWidth / 2) {
        setIsSwipingOut(true);
        setTimeout(() => onDelete(id), 300);
      } else {
        setTranslateX(0);
      }
    },
    [screenWidth, id, onDelete]
  );

  const onSwipedRight = useCallback(() => setTranslateX(0), []);

  const swipeHandlers = useSwipeable({
    onSwiping,
    onSwipedLeft,
    onSwipedRight,
    preventScrollOnSwipe: true,
    trackMouse: false,
    trackTouch: true,
  });

  return (
    <div
      {...swipeHandlers}
      onTouchStart={(event) => event.stopPropagation()}
      className={cn(
        "touch-pan-y transition-transform duration-300 ease-in-out",
        isSwipingOut && "translate-x-[-100%] opacity-0"
      )}
      style={{
        transform: isSwipingOut
          ? "translateX(-100%)"
          : `translateX(${translateX}px)`,
        opacity: isSwipingOut ? 0 : 1,
      }}
    >
      {children}
    </div>
  );
};

export default SwipeableContainer;
