import { createSelector } from "@reduxjs/toolkit";
import { RootState } from "@/lib/store";

const selectProducts = (state: RootState) => state.products.items;

const selectFilters = (state: RootState) => state.filters;

export const selectFilteredProducts = createSelector(
  [selectProducts, selectFilters],
  (products, filters) => {
    return products.filter((product) => {
      if (
        filters.category.length > 0 &&
        !filters.category.includes(product.category)
      ) {
        return false;
      }
      if (
        filters.brands.length > 0 &&
        !filters.brands.includes(product.brand)
      ) {
        return false;
      }

      if (filters.maxPrice > 0 && product.price > filters.maxPrice) {
        return false;
      }

      return true;
    });
  },
);
