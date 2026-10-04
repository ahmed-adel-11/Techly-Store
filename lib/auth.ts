import jwt from "jsonwebtoken";
import { cookies } from "next/headers";

export const getUserIdFromToken = async () => {
  const cookieStore = await cookies();

  const token = cookieStore.get("token")?.value;

  if (!token) {
    throw new Error("Unauthorized");
  }

  const decoded = jwt.verify(token, process.env.JWT_SECRET_KEY!) as {
    id: string;
    userName: string;
  };

  return decoded.id;
};
