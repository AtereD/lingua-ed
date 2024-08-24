import React from 'react'
import Nav from './Nav'

const Career = () => {
  return (
    <div>
        <div className="px-3 bg-[#fff5f1] rounded-3xl">
        <Nav />
        <div className='items-center justify-center hidden gap-1 pb-5 lg:flex-col lg:flex'>
            <h3 className="text-[#222] text-4xl md:text-5xl pt-10 font-medium ">
                Careers at Lingua
             </h3>
        </div>
      </div>
      <div className='container flex flex-col w-full px-3 py-5 mx-auto'>
        <div>
            <h3 className="text-[#222] text-4xl md:text-5xl pt-10 font-medium lg:hidden">Careers at Lingua</h3>
            <p className='text-[#222] pb-5 font-medium pt-3'>At Lingua, we're passionate about making language learning accessible and engaging for everyone. Our mission is to empower learners around the globe with innovative tools and exceptional resources. Join us and become part of a dedicated team working to shape the future of language education!!</p>
        </div>
        
        <div className='flex flex-col gap-3 mb-10'>
            <h3 className='text-[#222] font-medium text-2xl '>Why Work With Us</h3>
            <ul className='px-2 list-disc text-[#222] pl-5 lg:pl-2 flex flex-col gap-1'>
                <li>Innovative Atmosphere&#58; Work in an environment that fosters creativity and innovation in the education technology space.</li>
                <li>Career Development&#58; Benefit from opportunities for professional growth, including training programs, workshops, and mentorship.</li>
                <li>Inclusive Culture&#58; We value diversity and strive to create an inclusive environment where all team members can thrive.</li>
                <li>Flexible Working&#58; Enjoy the flexibility of remote work options and a healthy work-life balance.</li>
            </ul>
        </div>

        <h3 className='text-[#222] font-semibold text-2xl mb-2'>Current Openings</h3>
        
        <div className='pb-5'>
            <ul className='list-decimal text-[#222] font-medium flex flex-col gap-10 px-5'>
                <li>
                    <p className='font-bold'>Language Curriculum Developer</p>
                    <p>Location&#58; Remote</p>
                    <p>Type&#58; Full&#45;Time</p>
                    <p className='py-3 font-medium'>Responsibilities&#58;</p>
                    <ul className='pl-4 list-disc '>
                        <li>Design and develop engaging and effective language learning curricula.</li>
                        <li>Collaborate with language experts and instructional designers to create high-quality educational content.</li>
                        <li>Continuously improve curriculum based on user feedback and educational trends.</li>
                    </ul>
                    <p className='py-3 font-medium'>Qualifications&#58;</p>
                    <ul className='pb-4 pl-4 list-disc '>
                        <li>Strong background in language education or instructional design.</li>
                        <li>Experience in developing language learning materials and curricula.</li>
                        <li>Excellent written communication skills and attention to detail.</li>
                    </ul>
                    <a className='text-blue-500 cursor-pointer hover:underline'>Apply Now</a>
                </li>
                <li>
                    <p className='font-bold'>Customer Success Manager</p>
                    <p>Location&#58; Remote</p>
                    <p>Type&#58; Full&#45;Time</p>
                    <p className='py-3 font-medium'>Responsibilities&#58;</p>
                    <ul className='pl-4 list-disc'>
                        <li>Provide outstanding support to our users, ensuring they achieve their language learning goals.</li>
                        <li>Develop and implement strategies to enhance user satisfaction and retention.</li>
                        <li>Work closely with the product team to relay user feedback and improve our offerings.</li>
                    </ul>
                    <p className='py-3 font-medium'>Qualifications&#58;</p>
                    <ul className='pb-4 pl-4 list-disc'>
                        <li>Previous experience in customer support or success, preferably in the edtech industry.</li>
                        <li>Excellent interpersonal and problem-solving skills.</li>
                        <li>Ability to manage multiple tasks and priorities in a fast-paced environment..</li>
                    </ul>
                    <a className='text-blue-500 cursor-pointer hover:underline'>Apply Now</a>
                </li>
            </ul>
        </div>

        <hr className='py-5 border-[]'/>
        
        <div className='font-medium text-[#222] flex flex-col gap-5 mb-10'>
            <h3 className='text-2xl font-semibold'>How to Apply</h3>
            <p className='max-w-[700px]'>
                Excited about joining the LinguaEd team? Please <a href='/' className='text-blue-500 cursor-pointer hover:underline'>submit your resume and cover letter </a> to our recruitment team. We look forward to learning more about you!
            </p>

            <p>
                For general inquiries, contact us at&#58; 
                <a href='/' className='text-blue-500 cursor-pointer hover:underline'> careers@linguaed.com</a>
            </p>
            
            <p>
                <a href='https://linkedin.com' className='text-blue-500 cursor-pointer hover:underline'>Follow us on LinkedIn </a>
                 to stay updated on our latest news and job openings!
            </p>
        </div>
        <hr className='py-5 border-[]'/>
      </div>
    </div>
  )
}

export default Career