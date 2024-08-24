import React from "react";
import Nav from "./Nav";
import Hero from "./Hero";

const Header = () => {
  return (
    <div className='bg-[#fff5f1] rounded-3xl flex flex-col lg:px-14 md:gap-14 px-1 md:px-5 gap-16 lg:h-[600px] h-full '>
      <header className="">
        <Nav />
      </header>
      <div className="h-full lg:justify-center">
        <Hero />
      </div>
    </div>
  );
};

export default Header;
