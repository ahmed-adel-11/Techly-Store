import { connectDB } from "@/lib/db";
import Cart from "@/models/cart";
import User from "@/models/user";
import { validateLoginUser } from "@/validators/user";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { NextResponse } from "next/server";
import { cookies } from "next/headers";

export const POST = async (request: Request) => {
  try {
    connectDB();
    const body = await request.json();
    const { error } = validateLoginUser(body);
    if (error) {
      return NextResponse.json({ message: error.details[0].message });
    }

    let user = await User.findOne({ email: body.email });

    if (!user) {
      return NextResponse.json(
        { message: "invalid email or password" },
        { status: 400 },
      );
    }

    const passwordMatched = await bcrypt.compare(body.password, user.password);

    if (!passwordMatched) {
      return NextResponse.json(
        { message: "invalid email or password" },
        { status: 400 },
      );
    }
    const token = jwt.sign(
      { id: user._id, userName: user.userName },
      process.env.JWT_SECRET_KEY!,
      {
        expiresIn: "7d",
      },
    );

    const cookieStore = await cookies();

    cookieStore.set("token", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "lax",
      path: "/",
      maxAge: 60 * 60 * 24 * 7,
    });

    const userData = user.toObject();

    delete userData.password;

    return NextResponse.json(
      {
        userData,
      },
      { status: 201 },
    );
  } catch (error) {
    return Response.json(
      { message: "Invalid or expired token" },
      { status: 401 },
    );
  }
};
