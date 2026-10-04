"use client";

import { setPrice } from "@/lib/features/filters/filterSlice";
import { useAppDispatch, useAppSelector } from "@/lib/hooks";

type PriceFilterProps = {
  min: number;
  max: number;
  value?: number;
};

export function PriceFilter({ min, max }: PriceFilterProps) {
  const dispatch = useAppDispatch();
  const { maxPrice } = useAppSelector((state) => state.filters);
  return (
    <div className="border-b border-white/10 px-4 py-5">
      <h3 className="mb-4 font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">
        Price
      </h3>

      <input
        type="range"
        min={min}
        max={max}
        value={maxPrice}
        onChange={(event) => dispatch(setPrice(event.target.value))}
        className="w-full bg-red-600 mask-red-600"
      />

      <div className="mt-4 font-mono text-sm text-muted-foreground">
        ${min.toLocaleString()} — ${maxPrice}
      </div>
    </div>
  );
}
