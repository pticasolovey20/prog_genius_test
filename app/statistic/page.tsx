import { Metadata } from "next";
import { Fragment } from "react";
import dynamic from "next/dynamic";

import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import CircleLoader from "@/components/CircleLoader";

const EmotionStatistic = dynamic(() => import("@/components/statistic/EmotionStatistic"), {
  ssr: false,
  loading: () => <CircleLoader />,
});

export const metadata: Metadata = {
  title: "Emotion Statistics",
  description: "View your emotion analytics",
};

const EmotionStatisticPage = () => {
  return (
    <Fragment>
      <div className="flex items-center gap-2 mb-4">
        <Link href="/">
          <Button size="icon" variant="ghost" aria-label="Back to home link button">
            <ArrowLeft className="!h-5 !w-5" />
          </Button>
        </Link>

        <h1 className="text-3xl font-bold">Statistic</h1>
      </div>

      <EmotionStatistic />
    </Fragment>
  );
};

export default EmotionStatisticPage;
