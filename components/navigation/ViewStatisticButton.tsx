import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ChartNoAxesCombined } from "lucide-react";

const ViewStatisticButton = () => {
  return (
    <Link href="/statistic" className="max-w-[200px] w-full mb-4">
      <Button variant="outline" className="w-full flex items-center gap-2">
        <span className="text-lg font-semibold">View statistic</span>
        <ChartNoAxesCombined className="!h-5 !w-5" />
      </Button>
    </Link>
  );
};

export default ViewStatisticButton;
