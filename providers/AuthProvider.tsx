"use client";

import { getMe } from "@/lib/features/auth/authThunks";
import { getCartProducts } from "@/lib/features/cart/cartThunk";
import { getWishlistProducts } from "@/lib/features/wishlist/wishlistThunk";
import { useAppDispatch } from "@/lib/hooks";
import { useEffect } from "react";
import toast from "react-hot-toast";

interface IAuthProviderProps {
  children: React.ReactNode;
}

const AuthProvider = ({ children }: IAuthProviderProps) => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    const initializeAuth = async () => {
      try {
        await dispatch(getMe()).unwrap();

        await Promise.all([
          dispatch(getCartProducts()).unwrap(),
          dispatch(getWishlistProducts()).unwrap(),
        ]);
      } catch (error: any) {
        // toast.error(error);
      }
    };

    initializeAuth();
  }, [dispatch]);

  return <>{children}</>;
};

export default AuthProvider;
