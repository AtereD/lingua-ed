import Image from "next/image";
import Link from "next/link";

// Shared frame for the sign-in / sign-up / reset screens.
const AuthShell = ({ title, subtitle, children }) => (
  <div className="min-h-screen">
    <div className="px-3 py-5 lg:py-0">
      <div className="flex items-center justify-between">
        <Link href="/" aria-label="LinguaEd home">
          <Image src="/logo.png" width={110} height={35} alt="LinguaEd logo" priority />
        </Link>
        <Link href="/" className="font-semibold hover:underline">
          Home
        </Link>
      </div>
      <h1 className="text-[#222] text-4xl md:text-5xl pt-10 font-medium text-center">{title}</h1>
      <p className="text-center text-[20px] mt-3 font-medium">{subtitle}</p>
    </div>
    <div className="container flex items-center justify-center px-3 py-10 mx-auto">
      <div className="w-full max-w-[400px] px-6 pt-10 pb-8 border shadow rounded-xl">{children}</div>
    </div>
  </div>
);

export default AuthShell;
