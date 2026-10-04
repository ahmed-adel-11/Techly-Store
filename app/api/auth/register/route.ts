import { connectDB } from "@/lib/db";
import Cart from "@/models/cart";
import User from "@/models/user";
import Wishlist from "@/models/wishlist";
import { validateRegisterUser } from "@/validators/user";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { NextResponse } from "next/server";

export const POST = async (request: Request) => {
  try {
    await connectDB();
    const body = await request.json();
    const { error } = validateRegisterUser(body);
    if (error) {
      return NextResponse.json({ message: error.details[0].message });
    }

    const isUserRegisterd = await User.findOne({ email: body.email });

    if (isUserRegisterd) {
      return NextResponse.json({ message: "user is already registered" });
    }

    const salt = await bcrypt.genSalt(10);
    body.password = await bcrypt.hash(body.password, salt);
    const user = new User({
      email: body.email,
      userName: body.userName,
      password: body.password,
    });

    const result = await user.save();

    const token = jwt.sign(
      { id: result._id, userName: result.userName },
      process.env.JWT_SECRET_KEY!,
      {
        expiresIn: "7d",
      },
    );

    await Cart.create({ userId: result._id, myCart: [] });
    await Wishlist.create({ userId: result._id, myWishlist: [] });

    const { password, ...others } = result._doc;
    return NextResponse.json(
      {
        message: "user is Created successfully",
        data: { ...others, token },
      },
      { status: 201 },
    );
  } catch (error) {
    return Response.json({ message: "failed to register" }, { status: 401 });
  }
};
