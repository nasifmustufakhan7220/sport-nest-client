"use client";
import Link from "next/link";
import { CircleDot, Mail, LockKeyhole, Eye, Check, EyeOff } from "lucide-react";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { signIn } from "@/app/lib/auth-client";
import { toast } from "@/components/ui/toast";
import { redirect } from "next/navigation";

const SignInPage = () => {
  const [password, setPassword] = useState("");
  const [toggle, setToggle] = useState(false);

  const hasMinLength = password.length >= 8;
  const hasUpperCase = /[A-Z]/.test(password);
  const hasLowerCase = /[a-z]/.test(password);

  const handelSignIn = async (e: React.SubmitEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!hasMinLength || !hasUpperCase || !hasLowerCase) {
      return;
    }

    const formData = new FormData(e.currentTarget);
    const signIndata = Object.fromEntries(formData.entries()) as Record<
      string,
      string
    >;
    const { data, error } = await signIn.email({
      email: signIndata.email,
      password: signIndata.password,
    });

    if (data?.user) {
      toast.add({
        title: "Success",
        description: "Sign up successfully!",
      });
      redirect("/");
    } else {
      toast.add({
        title: `${error?.message}`,
        description: "",
      });
      return;
    }
  };
  return (
    <main className="flex min-h-screen items-center justify-center bg-[linear-gradient(135deg,#f8fafc,#ffffff,#f8fafc)] px-4 py-8">
      {/* Login Card */}
      <div className="w-full max-w-90 overflow-hidden rounded-[22px] bg-white shadow-xl">
        {/* Green Header */}
        <div className="flex flex-col items-center bg-linear-to-r from-green-600 to-emerald-600 px-6 py-7 text-center text-white">
          <div className="mb-3 flex size-10 items-center justify-center rounded-xl bg-white/20">
            <CircleDot size={22} />
          </div>

          <h1 className="text-xl font-bold">Welcome Back</h1>

          <p className="mt-1 text-xs text-white/90">
            Sign in to your SportNest account
          </p>
        </div>

        {/* Form Section */}
        <div className="p-6">
          <form className="space-y-4" onSubmit={handelSignIn}>
            {/* Email Address */}
            <div className="space-y-1.5">
              <label className="text-[11px] font-semibold uppercase text-slate-600">
                Email Address
              </label>

              <div className="relative">
                <Mail className="absolute left-3 top-1/2 size-3.5 -translate-y-1/2 text-slate-400" />

                <Input
                  type="email"
                  name="email"
                  required
                  placeholder="Your email address"
                  className="h-9.5 rounded-xl pl-9 text-xs shadow-none placeholder:text-slate-400"
                />
              </div>
            </div>

            {/* Password */}
            <div className="space-y-1.5">
              <label className="text-[11px] font-semibold uppercase text-slate-600">
                Password
              </label>

              <div className="relative">
                <LockKeyhole className="absolute left-3 top-1/2 size-3.5 -translate-y-1/2 text-slate-400" />

                <Input
                  type={toggle ? "text" : "password"}
                  name="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Enter your password"
                  className="h-9.5 rounded-xl bg-blue-50 pl-9 pr-9 text-xs shadow-none"
                />

                <button
                  type="button"
                  onClick={() => setToggle(!toggle)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600"
                >
                  {toggle ? (
                    <EyeOff className="size-3.5" />
                  ) : (
                    <Eye className="size-3.5" />
                  )}
                </button>
              </div>

              {password.length > 0 && (
                <div className="space-y-1 pt-1 text-[10px]">
                  <p
                    className={`flex items-center gap-2 ${hasMinLength ? "text-green-600" : "text-slate-400"}`}
                  >
                    <Check size={11} />
                    At least 8 characters
                  </p>

                  <p
                    className={`flex items-center gap-2 ${hasUpperCase ? "text-green-600" : "text-slate-400"}`}
                  >
                    <Check size={11} />
                    One uppercase letter
                  </p>

                  <p
                    className={`flex items-center gap-2 ${hasLowerCase ? "text-green-600" : "text-slate-400"}`}
                  >
                    <Check size={11} />
                    One lowercase letter
                  </p>
                </div>
              )}
            </div>

            {/* Sign In Button */}
            <Button
              type="submit"
              className="h-9.5 w-full rounded-xl bg-green-600 text-xs font-bold text-white shadow-md hover:bg-green-700"
            >
              Sign In
            </Button>
          </form>

          {/* Divider */}
          <div className="my-4 flex items-center gap-3">
            <div className="h-px flex-1 bg-slate-100" />

            <span className="text-[10px] text-slate-400">or continue with</span>

            <div className="h-px flex-1 bg-slate-100" />
          </div>

          {/* Google Button */}
          <Button
            variant="outline"
            className="h-9.5 w-full rounded-xl border-slate-200 text-xs font-medium text-slate-800 shadow-none hover:bg-slate-50"
          >
            <span className="bg-linear-to-br from-blue-500 via-green-500 to-red-500 bg-clip-text text-lg font-bold text-transparent">
              G
            </span>
            Continue with Google
          </Button>

          {/* Register Link */}
          <p className="mt-5 text-center text-xs text-slate-500">
            Don&apos;t have an account?{" "}
            <Link
              href="/sign-up"
              className="font-semibold text-green-600 hover:text-green-700"
            >
              Register free
            </Link>
          </p>
        </div>
      </div>
    </main>
  );
};

export default SignInPage;
