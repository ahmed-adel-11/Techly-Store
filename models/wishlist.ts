import mongoose, { Document } from "mongoose";

interface IWishlist extends Document {
  userId: mongoose.Types.ObjectId;
  myWishlist: number[];
}

const WishlistSchema = new mongoose.Schema<IWishlist>(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      unique: true,
      ref: "User",
    },
    myWishlist: [
      {
        type: Number,
        required: true,
      },
    ],
  },
  { timestamps: true },
);

const Wishlist =
  mongoose.models.Wishlist ||
  mongoose.model<IWishlist>("Wishlist", WishlistSchema);

export default Wishlist;
