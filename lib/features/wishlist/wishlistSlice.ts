import { createSlice } from "@reduxjs/toolkit";
import { Product } from "@/types";
import { addToWishlist, getWishlistProducts } from "./wishlistThunk";

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

const wishlistSlice = createSlice({
  name: "myWishlist",
  initialState,
  reducers: {
    clearWishlist: () => initialState,
  },
  extraReducers: (builder) => {
    builder.addCase(getWishlistProducts.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(getWishlistProducts.fulfilled, (state, action) => {
      state.loading = false;
      state.items = action.payload;
    });
    builder.addCase(getWishlistProducts.rejected, (state, action) => {
      state.loading = false;
      state.error = (action.payload as string) || "failed to fetch Wishlist";
    });

    // add  to wishlist
    builder
      .addCase(addToWishlist.pending, (state, action) => {
        state.loading = true;
        const product = action.meta.arg;

        const existingItem = state.items.find((item) => item.id === product.id);

        if (existingItem) {
          state.items = state.items.filter((item) => item.id !== product.id);
        } else {
          state.items.push(product);
        }
      })
      .addCase(addToWishlist.fulfilled, (state) => {
        state.loading = false;
      })

      .addCase(addToWishlist.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      });
  },
});

export const { clearWishlist } = wishlistSlice.actions;

export default wishlistSlice.reducer;
