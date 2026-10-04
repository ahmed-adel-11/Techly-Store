"use client";
import { toggleBrand } from "@/lib/features/filters/filterSlice";
import { useAppDispatch, useAppSelector } from "@/lib/hooks";
type BrandFilterProps = {
  brands: readonly string[];
};

export function BrandFilter({ brands }: BrandFilterProps) {
  const dispatch = useAppDispatch();

  const { brands: b } = useAppSelector((state) => state.filters);
  return (
    <div className="border-b border-border px-4 py-5">
      <h3 className="mb-3 font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">
        Brand
      </h3>

      <div className="flex flex-wrap gap-2">
        {brands.map((brand) => {
          return (
            <button
              key={brand}
              type="button"
              onClick={() => dispatch(toggleBrand(brand))}
              className={[
                "rounded border px-2.5 py-1.5 cursor-pointer",
                "font-mono text-sm",
                "transition-colors",
                b.includes(brand)
                  ? "border-border bg-surface text-primary"
                  : " text-muted-foreground hover:border-white/20 hover:text-muted-foreground ",
              ].join(" ")}
            >
              {brand}
            </button>
          );
        })}
      </div>
    </div>
  );
}
