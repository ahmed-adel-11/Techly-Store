"use client";
import { fetchProductsByCat } from "@/lib/features/productsByCat/ProductsByCatThunk";
import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import { useEffect } from "react";
import ProductCard from "../productCard/ProductCard";
import Heading from "../heading/Heading";

const RelatedProducts = ({
  category,
  id,
}: {
  category: string;
  id: number;
}) => {
  const dispatch = useAppDispatch();

  const { items } = useAppSelector((state) => state.productsByCat);

  const filterdProducts = items.filter((item) => item.id !== id);
  useEffect(() => {
    dispatch(fetchProductsByCat(category));
  }, [dispatch, category]);
  return (
    <>
      <Heading title="Related Products" />
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {filterdProducts.slice(0, 4).map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </>
  );
};

export default RelatedProducts;
