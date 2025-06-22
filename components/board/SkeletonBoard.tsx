import { Skeleton } from "@/components/ui/skeleton";

const SkeletonBoard = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-4 w-full">
      {Array.from({ length: 3 }).map((_, index) => (
        <Skeleton key={index} className="h-[300px] rounded-md" />
      ))}
    </div>
  );
};

export default SkeletonBoard;
