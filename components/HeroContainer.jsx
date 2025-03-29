import React from "react";
import { BackgroundGradientAnimation } from "@/components/ui/background-gradient-animation";
import Transition from "./Transition";
import Link from "next/link";
const HeroContainer = () => {
  return (
    <div className="relative border grid place-items-center justify-center  border-black w-full min-h-screen">
      <div className="absolute z-10 min-h-screen 
      heroContainer 
      inset-0 flex  items-center justify-center text-white font-bold px-4 pointer-events-none text-3xl text-center md:text-4xl lg:text-7xl">
        
        </div>

        {/* bg-gradient-to-r from-purple-600 to-purple-900  */}
        <div className=" mx-auto font-unbounded   z-50">
          <h1 className=" font-serif text-purple-200 lg:leading-[70px] lg:tracking-wide text-4xl lg:text-6xl text-center font-extrabold ">
            Welcome to <br />QuCIS
          </h1>
          
          <p className="  font-asans mt-[20px] text-white/70  px-12 text-md text-center lg:text-xl   ">
            Explore our journey to pioneer the future of Quantum Information Research!
          </p>
          <Link href="/about">
            <button className="font-asans flex mx-auto gap-4 justify-between items-center mt-[30px] md:mt-[60px] px-[25px] md:px-[20px] py-[10px] text-[15px] md:text-md  bg-white rounded-[16px] font-source main_btn hover:brightness-90 transition-all">
              <h1 className="text-black font-extrabold">KNOW US</h1>
              <svg width="9" height="14" viewBox="0 0 9 14" fill="none">
                <path
                  d="M2 2L7 7L2 12"
                  stroke="url(#paint0_linear_66_43)"
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <defs>
                  <linearGradient
                    id="paint0_linear_66_43"
                    x1="4.5"
                    y1="2"
                    x2="4.5"
                    y2="12"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="#5C2178" />
                    <stop offset="1" stopColor="#DF38D8" stopOpacity="0.75" />
                  </linearGradient>
                </defs>
              </svg>
            </button>
          </Link>
        </div>
    </div>
  );
};

export default HeroContainer;
