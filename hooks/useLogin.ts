import { SubmitHandler, useForm } from "react-hook-form";
import { joiResolver } from "@hookform/resolvers/joi";
import { useAppDispatch } from "@/lib/hooks";
import { login } from "./../lib/features/auth/authThunks";
import { loginSchema } from "@/validators/loginSchema";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import { getCartProducts } from "@/lib/features/cart/cartThunk";
import { getWishlistProducts } from "@/lib/features/wishlist/wishlistThunk";

type FormValues = {
  email: string;
  password: string;
};

const useLogin = () => {
  const router = useRouter();
  const dispatch = useAppDispatch();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>({ resolver: joiResolver(loginSchema) });
  const onSubmit: SubmitHandler<FormValues> = async (data) => {
    try {
      await dispatch(login(data))
        .unwrap()
        .then(async () => {
          await dispatch(getCartProducts()).unwrap();
          await dispatch(getWishlistProducts()).unwrap();
          router.push("/");
        });
      toast.success(`hello , ${data.email}`);
    } catch (error: any) {
      toast.error(error);
    }
  };
  return { onSubmit, handleSubmit, register, errors };
};

export default useLogin;
