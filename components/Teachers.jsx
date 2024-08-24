"use client"

import React, { useState, useEffect } from 'react';
import { Quicksand } from 'next/font/google';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import Image from 'next/image';

const quicksand = Quicksand({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const teachersData = [
  { name: 'Christian Howard', imgUrl: '/assets/italian-teacher.png', flag: '/assets/Italy.png', subject: 'Italian teacher' },
  { name: 'Sandra Wilson', imgUrl: '/assets/spanish-teacher.png', flag: '/assets/spanish.png', subject: 'Spanish teacher' },
  { name: 'Jimmy Cooper', imgUrl: '/assets/english-teacher.png', flag: '/assets/English.png', subject: 'English teacher' },
  { name: 'Eun-Ji', imgUrl: '/assets/korea-teacher.jpg', flag: '/assets/south-Korea.png', subject: 'Korean teacher' },
  { name: 'Benedict Eitel', imgUrl: '/assets/english-teacher.png', flag: '/assets/germany.png', subject: 'German teacher' }
];

const Teachers = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const [itemsPerPage, setItemsPerPage] = useState(3); // Default for large screens

  useEffect(() => {
    // Adjust items per page based on screen size
    const handleResize = () => {
      setItemsPerPage(window.innerWidth < 1024 ? 1 : 3); // 1 for mobile, 3 for larger screens
    };

    // Set initial items per page
    handleResize();

    // Add resize event listener
    window.addEventListener('resize', handleResize);

    // Clean up on component unmount
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handlePrevClick = () => {
    setCurrentPage(prev => (prev > 0 ? prev - 1 : Math.ceil(teachersData.length / itemsPerPage) - 1));
  };

  const handleNextClick = () => {
    setCurrentPage(prev => (prev < Math.ceil(teachersData.length / itemsPerPage) - 1 ? prev + 1 : 0));
  };

  const startIndex = currentPage * itemsPerPage;
  const currentTeachers = teachersData.slice(startIndex, startIndex + itemsPerPage);

  return (
    <section className="px-1 py-24 md:px-5 lg:px-14" id='teachers'>
      <div className="container px-3 mx-auto">
        <div className="flex flex-col gap-10">
          <div className="flex flex-col gap-1">
            <h3 className="uppercase text-[16px] md:text-[18px] text-[#b0b0c0] font-medium">Why choose us</h3>
            <div className="flex flex-col justify-between gap-3 md:items-center md:flex-row md:gap-0">
              <h2 className={`${quicksand.className} text-[#222] text-4xl font-medium md:text-5xl`}>Meet our teachers</h2>
              <div className="flex justify-center gap-1">
                <button 
                  onClick={handlePrevClick}
                  className="w-[56px] h-[56px] border flex items-center rounded-full justify-center text-[#e8e8f6] border-[#e8e8f6]"
                >
                  <FaChevronLeft className="w-4 h-4" />
                </button>
                <button 
                  onClick={handleNextClick}
                  className="w-[56px] h-[56px] border flex items-center rounded-full justify-center bg-[#524fd5] text-white"
                >
                  <FaChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
          <div className={`grid ${itemsPerPage === 1 ? 'grid-cols-1' : 'grid-cols-1 lg:grid-cols-3'} gap-5 justify-items-center`}>
            {currentTeachers.map((teacher, index) => (
              <div key={index} className="flex flex-col gap-3 p-2">
                <Image src={teacher.imgUrl} width={606} height={457} alt={`${teacher.name}'s image`} className={` lg:h-[350px] md:w-[350px] h-[320px] rounded-3xl md:h-[380px] w-[300px] 2xl:w-[380px] 2xl:h-[400px]`} />
                <div className="flex flex-col gap-3">
                  <h3 className="text-[20px] text-[#222] font-medium">{teacher.name}</h3>
                  <div className="flex items-center gap-1">
                    <Image src={teacher.flag} width={34} height={34} alt={`Flag of ${teacher.subject.split(' ')[0]}`} />
                    <p className={`text-[18px]`}>{teacher.subject}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Teachers;
