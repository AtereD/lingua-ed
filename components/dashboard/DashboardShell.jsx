"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { FiBook, FiHome, FiLogOut } from "react-icons/fi";
import { useAuth } from "@/context/AuthContext";
import { ProgressContext } from "./ProgressContext";
import { useProgress } from "./useProgress";
import Spinner from "../Spinner";

const NAV = [
  { href: "/dashboard", label: "Overview", icon: FiHome, match: (p) => p === "/dashboard" },
  { href: "/dashboard/learn", label: "Courses", icon: FiBook, match: (p) => p.startsWith("/dashboard/learn") },
];

// Guards every /dashboard route: redirects anonymous visitors to sign-in and
// provides the learner's progress to the pages below.
const DashboardShell = ({ children }) => {
  const { user, loading, signOut } = useAuth();
  const router = useRouter();
  const pathname = usePathname();
  const [signingOut, setSigningOut] = useState(false);
  const store = useProgress(user?.uid);

  useEffect(() => {
    if (!loading && !user) router.replace("/sign-in");
  }, [loading, user, router]);

  if (loading || !user) {
    return (
      <div className="flex items-center justify-center min-h-screen" role="status" aria-label="Loading">
        <div className="[&_.loader]:border-[#524fd5]/30 [&_.loader]:border-t-[#524fd5]"><Spinner /></div>
      </div>
    );
  }

  const handleSignOut = async () => {
    setSigningOut(true);
    await signOut();
    router.push("/sign-in");
  };

  return (
    <ProgressContext.Provider value={{ user, ...store }}>
      <div className="flex flex-col min-h-screen lg:flex-row">
        <aside className="lg:w-[220px] lg:min-h-screen bg-[#524fd5] text-white flex lg:flex-col justify-between items-center lg:items-stretch px-4 py-3 lg:py-6 lg:fixed lg:inset-y-0">
          <div className="flex items-center gap-6 lg:flex-col lg:items-stretch lg:gap-10">
            <Link href="/" aria-label="LinguaEd home" className="lg:px-2">
              <Image src="/footer-logo.png" alt="LinguaEd" width={110} height={35} className="brightness-0 invert" />
            </Link>
            <nav aria-label="Dashboard" className="flex gap-1 lg:flex-col">
              {NAV.map(({ href, label, icon: Icon, match }) => (
                <Link
                  key={href}
                  href={href}
                  aria-current={match(pathname) ? "page" : undefined}
                  className={`flex items-center gap-3 px-3 py-2 rounded-xl text-sm font-medium duration-200 ${
                    match(pathname) ? "bg-white/20" : "hover:bg-white/10"
                  }`}
                >
                  <Icon aria-hidden /> {label}
                </Link>
              ))}
            </nav>
          </div>
          <div className="flex items-center gap-3 lg:flex-col lg:items-stretch">
            <div className="hidden px-3 text-sm lg:block">
              <p className="font-semibold truncate">{user.displayName}</p>
              <p className="text-xs text-white/70">{user.isGuest ? "Demo session" : user.email}</p>
            </div>
            <button
              onClick={handleSignOut}
              disabled={signingOut}
              className="flex items-center justify-center gap-2 px-3 py-2 text-sm font-medium whitespace-nowrap text-[#524fd5] bg-white rounded-xl hover:scale-95 duration-200 disabled:opacity-70"
            >
              <FiLogOut aria-hidden /> <span>Sign out</span>
            </button>
          </div>
        </aside>
        <main className="flex-1 lg:ml-[220px] px-4 py-8 md:px-10 bg-white">{children}</main>
      </div>
    </ProgressContext.Provider>
  );
};

export default DashboardShell;
