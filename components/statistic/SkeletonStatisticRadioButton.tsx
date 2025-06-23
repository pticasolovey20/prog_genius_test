import { periodOptions } from "@/constants/emotion";

import { Skeleton } from "@/components/ui/skeleton";

const SkeletonStatisticRadioButton = () => {
  return (
    <div className="md:max-w-[50%] w-full flex flex-col md:flex-row gap-2 mb-4">
      {periodOptions.map(({ value }) => (
        <Skeleton key={value} className="h-10 w-full flex shrink rounded-md" />
      ))}
    </div>
  );
};

export default SkeletonStatisticRadioButton;
