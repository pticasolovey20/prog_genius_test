"use client";

import dynamic from "next/dynamic";
import { observer } from "mobx-react-lite";
import EmotionStore from "@/stores/EmotionStore";

import { Skeleton } from "@/components/ui/skeleton";

const EmotionModal = dynamic(() => import("@/components/emotion/EmotionModal"), {
  ssr: false,
  loading: () => <Skeleton className="h-10 w-full flex shrink rounded-md" />,
});

const ViewStatisticButton = dynamic(() => import("@/components/navigation/ViewStatisticButton"), {
  ssr: false,
  loading: () => <Skeleton className="h-10 w-full flex shrink rounded-md" />,
});

const ClearEmotionButton = dynamic(() => import("@/components/emotion/ClearEmotionButton"), {
  ssr: false,
  loading: () => <Skeleton className="h-10 w-full flex shrink rounded-md" />,
});

const EmotionActionWrapper = () => {
  const showClearButton = EmotionStore.emotions.length > 0;

  return (
    <div className="md:max-w-[50%] md:w-full flex flex-col md:flex-row gap-2 mb-4">
      <EmotionModal />
      <ViewStatisticButton />
      {showClearButton && <ClearEmotionButton />}
    </div>
  );
};

export default observer(EmotionActionWrapper);
