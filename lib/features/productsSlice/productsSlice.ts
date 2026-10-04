import { createSlice } from "@reduxjs/toolkit";
import { fetchTechProducts } from "./productsThunk";
import type { Product } from "@/types/index";

interface IinitialState {
  items: Product[];
  loading: boolean;
  error: null | string;
}

const initialState: IinitialState = {
  items: [],
  loading: false,
  error: null,
};

const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchTechProducts.pending, (state) => {
        state.loading = true;
        state.error = null;
      })

      .addCase(fetchTechProducts.fulfilled, (state, action) => {
        
        state.loading = false;
        state.items = action.payload;
      })

      .addCase(fetchTechProducts.rejected, (state, action) => {
        state.loading = false;
        state.error = (action.payload as string) || "Something went wrong";
      });
  },
});

export default productsSlice.reducer;
