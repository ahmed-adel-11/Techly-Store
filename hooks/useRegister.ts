import { SubmitHandler, useForm } from "react-hook-form";
import { joiResolver } from "@hookform/resolvers/joi";
import { registerSchema } from "@/validators/registerSchema";
import { useAppDispatch } from "@/lib/hooks";
import { register as registerUser } from "./../lib/features/auth/authThunks";
import toast from "react-hot-toast";
type FormValues = {
  userName: string;
  email: string;
  password: string;
};

const useRegister = () => {
  const dispatch = useAppDispatch();
  const t = toast;
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormValues>({ resolver: joiResolver(registerSchema) });
  const onSubmit: SubmitHandler<FormValues> = (data: FormValues) => {
    dispatch(registerUser(data))
      .unwrap()
      .then((data) => {
        t(data.message);
      });
    reset();
  };
  return { register, onSubmit, handleSubmit, errors };
};

export default useRegister;
