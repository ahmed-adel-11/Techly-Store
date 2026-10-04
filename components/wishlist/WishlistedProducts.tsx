import { Product } from "@/types";
import ProductCard from "../productCard/ProductCard";
import ProductCardSkeleton from "../skeletons/ProductCardSkeleton";
import AnimationContainer from "../animationContainer/AnimationContainer";

const WishlistedProducts = ({
  products,
  error,
  loading,
}: {
  products: Product[];
  loading: boolean;
  error: string | null;
}) => {
  return (
    <>
      {loading && (
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4 mt-2">
          {Array.from({ length: 4 }).map((_, index) => (
            <ProductCardSkeleton key={index} />
          ))}
        </div>
      )}

      {error && (
        <p role="alert" className="text-red-600 mt-5">
          {error}
        </p>
      )}
      <AnimationContainer>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </AnimationContainer>
    </>
  );
};

export default WishlistedProducts;
