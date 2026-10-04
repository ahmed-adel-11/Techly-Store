"use client";

import { toggleCategory } from "@/lib/features/filters/filterSlice";
import { useAppDispatch, useAppSelector } from "@/lib/hooks";

type CategoryFilterProps = {
  categories: readonly string[];
};

export function CategoryFilter({ categories }: CategoryFilterProps) {
  const dispatch = useAppDispatch();

  const { category: cats } = useAppSelector((state) => state.filters);

  return (
    <div className="border-b border-border px-4 py-5">
      <h3 className="mb-3 font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">
        Category
      </h3>

      <div className="flex flex-wrap gap-2">
        {categories.map((category) => {
          return (
            <button
              key={category}
              type="button"
              onClick={() => dispatch(toggleCategory(category))}
              className={[
                "rounded border px-2.5 py-1.5 cursor-pointer",
                "font-mono text-sm",
                "transition-colors",
                cats.includes(category)
                  ? "border-border bg-surface text-primary"
                  : " text-muted-foreground hover:border-white/20 hover:text-muted-foreground ",
              ].join(" ")}
            >
              {category}
            </button>
          );
        })}
      </div>
    </div>
  );
}
