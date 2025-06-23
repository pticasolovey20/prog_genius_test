import { Metadata } from "next";
import { cn } from "@/lib/utils";

import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import EmotionStatistic from "@/components/statistic/EmotionStatistic";

export const metadata: Metadata = {
  title: "Emotion Statistics",
  description: "View your emotion analytics",
};

const EmotionStatisticPage = () => {
  return (
    <main className={cn("min-h-[100dvh] h-full", "max-w-screen-xl w-full", "flex flex-col mx-auto p-4")}>
      <div className="flex items-center gap-2">
        <Link href="/" className="">
          <Button size="icon" variant="ghost" aria-label="Back to home link button">
            <ArrowLeft className="!h-5 !w-5" />
          </Button>
        </Link>

        <h1 className="text-3xl font-bold">Statistic</h1>
      </div>

      <EmotionStatistic />
    </main>
  );
};

export default EmotionStatisticPage;
