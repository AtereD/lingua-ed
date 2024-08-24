import React from "react";
import Footer from "./Footer";
import Nav from "./Nav";
import Image from "next/image";

const Courses = () => {
  return (
    <div>
      <div className="px-3 bg-[#fff5f1] rounded-3xl">
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
            <div className="flex flex-col gap-3">
              <div className="flex items-center gap-4">
                <h3 className="text-[#222] text-2xl font-medium">French</h3>
                <Image
                  src={"/assets/france.png"}
                  width={34}
                  height={34}
                  alt="flag-icon"
                />
              </div>
              <p className="pl-5 font-medium">
                French is a Romance language spoken by over 300 million people
                worldwide. Known for its rich literary heritage and influence on
                art, cuisine, and diplomacy, French is an official language in
                numerous international organizations. Learning French opens
                doors to vibrant cultures, historical landmarks, and diverse
                communities across Europe, Africa, and the Americas.
              </p>
            </div>
            <div className="flex flex-col gap-3">
              <div className="flex items-center gap-4">
                <h3 className="text-[#222] text-2xl font-medium">Spanish</h3>
                <Image
                  src={"/assets/spanish-course.png"}
                  width={34}
                  height={34}
                  alt=" flag-icon"
                />
              </div>
              <p className="pl-5 font-medium">
                Spanish is a Romance language spoken by over 500 million people
                across Spain, Latin America, and the United States. Known for
                its diversity of accents and dialects, Spanish offers a gateway
                to a wide range of cultures and regions. Learning Spanish can
                enhance your travel experiences, cultural understanding, and
                career prospects in many Spanish-speaking countries.
              </p>
            </div>
            <div className="flex flex-col gap-3">
              <div className="flex items-center gap-4">
                <h3 className="text-[#222] text-2xl font-medium">Italian</h3>
                <Image
                  src={"/assets/italy-course.png"}
                  width={34}
                  height={34}
                  alt=" flag-icon"
                />
              </div>
              <p className="pl-5 font-medium">
                Italian, a Romance language known for its musicality and charm,
                is spoken primarily in Italy and Switzerland. It is celebrated
                for its influence on art, music, and cuisine. Learning Italian
                allows you to explore Italy&#39;s rich cultural heritage, from
                Renaissance art to contemporary fashion, and enjoy the authentic
                flavors of Italian cuisine.
              </p>
            </div>
            <div className="flex flex-col gap-3">
              <div className="flex items-center gap-4">
                <h3 className="text-[#222] text-2xl font-medium">Korean</h3>
                <Image
                  src={"/assets/south-korea.png"}
                  width={34}
                  height={34}
                  alt="flag-icon"
                />
              </div>
              <p className="pl-5 font-medium">
                Korean is spoken by approximately 80 million people, mainly in
                South Korea and North Korea. The language is unique due to its
                distinct script, Hangul, and is known for its rich cultural
                heritage, including traditional music, cinema, and cuisine.
                Learning Korean provides insights into Korea's vibrant culture
                and economy and opens up opportunities in a region known for its
                technological advancements and cultural exports..
              </p>
            </div>
            <div className="flex flex-col gap-3">
              <div className="flex items-center gap-4">
                <h3 className="text-[#222] text-2xl font-medium">Portugese</h3>
                <Image
                  src={"/assets/portugese.png"}
                  width={34}
                  height={34}
                  alt="flag-icon"
                />
              </div>
              <p className="pl-5 font-medium">
                Portuguese is a Romance language spoken in Portugal, Brazil, and
                several African countries. It is renowned for its beautiful
                phonetics and rich literary tradition. Learning Portuguese
                allows you to explore the diverse cultures of
                Portuguese-speaking nations, from Brazil's lively festivals to
                Portugal&#39;s historical sites, and engage with a growing
                global community.
              </p>
            </div>
            <div className="flex flex-col gap-3">
              <div className="flex items-center gap-4">
                <h3 className="text-[#222] text-2xl font-medium">
                  Chinese &#40;Mandarin&#41;
                </h3>
                <Image
                  src={"/assets/china.png"}
                  width={34}
                  height={34}
                  alt="flag-icon"
                />
              </div>
              <p className="pl-5 font-medium">
                Mandarin Chinese is the most spoken language in the world, with
                over a billion native speakers. As the official language of
                China and Taiwan, it offers access to one of the world's oldest
                civilizations and a rapidly growing global economy. Learning
                Mandarin can help you connect with diverse cultures, explore
                ancient traditions, and engage with China&#39;s dynamic modern
                landscape.
              </p>
            </div>
            <div className="flex flex-col gap-3">
              <div className="flex items-center gap-4">
                <h3 className="text-[#222] text-2xl font-medium">German</h3>
                <Image
                  src={"/assets/germany.png"}
                  width={34}
                  height={34}
                  alt="flag-icon"
                />
              </div>
              <p className="pl-5 font-medium">
                German, a Germanic language, is spoken by approximately 90
                million people primarily in Germany, Austria, and Switzerland.
                It is known for its precision and rich philosophical and
                literary traditions. Mastering German can enhance your
                understanding of Central European culture, literature, and
                history, and is valuable for business and academic opportunities
                in the German-speaking world.
              </p>
            </div>
          </div>
          <div>
            <a href="/pricing">
              <button className="bg-[#524fd5] w-[171px] h-[64px] text-white flex items-center text-center justify-center rounded-full font-medium hover:scale-95 duration-300 ease-in-out hover:transition-colors py-6 px-6">
                Get started
              </button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Courses;
