"use client";
import {
  decreaseQuantity,
  increaseQuantity,
} from "@/lib/features/cart/cartThunk";
import { useAppDispatch } from "@/lib/hooks";
import { useEffect, useState } from "react";
export const QuantitySelector = ({
  q,
  productId,
}: {
  q: number;
  productId: number;
}) => {
  const [quantity, setQuantity] = useState(1);
  const dispatch = useAppDispatch();
  const decrease = () => {
    setQuantity((current) => Math.max(1, current - 1));
    dispatch(decreaseQuantity(productId));
  };

  const increase = () => {
    setQuantity((current) => current + 1);
    dispatch(increaseQuantity(productId));
  };

  useEffect(() => {
    if (q) {
      setQuantity(q);
    }
  }, [q]);

  return (
    <div className="flex h-10 items-center bg-surface justify-between border border-border px-2 font-mono text-base">
      <button
        type="button"
        onClick={decrease}
        className="text-muted-foreground hover:text-foreground"
      >
        −
      </button>

      <span className="text-foreground">{quantity}</span>

      <button
        type="button"
        onClick={increase}
        className="text-muted-foreground hover:text-foreground"
      >
        +
      </button>
    </div>
  );
};
