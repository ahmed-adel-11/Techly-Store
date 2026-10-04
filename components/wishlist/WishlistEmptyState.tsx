import EmptyState from "../emptystate/EmptyState";
import Container from "../container/Container";

const WishlistEmptyState = () => {
  return (
    <Container>
      <EmptyState
        icon="ant-design:heart-outlined"
        title="Your Wishlist is empty"
        description="Tap the heart on product to keep it here for later"
        buttonText="Browse Products"
        href="/shop"
      />
    </Container>
  );
};

export default WishlistEmptyState;
