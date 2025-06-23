import { Fragment } from "react";
import dynamic from "next/dynamic";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ChartNoAxesCombined } from "lucide-react";
import { Skeleton } from "@/components/ui/skeleton";
import SkeletonBoard from "@/components/board/SkeletonBoard";

const EmotionCardModal = dynamic(() => import("@/components/EmotionCardModal"), {
  ssr: false,
  loading: () => <Skeleton className="h-10 max-w-[200px] rounded-md mb-4" />,
});

const EmotionCardsBoard = dynamic(() => import("@/components/board/EmotionCardsBoard"), {
  ssr: false,
  loading: () => <SkeletonBoard />,
});

const HomePage = () => {
  return (
    <Fragment>
      <div className="flex flex-wrap items-center justify-between">
        <h1 className="text-3xl font-bold mb-4">Board</h1>

        <Link href="/statistic" className="mb-4">
          <Button variant="outline" className="flex items-center gap-2">
            <span className="text-lg font-semibold">View statistic</span>
            <ChartNoAxesCombined className="!h-5 !w-5" />
          </Button>
        </Link>
      </div>

      <EmotionCardModal />
      <EmotionCardsBoard />
    </Fragment>
  );
};

export default HomePage;
