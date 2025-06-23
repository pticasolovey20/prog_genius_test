import dynamic from "next/dynamic";

import { Skeleton } from "@/components/ui/skeleton";

const EmotionModal = dynamic(() => import("@/components/emotion/EmotionModal"), {
  ssr: false,
  loading: () => <Skeleton className="h-10 max-w-[200px] w-full rounded-md" />,
});

const ViewStatisticButton = dynamic(() => import("@/components/navigation/ViewStatisticButton"), {
  ssr: false,
  loading: () => <Skeleton className="h-10 max-w-[200px] w-full rounded-md" />,
});

const ClearEmotionButton = dynamic(() => import("@/components/emotion/ClearEmotionButton"), {
  ssr: false,
  loading: () => <Skeleton className="h-10 max-w-[200px] w-full rounded-md" />,
});

const EmotionActionWrapper = () => {
  return (
    <div className="flex flex-wrap gap-2 mb-4">
      <EmotionModal />
      <ViewStatisticButton />
      <ClearEmotionButton />
    </div>
  );
};

export default EmotionActionWrapper;
