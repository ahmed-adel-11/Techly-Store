import { createAsyncThunk } from "@reduxjs/toolkit";
import { Product } from "@/types/index";
import axios from "axios";

export const getWishlistProducts = createAsyncThunk<Product[]>(
  "wishlist/getWishlistProducts",
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios.get("/api/wishlist");

      return response.data.products;
    } catch (error) {
      return rejectWithValue("failed to fetch");
    }
  },
);

export const addToWishlist = createAsyncThunk(
  "wishlist/addToWishlist",
  async (product: Product, { rejectWithValue }) => {
    try {
      await axios.patch("/api/wishlist", {
        productId: product.id,
      });

      return product;
    } catch (error) {
      return rejectWithValue("failed to add product");
    }
  },
);
