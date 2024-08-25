import React from "react";
import Nav from "./Nav";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa6";

const blogsData = [
  {
    title: "5 Proven Strategies to Boost Your Language Learning Efficiency",
    date: "Published on August 20, 2024 by Anna Smith",
    text: "Learning a new language can be challenging, but with the right strategies, you can maximize your progress. Discover five effective methods to enhance your language learning experience and achieve fluency faster.",
    linkText: "Read More",
    linkUrl: "/",
  },
  {
    title: "How Technology is Transforming Language Education in 2024",
    date: "Published on August 10, 2024 David Lee",
    text: "From AI-driven language apps to immersive virtual reality experiences, technology is revolutionizing the way we learn languages. Explore the latest innovations and how they are shaping the future of education.",
    linkText: "Read More",
    linkUrl: "/",
  },
  {
    title: "Success Stories: How Our Users Achieved Fluency and Beyond",
    date: "Published on July 15, 2024 by LinguaEd Team",
    text: "Be inspired by real-life success stories from LinguaEd users who have achieved remarkable fluency and personal growth through our platform. Learn about their journeys and the strategies that helped them succeed.",
    linkText: "Read More",
    linkUrl: "/",
  },
];

const Blogs = () => {
  return (
    <div>
      <div className="px-1 bg-[#fff5f1] rounded-3xl">
        <Nav />
        <header className="items-center justify-center hidden gap-1 pb-5 lg:flex lg:flex-col">
          <h3 className="text-[#222] text-4xl md:text-5xl pt-10 font-medium">
            Blogs
          </h3>
        </header>
      </div>

      <div className="container px-3 mx-auto py-14">
        <div className="flex flex-col gap-10">
          <section>
            <h3 className="text-[#222] text-4xl font-medium md:text-5xl lg:hidden">
              Blogs
            </h3>
            <p className="text-[#222] pb-5 font-medium pt-3">
              Welcome to the LinguaEd Blog! Here, we share insights, tips, and
              updates on language learning and education technology. Our goal is
              to inspire and inform you with the latest trends, resources, and
              success stories in the world of language education. Dive in and
              explore our latest posts!
            </p>
          </section>

          <div className="flex flex-col gap-5">
            <h4 className="text-[#222] font-medium text-2xl">Latest Posts</h4>

            <div>
              <ul className=" text-[#222] flex flex-col gap-10 px-5">
                {blogsData.map((blog, index) => (
                  <li className="flex flex-col gap-5 text-lg" key={index}>
                    <p className="font-semibold">{blog.title}</p>
                    <p className="italic">{blog.date}</p>

                    <p>{blog.text}</p>

                    <a
                      href={blog.linkUrl}
                      className="pb-5 font-medium text-blue-500 cursor-pointer hover:underline"
                    >
                      {blog.linkText}
                    </a>

                    <hr className='border-gray-300 '/>
                  </li>

                ))}
              </ul>
            </div>
          </div>

          <div className='flex flex-col gap-4'>
            <div>
                <h4 className="text-[#222] font-medium text-2xl">Join the Conversation</h4>
                <p>We&#39;d love to hear from you! Share your thoughts, questions, or suggestions in the comments section below each post, or connect with us on social media.</p>
            </div>

            <div className='text-[#222] flex flex-col gap-4'>
                <p className='text-[18px] font-medium'>Follow us on&#58;</p>
                <div className='flex gap-2 mb-5'>
                <a href='https://www.facebook.com' className='flex items-center justify-center w-8 h-8 duration-300 ease-out border rounded-full hover:scale-95'><FaFacebook className='w-3 h-3'/></a>
                <a href='https://www.twitter.com' className='flex items-center justify-center w-8 h-8 duration-300 ease-out border rounded-full hover:scale-95'><FaTwitter className='w-3 h-3'/></a>
                <a href='https://www.instagram.com' className='flex items-center justify-center w-8 h-8 duration-300 ease-out border rounded-full hover:scale-95'><FaInstagram className='w-3 h-3'/></a>
            </div>
            </div>
            
            <hr className='border-gray-300 '/>

            <div className='font-medium text-[#222] my-10 '>
            Have a topic you&#39;d like us to cover? <span className='font-[#] text-blue-600'>Contact us</span> with your ideas or suggestions!
            </div>
            
            <hr className='border-gray-300 '/>

            <div className='font-medium text-[#222] my-10 '>
            Lingua Blog - Your go-to source for the latest in language learning and educational technology. Happy reading!
            </div>
            
            <hr className='border-gray-300 '/>
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blogs;
