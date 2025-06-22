import { cn } from "@/lib/utils";
import dynamic from "next/dynamic";

import { Skeleton } from "@/components/ui/skeleton";
import SkeletonBoard from "@/components/board/SkeletonBoard";

const EmotionCardModal = dynamic(() => import("@/components/EmotionCardModal"), {
  ssr: false,
  loading: () => <Skeleton className="h-10 max-w-[200px] rounded-md" />,
});

const EmotionCardsBoard = dynamic(() => import("@/components/board/EmotionCardsBoard"), {
  ssr: false,
  loading: () => <SkeletonBoard />,
});

const HomePage = () => {
  return (
    <main className={cn("min-h-[100dvh] h-full", "max-w-screen-xl w-full", "flex flex-col mx-auto p-4")}>
      <EmotionCardModal />
      <EmotionCardsBoard />
    </main>
  );
};

export default HomePage;
