import Rating from "../rating/Rating";
import { ProductPrice } from "./ProductPrice";
import { ProductBenefits } from "./ProductBenefits";
import { AddToCartButton } from "../addToCart/AddToCart";
import { WishlistButton } from "../wishlistBtn/WishlistBtn";
import type { Product } from "@/types/index";

interface ProductInfoProps {
  product: Product;
}

export const ProductInfo = ({ product }: ProductInfoProps) => {
  return (
    <div className="flex flex-col">
      <span className="mb-1 font-mono text-[10px] uppercase tracking-[0.15em] text-muted-foreground">
        {product.brand}
      </span>

      <h1 className="text-3xl text-foreground font-semibold tracking-tight sm:text-4xl">
        {product.title}
      </h1>

      <div className="my-5 text-2xl">
        <Rating rate={product.rating} />
      </div>

      <ProductPrice
        discount={product.discountPercentage}
        oldPrice={product.price}
      />

      <p className="text-muted-foreground font-mono my-5">
        {product.description}
      </p>

      <div className="flex items-center gap-3 mb-5">
        <div className="flex-1">
          <AddToCartButton product={product} />
        </div>

        <WishlistButton product={product} />
      </div>
      <ProductBenefits />
    </div>
  );
};
