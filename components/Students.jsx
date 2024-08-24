"use client"
import React, {useState} from "react";
import { Quicksand } from "next/font/google";
import Image from "next/image";

const quicksand = Quicksand({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const testimonialsData = [
  {
    imageURL: "/assets/student.png",
    name: "Martin Watson",
    course: "B2 course student",
    logo: "/assets/spanish.png",
    review: "There is no way I could have made the same progress learning Spanish without using Lingua. The best part is now learning Spanish has become one of my biggest hobbies.",
  },
  {
    imageURL: "/assets/spanish-teacher.png",
    name: " Jane Doe",
    course: "B3 course student",
    logo: "/assets/english.png",
    review: "There is no way I could have made the same progress learning English without using Lingua. The best part is now learning English has become one of my biggest hobbies.",
  },
  {
    imageURL: "/assets/italian-teacher.png",
    name: "Dragos Gontralu",
    course: "A1 course student",
    logo: "/assets/italy.png",
    review: "There is no way I could have made the same progress learning the Italian language without using Lingua. The best part is now learning Italian language has become one of my biggest hobbies.",
  },
  // Add more testimonials here
]

const Students = () => {
  const [currentIndex, setCurrentIndex] = useState(0)

  const handlePaginationClick = (index) => {
    setCurrentIndex(index)
  }
  return (
    <section className="px-1 py-24 md:px-5 lg:px-14">
      <div className="container mx-auto">
        <div className="flex flex-col gap-10">
          <div className="flex flex-col gap-2">
            <h3 className="uppercase text-[16px] md:text-[18px] text-[#b0b0c0] font-medium">
              Top studying
            </h3>
            <h2
              className={`${quicksand.className} text-[#222] text-4xl font-medium md:text-5xl`}
            >
              Our students say..
            </h2>
          </div>
          <div className="flex flex-col items-center justify-center lg:flex-row gap-7 lg:justify-start ">
            <Image src= {testimonialsData[currentIndex].imageURL} width={450} height={400} alt="Student's Image" className={` w-[95px] h-[100px] md:w-[450px] flex item-center rounded-full md:h-[480px] md:flex-none md:rounded-[50px]`}/>
            <div className='flex flex-col items-center gap-2 md:items-start'>
              <h3 className={`${quicksand.className} font-semibold text-[24px] md:text-[28px] text-[#222]`}> {testimonialsData[currentIndex].name}</h3>
              <div className='flex items-center gap-1'>
                <Image src= {testimonialsData[currentIndex].logo} width={34} height={34} alt="course logo" className='rounded-3xl'/>
                <p> {testimonialsData[currentIndex].course}</p>
              </div>
              <p className='max-w-[500px] 2xl:max-w-[1000px] text-[18px] md:text-[20px] text-center md:text-left text-[#222] font-medium'> {testimonialsData[currentIndex].review}</p>
              <div className='flex gap-1 pt-3'>
                {testimonialsData.map((_, index) => (
                  <div
                    key={index}
                    className={`w-[10px] h-[10px] rounded-full cursor-pointer ${currentIndex === index ? 'bg-[#524fd5]' : 'bg-[#f2edff]'}`}
                    onClick={() => handlePaginationClick(index)}
                  ></div>
                ))}
              </div>
            </div>
            
          </div>
        </div>
      </div>
    </section>
  );
};

export default Students;
