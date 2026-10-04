import mongoose from "mongoose";

const MONGO_URL = process.env.MONGO_URL

if (!MONGO_URL) {
  throw new Error("MONGO_URL is not defined");
}

export const connectDB = async () => {
  try {
    await mongoose.connect(MONGO_URL);
    console.log("mongoDB is connected");
  } catch (error) {
    console.error("mongoDB connection Error", error);
    throw error;
  }
};
