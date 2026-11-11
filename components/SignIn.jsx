"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { authErrorMessage, useAuth } from "@/context/AuthContext";
import AuthShell from "./AuthShell";
import Spinner from "./Spinner";

const inputClass =
  "h-[50px] rounded-3xl w-full px-5 border-[#524fd5] border-[1.5px] focus:outline-none focus:ring-2 focus:ring-[#524fd5]/40";

const SignIn = () => {
  const router = useRouter();
  const { user, loading, signIn, resetPassword } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    if (!loading && user) router.replace("/dashboard");
  }, [loading, user, router]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      await signIn({ email, password });
      toast.success("Welcome back!");
      router.push("/dashboard");
    } catch (error) {
      toast.error(authErrorMessage(error.code));
      setIsSubmitting(false);
    }
  };

  const handleReset = async () => {
    if (!email) return toast.info("Enter your email above, then press “Forgot password?”.");
    try {
      await resetPassword(email);
      toast.success("Password reset email sent. Check your inbox.");
    } catch (error) {
      toast.error(authErrorMessage(error.code));
    }
  };

  // const handleDemo = () => {
  //   signInAsGuest();
  //   router.push("/dashboard");
  // };

  return (
    <AuthShell title="Sign In" subtitle="Welcome back to Lingua 👋">
      <ToastContainer />
      <form className="flex flex-col items-center gap-5" onSubmit={handleSubmit} noValidate={false}>
        <div className="w-full">
          <label htmlFor="email" className="sr-only">Email address</label>
          <input
            type="email"
            id="email"
            autoComplete="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email address"
            className={inputClass}
            required
          />
        </div>
        <div className="w-full">
          <label htmlFor="password" className="sr-only">Password</label>
          <input
            type="password"
            id="password"
            autoComplete="current-password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
            className={inputClass}
            required
          />
          <button
            type="button"
            onClick={handleReset}
            className="mt-2 ml-2 text-sm font-medium text-[#524fd5] hover:underline"
          >
            Forgot password?
          </button>
        </div>
        <button
          type="submit"
          className="bg-[#524fd5] w-[148px] h-[52px] text-white flex items-center justify-center rounded-full font-medium hover:scale-95 duration-300 ease-in-out disabled:opacity-70"
          disabled={isSubmitting}
        >
          {isSubmitting ? <Spinner /> : "Sign In"}
        </button>
        <div className="flex items-center w-full gap-3 text-sm text-[#9ca3c1]">
          <hr className="flex-1 border-gray-200" /> or <hr className="flex-1 border-gray-200" />
        </div>
        {/* <button
          type="button"
          onClick={handleDemo}
          className="w-full h-[48px] rounded-full border-[1.5px] border-[#524fd5] text-[#524fd5] font-medium hover:bg-[#f2edff] duration-300"
        >
          Try the demo (no account)
        </button> */}
        <p className="mt-2 text-center">
          Don&apos;t have an account?{" "}
          <Link href="/sign-up" className="font-medium text-[#524fd5] hover:underline">
            Sign up
          </Link>
        </p>
      </form>
    </AuthShell>
  );
};

export default SignIn;
