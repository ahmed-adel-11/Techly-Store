import Cart from "@/components/cart/Cart";
import ProtectedRoutesProvider from "@/providers/ProtectedRoutesProvider";

const CartPage = () => {
  return (
    <ProtectedRoutesProvider>
      <Cart />
    </ProtectedRoutesProvider>
  );
};

export default CartPage;
