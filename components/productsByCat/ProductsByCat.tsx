"use client";
import { fetchProductsByCat } from "@/lib/features/productsByCat/ProductsByCatThunk";
import { useAppSelector, useAppDispatch } from "@/lib/hooks";
import { useEffect } from "react";
import ProductCard from "../productCard/ProductCard";
import Container from "../container/Container";
import ProductCardSkeleton from "../skeletons/ProductCardSkeleton";
const ProductsByCat = ({ category }: { category: string }) => {
  const dispatch = useAppDispatch();

  const { items, loading, error } = useAppSelector(
    (state) => state.productsByCat,
  );

  useEffect(() => {
    dispatch(fetchProductsByCat(category));
  }, [dispatch]);
  return (
    <Container>
      {loading && (
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4 mt-2">
          {Array.from({ length: 8 }).map((_, index) => (
            <ProductCardSkeleton key={index} />
          ))}
        </div>
      )}

      {error && (
        <p role="alert" className="text-red-600 mt-5">
          {error}
        </p>
      )}
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {items.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </Container>
  );
};

export default ProductsByCat;
