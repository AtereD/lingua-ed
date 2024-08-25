"use client"

import React, { useState } from "react";
import Footer from "./Footer";
import Nav from "./Nav";
import Image from "next/image";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

const coursesData = [
  {
    img: "/assets/english-course.png",
    language: "English",
    text: "The English language, originating from the early Germanic dialects spoken by Anglo-Saxon settlers in medieval England, has grown into a global lingua franca through centuries of cultural exchange and linguistic evolution. As a subject, English explores this rich history, its complex grammatical structures, and its extensive literary heritage. Studying English not only enhances language proficiency but also develops critical thinking and analytical skills through diverse texts and contexts. This academic pursuit is crucial for engaging in international communication and for personal and professional growth, making English a key component of global education.",
  },
  {
    img: "/assets/france.png",
    language: "French",
    text: "French is a Romance language spoken by over 300 million people worldwide. Known for its rich literary heritage and influence on art, cuisine, and diplomacy, French is an official language in numerous international organizations. Learning French opens doors to vibrant cultures, historical landmarks, and diverse communities across Europe, Africa, and the Americas.",
  },
  {
    img: "/assets/spanish-course.png",
    language: "Spanish",
    text: "Spanish is a Romance language spoken by over 500 million people across Spain, Latin America, and the United States. Known for its diversity of accents and dialects, Spanish offers a gateway to a wide range of cultures and regions. Learning Spanish can enhance your travel experiences, cultural understanding, and career prospects in many Spanish-speaking countries.",
  },
  {
    img: "/assets/italy-course.png",
    language: "Italian",
    text: "Italian, a Romance language known for its musicality and charm, is spoken primarily in Italy and Switzerland. It is celebrated for its influence on art, music, and cuisine. Learning Italian allows you to explore Italy's rich cultural heritage, from Renaissance art to contemporary fashion, and enjoy the authentic flavors of Italian cuisine.",
  },
  {
    img: "/assets/south-korea.png",
    language: "Korean",
    text: "Korean is spoken by approximately 80 million people, mainly in South Korea and North Korea. The language is unique due to its distinct script, Hangul, and is known for its rich cultural heritage, including traditional music, cinema, and cuisine. Learning Korean provides insights into Korea's vibrant culture and economy and opens up opportunities in a region known for its technological advancements and cultural exports.",
  },
  {
    img: "/assets/portugese.png",
    language: "Portuguese",
    text: "Portuguese is a Romance language spoken in Portugal, Brazil, and several African countries. It is renowned for its beautiful phonetics and rich literary tradition. Learning Portuguese allows you to explore the diverse cultures of Portuguese-speaking nations, from Brazil's lively festivals to Portugal's historical sites, and engage with a growing global community.",
  },
  {
    img: "/assets/china.png",
    language: "Chinese (Mandarin)",
    text: "Mandarin Chinese is the most spoken language in the world, with over a billion native speakers. As the official language of China and Taiwan, it offers access to one of the world's oldest civilizations and a rapidly growing global economy. Learning Mandarin can help you connect with diverse cultures, explore ancient traditions, and engage with China's dynamic modern landscape.",
  },
  {
    img: "/assets/germany.png",
    language: "German",
    text: "German, a Germanic language, is spoken by approximately 90 million people primarily in Germany, Austria, and Switzerland. It is known for its precision and rich philosophical and literary traditions. Mastering German can enhance your understanding of Central European culture, literature, and history, and is valuable for business and academic opportunities in the German-speaking world.",
  },
];

const CourseItem = ({ img, language, text, isExpanded, onToggle }) => (
  <div className="flex flex-col gap-3">
    <div className="flex items-center justify-between cursor-pointer" onClick={onToggle}>
      <div className="flex items-center gap-3">
        <h3 className="text-[#222] md:text-2xl font-medium text-xl">{language}</h3>
        <Image src={img} width={25} height={25} alt={`Flag of ${language}`} className='w-[20px] h-[20px] md:w-[25px] md:h-[25px]'/>
      </div>
      {isExpanded ? <FaChevronUp /> : <FaChevronDown />}
    </div>
    {isExpanded && (
      <p className="font-medium ">{text}</p>
    )}
  </div>
);

const Courses = () => {
  const [expandedIndex, setExpandedIndex] = useState(null);

  const handleToggle = (index) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <div>
      <div className="px-1 bg-[#fff5f1] rounded-3xl">
        <Nav />
        <h3 className="text-[#222] text-4xl font-medium md:text-5xl pt-10 pb-5 lg:flex justify-center items-center hidden">
          Courses Offered
        </h3>
      </div>
      <div className="container px-4 mx-auto py-14">
        <div className="flex flex-col gap-10">
          <h3 className="text-[#222] text-4xl font-medium md:text-5xl lg:hidden">
            Courses Offered
          </h3>
          <div className="flex flex-col gap-5">
            {coursesData.map((course, index) => (
              <CourseItem
                key={course.language}
                img={course.img}
                language={course.language}
                text={course.text}
                isExpanded={expandedIndex === index}
                onToggle={() => handleToggle(index)}
              />
            ))}
          </div>
          <div>
            <a href="/pricing">
              <button className="bg-[#524fd5] w-[171px] h-[64px] text-white flex items-center justify-center rounded-full font-medium hover:scale-95 transition-transform duration-300 ease-in-out">
                Get started
              </button>
            </a>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Courses;
