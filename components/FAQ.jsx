import React from "react";
import { Quicksand } from "next/font/google";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const quicksand = Quicksand({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const faqdata =[
  {
    value:'item-1',
    question: "What languages can I learn on your platform?",
    answer: "We offer a wide range of languages including Spanish, French, German, Italian, Chinese, Japanese, Korean, Portuguese, Russian, and many more."
  },
  {
    value:'item-2',
    question: "Can I learn at my own pace?",
    answer: "Absolutely! Our courses are designed to be flexible, allowing you to learn at your own pace. You can access the lessons and practice exercises anytime, anywhere, and revisit any content as often as needed."
  },
  {
    value:'item-3',
    question: "Do you offer live classes or one-on-one tutoring?",
    answer: "We offer both live classes and one-on-one tutoring sessions. Our live classes provide interactive learning experiences with other students and a teacher. If you prefer personalized attention, you can book one-on-one sessions with our experienced tutors. Check our Classes page for more details on scheduling and availability."
  },
  {
    value:'item-4',
    question: "How much does it cost to access the courses?",
    answer: "We offer a variety of pricing plans to fit different needs and budgets. You can choose from monthly, quarterly, or annual subscriptions. We also provide a free trial for new users, so you can explore our courses before committing to a subscription. For detailed pricing information, please visit our Pricing page."
  },
  {
    value:'item-5',
    question: "What resources are included in the courses?",
    answer: "Our courses include a variety of resources such as video lessons, interactive exercises, quizzes, and downloadable materials. Additionally, you'll have access to practice activities and language labs to enhance your learning experience."
  },
  {
    value:'item-6',
    question: "How the first lesson with teacher will be?",
    answer: "By the end of the trial lesson, you will be able to determine for yourself whether this kind of online lesson is right for you or not. In our experience, most students appreciate the benefits of online education and decide to study online."
  },
]

const FAQ = () => {
  return (
    <section className="px-1 py-24 md:px-5 lg:px-14">
      <div className="container px-3 mx-auto">
        <div className="flex flex-col gap-10">
          <div className="flex flex-col gap-2">
            <h3 className="uppercase text-[16px] md:text-[18px] text-[#b0b0c0] font-medium">
              More info
            </h3>
            <h2
              className={`${quicksand.className} text-[#222] text-4xl font-medium md:text-5xl`}
            >
              Common questions
            </h2>
          </div>
          <div className={`${quicksand.className} `}>
            <Accordion type="single" collapsible className='grid grid-cols-1 gap-6 md:grid-cols-2'>
              {faqdata.map((data, index) => (
                <div key={index}>
                <AccordionItem value={data.value}>
                <AccordionTrigger>{data.question}</AccordionTrigger>
                <AccordionContent>
                  {data.answer}
                </AccordionContent>
              </AccordionItem></div>
              ))}
              
            </Accordion>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
