import React from "react";
import Nav from "./Nav";
import Image from "next/image";

const AboutUs = () => {
  return (
    <div>
      <div className="px-3 bg-[#fff5f1] rounded-3xl">
        <Nav />
        <div className='items-center justify-center hidden gap-1 lg:flex-col lg:flex'>
            <h3 className="text-[#222] text-4xl md:text-5xl pt-10 font-medium ">
                About Us
             </h3>
            <p className=' text-[#222] pb-5'>Welcome to Lingua &#45; your gateway to mastering new languages and exploring diverse cultures!</p>
        </div>
        
      </div>
      <div className="container px-3 mx-auto py-14">
        <div className="flex flex-col gap-10">
            <div className='flex flex-col items-center gap-1 lg:hidden'>
                <h3 className="text-[#222] text-4xl font-medium md:text-5xl ">
                    About Us
                </h3>
                <p className='text-[#222]'>Welcome to Lingua &#45; your gateway to mastering new languages and exploring diverse cultures!</p>
            </div>
            <div className='flex flex-col items-center w-full gap-5 mb-5 lg:flex-row'>
                <div className='lg:w-1/2'>
                    <div className='flex items-center justify-center bg-[#fff5f1] rounded-3xl  '>
                    <Image src={"/assets/about1.jpg"} width={550} height={550} alt='About-image' className='rounded-3xl w-[350px] md:w-[450px] lg:w-[550px] '/></div>
                </div>
                <p className='font-medium text-center text-[18px]  lg:w-1/2 lg:text-left'>At Lingua, we believe that language learning is more than just acquiring a new skill; it&#39;s about opening doors to new experiences, fostering cross-cultural connections, and broadening horizons. Our mission is to make language education accessible, engaging, and effective for learners of all ages and backgrounds.</p>
            </div>
            <div className='flex flex-col items-center w-full gap-5 lg:flex-row '>
                <div className='flex flex-col w-full gap-3 lg:w-1/2'>
                <h3 className='text-[#222] text-4xl font-medium text-center lg:text-left'>Our Story</h3>
                <p className='font-medium text-center text-[18px]  lg:text-left'>Founded by a team of passionate linguists and educators, Lingua was created with the vision of breaking down language barriers and making the world a smaller, more connected place. Our journey began with a simple idea: to provide high-quality language education that is both enjoyable and flexible. Today, Lingua has grown into a global platform that serves thousands of learners worldwide.</p>
                </div>
               
                <div className=' lg:w-1/2'>
                    <div className='flex items-center justify-center bg-[#fff5f1] rounded-3xl '>
                    <Image src={"/assets/about3.jpg"} width={550} height={550} alt='About-image' className='rounded-3xl w-[350px] md:w-[450px] lg:w-[550px] '/></div>
                </div>
            </div>
            <div>
            <h3 className="text-[#222] text-4xl md:text-5xl font-medium pb-3">What we offer</h3>
            <div className='pl-5 md:pl-10'>
                <ul className='flex flex-col gap-2 px-4 list-disc '>
                <li className='text-[#222] font-medium disc'>Diverse Language Courses &#58; From popular languages like Spanish, French, and German to less commonly taught languages such as Korean and Portuguese, we offer a wide range of courses tailored to different skill levels and learning goals.</li>
                <li className='text-[#222] font-medium'>Interactive Learning Experience &#58; Our innovative approach combines interactive lessons, multimedia resources, and real-life practice opportunities to make learning engaging and effective. Our courses are designed to cater to various learning styles and preferences.</li>
                <li className='text-[#222] font-medium'>Expert Instructors &#58; Learn from experienced teachers and native speakers who bring their expertise and enthusiasm to every lesson. Our instructors are dedicated to helping you achieve fluency and confidence in your chosen language.</li>
                <li className='text-[#222] font-medium'>Flexible Learning Options &#58; Whether you prefer self-paced online courses or live classes with a tutor, Lingua provides flexible learning options to fit your schedule and learning style. Access lessons anytime, anywhere, and learn at your own pace.
                </li>
                <li className='text-[#222] font-medium'>Community and Support &#58; Join a vibrant community of language learners from around the world. Participate in forums, group activities, and cultural exchanges to enhance your learning experience and connect with fellow learners.
                </li>
                </ul>
            </div>   
        </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
