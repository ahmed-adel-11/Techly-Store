"use client";
import { addToCart } from "@/lib/features/cart/cartThunk";
import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import { Product } from "@/types";
import toast from "react-hot-toast";

interface AddToCartButtonProps {
  disabled?: boolean;
  product: Product;
}

export const AddToCartButton = ({
  disabled = false,
  product,
}: AddToCartButtonProps) => {
  const dispatch = useAppDispatch();
  const { isAuthenticated } = useAppSelector((state) => state.auth);
  const handleAddToCart = async () => {
    if (!isAuthenticated) {
      toast.error("you have to login first");
      return;
    }
    try {
      await dispatch(addToCart(product)).unwrap();

      toast.success("added to your cart");
    } catch (error) {
      toast.error("failed to add to your cart");
    }
  };

  return (
    <button
      type="button"
      disabled={disabled}
      onClick={handleAddToCart}
      className=" w-full rounded-lg bg-primary py-2.5 text-sm font-medium text-primary-foreground transition hover:bg-primary/90 cursor-pointer"
    >
      Add to cart
    </button>
  );
};
