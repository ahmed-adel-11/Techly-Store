import Container from "../container/Container";
import EmptyState from "../emptystate/EmptyState";

const CartEmptyState = () => {
  return (
    <Container>
      <EmptyState
        icon="solar:bag-4-linear"
        title="Your cart is empty"
        description="Browse the catalogue and add something worth keeping."
        buttonText="Start shopping"
        href="/shop"
      />
    </Container>
  );
};

export default CartEmptyState;
