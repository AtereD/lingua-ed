"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { FaBars, FaFacebook, FaInstagram, FaTwitter, FaXmark } from "react-icons/fa6";
import { NAV_LINKS } from "@/lib/nav";

const MobileNav = () => {
  const [open, setOpen] = useState(false);

  // Close on Escape and lock page scroll while the menu is open.
  useEffect(() => {
    if (!open) return undefined;
    const onKey = (e) => e.key === "Escape" && setOpen(false);
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <div>
      <div className="flex items-center justify-between p-4">
        <Link href="/" aria-label="LinguaEd home">
          <Image src="/logo.png" width={90} height={35} alt="LinguaEd logo" priority />
        </Link>
        <div className="text-[#666680] flex items-center gap-4">
          <Link
            href="/pricing"
            className="text-[#524fd5] w-[128px] h-[40px] bg-white flex items-center justify-center rounded-full font-medium hover:scale-95 duration-300 ease-in-out"
          >
            Get started
          </Link>
          <button type="button" aria-label="Open menu" aria-expanded={open} aria-controls="mobile-menu" onClick={() => setOpen(true)} className="p-2">
            <FaBars className="w-5 h-5" aria-hidden />
          </button>
        </div>
      </div>

      {open && (
        <div className="fixed inset-0 z-50 bg-black/60" onClick={() => setOpen(false)}>
          <div
            id="mobile-menu"
            role="dialog"
            aria-modal="true"
            aria-label="Menu"
            className="w-full max-h-screen p-8 overflow-y-auto bg-white"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between">
              <Image src="/logo.png" width={90} height={35} alt="LinguaEd logo" />
              <button type="button" aria-label="Close menu" onClick={() => setOpen(false)} className="p-2">
                <FaXmark className="w-5 h-5 text-[#666680]" aria-hidden />
              </button>
            </div>
            <ul className="text-[#666680] flex flex-col items-center gap-5 mt-8 text-lg">
              {[...NAV_LINKS, { href: "/sign-in", label: "Sign in" }].map(({ href, label }) => (
                <li key={href}>
                  <Link href={href} onClick={() => setOpen(false)}>{label}</Link>
                </li>
              ))}
            </ul>
            <div className="text-[#666680] flex justify-center gap-5 mt-8">
              <a href="https://instagram.com" aria-label="Instagram"><FaInstagram /></a>
              <a href="https://facebook.com" aria-label="Facebook"><FaFacebook /></a>
              <a href="https://twitter.com" aria-label="Twitter"><FaTwitter /></a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default MobileNav;
