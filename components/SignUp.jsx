"use client"
import {useState} from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from '@/app/firebase';
import { useRouter } from 'next/navigation';
import Spinner from './Spinner';

const Options =[
    {
        value:'',
        language:'select preferred language',
    },
    {
        value:'english',
        language:'English',
    },
    {
        value:'spanish',
        language:'Spanish',
    },
    {
        value:'french',
        language:'French',
    },
    {
        value:'german',
        language:'German',
    },
    {
        value:'korean',
        language:'Korean',
    },
    {
        value:'italian',
        language:'Italian',
    },
    {
        value:'chinese',
        language:'Chinese',
    },
    {
        value:'portugese',
        language:'Portugese',
    },
]

const SignUp = () => {
    const router = useRouter();
    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        language: '',
        password: '',
      });
    
      const [errors, setErrors] = useState({});
      const [isSubmitting, setIsSubmitting] = useState(false);

     
    
      const handleChange = (e) => {
        const { id, value } = e.target;
        setFormData({
          ...formData,
          [id]: value
        });
      };
    
      const validateForm = () => {
        const newErrors = {};
        if (!formData.fullName) newErrors.fullName = 'Full name is required';
        if (!formData.email) newErrors.email = 'Email is required';
        if (!formData.language) newErrors.language = 'Preferred language is required';
        if (!formData.password) {
            newErrors.password = 'Password is required';
          } else if (formData.password.length < 8) {
            newErrors.password = 'Password must be at least 8 characters long';
          }
        return newErrors;
      };
    
      const handleSubmit = (e) => {
        e.preventDefault();
        const validationErrors = validateForm();
        if (Object.keys(validationErrors).length > 0) {
          setErrors(validationErrors);
          return;
        }
        setIsSubmitting(true);

        const email = formData.email
        const password = formData.password
        createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          // Signed up 
          const user = userCredential.user;

          localStorage.setItem('fullName', formData.fullName);
          localStorage.setItem('language', formData.language);  
          
          toast.success("Signup successful")
          router.push("/sign-in")
          setIsSubmitting(false);
          
          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          let errorMessage = "An error occurred";
          if (errorCode === "auth/email-already-in-use") {
            errorMessage = "This email is already in use.";
          } else if (errorCode === "auth/invalid-email") {
            errorMessage = "Invalid email format.";
          }
          toast.error(errorMessage)
          // ..
        });
       
      };
  return (
    <div className="h-full">
      <div className="px-3 py-5 lg:py-0">
        <div className="flex items-center justify-between">
          <div>
            <Image src="/logo.png" width={110} height={35} alt="Lingua Logo" />
          </div>
          <div>
            <Link href="/" className="font-semibold hover:underline">
              Home
            </Link>
          </div>
        </div>
        <h3 className="text-[#222] text-4xl md:text-5xl pt-10 font-medium text-center">
          Sign Up
        </h3>
        <p className="text-center text-[20px] mt-3 font-medium">
          Get started with Lingua
        </p>
      </div>
      <div className="container flex items-center justify-center mx-auto py-14">
        <ToastContainer />
        <form
          className="flex flex-col items-center justify-center gap-6 px-4 pb-10 border shadow pt-14 rounded-xl "
          onSubmit={handleSubmit}
        >
          <div className="w-full">
            <input
              type="name"
              id="fullName"
              value={formData.fullName}
              onChange={handleChange}
              placeholder="Full name"
              className="h-[50px] lg:w-[300px] rounded-3xl w-full px-5 border-[#524fd5] border-[1.5px]"
              required
              aria-label="Full Name"
            />
            {errors.fullName && (
              <p className="text-sm text-red-500">{errors.fullName}</p>
            )}
          </div>
          <div className="w-full">
            <input
              type="email"
              id="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Email"
              className="h-[50px] lg:w-[300px] rounded-3xl w-full px-5 border-[#524fd5] border-[1.5px]"
              required
              aria-label="Email"
            />
            {errors.email && (
              <p className="text-sm text-red-500">{errors.email}</p>
            )}
          </div>
          <div className="w-full">
            <select
              id="language"
              value={formData.language}
              onChange={handleChange}
              className="h-[50px] lg:w-[300px] rounded-3xl w-full px-5 border-[#524fd5] border-[1.5px] text-[#9ca3c1] "
              required
              aria-label="Preferred language"
            >
              {Options.map((option, index) => (
                <option key={index} value={option.value}>
                  {option.language}
                </option>
              ))}
            </select>
            {errors.language && (
              <p className="text-sm text-red-500">{errors.language}</p>
            )}
          </div>
          <div className="w-full ">
            <input
              type="password"
              id="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Password"
              className="h-[50px] lg:w-[300px] rounded-3xl w-full px-5 border-[#524fd5] border-[1.5px] "
              required
              aria-label="Password"
            />
            {errors.password && (
              <p className="text-sm text-red-500">{errors.password}</p>
            )}
          </div>
          <button
            type="submit"
            className="bg-[#524fd5] w-[148px] h-[52px] text-white flex items-center text-center justify-center rounded-full font-medium hover:scale-90 duration-300 ease-in-out hover:transition-colors mt-5"
            disabled={isSubmitting}
          >
            {isSubmitting ? <Spinner /> : "Sign Up"}
          </button>

          <hr className="w-full border-gray-300" />

          <p className="mt-4">
            Have an account already?{" "}
            <a
              href="/sign-in"
              className="font-medium text-blue-600 hover:underline"
            >
              Sign In
            </a>{" "}
            here
          </p>
        </form>
      </div>
    </div>
  );
}

export default SignUp
