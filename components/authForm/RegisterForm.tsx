"use client";
import useRegister from "@/hooks/useRegister";
import AuthField from "./AuthField";
import { useAppSelector } from "@/lib/hooks";
import Spinner from "../spinner/Spinner";

const RegisterForm = () => {
  const { loading } = useAppSelector((state) => state.auth);
  const { errors, handleSubmit, onSubmit, register } = useRegister();

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-5 p-6 sm:p-7">
      <AuthField
        label="Full name"
        {...register("userName")}
        placeholder="Alex Doe"
        error={errors.userName?.message}
      />

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

      {/* Terms */}
      <label className="flex cursor-pointer items-start gap-3 pt-1">
        <input
          type="checkbox"
          name="terms"
          required
          className="mt-1 size-4 shrink-0 text-muted-foreground"
        />

        <span className="text-sm leading-5 flex items-center gap-1 text-muted-foreground">
          I agree to the
          <a href="/terms" className="underline underline-offset-2 ">
            Terms of Service
          </a>
          and
          <a href="/privacy" className="underline underline-offset-2 ">
            Privacy Policy
          </a>
          .
        </span>
      </label>

      <button
        disabled={loading}
        type="submit"
        className=" w-full mt-3 rounded-lg bg-primary py-2.5 text-sm font-medium text-primary-foreground transition hover:bg-primary/90 cursor-pointer"
      >
        {loading ? <Spinner /> : "Create Account"}
      </button>
    </form>
  );
};

export default RegisterForm;
