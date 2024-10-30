"use client";
import React, { useEffect, useState } from "react";
import { signOut } from "firebase/auth";
import { auth } from "@/app/firebase";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";
import Spinner from "./Spinner";
import { FiBook, FiHome, FiLogOut, FiSettings } from "react-icons/fi";

const Dashboard = () => {
  const router = useRouter();
  const [fullName, setFullName] = useState("");
  // const [language, setLanguage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  
  useEffect(() => {
    // Retrieve data from local storage
    const storedFullName = localStorage.getItem("fullName");
    const storedLanguage = localStorage.getItem("language");

    if (storedFullName) {
      setFullName(storedFullName);
    }
    // if (storedLanguage) {
    //   setLanguage(storedLanguage);
    // }
  }, []);

  const submit = (e) => {
    e.preventDefault();

    setIsSubmitting(true);
    
   signOut(auth)
    .then(() => {
      // Sign-out successful.
      router.push('/sign-in')
      setIsSubmitting(false);
    })
    .catch((error) => {
      // An error happened.
    });
  }
 

  return (
    <body className="w-full m-0 lg:p-0">
      <div>
        <div className="flex w-full ">
          <div className="lg:w-[15%] bg-[#524fd5] h-[100vh] p-3 w-[20%] flex flex-col justify-between">
            <div className="flex flex-col items-center justify-center">
            <Image
              src={"/logo.png"}
              alt="logo"
              width={100}
              height={50}
              className="pt-5 mb-5 w-[150px] lg:w-[100px]"
            />
            
            <div className="flex flex-col gap-6 text-white">
              <FiHome/>
              <FiBook/>
              <FiSettings/>
            </div>
            </div>
            

            <div className="flex flex-col items-center justify-center gap-16 md:gap-10 lg:pl-5">
              <Image
                src={"/assets/Avatar (4).png"}
                alt="logo"
                width={30}
                height={30}
                className=""
              />
              <button className="bg-[#fff] p-2 rounded flex items-center font-medium" type="submit" onClick={submit} disabled={isSubmitting}>
              {isSubmitting ? <Spinner /> : <p className="flex items-center gap-1"><FiLogOut/> <span className="hidden lg:flex"> Sign Out</span></p>}
              </button>
            </div>
          </div>
          <div className="lg:w-[85%] p-5 w-[90%]">
            <div className="flex flex-col gap-2">
              <p className="font-medium lg:text-[25px] tracking-tight">
                Welcome {fullName}!
              </p>
            </div>
            
          </div>
        </div>
      </div>
    </body>
  );
};

export default Dashboard;
