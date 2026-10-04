import mongoose, { Document } from "mongoose";

interface ICartItem {
  productId: number;
  quantity: number;
}

interface ICart extends Document {
  userId: mongoose.Types.ObjectId;
  myCart: ICartItem[];
}

const CartSchema = new mongoose.Schema<ICart>(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      unique: true,
      ref: "User",
    },
    myCart: [
      {
        productId: { type: Number, required: true },
        quantity: { type: Number, min: 1, required: true },
      },
    ],
  },
  { timestamps: true },
);

const Cart = mongoose.models.Cart || mongoose.model<ICart>("Cart", CartSchema);

export default Cart;
