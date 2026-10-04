import Image from "next/image";
import type { Product } from "@/types";
import Rating from "@/components/rating/Rating";
import Link from "next/link";
import { AddToCartButton } from "../addToCart/AddToCart";
import { WishlistButton } from "../wishlistBtn/WishlistBtn";
interface ProductCardProps {
  product: Product;
}

const colors = [
  "#ef4444",
  "#f97316",
  "#eab308",
  "#22c55e",
  "#06b6d4",
  "#3b82f6",
  "#8b5cf6",
  "#ec4899",
];

export default function ProductCard({ product }: ProductCardProps) {
  const borderColor = colors[product.id % colors.length];
  return (
    <article className="overflow-hidden rounded-xl bg-surface shadow-md cursor-pointer mt-5 group relative">
      <div className="absolute  top-2 right-2 z-100 ">
        <WishlistButton product={product} />
      </div>
      {/* Product Image */}
      <Link href={`/products/${product.id}`} className="relative z-99">
        <div className="group relative aspect-square bg-slate-100 transition-all duration-150">
          <Image
            src={product.thumbnail}
            alt={product.title}
            fill
            className="object-cover transition-opacity duration-300 group-hover:opacity-0"
            sizes="(max-width: 768px) 100vw, 25vw"
          />

          {/* Second image */}
          <Image
            src={product.images[1] || product.thumbnail}
            alt={product.title}
            fill
            className="object-cover opacity-0 transition-opacity duration-300 group-hover:opacity-100"
            sizes="(max-width: 768px) 100vw, 25vw"
          />
        </div>
      </Link>

      {/* Product Info */}
      <div
        style={
          {
            "--product-border": borderColor,
          } as React.CSSProperties
        }
        className="border-s-3 border-transparent px-4 py-3 transition-colors duration-300 group-hover:border-[var(--product-border)]"
      >
        {/* Brand */}
        <p className="text-sm text-muted-foreground">{product.brand}</p>

        {/* Product Name */}
        <h2 className="mt-1 text-lg font-semibold text-foreground truncate">
          {product.title}
        </h2>

        {/* Rating */}
        <div className="mt-2 flex items-center gap-2">
          <Rating rate={product.rating} />
        </div>

        {/* Price */}
        <div className="mt-3 mb-2 flex items-center gap-2">
          <span className="text-lg font-bold text-foreground">
            ${product.price}
          </span>

          <span className="text-sm text-muted-foreground line-through">
            $
            {(product.price / (1 - product.discountPercentage / 100)).toFixed(
              0,
            )}
          </span>

          <span className="ml-auto rounded-md bg-red-600 px-2 py-1 text-xs font-semibold text-black">
            −{Math.round(product.discountPercentage)}%
          </span>
        </div>

        {/* Add To Cart */}
        <AddToCartButton product={product} />
      </div>
    </article>
  );
}
