import { connectDB } from "@/lib/db";
import { cookies } from "next/headers";
import jwt from "jsonwebtoken";
import User from "@/models/user";
import Cart from "@/models/cart";
import Wishlist from "@/models/wishlist";

export const GET = async () => {
  try {
    await connectDB;
    const cookieStore = await cookies();

    const token = cookieStore.get("token")?.value;
    if (!token) {
      return Response.json({ message: "Not authenticated" }, { status: 401 });
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET_KEY!) as {
      id: string;
    };

    const user = await User.findById(decoded.id).select("-password");

    if (!user) {
      return Response.json(
        { message: "invalid email or password" },
        { status: 400 },
      );
    }

    const myCart = await Cart.findOne({ userId: user._id }).select("myCart");
    const myWishlist = await Wishlist.findOne({ userId: user._id }).select(
      "myWishlist",
    );
    return Response.json({ user, myCart, myWishlist });
  } catch (error) {
    return Response.json(
      { message: "Invalid or expired token" },
      { status: 401 },
    );
  }
};
