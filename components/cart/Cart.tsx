"use client";
import { QuantitySelector } from "../viewProduct/QuantitySelector";
import { Breadcrumb } from "../breadcrumb/BreadCrumb";
import Container from "../container/Container";
import { useAppSelector } from "@/lib/hooks";
import CartInfo from "./CartInfo";
import CartProducts from "./CartProducts";
import CartEmptyState from "./CartEmptyState";

const Cart = () => {
  const { items = [] } = useAppSelector((state) => state.myCart);

  const getTotal = items
    .map((item) => {
      const priceAfterDiscount =
        item.price - (item.price * item.discountPercentage) / 100;

      return priceAfterDiscount * item.quantity;
    })
    .reduce((curr, acc) => curr + acc, 0)
    .toFixed(2);

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
              label: "Cart",
            },
          ]}
        />

        <h1 className="text-foreground text-3xl font-display my-10">My Cart</h1>

        {items.length === 0 ? (
          <CartEmptyState />
        ) : (
          <div className="flex flex-col md:flex-row py-16 gap-5">
            <CartProducts products={items} />

            <CartInfo total={Number(getTotal)} />
          </div>
        )}
      </Container>
    </>
  );
};

export default Cart;
