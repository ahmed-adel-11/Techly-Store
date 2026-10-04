"use client";
import { addToWishlist } from "@/lib/features/wishlist/wishlistThunk";
import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import { Product } from "@/types";
import toast from "react-hot-toast";

export const WishlistButton = ({ product }: { product: Product }) => {
  const dispatch = useAppDispatch();

  const { items = [] } = useAppSelector((state) => state.myWishlist);
  const { isAuthenticated } = useAppSelector((state) => state.auth);

  const isFavorite = items.some((item) => item.id === product.id);

  const handleWishlistedProduct = async () => {
    if (!isAuthenticated) {
      toast.error("you have to login first");
      return;
    }
    try {
      await dispatch(addToWishlist(product)).unwrap();

      toast.success(isFavorite ? "Removed from wishlist" : "Added to wishlist");
    } catch {
      toast.error("Failed to update wishlist");
    }
  };

  return (
    <button
      type="button"
      onClick={handleWishlistedProduct}
      aria-label={isFavorite ? "Remove from wishlist" : "Add to wishlist"}
      aria-pressed={isFavorite}
      className={[
        "flex h-10 items-center justify-center border px-3",
        "cursor-pointer bg-surface border-border transition",
        isFavorite
          ? "text-red-500"
          : "text-muted-foreground hover:text-foreground",
      ].join(" ")}
    >
      {isFavorite ? "♥" : "♡"}
    </button>
  );
};
