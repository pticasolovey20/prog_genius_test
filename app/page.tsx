import { Fragment } from "react";
import dynamic from "next/dynamic";

import ActionWrapper from "@/components/emotion/EmotionActionWrapper";
import SkeletonBoard from "@/components/board/SkeletonBoard";

const EmotionBoard = dynamic(() => import("@/components/emotion/EmotionBoard"), {
  ssr: false,
  loading: () => <SkeletonBoard />,
});

const HomePage = () => {
  return (
    <Fragment>
      <div className="flex flex-wrap items-center justify-between">
        <h1 className="text-3xl font-bold mb-4">Board</h1>
      </div>

      <ActionWrapper />
      <EmotionBoard />
    </Fragment>
  );
};

export default HomePage;
