"use client";
import { useAppSelector } from "@/lib/hooks";
import Container from "../container/Container";
import { Breadcrumb } from "../breadcrumb/BreadCrumb";
import WishlistedProducts from "./WishlistedProducts";
import WishlistEmptyState from "./WishlistEmptyState";

const Wishlist = () => {
  const {
    items = [],
    error,
    loading,
  } = useAppSelector((state) => state.myWishlist);
  return (
    <>
      <Container>
        <Breadcrumb
          items={[
            {
              label: "Home",
              href: "/",
            },
            {
              label: "Wishlist",
            },
          ]}
        />

        <h1 className="text-foreground text-3xl font-display mt-10">
          My Wishlist
        </h1>

        <p className="text-muted-foreground text-sm mt-2 mb-10">
          ({items.length}) saved products
        </p>

        {items.length === 0 ? (
          <WishlistEmptyState />
        ) : (
          <WishlistedProducts products={items} loading={loading} error={error} />
        )}
      </Container>
    </>
  );
};

export default Wishlist;
