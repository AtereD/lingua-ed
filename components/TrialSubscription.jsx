"use client"
import React, {useState} from 'react'
import { Quicksand } from "next/font/google";

const quicksand = Quicksand({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});


const TrialSubscription = () => {
    const [email, setEmail] = useState('')
    
    const handleEmailChange = (e) => {
      setEmail(e.target.value)
    }
  
  return (
    <section className={`px-1z py-24 md:px-5 lg:px-14 ${quicksand.className}`}>
      <div className='container px-3 mx-auto'>
        <div className='flex flex-col items-center justify-center text-center '>
            <h2
              className={`${quicksand.className} text-[#222] text-4xl font-medium md:text-5xl pb-5`}
            >
              Get a free trial lesson today
            </h2>
            <p className='text-[18px] font-medium pb-10'> Start fulfilling your language dreams with our school</p>
            <div className='flex items-center gap-5'>
              <input type='email' id='email' value={email} placeholder='Enter your email' className=' bg-[#f8fafe] p-4 rounded-full w-full border-none' onChange={handleEmailChange}/>
              <button className='bg-[#524fd5] w-[140px] h-[52px] text-white flex items-center text-center justify-center rounded-full font-medium hover:scale-95 duration-300 ease-in-out hover:transition-colors' type='submit' onClick={handleEmailChange}>Send</button>
            </div>
        </div>
      </div>
    </section>
  )
}

export default TrialSubscription