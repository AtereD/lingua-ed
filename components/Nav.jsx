import Image from 'next/image'
import React from 'react'
import MobileNav from './MobileNav'

const Nav = () => {
  return (
    <nav>

      {/* Desktop */}
      
      <div className='items-center justify-between hidden py-4 lg:flex'>
        <div>
          <Image src={"/logo.png"} width={110} height={35} alt="Logo"/>
        </div>
        <div>
          <ul className="text-[#666680] flex items-center gap-6 transition-colors font-medium">
          <li className='duration-300 hover:scale-95 text-[14px] xl:text-[18px] '><a href="/">
              Home</a></li>
            <li className='duration-300 hover:scale-95 text-[14px] xl:text-[18px] '><a href="/courses">
              Courses</a></li>
              <li className='duration-300 hover:scale-95 text-[14px] xl:text-[18px] '><a href="/about-us">
              About us</a></li>
              <li className='duration-300 hover:scale-95 text-[14px] xl:text-[18px] '><a href="/pricing">
              Pricing</a></li>
              <li className='duration-300 hover:scale-95 text-[14px] xl:text-[18px] '><a href="/careers">
              Careers</a></li>
              <li className='duration-300 hover:scale-95 text-[14px] xl:text-[18px] '><a href="/blogs">
              Blog</a></li>
          </ul>
        </div>
          <a href='/pricing'>
          <button className='text-[#524fd5] w-[148px] h-[52px] bg-white flex items-center text-center justify-center rounded-full font-medium hover:scale-95 duration-300 ease-in-out hover:transition-colors'>Get started</button>
          </a>
      </div>
      
      {/* Mobile */}
      
      <div className='lg:hidden'>
        <MobileNav />
      </div>
    </nav>
  )
}

export default Nav