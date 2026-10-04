"use client";
import { useAppDispatch } from "@/lib/hooks";
import { Icon } from "@iconify/react";
import { useState } from "react";
import axios from "axios";
import { logout } from "@/lib/features/auth/authSlice";
import { useRouter } from "next/navigation";
import { clearCart } from "@/lib/features/cart/cartSlice";
import { clearWishlist } from "@/lib/features/wishlist/wishlistSlice";
interface IProfileProps {
  userName: string;
  email: string;
}
const ProfileDropdown = ({ email, userName }: IProfileProps) => {
  const dispatch = useAppDispatch();
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();
  const handleLogout = async () => {
    try {
      await axios.post("/api/auth/logout");

      dispatch(logout());
      dispatch(clearCart());
      dispatch(clearWishlist());

      router.push("/auth");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="relative group z-1000">
      {/* User button */}
      <button
        className="flex items-center gap-2 cursor-pointer"
        onClick={() => setIsOpen(!isOpen)}
      >
        <Icon
          icon="solar:user-circle-outline"
          width="28"
          className="text-muted-foreground hover:text-foreground transition-all duration-150"
        />
      </button>

      {/* Dropdown */}
      <div
        className={`${isOpen ? "" : "hidden"} absolute right-0 top-full mt-3 w-64 rounded-2xl border bg-white p-2 shadow-xl`}
      >
        {/* User info */}
        <div className="px-3 py-3">
          <p className="font-semibold">{userName}</p>
          <p className="text-sm text-gray-500">{email}</p>
        </div>

        <div className="my-1 h-px bg-gray-100" />

        <div className="my-1 h-px bg-gray-100" />

        {/* Logout */}
        <button
          onClick={handleLogout}
          className="flex w-full items-center gap-3 rounded-xl px-3 py-2.5 text-sm text-red-500 hover:bg-red-50 cursor-pointer"
        >
          <Icon icon="solar:logout-2-outline" width="20" />
          <span>Log out</span>
        </button>
      </div>
    </div>
  );
};

export default ProfileDropdown;
