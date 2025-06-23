import { Skeleton } from "@/components/ui/skeleton";

const SkeletonBoard = () => {
  return (
    <div className="flex flex-col md:grid grid-cols-2 lg:grid-cols-3 gap-4">
      {Array.from({ length: 3 }).map((_, index) => (
        <Skeleton key={index} className="h-[300px] rounded-md" />
      ))}
    </div>
  );
};

export default SkeletonBoard;
