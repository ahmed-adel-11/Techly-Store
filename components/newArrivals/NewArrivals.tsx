import { Product } from "@/types";

import ProductCard from "../productCard/ProductCard";
import Heading from "../heading/Heading";
import Container from "../container/Container";
import ProductCardSkeleton from "../skeletons/ProductCardSkeleton";
import AnimationContainer from "../animationContainer/AnimationContainer";

interface INewArrivalsProps {
  products: Product[];
  loading: boolean;
  error: string | null;
}
const NewArrivals = ({ products, loading, error }: INewArrivalsProps) => {
  const newArrivals = [...products]
    .sort(
      (a, b) =>
        new Date(b.meta.createdAt).getTime() -
        new Date(a.meta.createdAt).getTime(),
    )
    .slice(0, 4);

  return (
    <Container>
      <Heading title="New Arrivals" subTitle="Shop all" />

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
          {newArrivals.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </AnimationContainer>
    </Container>
  );
};

export default NewArrivals;
