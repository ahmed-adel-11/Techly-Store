import { getUserIdFromToken } from "@/lib/auth";
import { connectDB } from "@/lib/db";
import Wishlist from "@/models/wishlist";
import axios from "axios";
import { NextResponse } from "next/server";

export const GET = async () => {
  try {
    await connectDB();

    const userId = await getUserIdFromToken();

    if (!userId) {
      return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
    }

    const wishlist = await Wishlist.findOne({ userId }).select("myWishlist");

    if (!wishlist) {
      return NextResponse.json({ items: [] });
    }

    const products = await Promise.all(
      wishlist.myWishlist.map(async (item: number) => {
        const response = await axios.get(
          `https://dummyjson.com/products/${item}`,
        );

        return { ...response.data };
      }),
    );

    return NextResponse.json({ products });
  } catch (error) {
    return NextResponse.json({ message: "Unauthorized", error });
  }
};

export const PATCH = async (request: Request) => {
  try {
    await connectDB();

    const userId = await getUserIdFromToken();

    if (!userId) {
      return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
    }
    const { productId } = await request.json();

    if (!productId) {
      return NextResponse.json(
        { message: "product id is not found" },
        { status: 401 },
      );
    }

    let wishlist = await Wishlist.findOne({ userId });

    if (!wishlist) {
      wishlist = await Wishlist.create({
        userId,
        myWishlist: [Number(productId)],
      });
    }

    const existingItem = wishlist.myWishlist.find(
      (item: number) => item === Number(productId),
    );

    if (existingItem) {
      wishlist.myWishlist = wishlist.myWishlist.filter(
        (item: number) => item !== Number(productId),
      );
    } else {
      wishlist.myWishlist.push(Number(productId));
    }

    await wishlist.save();

    return NextResponse.json({
      message: existingItem
        ? "Product removed from wishlist"
        : "Product added to wishlist",
      wishlist,
    });
  } catch (error) {
    console.error("ERROR", error);
    return NextResponse.json(
      { message: "something went wrong" },
      { status: 500 },
    );
  }
};
