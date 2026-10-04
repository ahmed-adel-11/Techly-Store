import { configureStore } from "@reduxjs/toolkit";
import productsSlice from "./features/productsSlice/productsSlice";
import productsByCatSlice from "./features/productsByCat/productsByCatSlice";
import filterSlice from "./features/filters/filterSlice";
import getSingleProduct from "./features/getSingleProduct/getSingleProduct";
import authSlice from "./features/auth/authSlice";
import cartSlice from "./features/cart/cartSlice";
import wishlistSlice from "./features/wishlist/wishlistSlice";

export const makeStore = () => {
  return configureStore({
    reducer: {
      products: productsSlice,
      singleProduct: getSingleProduct,
      productsByCat: productsByCatSlice,
      filters: filterSlice,
      auth: authSlice,
      myCart: cartSlice,
      myWishlist: wishlistSlice,
    },
  });
};

// Infer the type of makeStore
export type AppStore = ReturnType<typeof makeStore>;
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];
