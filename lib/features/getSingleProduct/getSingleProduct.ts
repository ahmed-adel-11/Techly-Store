import { createSlice } from "@reduxjs/toolkit";
import type { Product } from "@/types/index";
import { fetchSingleProduct } from "./getProductThunk";

interface IinitialState {
  product: Product | null;
  loading: boolean;
  error: null | string;
}

const initialState: IinitialState = {
  product: null,
  loading: false,
  error: null,
};

const getSingleProduct = createSlice({
  name: "product",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchSingleProduct.pending, (state) => {
        state.loading = true;
        state.error = null;
      })

      .addCase(fetchSingleProduct.fulfilled, (state, action) => {
       
        state.loading = false;
        state.product = action.payload;
      })

      .addCase(fetchSingleProduct.rejected, (state, action) => {
        state.loading = false;
        state.error = (action.payload as string) || "Something went wrong";
      });
  },
});

export default getSingleProduct.reducer;
