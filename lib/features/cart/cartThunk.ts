import { createAsyncThunk } from "@reduxjs/toolkit";
import { Product } from "@/types/index";
import axios from "axios";

export const getCartProducts = createAsyncThunk<Product[]>(
  "cart/getCartProducts",
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios.get("http://localhost:3000/api/cart");

      return response.data.products;
    } catch (error) {
      return rejectWithValue("failed to fetch");
    }
  },
);

export const addToCart = createAsyncThunk(
  "cart/addToCart",
  async (product: Product, { rejectWithValue }) => {
    try {
      await axios.post("/api/cart", {
        productId: product.id,
      });

      return product;
    } catch (error) {
      return rejectWithValue("failed to add product");
    }
  },
);

export const increaseQuantity = createAsyncThunk(
  "cart/increaseQuantity",
  async (productId: number, { rejectWithValue }) => {
    try {
      await axios.patch("/api/cart", {
        productId,
        action: "increase",
      });

      return productId;
    } catch (error) {
      return rejectWithValue("failed to increase quantity");
    }
  },
);
export const decreaseQuantity = createAsyncThunk(
  "cart/decreaseQuantity",
  async (productId: number, { rejectWithValue }) => {
    try {
      await axios.patch("/api/cart", {
        productId,
        action: "decrease",
      });

      return productId;
    } catch (error) {
      return rejectWithValue("failed to decrease quantity");
    }
  },
);

export const removeFromCart = createAsyncThunk(
  "cart/removeFromCart",
  async (productId: number, { rejectWithValue }) => {
    try {
      await axios.delete("/api/cart", {
        data: {
          productId,
        },
      });

      return productId;
    } catch (error) {
      return rejectWithValue("failed to delete product");
    }
  },
);
