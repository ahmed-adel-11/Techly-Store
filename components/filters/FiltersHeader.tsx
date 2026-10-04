"use client";
import { clearAll } from "@/lib/features/filters/filterSlice";
import { useAppDispatch } from "@/lib/hooks";

export function FiltersHeader() {
  const dispatch = useAppDispatch();
  return (
    <div className="flex items-center justify-between border-b border-border px-4 py-3">
      <span className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">
        Filters
      </span>

      <button
        type="button"
        onClick={() => dispatch(clearAll())}
        className="font-mono text-xs text-red-500 transition-colors hover:text-red-400 cursor-pointer"
      >
        Clear all
      </button>
    </div>
  );
}
