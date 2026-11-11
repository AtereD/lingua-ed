"use client"
import React, {useState} from 'react'
import Link from 'next/link'
import { quicksand } from "@/lib/fonts";



const TrialSubscription = () => {
    const [email, setEmail] = useState('')
    const [submitted, setSubmitted] = useState(false)

    const handleSubmit = (e) => {
      e.preventDefault()
      setSubmitted(true)
    }
  
  return (
    <section className={`px-1 py-24 md:px-5 lg:px-14 ${quicksand.className}`}>
      <div className='container px-3 mx-auto'>
        <div className='flex flex-col items-center justify-center text-center '>
            <h2
              className={`${quicksand.className} text-[#222] text-4xl font-medium md:text-5xl pb-5`}
            >
              Get a free trial lesson today
            </h2>
            <p className='text-[18px] font-medium pb-10'> Start fulfilling your language dreams with our school</p>
            {submitted ? (
              <p role='status' className='text-[18px] font-medium text-[#222]'>
                Thanks! <Link href='/sign-up' className='text-[#524fd5] underline'>Create your free account</Link> to book your trial lesson.
              </p>
            ) : (
              <form onSubmit={handleSubmit} className='flex items-center w-full max-w-[520px] gap-5'>
                <label htmlFor='trial-email' className='sr-only'>Email address</label>
                <input type='email' id='trial-email' value={email} required placeholder='Enter your email' className='bg-[#f8fafe] p-4 rounded-full w-full border-none' onChange={(e) => setEmail(e.target.value)}/>
                <button className='bg-[#524fd5] w-[140px] h-[52px] shrink-0 text-white flex items-center justify-center rounded-full font-medium hover:scale-95 duration-300 ease-in-out' type='submit'>Send</button>
              </form>
            )}
                </div>
      </div>
    </section>
  )
}

export default TrialSubscription