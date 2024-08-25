"use client"
import React, {useState} from "react";
import Nav from "./Nav";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa6";

const Contact = () => {
    const [fullName, setFullName] = useState('')
    const [email, setEmail] = useState('')
    const [subject, setSubject] = useState('')
    const [message, setMessage] = useState('')

    // Handle form submission
  const handleSubmit = (event) => {
    event.preventDefault();
    
    console.log('Form submitted', { fullName, email, subject, message });
  };
    
  return (
    <div className=''>
      <div className="px-1 bg-[#fff5f1] rounded-3xl">
        <Nav />
        <header className="items-center justify-center hidden gap-1 pb-5 lg:flex lg:flex-col">
          <h3 className="text-[#222] text-4xl md:text-5xl pt-10 font-medium">
            Contact Us
          </h3>
        </header>
      </div>
      <div className="container px-3 mx-auto py-14">
        <div className="flex flex-col gap-10">
          <h3 className="text-[#222] text-4xl font-medium md:text-5xl lg:hidden">
            Contact Us
          </h3>
          <p className="text-[#222] pb-5 font-medium pt-3">
            We&#39;re here to help! Whether you have questions, feedback, or need support, don&#39;t hesitate to reach out. At LinguaEd, we value your input and are committed to providing the best experience possible.
            </p>
          <div className="flex flex-col gap-5 text-[#222]">
            <h4 className='text-2xl font-medium '>Get in Touch</h4>
            <ul className='flex flex-col gap-10 text-[18px]'>
                <li>
                    <p className='text-[20px] font-medium'>Customer Support</p>
                    <p>For assistance with your account, technical issues, or general inquiries, please contact our customer support team&#58;</p>
                    <ul className='px-5 list-disc'>
                        <li>Email&#58; <span className='font-medium text-blue-600'>support@linguaed.com</span></li>
                        <li>Phone&#58; +1 &#40;123&#41; 456-7890</li>
                    </ul>
                </li>
                <li>
                    <p className='text-[20px] font-medium'>Business Inquiries</p>
                    <p>For partnership opportunities, business development, or media inquiries&#58;</p>
                    <ul className='px-5 list-disc'>
                        <li>Email&#58; <span className='font-medium text-blue-600'>business@linguaed.com</span></li>
                        <li>Phone&#58; +1 &#40;123&#41; 456-7891</li>
                    </ul>
                </li>
                <li>
                    <p className='text-[20px] font-medium'>Feedback & Suggestions</p>
                    <p>We&#39;d love to hear your thoughts on how we can improve. Share your feedback with us&#58;</p>
                    <ul className='px-5 list-disc'>
                        <li>Email&#58; <span className='font-medium text-blue-600'>business@linguaed.com</span></li>
                        <li>Phone&#58; +1 &#40;123&#41; 456-7892</li>
                    </ul>
                </li>
                <li>
                    <p className='text-[20px] font-medium'>Visit Us</p>
                    <p>If you prefer to meet us in person or send us mail, our office is located at&#58;</p>
                    <ul className='px-5 list-disc'>
                        <li>Address&#58; 123 Language Lane, Suite 456, New York, NY 10001, USA</li>
                    </ul>
                </li>
                <li>
                    <p className='text-[20px] font-medium'>Business Hours</p>
                    <ul className='px-5 list-disc'>
                        <li>Monday to Friday&#58; 9:00 AM - 6:00 PM &#40;EST&#41;</li>
                        <li>Saturday & Sunday&#58; Closed</li>
                    </ul>
                </li>
            </ul>
            
            <form className='flex flex-col items-center justify-center w-full gap-5 mb-10 lg:flex-row' >
                <div className='w-full lg:w-1/2'>
                <h4 className='mt-5 text-2xl font-medium'>Contact Form</h4>
                <p className='lg:max-w-[400px]'>Alternatively, you can fill out the contact form below and we&#39;ll get back to you as soon as possible:</p>
                </div>
               
                
                
                <div className='flex flex-col w-full gap-2 p-10 mt-5 border lg:w-1/2'>
                <label htmlFor='name'>Name&#58;</label>
                <input
                  id='name'
                  type='text'
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  className='p-2 border-b border-gray-300 rounded '
                />

                <label htmlFor='email'>Email&#58;</label>
                <input
                  id='email'
                  type='email'
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className='p-2 border-b border-gray-300 rounded'
                />

                <label htmlFor='subject'>Subject&#58;</label>
                <input
                  id='subject'
                  type='text'
                  value={subject}
                  onChange={(e) => setSubject(e.target.value)}
                  className='p-2 border-b border-gray-300 rounded'
                />

                <label htmlFor='message'>Message&#58;</label>
                <textarea
                  id='message'
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className='p-2 border-b border-gray-300 rounded'
                />
                <button type='submit' className='p-2 mt-10 text-white duration-300 ease-out bg-blue-600 rounded hover:scale-95' onSubmit={handleSubmit}>
                Send
              </button>
              </div>

             
            </form>

            <hr className='border-gray-300'/>

            <div className='flex flex-col gap-4'>
            <h4 className='text-2xl font-medium '>Follow Us</h4>
            <div className='flex gap-2 mb-5'>
                <a href='https://www.facebook.com' className='flex items-center justify-center w-8 h-8 duration-300 ease-out border rounded-full hover:scale-95'><FaFacebook className='w-3 h-3'/></a>
                <a href='https://www.twitter.com' className='flex items-center justify-center w-8 h-8 duration-300 ease-out border rounded-full hover:scale-95'><FaTwitter className='w-3 h-3'/></a>
                <a href='https://www.instagram.com' className='flex items-center justify-center w-8 h-8 duration-300 ease-out border rounded-full hover:scale-95'><FaInstagram className='w-3 h-3'/></a>
            </div>
            <p className="text-[#222] pb-5 font-medium pt-3">Thank you for reaching out to LinguaEd. We look forward to assisting you!</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
