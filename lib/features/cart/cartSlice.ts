import { createSlice } from "@reduxjs/toolkit";
import { Product } from "@/types";
import {
  addToCart,
  getCartProducts,
  decreaseQuantity,
  increaseQuantity,
  removeFromCart,
} from "./cartThunk";

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

const cartSlice = createSlice({
  name: "myCart",
  initialState,
  reducers: {
    clearCart: () => initialState,
  },
  extraReducers: (builder) => {
    builder
      .addCase(getCartProducts.pending, (state) => {
        state.loading = true;
        state.error = null;
      })

      .addCase(getCartProducts.fulfilled, (state, action) => {
       
        state.loading = false;
        state.items = action.payload;
      })

      .addCase(getCartProducts.rejected, (state, action) => {
        state.loading = false;
        state.error = (action.payload as string) || "Something went wrong";
      });

    builder
      .addCase(addToCart.pending, (state, action) => {
        state.loading = true;
        state.error = null;

        const product = action.meta.arg;

        const existingProduct = state.items.find(
          (item) => item.id === product.id,
        );

        if (existingProduct) {
          existingProduct.quantity = (existingProduct.quantity ?? 0) + 1;
        } else {
          state.items.push({ ...product, quantity: 1 });
        }
      })
      .addCase(addToCart.fulfilled, (state) => {
        state.loading = false;
      })

      .addCase(addToCart.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      });

    builder
      .addCase(increaseQuantity.pending, (state, action) => {
       
        const product = state.items.find((item) => item.id === action.meta.arg);
        if (product) {
          product.quantity = (product.quantity ?? 1) + 1;
        }
      })

      .addCase(increaseQuantity.fulfilled, (state) => {
        // API succeeded — nothing else needed
      })

      .addCase(increaseQuantity.rejected, (state, action) => {
        const product = state.items.find((item) => item.id === action.meta.arg);

        if (product) {
          product.quantity = (product.quantity ?? 1) - 1;
        }

        state.error =
          (action.payload as string) || "Failed to increase quantity";
      });

    builder
      .addCase(decreaseQuantity.pending, (state, action) => {
        const product = state.items.find((item) => item.id === action.meta.arg);

        if (product) {
          product.quantity = (product.quantity ?? 1) - 1;

          if (product.quantity <= 0) {
            state.items = state.items.filter(
              (item) => item.id !== action.meta.arg,
            );
          }
        }
      })

      .addCase(decreaseQuantity.fulfilled, (state) => {
        // API succeeded
      })

      .addCase(decreaseQuantity.rejected, (state, action) => {
        const product = state.items.find((item) => item.id === action.meta.arg);

        if (product) {
          product.quantity = (product.quantity ?? 0) + 1;
        }

        state.error =
          (action.payload as string) || "Failed to decrease quantity";
      });

    builder.addCase(removeFromCart.pending, (state, action) => {
      const productId = action.meta.arg;

      state.items = state.items.filter((item) => item.id !== productId);

      
    });
  },
});

export const { clearCart } = cartSlice.actions;

export default cartSlice.reducer;
