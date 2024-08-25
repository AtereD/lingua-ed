import React from 'react'
import { Quicksand } from "next/font/google";
import Image from 'next/image';
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa6';

const quicksand = Quicksand({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const Footer = () => {
  return (
    <footer className={`px-1 py-24 md:px-5 lg:px-14 bg-[#f8fafe] rounded-3xl`}>
      <div className='container px-3 mx-auto'>
        <div className='flex flex-col items-center justify-center gap-10 lg:flex-row lg:gap-28'>
          <div className='flex flex-col items-center gap-5 text-center lg:text-left lg:items-start'>
            <Image src={"/footer-logo.png"} width={110} height={35} alt="Lingua Logo"/>
            <div>
              <p className='font-medium'>20 Osgood Rd, Milford, NH 03055, USA</p>
              <p className='font-medium'>+123456789</p>
            </div>
          </div>
          <div className='flex flex-col gap-10 lg:flex-row lg:gap-14'>
            <div className='flex flex-col gap-5 text-center lg:text-left'>
              <h3 className='text-[#222] font-semibold'>Company</h3>
              <div className='flex flex-col gap-2 font-medium'>
                <a href='/careers' className='hover:text-[#424250]'>Careers</a>
                <a href='/#teachers' className='hover:text-[#424250]'>Teachers</a>
                <a href='/' className='hover:text-[#424250]'>Support</a>
                <a href='/' className='hover:text-[#424250]'>Contact</a>
              </div>
            </div>
            <div className='flex flex-col gap-5 text-center lg:text-left'>
              <h3 className='text-[#222] font-semibold'>Product</h3>
              <div className='flex flex-col gap-2 font-medium'>
                <a href='/courses' className='hover:text-[#424250]'>Courses</a>
                <a href='/pricing' className='hover:text-[#424250]'>Pricing</a>
                <a href='/blogs' className='hover:text-[#424250]'>Blog</a>
              </div>
            </div>
            <div className='flex flex-col gap-5 text-center lg:text-left'>
              <h3 className='text-[#222] font-semibold'>Legal</h3>
              <div className='flex flex-col gap-2 font-medium'>
                <a href='/' className='hover:text-[#424250]'>Terms & Conditions</a>
                <a href='/' className='hover:text-[#424250]'>Privacy policy</a>
              </div>
            </div>
            <div className='flex items-center justify-center gap-2 lg:items-start'>
                <a href='https://www.facebook.com' className='flex items-center justify-center w-8 h-8 duration-300 ease-out border rounded-full hover:scale-95'><FaFacebook className='w-3 h-3'/></a>
                <a href='https://www.twitter.com' className='flex items-center justify-center w-8 h-8 duration-300 ease-out border rounded-full hover:scale-95'><FaTwitter className='w-3 h-3'/></a>
                <a href='https://www.instagram.com' className='flex items-center justify-center w-8 h-8 duration-300 ease-out border rounded-full hover:scale-95'><FaInstagram className='w-3 h-3'/></a>
            </div>
          </div>
        </div>

      </div>
    </footer>
  )
}

export default Footer