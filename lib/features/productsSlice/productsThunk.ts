import { createAsyncThunk } from "@reduxjs/toolkit";
import api from "@/lib/api";
import { Product } from "@/types";

interface ProductsResponse {
  products: Product[];
  total: number;
  skip: number;
  limit: number;
}

const cats = [
  "laptops",
  "mens-watches",
  "mobile-accessories",
  "smartphones",
  "tablets",
  "womens-watches",
];

export const fetchTechProducts = createAsyncThunk<Product[]>(
  "products/fetchTechProducts",
  async (_, { rejectWithValue }) => {
    try {
      const responses = await Promise.all(
        cats.map((cat) =>
          api.get<ProductsResponse>(`/products/category/${cat}`),
        ),
      );
      return responses.flatMap((response) => response.data.products);
    } catch (error) {
      return rejectWithValue("failed to fetch");
    }
  },
);
