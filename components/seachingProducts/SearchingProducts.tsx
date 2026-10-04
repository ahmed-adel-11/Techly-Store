"use client";

import { useEffect, useMemo } from "react";
import { fetchTechProducts } from "@/lib/features/productsSlice/productsThunk";
import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import ProductCard from "../productCard/ProductCard";

interface SearchingProductsProps {
  q: string;
}

const SearchingProducts = ({ q }: SearchingProductsProps) => {
  const dispatch = useAppDispatch();
  const { items, loading, error } = useAppSelector((state) => state.products);

  // Fetch products when the Redux store is empty.
  useEffect(() => {
    if (items.length === 0 && !loading && !error) {
      dispatch(fetchTechProducts());
    }
  }, [dispatch, items.length, loading, error]);

  // Search across available product fields.
  const searchedProducts = useMemo(() => {
    const query = decodeURIComponent(q).trim().toLowerCase();

    if (!query) return [];

    return items.filter((product) => {
      const searchableFields = [
        product.title,
        product.brand,
        product.category,
        product.description,
        ...(product.tags ?? []),
      ];

      return searchableFields.some((field) =>
        field?.toLowerCase().includes(query),
      );
    });
  }, [items, q]);

  // Empty search query.
  if (!q.trim()) {
    return (
      <p className="py-10 text-center text-muted-foreground">
        Start typing to search for products.
      </p>
    );
  }

  // Loading state.
  if (loading && items.length === 0) {
    return (
      <p className="py-10 text-center text-muted-foreground">
        Loading products...
      </p>
    );
  }

  // Error state with retry.
  if (error && items.length === 0) {
    return (
      <div className="flex flex-col items-center gap-4 py-10 text-center">
        <p className="text-red-500">{error}</p>
        <button
          type="button"
          onClick={() => dispatch(fetchTechProducts())}
          className="rounded-md bg-primary px-5 py-2 text-primary-foreground transition-opacity hover:opacity-80"
        >
          Try again
        </button>
      </div>
    );
  }

  return (
    <section>
      <div className="mb-6 flex flex-wrap items-center justify-between gap-2">
        <h1 className="text-xl font-semibold text-foreground">
          Search results
        </h1>

        <p className="text-sm text-muted-foreground">
          {searchedProducts.length}{" "}
          {searchedProducts.length === 1 ? "product" : "products"} found for "
          {decodeURIComponent(q)}"
        </p>
      </div>

      {searchedProducts.length === 0 ? (
        <div className="py-16 text-center">
          <p className="text-lg font-medium text-foreground">
            No products found
          </p>
          <p className="mt-2 text-sm text-muted-foreground">
            Try another product name, brand, or category.
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {searchedProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      )}
    </section>
  );
};

export default SearchingProducts;
