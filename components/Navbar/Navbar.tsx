"use client";
import Link from "next/link";
import Logo from "../logo/Logo";
import Links from "./links/Links";
import SearchBar from "./searchBar/SearchBar";
import Theme from "./theme/Theme";
import { Icon } from "@iconify/react";
import MobileMenu from "./mobileMenu/MobileMenu";
import { useState } from "react";
import ProfileDropdown from "./profileDropdown/ProfileDropdown";
import { useAppSelector } from "@/lib/hooks";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const { isAuthenticated, user } = useAppSelector((state) => state.auth);
  const { items } = useAppSelector((state) => state.myCart);
  const { items: p } = useAppSelector((state) => state.myWishlist);

  let itemsCount;

  if (items?.length >= 1) {
    itemsCount = items.reduce((total, item) => total + item.quantity, 0);
  } else {
    itemsCount = 0;
  }

  return (
    <nav className="flex flex-wrap items-center justify-between  px-6 md:px-16 lg:px-24 xl:px-32 py-4 border-b border-border bg-surface relative transition-all">
      <div className="flex items-center gap-4  shrink-0">
        <div
          onClick={() => {
            setIsOpen(!isOpen);
          }}
          className={`mt-1 text-muted-foreground  hover:text-foreground transition-all duration-150 cursor-pointer min-[700px]:hidden`}
        >
          <Icon icon={"basil:menu-outline"} fontSize={20} />
        </div>
        <Link href={"/"}>
          <Logo />
        </Link>
        <Links />
      </div>

      <MobileMenu isOpen={isOpen} />

      <SearchBar />
      <div className="flex items-center gap-6 text-[20px] ">
        <Theme />
        <Link
          href={"/wishlist"}
          className="relative text-muted-foreground hover:text-foreground transition-all duration-150 cursor-pointer"
        >
          {isAuthenticated && p && (
            <span className="absolute  w-1.5 h-1.5 p-2 -right-1 -top-1 text-[10px] bg-foreground text-brand-foreground rounded-full flex items-center justify-center">
              {p.length}
            </span>
          )}
          <Icon icon={"ant-design:heart-outlined"} />
        </Link>
        <Link href={"/cart"} className="relative">
          {isAuthenticated && items && (
            <span className="absolute  w-1.5 h-1.5 p-2 -right-1 -top-1 text-[10px] bg-brand text-brand-foreground rounded-full flex items-center justify-center">
              {itemsCount}
            </span>
          )}

          <div className="text-muted-foreground hover:text-foreground transition-all duration-150 cursor-pointer">
            <Icon icon={"basil:shopping-bag-outline"} />
          </div>
        </Link>

        {isAuthenticated ? (
          <ProfileDropdown
            userName={user?.userName ?? "My Account"}
            email={user?.email ?? ""}
          />
        ) : (
          <Link
            href="/auth"
            aria-label="Sign in"
            className="flex items-center gap-2 cursor-pointer"
          >
            <Icon
              icon="solar:user-circle-outline"
              width="28"
              className="text-muted-foreground transition-colors duration-150 hover:text-foreground"
            />
          </Link>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
