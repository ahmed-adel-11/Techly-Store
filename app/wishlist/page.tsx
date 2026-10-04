import Wishlist from "@/components/wishlist/Wishlist";
import ProtectedRoutesProvider from "@/providers/ProtectedRoutesProvider";

const WishlistPage = () => {
  return (
    <ProtectedRoutesProvider>
      <Wishlist />
    </ProtectedRoutesProvider>
  );
};

export default WishlistPage;
