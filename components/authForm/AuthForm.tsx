"use client";

import { useEffect, useState } from "react";
import RegisterForm from "./RegisterForm";
import SignInForm from "./SignInForm";
import FormHeader from "./FormHeader";
import AuthTabs from "./AuthTaps";
import { useAppSelector } from "@/lib/hooks";
import { useRouter } from "next/navigation";

type AuthTab = "signin" | "register";

const AuthForm = () => {
  const [activeTab, setActiveTab] = useState<AuthTab>("register");
  const router = useRouter();
  const { isAuthenticated } = useAppSelector((state) => state.auth);

  useEffect(() => {
    if (isAuthenticated) {
      router.push("/");
      return;
    }
  }, [router, isAuthenticated]);
  return (
    <main className="min-h-screen  px-5 py-5  sm:px-8 ">
      <div className="mx-auto max-w-[560px]">
        <FormHeader />

        <section className="mt-10 overflow-hidden rounded-[4px] border border-border bg-surface">
          <AuthTabs activeTab={activeTab} onChange={setActiveTab} />

          {activeTab === "signin" ? <SignInForm /> : <RegisterForm />}
        </section>
      </div>
    </main>
  );
};

export default AuthForm;
