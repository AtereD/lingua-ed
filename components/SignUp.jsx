"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { authErrorMessage, useAuth } from "@/context/AuthContext";
import { LANGUAGES } from "@/lib/content";
import { setPreferredLanguage } from "@/lib/progress";
import AuthShell from "./AuthShell";
import Spinner from "./Spinner";

const inputClass =
  "h-[50px] rounded-3xl w-full px-5 border-[#524fd5] border-[1.5px] focus:outline-none focus:ring-2 focus:ring-[#524fd5]/40";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const validate = ({ fullName, email, language, password }) => {
  const errors = {};
  if (!fullName.trim()) errors.fullName = "Full name is required";
  if (!email) errors.email = "Email is required";
  else if (!EMAIL_RE.test(email)) errors.email = "Enter a valid email address";
  if (!language) errors.language = "Please choose a language to learn";
  if (!password) errors.password = "Password is required";
  else if (password.length < 8) errors.password = "Password must be at least 8 characters long";
  return errors;
};

const Field = ({ id, label, error, children }) => (
  <div className="w-full">
    <label htmlFor={id} className="sr-only">{label}</label>
    {children}
    {error && (
      <p id={`${id}-error`} role="alert" className="pl-3 mt-1 text-sm text-red-600">
        {error}
      </p>
    )}
  </div>
);

const SignUp = () => {
  const router = useRouter();
  const { user, loading, signUp } = useAuth();
  const [form, setForm] = useState({ fullName: "", email: "", language: "", password: "" });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    if (!loading && user) router.replace("/dashboard");
  }, [loading, user, router]);

  const handleChange = (e) => setForm((f) => ({ ...f, [e.target.id]: e.target.value }));

  const handleSubmit = async (e) => {
    e.preventDefault();
    const found = validate(form);
    setErrors(found);
    if (Object.keys(found).length) return;

    setIsSubmitting(true);
    try {
      const created = await signUp(form);
      setPreferredLanguage(created.uid, form.language);
      toast.success("Account created! Let's start learning!");
      router.push("/dashboard");
    } catch (error) {
      toast.error(authErrorMessage(error.code));
      setIsSubmitting(false);
    }
  };

  // const handleDemo = () => {
  //   const guest = signInAsGuest(form.fullName.trim() || undefined);
  //   if (form.language) setPreferredLanguage(guest.uid, form.language);
  //   router.push("/dashboard");
  // };

  const a11y = (id) => ({
    "aria-invalid": Boolean(errors[id]),
    "aria-describedby": errors[id] ? `${id}-error` : undefined,
  });

  return (
    <AuthShell title="Sign Up" subtitle="Get started with Lingua">
      <ToastContainer />
      <form className="flex flex-col items-center gap-5" onSubmit={handleSubmit} noValidate>
        <Field id="fullName" label="Full name" error={errors.fullName}>
          <input id="fullName" type="text" autoComplete="name" value={form.fullName}
            onChange={handleChange} placeholder="Full name" className={inputClass} {...a11y("fullName")} />
        </Field>
        <Field id="email" label="Email" error={errors.email}>
          <input id="email" type="email" autoComplete="email" value={form.email}
            onChange={handleChange} placeholder="Email" className={inputClass} {...a11y("email")} />
        </Field>
        <Field id="language" label="Language to learn" error={errors.language}>
          <select id="language" value={form.language} onChange={handleChange}
            className={`${inputClass} bg-white ${form.language ? "text-[#222]" : "text-[#9ca3c1]"}`} {...a11y("language")}>
            <option value="">Choose a language to learn</option>
            {LANGUAGES.map((l) => (
              <option key={l.id} value={l.id}>{l.name}</option>
            ))}
          </select>
        </Field>
        <Field id="password" label="Password" error={errors.password}>
          <input id="password" type="password" autoComplete="new-password" value={form.password}
            onChange={handleChange} placeholder="Password (8+ characters)" className={inputClass} {...a11y("password")} />
        </Field>
        <button type="submit" disabled={isSubmitting}
          className="bg-[#524fd5] w-[148px] h-[52px] text-white flex items-center justify-center rounded-full font-medium hover:scale-95 duration-300 ease-in-out disabled:opacity-70">
          {isSubmitting ? <Spinner /> : "Sign Up"}
        </button>
        <div className="flex items-center w-full gap-3 text-sm text-[#9ca3c1]">
          <hr className="flex-1 border-gray-200" /> or <hr className="flex-1 border-gray-200" />
        </div>
        {/* <button type="button" onClick={handleDemo}
          className="w-full h-[48px] rounded-full border-[1.5px] border-[#524fd5] text-[#524fd5] font-medium hover:bg-[#f2edff] duration-300">
          Try the demo (no account)
        </button> */}
        <p className="mt-2 text-center">
          Have an account already?{" "}
          <Link href="/sign-in" className="font-medium text-[#524fd5] hover:underline">Sign in</Link>
        </p>
      </form>
    </AuthShell>
  );
};

export default SignUp;
