import { createSlice } from "@reduxjs/toolkit";
import { fetchProductsByCat } from "./ProductsByCatThunk";
import { Product } from "@/types";

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

const productsByCatSlice = createSlice({
  name: "productsByCatSlice",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchProductsByCat.pending, (state) => {
        state.loading = true;
        state.error = null;
      })

      .addCase(fetchProductsByCat.fulfilled, (state, action) => {
       
        state.loading = false;
        state.items = action.payload;
      })

      .addCase(fetchProductsByCat.rejected, (state, action) => {
        state.loading = false;
        state.error = (action.payload as string) || "Something went wrong";
      });
  },
});

export default productsByCatSlice.reducer;
