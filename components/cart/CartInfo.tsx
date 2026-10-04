import React from "react";

const CartInfo = ({ total }: { total: number }) => {
  return (
    <div className="max-w-[360px] h-fit w-full bg-surface border-2 border-border p-5 max-md:mt-16">
      <span className="font-mono text-muted-foreground">Order Summary</span>

      <div className="text-muted-foreground capitalize mt-4 space-y-2">
        <p className="flex justify-between">
          <span>subtotal</span>
          <span className="text-foreground">${total}</span>
        </p>
        <p className="flex justify-between">
          <span>Shipping</span>
          <span className="text-foreground">Free</span>
        </p>
        <p className="flex justify-between">
          <span>Estimated tax</span>
          <span className="text-foreground">$20</span>
        </p>
        <hr className="border-border my-3" />
        <p className="flex justify-between text-lg font-medium mt-3">
          <span>Total</span>
          <span className="text-foreground">${total + 20}</span>
        </p>
      </div>

      <button
        type="button"
        className=" w-full mt-3 rounded-lg bg-primary py-2.5 text-sm font-medium text-primary-foreground transition hover:bg-primary/90 cursor-pointer"
      >
        Proceed to checkout
      </button>
    </div>
  );
};

export default CartInfo;
