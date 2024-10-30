import React from 'react'
import Nav from './Nav'
import Footer from './Footer'

const Pricing = () => {
  return (
    <div className='w-full h-full'>
        <div className="px-3 bg-[#fff5f1] rounded-3xl">
        <Nav />
        <div className='items-center justify-center hidden gap-1 pb-5 lg:flex-col lg:flex'>
            <h3 className="text-[#222] text-4xl md:text-5xl pt-10 font-medium ">
                Pricing
             </h3>
        </div>
      </div>
      <div className="container flex flex-col items-center justify-center w-full gap-10 px-3 mx-auto ">
        <p className='text-[#222] text-center text-2xl md:text-3xl lg:text-[4xl] py-5 lg:max-w-[500px] leading-[25px] tracking-normal'>Choose the plan that best fits your needs and start your learning journey today!</p>
        <div className="grid w-full grid-cols-1 gap-10 px-4 pb-5 lg:pt-[100px]  lg:grid-cols-3 justify-items-center lg:gap-20">
            <div className='p-4  flex flex-col items-center justify-center border border-[#524fd5]  rounded-[50px] gap-10 md:w-[400px] w-[300px] lg:w-[350px] mt-[50px]'>
                <div className='text-center text-[#222] flex flex-col gap-4 w-full'>
                    <h4 className='text-2xl font-medium'>Basic Plan</h4>
                    <p className='text-xl'>$19/month</p>
                    <p className='text-sm'>Perfect for individuals just getting started or those who want access to essential learning resources.</p>
                    <hr className='mx-10'/>
                </div>
                <ul className='flex flex-col gap-1 pl-3 list-disc' >
                    <li className=''>Access to basic courses and materials</li>
                    <li className=''>Limited one-on-one tutoring sessions</li>
                    <li className=''>Community forum participation</li>
                    <li className=''>Monthly progress reports</li>
                </ul>
                <div>
                    <a href="/sign-up">
                    <button className='bg-[#524fd5] w-[148px] h-[52px] text-white flex items-center text-center justify-center rounded-full font-medium hover:scale-95 duration-300 ease-in-out hover:transition-colors'>Sign Up Now</button> 
                    </a>
                </div>
            </div>
            
            <div className='p-5 flex flex-col items-center justify-center border border-[#524fd5]  rounded-[50px] gap-10 md:w-[400px] w-[300px] lg:w-[350px]lg:mt-[-100px] lg:w-[350px]'>
                <div className='text-center text-[#222] flex flex-col gap-4 w-full'>
                    <h4 className='text-2xl font-medium'>Premium Plan</h4>
                    <p className='text-xl'>$99/month</p>
                    <p className='text-sm'>for those who want the full experience with premium features and personalized support.</p>
                    <hr className='mx-10'/>
                </div>
                <ul className='flex flex-col gap-1 pl-4 list-disc'>
                    <li className=''>Access to all courses and materials</li>
                    <li className=''>Limited one-on-one tutoring sessions with senior tutors</li>
                    <li className=''>24/7 priority support</li>
                    <li className=''>Daily progress reports</li>
                    <li className=''>Access to exclusive premium content and advanced workshops</li>
                    <li className=''>Personalized learning plan and career counseling</li>
                </ul>
                <div>
                    <a href='/sign-up'>
                    <button className='bg-[#524fd5] w-[148px] h-[52px] text-white flex items-center text-center justify-center rounded-full font-medium hover:scale-95 duration-300 ease-in-out hover:transition-colors'>Sign Up Now</button> 
                    </a>
                </div>
            </div>
            <div className='p-4  flex flex-col items-center justify-center border border-[#524fd5]  rounded-[50px] gap-10 md:w-[400px] w-[300px] lg:w-[350px] mt-[50px]'>
                <div className='text-center text-[#222] flex flex-col gap-4 w-full'>
                    <h4 className='text-2xl font-medium'>Standard Plan</h4>
                    <p className='text-xl'>$49/month</p>
                    <p className='text-sm'>Ideal for learners who want more in-depth knowledge and additional support.</p>
                    <hr className='mx-10'/>
                </div>
                <ul className='flex flex-col gap-1 pl-3 list-disc' >
                    <li className=''>Access to all courses and materials</li>
                    <li className=''>Unlimited one-on-one tutoring sessions</li>
                    <li className=''>Priority support</li>
                    <li className=''>Weekly progress reports</li>
                    <li className=''>Exclusive webinars and workshops</li>
                </ul>
                <div>
                    <a href='/sign-up'>
                    <button className='bg-[#524fd5] w-[148px] h-[52px] text-white flex items-center text-center justify-center rounded-full font-medium hover:scale-95 duration-300 ease-in-out hover:transition-colors'>Sign Up Now</button>  
                    </a>
                </div>
            </div>
        </div>
      </div>

      <Footer/>
    </div>
  )
}

export default Pricing