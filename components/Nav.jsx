import Image from "next/image";
import Link from "next/link";
import MobileNav from "./MobileNav";
import { NAV_LINKS } from "@/lib/nav";

const Nav = () => (
  <nav aria-label="Main">
    {/* Desktop */}
    <div className="items-center justify-between hidden py-4 lg:flex">
      <Link href="/" aria-label="LinguaEd home">
        <Image src="/logo.png" width={110} height={35} alt="LinguaEd logo" priority />
      </Link>
      <ul className="text-[#666680] flex items-center gap-6 font-medium">
        {NAV_LINKS.map(({ href, label }) => (
          <li key={href} className="duration-300 hover:scale-95 text-[14px] xl:text-[18px]">
            <Link href={href}>{label}</Link>
          </li>
        ))}
      </ul>
      <div className="flex items-center gap-4">
        <Link href="/sign-in" className="font-medium text-[#524fd5] hover:underline">Sign in</Link>
        <Link
          href="/pricing"
          className="text-[#524fd5] w-[148px] h-[52px] bg-white flex items-center justify-center rounded-full font-medium hover:scale-95 duration-300 ease-in-out"
        >
          Get started
        </Link>
      </div>
    </div>

    {/* Mobile */}
    <div className="lg:hidden">
      <MobileNav />
    </div>
  </nav>
);

export default Nav;
