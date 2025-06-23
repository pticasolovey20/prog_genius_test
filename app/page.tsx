import { Fragment } from "react";
import dynamic from "next/dynamic";

import { Skeleton } from "@/components/ui/skeleton";
import SkeletonBoard from "@/components/board/SkeletonBoard";
import ViewStatisticButton from "@/components/navigation/ViewStatisticButton";

const EmotionModal = dynamic(() => import("@/components/emotion/EmotionModal"), {
  ssr: false,
  loading: () => <Skeleton className="h-10 max-w-[200px] rounded-md mb-4" />,
});

const EmotionBoard = dynamic(() => import("@/components/emotion/EmotionBoard"), {
  ssr: false,
  loading: () => <SkeletonBoard />,
});

const HomePage = () => {
  return (
    <Fragment>
      <div className="flex flex-wrap items-center justify-between">
        <h1 className="text-3xl font-bold mb-4">Board</h1>
        <ViewStatisticButton />
      </div>

      <EmotionModal />
      <EmotionBoard />
    </Fragment>
  );
};

export default HomePage;
