"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { signInWithEmailAndPassword} from "firebase/auth";
import { auth } from "@/app/firebase";
import Spinner from "./Spinner";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const SignIn = () => {
  const router = useRouter();
  
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    setIsSubmitting(true);

    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        toast.success("Login successful");
        router.push("/dashboard");
        setIsSubmitting(false);
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        let errorMessage = '';

        // Map error codes to user-friendly messages
        switch (errorCode) {
            case 'auth/user-not-found':
                errorMessage = "No account found for this email. Please check your email or sign up.";
                break;
            case 'auth/wrong-password':
                errorMessage = "Incorrect password. Please try again.";
                break;
            case 'auth/invalid-email':
                errorMessage = "Please enter a valid email address.";
                break;
            case 'auth/user-disabled':
                errorMessage = "Your account has been disabled. Please contact support.";
                break;
            case 'auth/too-many-requests':
                errorMessage = "Too many attempts. Please try again later.";
                break;
            case 'auth/network-request-failed':
                errorMessage = "Network error. Please check your connection and try again.";
                break;
            default:
                errorMessage = "An unexpected error occurred. Please try again.";
                break;
        }
        toast.error(errorMessage);
        setIsSubmitting(false);
      });

  };

  return (
    <div className="h-full">
      <div className="px-1 py-5 lg:py-0">
        <ToastContainer />
        <div className="flex items-center justify-between">
          <div>
            <Image src="/logo.png" width={110} height={35} alt="Lingua Logo" />
          </div>
          <div>
            <Link href="/" className="font-semibold hover:underline">
              Home
            </Link>
          </div>
        </div>
        <h3 className="text-[#222] text-4xl md:text-5xl pt-10 font-medium text-center">
          Sign In
        </h3>
        <p className="text-center text-[20px] mt-3 font-medium">
          Welcome Back to Lingua 👋
        </p>
      </div>
      <div className="container flex items-center justify-center mx-auto py-14">
        <form
          className="flex flex-col items-center justify-center w-full gap-6 px-4 pb-10 border shadow pt-14 rounded-xl lg:max-w-[350px] 2xl:max-w-[400px] md:max-w-[400px] max-w-[350px]"
          onSubmit={handleSubmit}
        >
          <div className="w-full">
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email address"
              className="h-[50px] rounded-3xl w-full px-5 border-[#524fd5] border-[1.5px]"
              required
            />
          </div>
          <div className="w-full ">
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your password"
              className="h-[50px]  rounded-3xl w-full px-5 border-[#524fd5] border-[1.5px] "
              required
            />
          </div>
          <button
            type="submit"
            className="bg-[#524fd5] w-[148px] h-[52px] text-white flex items-center text-center justify-center rounded-full font-medium hover:scale-90 duration-300 ease-in-out hover:transition-colors mt-5"
            disabled={isSubmitting}
          >
            {isSubmitting ? <Spinner /> : "Sign In"}
          </button>
          <hr className="w-full border-gray-300" />

          <p className="mt-4">
            Don't have an account?{" "}
            <a
              href="/sign-up"
              className="font-medium text-blue-600 hover:underline"
            >
              Sign Up
            </a>{" "}
            here
          </p>
        </form>
      </div>
    </div>
  );
};

export default SignIn;
