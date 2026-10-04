"use client";
import { useAppDispatch } from "@/lib/hooks";
import { Product } from "../../types/index";
import { QuantitySelector } from "../viewProduct/QuantitySelector";
import { removeFromCart } from "@/lib/features/cart/cartThunk";
import toast from "react-hot-toast";

const CartProducts = ({ products }: { products: Product[] }) => {
  const dispatch = useAppDispatch();

  const handleRemove = async (id: number) => {
    try {
      await dispatch(removeFromCart(id));

      toast.success("Removed from your cart");
    } catch (error) {
      toast.error("failed to removed from your cart");
    }
  };
  return (
    <div className="flex-1  bg-surface p-3 border-border border-2">
      {products?.map((item, index) => (
        <div
          key={index}
          className="flex items-center text-sm md:text-base font-medium pt-3 "
        >
          <div className="flex items-center flex-1 justify-between md:gap-6 gap-3">
            <div className="flex gap-3 ">
              <div className="cursor-pointer w-24 h-28 max-[500px]:w-15 flex items-center justify-center border border-gray-300 rounded overflow-hidden">
                <img
                  className="max-w-full h-full object-cover "
                  src={item.thumbnail}
                  alt={item.title}
                />
              </div>
              <div>
                <span className="text-muted-foreground font-mono uppercase text-sm">
                  {item.brand}
                </span>
                <p className="text-foreground font-display text-base mb-3 max-[500px]:text-xs">
                  {item.title}
                </p>
                <div className="flex items-center gap-3 ">
                  <div className="w-25">
                    <QuantitySelector
                      q={Number(item.quantity)}
                      productId={item.id}
                    />
                  </div>
                  <span
                    onClick={() => {
                      handleRemove(item.id);
                    }}
                    className="text-muted-foreground font-mono capitalize text-sm hover:text-red-600 transition-all duration-150 cursor-pointer"
                  >
                    remove
                  </span>
                </div>
              </div>
            </div>

            <div className="self-start max-[500px]:text-xs">
              <h1 className="text-foreground">${item.price}</h1>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CartProducts;
