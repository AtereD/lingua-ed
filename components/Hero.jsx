'use client'
import React from "react";
import { Quicksand } from "next/font/google";
import Image from "next/image";
import CountUp from "react-countup";

const quicksand = Quicksand({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const Hero = ({ }) => {
  return (
    <section className={`${quicksand.className} lg:pb-4`}>
      <div className="container mx-auto ">
        <div className="flex flex-col items-center justify-center w-full gap-24 md:gap-7 lg:flex-row">
          <div className="flex flex-col w-full text-left lg:w-1/2">
            <h1
              className={`md:text-5xl ${quicksand.className} font-normal text-[#111] text-4xl 2xl:text-6xl`}
            >
              A <span className="text-[#524fd5] font-semibold">unique</span>{" "}
              approach to learning foreign languages online
            </h1>
            <p className="pb-7 pt-7 text-[18px]">
              Learn at your own pace, with lifetime{" "}
              <br className="hidden lg:block" /> access on mobile and desktop
            </p>
            <div>
              <button className="bg-[#524fd5] w-[171px] h-[64px] text-white flex items-center text-center justify-center rounded-full font-medium hover:scale-95 duration-300 ease-in-out hover:transition-colors py-6 px-6">
                Get started
              </button>
            </div>
          </div>

          <div className="flex items-center justify-center w-full lg:w-1/2">
            <div className="relative">
              <Image
                src={"/assets/Base.png"}
                width={450}
                height={450}
                alt="Base image"
                className='w-[400px] md:w-[450px] md:h-[450px]'
              />
              <div className="absolute top-0 left-0">
                <Image
                  src={"/assets/Image container.png"}
                  width={450}
                  height={450}
                  alt="Image-container"
                  className='w-[350px] md:w-[450px] md:h-[450px]'
                />
                <div className="absolute flex items-center md:gap-4 md:h-[70px] md:w-[220px] md:top-[55px] bg-white rounded-3xl px-3 py-3 md:py-5 md:left-[-55px] top-[30px] gap-2 left-[-9px] w-[180px] h-[60px]">
                  <Image
                    src={"/assets/Avatar.png"}
                    width={48}
                    height={48}
                    alt="Avatar"
                  />
                  <div className="flex flex-col gap-1">
                    <p className="text-[#222] md:text-[14px] text-[12px]">
                      Jane Cooper
                    </p>
                    <p className="text-[10px]">I loved the italian course!</p>
                  </div>
                </div>
                <div className="absolute md:right-[-100px] md:w-[180px] flex p-5 bg-white rounded-3xl flex-col text-center justify-center top-[140px] right-[-10px]">
                    <div className="text-[#524fd5] font-semibold text-[14px]">
                  <CountUp end={'10'} delay={0} duration={3} />+ Courses</div>
                  
                  <p className="text-[10px]">Multiple Categories</p>
                </div>
                <div className="absolute flex flex-col  justify-center bg-white rounded-3xl md:top-[80%] left-[25%] top-[80%] items-center ">
                  <div className="flex flex-col items-center w-full p-2">
                    <Image
                      src={"/assets/Images.png"}
                      width={180}
                      height={56}
                      alt="Image"
                      className='w-[150px] md:[180px]'
                    />
                    <p className="text-[10px]">Dedicated students per day</p>
                  </div>
                  
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
