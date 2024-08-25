"use client";

import React, { useState } from "react";
import Image from "next/image";
import { FaBars, FaFacebook, FaInstagram, FaTwitter, FaX } from "react-icons/fa6";

const MobileNav = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <nav>
      <div className="flex items-center justify-between p-4">
        <div>
          <Image src={"/logo.png"} width={90} height={35} alt="Logo" />
        </div>
        <div className="text-[#666680] flex items-center gap-4">
          <a href='/pricing'>
          <button className="text-[#524fd5] w-[128px] h-[40px] bg-white flex items-center text-center justify-center rounded-full font-medium hover:scale-95 duration-300 ease-in-out hover:transition-colors">
            Get started
          </button></a>
          <FaBars className="w-5 h-5" onClick={handleNav} />
        </div>
      </div>

      <div
        className={
          nav ? "lg:hidden fixed top-0 left-0 w-full h-screen bg-black/60" : ""
        }
      >
        <div
          className={
            nav
              ? "lg:hidden fixed top-0 w-[100%] md:h-[50%] p-10 ease-in duration-500 overflow-y-auto bg-[#fff] "
              : "fixed top-[-500%] left-0 right-0 p-10 ease-in duration-500 "
          }
        >
          <div className="flex flex-col gap-5 md:space-y-10">
            <div className="flex items-center justify-between w-full">
              <div>
                <Image src={"/logo.png"} width={90} height={35} alt="Logo" />
              </div>
              <FaX className="w-4 h-4 text-[#666680]" onClick={handleNav} />
            </div>
            <div className='flex flex-col items-center gap-6'>
              <div>
                <ul className="text-[#666680] flex items-center gap-3 transition-colors flex-col md:gap-5">
                <li className="text-[14px] hover:scale-95 duration-300 ">
                    <a href="/">Home</a>
                  </li>
                  <li className="text-[14px] hover:scale-95 duration-300 ">
                    <a href="/courses">Courses</a>
                  </li>
                  <li className="text-[14px] hover:scale-95 duration-300 ">
                    <a href="/about-us">About us</a>
                  </li>
                  <li className="text-[14px] hover:scale-95 duration-300 ">
                    <a href="/pricing">Pricing</a>
                  </li>
                  <li className="text-[14px] hover:scale-95 duration-300 ">
                    <a href="/careers">Careers</a>
                  </li>
                  <li className="text-[14px] hover:scale-95 duration-300 ">
                    <a href="/blogs">Blog</a>
                  </li>
                  <li className="text-[14px] hover:scale-95 duration-300 ">
                    <a href="/contact">Contact</a>
                  </li>
                </ul>
              </div>
              <div className='text-[#666680] flex gap-5'>
                <a href='https://instagram.com'>
                  <FaInstagram/>
                </a>
                <a href='https://facebook.com'>
                  <FaFacebook/>
                </a>
                <a href='https://twitter.com'>
                  <FaTwitter/>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default MobileNav;
