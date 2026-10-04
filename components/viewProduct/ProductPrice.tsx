interface ProductPriceProps {
  discount: number;
  oldPrice: number;
}

export const ProductPrice = ({ discount, oldPrice }: ProductPriceProps) => {
  const priceAfterDiscount = oldPrice - (oldPrice * discount) / 100;

  return (
    <div className="mt-5 flex items-center gap-3">
      <span className="text-2xl font-semibold text-foreground">
        ${priceAfterDiscount.toFixed(2)}
      </span>

      {oldPrice && (
        <span className="font-mono text-xs text-muted-foreground line-through">
          ${oldPrice}
        </span>
      )}

      {discount && (
        <span className="bg-red-500 px-1.5 py-0.5 font-mono text-[9px]">
          -{discount}%
        </span>
      )}
    </div>
  );
};
