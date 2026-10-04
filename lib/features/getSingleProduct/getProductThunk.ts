import { createAsyncThunk } from "@reduxjs/toolkit";
import api from "@/lib/api";
import { Product } from "@/types";

export const fetchSingleProduct = createAsyncThunk<
  Product,
  string,
  { rejectValue: string }
>("products/fetchSingleProduct", async (id: string, { rejectWithValue }) => {
  try {
    const response = await api.get<Product>(`/products/${id}`);

    return response.data;
  } catch (error) {
    return rejectWithValue("failed to fetch");
  }
});
