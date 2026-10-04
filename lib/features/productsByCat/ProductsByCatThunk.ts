import { createAsyncThunk } from "@reduxjs/toolkit";
import api from "@/lib/api";
import { Product } from "@/types";

interface ProductsResponse {
  products: Product[];
  total: number;
  skip: number;
  limit: number;
}

export const fetchProductsByCat = createAsyncThunk<
  Product[],
  string,
  { rejectValue: string }
>("products/fetchProductsByCat", async (cat: string, { rejectWithValue }) => {
  try {
    const response = await api.get<ProductsResponse>(
      `/products/category/${cat}`,
    );

    return response.data.products;
  } catch (error) {
    return rejectWithValue("failed to fetch");
  }
});
