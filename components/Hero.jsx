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
      <div className="container px-3 mx-auto">
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
              <a href='/pricing'>
              <button className="bg-[#524fd5] w-[171px] h-[64px] text-white flex items-center text-center justify-center rounded-full font-medium hover:scale-95 duration-300 ease-in-out hover:transition-colors py-6 px-6">
                Get started
              </button></a>
            </div>
          </div>

          <div className="flex items-center justify-center w-full lg:w-1/2">
            <div className="relative ">
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
                  className='w-[400px] md:w-[450px] md:h-[450px]'
                />
                <div className="absolute flex items-center md:gap-4 md:h-[70px] md:w-[200px] md:top-[55px] bg-white rounded-3xl px-2 md:py-5 md:left-[-45px] top-[30px] gap-1 left-[-19px] w-[150px] h-[55px] justify-center">
                  <Image
                    src={"/assets/Avatar.png"}
                    width={48}
                    height={48}
                    alt="Avatar"
                    className='md:w-[48px] md:h-[48px] w-[30px] h-[30px]'
                  />
                  <div className="flex flex-col gap-1">
                    <p className="text-[#222] md:text-[14px] text-[10px] font-semibold ">
                      Jane Cooper
                    </p>
                    <p className="md:text-[10px] text-[8px]">I loved the italian course!</p>
                  </div>
                </div>
                <div className="absolute md:right-[-80px] md:w-[150px] flex p-5 bg-white rounded-3xl flex-col text-center justify-center top-[100px] md:top-[180px] right-[-15px] w-[120px] h-[55px] md:h-auto">
                    <div className="text-[#524fd5] font-semibold md:text-[14px] text-[10px]">
                  <CountUp end={'10'} delay={0} duration={3} />+ Courses</div>
                  
                  <p className="md:text-[10px] text-[8px]">Multiple Categories</p>
                </div>
                <div className="absolute flex flex-col  justify-center bg-white rounded-3xl md:top-[85%] left-[25%] top-[85%] items-center ">
                  <div className="flex flex-col items-center w-full p-2">
                    <Image
                      src={"/assets/Images.png"}
                      width={180}
                      height={56}
                      alt="Image"
                      className='w-[100px] md:[180px]'
                    />
                    <p className="md:text-[10px] text-[8px]">Dedicated students per day</p>
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
