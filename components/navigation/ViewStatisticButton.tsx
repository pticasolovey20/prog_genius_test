import Link from "next/link";
import { Button } from "@/components/ui/button";

const ViewStatisticButton = () => {
  return (
    <Link href="/statistic" className="w-full flex shrink">
      <Button size="lg" variant="outline" className="w-full flex items-center gap-2 px-4">
        <span className="text-base font-semibold">View statistic</span>
      </Button>
    </Link>
  );
};

export default ViewStatisticButton;
