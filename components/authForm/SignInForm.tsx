"use client";
import useLogin from "@/hooks/useLogin";
import AuthField from "./AuthField";
import { useAppSelector } from "@/lib/hooks";
import Spinner from "../spinner/Spinner";

const SignInForm = () => {
  const { loading } = useAppSelector((state) => state.auth);
  const { errors, handleSubmit, onSubmit, register } = useLogin();

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6 p-6 sm:p-7">
      <AuthField
        label="Email"
        {...register("email")}
        type="email"
        placeholder="you@email.com"
        error={errors.email?.message}
      />

      <AuthField
        label="Password"
        {...register("password")}
        type="password"
        placeholder="••••••••"
        error={errors.password?.message}
      />

      <div className="flex justify-end">
        <button
          type="button"
          className="text-xs text-muted-foreground underline-offset-4 hover:text-foreground hover:underline"
        >
          Forgot password?
        </button>
      </div>

      <button
        disabled={loading}
        type="submit"
        className=" w-full mt-3 rounded-lg bg-primary py-2.5 text-sm font-medium text-primary-foreground transition hover:bg-primary/90 cursor-pointer"
      >
        {loading ? <Spinner /> : "Sign In"}
      </button>
    </form>
  );
};

export default SignInForm;
