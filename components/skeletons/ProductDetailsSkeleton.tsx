import Skeleton from "./Skeleton";

const ProductDetailsSkeleton = () => {
  return (
    <div className="space-y-10">
      {/* Product gallery and information */}
      <section className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr]">
        {/* Gallery */}
        <div className="space-y-4">
          <Skeleton className="aspect-square w-full rounded-xl" />

          <div className="grid grid-cols-4 gap-3">
            {Array.from({ length: 4 }).map((_, index) => (
              <Skeleton
                key={index}
                className="aspect-square w-full rounded-lg"
              />
            ))}
          </div>
        </div>

        {/* Product info */}
        <div className="space-y-5">
          {/* Category */}
          <Skeleton className="h-4 w-24" />

          {/* Title */}
          <div className="space-y-2">
            <Skeleton className="h-7 w-4/5" />
            <Skeleton className="h-7 w-2/5" />
          </div>

          {/* Rating */}
          <div className="flex items-center gap-3">
            <Skeleton className="h-4 w-28" />
            <Skeleton className="h-4 w-20" />
          </div>

          {/* Price */}
          <div className="flex items-center gap-3">
            <Skeleton className="h-8 w-28" />
            <Skeleton className="h-5 w-20" />
          </div>

          {/* Description */}
          <div className="space-y-2">
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-3/4" />
          </div>

          {/* Stock */}
          <Skeleton className="h-5 w-32" />

          {/* Quantity and actions */}
          <div className="flex flex-wrap items-center gap-3">
            <Skeleton className="h-11 w-32" />
            <Skeleton className="h-11 flex-1 min-w-32" />
            <Skeleton className="h-11 w-11 rounded-md" />
          </div>

          {/* Benefits */}
          <div className="space-y-4 border-t border-border pt-5">
            {Array.from({ length: 3 }).map((_, index) => (
              <div key={index} className="flex items-center gap-3">
                <Skeleton className="h-10 w-10 rounded-full shrink-0" />
                <div className="flex-1 space-y-2">
                  <Skeleton className="h-4 w-2/5" />
                  <Skeleton className="h-3 w-3/4" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Product tabs */}
      <section className="space-y-5">
        <div className="flex gap-6 border-b border-border pb-3">
          <Skeleton className="h-5 w-24" />
          <Skeleton className="h-5 w-24" />
          <Skeleton className="h-5 w-24" />
        </div>

        <div className="space-y-3">
          <Skeleton className="h-4 w-full" />
          <Skeleton className="h-4 w-full" />
          <Skeleton className="h-4 w-4/5" />
          <Skeleton className="h-4 w-2/3" />
        </div>
      </section>

      {/* Related products */}
      <section className="space-y-5">
        <Skeleton className="h-7 w-48" />

        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
          {Array.from({ length: 4 }).map((_, index) => (
            <div
              key={index}
              className="rounded-lg border border-border bg-surface p-3"
            >
              <Skeleton className="aspect-square w-full" />
              <div className="mt-4 space-y-3">
                <Skeleton className="h-3 w-4/5" />
                <Skeleton className="h-3 w-2/5" />
                <Skeleton className="h-5 w-1/3" />
                <Skeleton className="h-9 w-full" />
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default ProductDetailsSkeleton;
