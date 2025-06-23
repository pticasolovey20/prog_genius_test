import { periodOptions } from "@/constants/emotion";

import { Skeleton } from "@/components/ui/skeleton";

const SkeletonStatisticRadioButton = () => {
  return (
    <div className="flex flex-wrap gap-2 mb-4">
      {periodOptions.map(({ value }) => (
        <Skeleton key={value} className="h-10 max-w-[150px] w-full rounded-md" />
      ))}
    </div>
  );
};

export default SkeletonStatisticRadioButton;
