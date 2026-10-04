"use client";
import { selectFilteredProducts } from "@/lib/features/productsSlice/productsSelectors";
import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import ProductCard from "../productCard/ProductCard";
import { useEffect, useState } from "react";
import { fetchTechProducts } from "@/lib/features/productsSlice/productsThunk";
import Pagination from "../pagination/Pagination";

const FilterdProducts = () => {
  const [currentPage, setCurrentPage] = useState<number>(1);
  const products = useAppSelector(selectFilteredProducts);
  const dispatch = useAppDispatch();

  const pages = Math.floor(products.length / 8);
  const start = (currentPage - 1) * 8;
  const end = start + 8;
  useEffect(() => {
    if (products.length === 0) {
      dispatch(fetchTechProducts());
    }
  }, [products.length, dispatch]);
  return (
    <>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {products.slice(start, end).map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
      <Pagination
        totalPages={pages}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />
    </>
  );
};

export default FilterdProducts;
