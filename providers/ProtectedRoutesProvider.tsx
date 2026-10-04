"use client";

import { useAppSelector } from "@/lib/hooks";
import { useRouter } from "next/navigation";
import { useEffect, useRef } from "react";
import toast from "react-hot-toast";

interface Props {
  children: React.ReactNode;
}

export default function ProtectedRoutesProvider({ children }: Props) {
  const router = useRouter();

  const { isAuthenticated, isAuthReady } = useAppSelector(
    (state) => state.auth
  );

  const shownToast = useRef(false);

  useEffect(() => {
    if (!isAuthReady) {
      return;
    }

    if (!isAuthenticated) {
      router.replace("/");

      if (!shownToast.current) {
        shownToast.current = true;
        toast.error("You have to login first");
      }

      return;
    }

    // User is authenticated again
    shownToast.current = false;
  }, [isAuthenticated, isAuthReady, router]);

  if (!isAuthReady || !isAuthenticated) {
    return null;
  }

  return <>{children}</>;
}