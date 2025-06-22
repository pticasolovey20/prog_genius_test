import { cn } from "@/lib/utils";

import EmotionCardModal from "@/components/EmotionCardModal";
import EmotionCardsBoard from "@/components/EmotionCardsBoard";

const HomePage = () => {
  return (
    <main
      className={cn(
        "min-h-[100dvh] h-full",
        "max-w-screen-xl w-full",
        "flex flex-col mx-auto p-4"
      )}
    >
      <EmotionCardModal />
      <EmotionCardsBoard />
    </main>
  );
};

export default HomePage;
