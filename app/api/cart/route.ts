import { getUserIdFromToken } from "@/lib/auth";
import { connectDB } from "@/lib/db";
import Cart from "@/models/cart";
import axios from "axios";
import { NextResponse } from "next/server";

type TCartItem = {
  productId: number;
  quantity: number;
};

export const GET = async () => {
  try {
    await connectDB();

    const userId = await getUserIdFromToken();

    if (!userId) {
      return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
    }

    const cart = await Cart.findOne({ userId }).select("myCart");

    if (!cart) {
      return NextResponse.json({ items: [] });
    }

    const products = await Promise.all(
      cart.myCart.map(async (item: TCartItem) => {
        const response = await axios.get(
          `https://dummyjson.com/products/${item.productId}`,
        );

        return { ...response.data, quantity: item.quantity };
      }),
    );

    return NextResponse.json({ products });
  } catch (error) {
    return NextResponse.json({ message: "Unauthorized", error });
  }
};

export const POST = async (request: Request) => {
  try {
    await connectDB();

    const userId = await getUserIdFromToken();

    const body = await request.json();

    const { productId } = body;

    if (!productId) {
      return NextResponse.json(
        { message: "Product ID is required" },
        { status: 400 },
      );
    }

    let cart = await Cart.findOne({ userId });

    // User doesn't have a cart yet
    if (!cart) {
      cart = await Cart.create({
        userId,
        myCart: [
          {
            productId: Number(productId),
            quantity: 1,
          },
        ],
      });

      return NextResponse.json(
        { message: "product added to cart", cart },
        { status: 201 },
      );
    }

    // Check if product already exists
    const existingItem = cart.myCart.find(
      (item: TCartItem) => item.productId.toString() === productId.toString(),
    );

    if (existingItem) {
      existingItem.quantity += 1;
    } else {
      cart.myCart.push({
        productId: Number(productId),
        quantity: 1,
      });
    }

    await cart.save();

    return NextResponse.json(
      { message: "product added to cart", cart },
      { status: 200 },
    );
  } catch (error) {
    console.log(error);

    return NextResponse.json(
      { message: "something went wrong" },
      { status: 500 },
    );
  }
};

export const PATCH = async (request: Request) => {
  try {
    await connectDB();

    const userId = await getUserIdFromToken();

    if (!userId) {
      return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
    }

    const { productId, action } = await request.json();

    if (!productId || !action) {
      return NextResponse.json(
        {
          message: "productId and action are required",
        },
        { status: 400 },
      );
    }

    if (!["increase", "decrease"].includes(action)) {
      return NextResponse.json(
        {
          message: "Invalid action",
        },
        { status: 400 },
      );
    }

    let cart = await Cart.findOne({ userId });

    if (!cart) {
      return NextResponse.json(
        {
          message: "cart not found",
        },
        { status: 404 },
      );
    }

    const item = cart.myCart.find(
      (item: TCartItem) => item.productId.toString() === productId.toString(),
    );

    if (!item) {
      return NextResponse.json(
        {
          message: "product not found in cart",
        },
        { status: 404 },
      );
    }

    if (action === "increase") {
      item.quantity += 1;
    }
    if (action === "decrease") {
      item.quantity -= 1;
    }

    if (item.quantity <= 0) {
      cart.myCart = cart.myCart.filter(
        (item: TCartItem) => item.productId.toString() !== productId.toString(),
      );
    }

    await cart.save();

    return NextResponse.json({ message: "cart updated successfully", cart });
  } catch (error) {
    console.error("ERROR", error);
    return NextResponse.json(
      { message: "something went wrong" },
      { status: 500 },
    );
  }
};

export const DELETE = async (request: Request) => {
  try {
    await connectDB();

    const userId = await getUserIdFromToken();

    if (!userId) {
      return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
    }

    const { productId } = await request.json();

    let cart = await Cart.findOne({ userId });

    if (!cart) {
      return NextResponse.json(
        {
          message: "cart not found",
        },
        { status: 404 },
      );
    }

    const item = cart.myCart.find(
      (item: TCartItem) => item.productId.toString() === productId.toString(),
    );

    if (!item) {
      return NextResponse.json(
        {
          message: "product not found in cart",
        },
        { status: 404 },
      );
    }

    cart.myCart = cart.myCart.filter(
      (item: TCartItem) => item.productId.toString() !== productId.toString(),
    );

    await cart.save();

    return NextResponse.json({ message: "cart updated successfully", cart });
  } catch (error) {
    console.error("ERROR", error);
    return NextResponse.json(
      { message: "something went wrong" },
      { status: 500 },
    );
  }
};
