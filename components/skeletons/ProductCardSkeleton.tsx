import Skeleton from "./Skeleton";

const ProductCardSkeleton = () => {
  return (
    <div className="rounded-lg border border-border bg-surface p-3">
      <Skeleton className="aspect-square w-full" />

      <div className="mt-4 space-y-3">
        <Skeleton className="h-3 w-4/5" />
        <Skeleton className="h-3 w-2/5" />

        <div className="flex items-center justify-between">
          <Skeleton className="h-5 w-1/3" />
          <Skeleton className="h-9 w-9 rounded-full" />
        </div>

        <Skeleton className="h-10 w-full" />
      </div>
    </div>
  );
};

export default ProductCardSkeleton;
