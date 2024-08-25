import React from 'react'
import { Quicksand } from "next/font/google";
import Image from 'next/image';

const quicksand = Quicksand({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const data =[
  {
    img:'/assets/play.png',
    title: 'Speaking clubs',
    text:'In our school you will practice your speaking skills and just get a lot of positive emotions!'
  },
  {
    img:'/assets/send.png',
    title: 'Quality control',
    text:'A huge work has been done with the teachers and their work has been monitored thoroughly.'
  },
  {
    img:'/assets/document.png',
    title: 'Progress analysis',
    text:'The CEF of Reference has been used at our school. It allows to control our students success in studying.'
  },
]

const WhyChooseUs = () => {
  return (
    <section className={`px-1 md:px-5 lg:px-14 py-24`}>
      <div className='container px-3 mx-auto'>
        <div className='flex flex-col gap-24'>
          <div className='flex flex-col gap-3 text-center'>
            <h3 className='uppercase text-[16px] md:text-[18px] text-[#b0b0c0] font-medium'>why choose us</h3>
            <h2 className={`${quicksand.className} text-[#222] text-4xl font-medium md:text-5xl`}>Our values</h2>
          </div>
          <div className='grid items-center justify-center w-full grid-cols-1 gap-5 lg:grid-cols-3'>
            {data.map((item, index) => (
              <div key={index}>
              <div className='flex flex-col items-center w-full gap-6 p-4 text-center'>
                <Image src={item.img} width={70} height={70} alt="icon"/>
                <div className='flex flex-col gap-1'>
                  <h3 className={`${quicksand.className} text-[#222] text-[20px] font-semibold`}>{item.title}</h3>
                  <p className='text-[18px] md:max-w-[400px]'>{item.text}</p>
                </div>
              </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default WhyChooseUs