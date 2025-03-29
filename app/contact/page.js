import Transition from "@/components/Transition";
import React from "react";

const Contact = () => {
  return (
    <div className="w-full font-asans  bg-[url('/figmaStuffs/teambg.png')] bg-cover md:p-24 p-6 ">
      <Transition>
        <div>
    <div className='w-full py-24 md:p-24 flex items-center justify-center'>
      <h1 className=' teamHeading font-unbounded text-[55px] md:text-[96px] drop-shadow-lg z-0'>
        Contact Us
      </h1>
    </div>
    
    <div className="flex items-center justify-center">
        <div className="text-white md:px-12">
        <h1 className='text-[30px] md:text-[40px] tex font-semibold font-bj'>Dr. Ankur Raina</h1>
        <h2 className='text-[15px] md:text-[20px] italic font-bj font-semibold'>Principal Investigator</h2>
        <div className="w-full flex gap-12 items-center justify-between font-source mt-6 text-[15px] md:text-[20px] font-regular py-12">
        <ul className=" grid gap-1">
            <li>Offcie 208, Academic Building 1C</li>
            <li>Lab 204, Academic Building 1C</li>
            <li>Department of EECS,</li>
            <li>IISER Bhopal.</li>
            <li>
                <a href="mailto:ankur@iiserb.ac.in" className="cursor-pointer text-[#D136D1] italic  hover:underline">ankur@iiserb.ac.in</a>
            </li>
            <li>+91 755 269 2654</li>

        </ul>


        {/* <ul className="text-right grid gap-1">
          <li>Lab </li>
            <li>Room 204, Academic Building 1C</li>
        </ul> */}


        </div>
        </div>
    </div>

    {/* <div className='w-full py-12 md:py-24  flex items-center justify-center'>
      <h1 className='font-unbounded teamHeading text-[55px] md:text-[96px] drop-shadow-lg'>
        Join Us.
      </h1>
    </div>

    <div className="px-6 md:mb-48 md:px-24 text-white text-[20px] md:text-[24px] font-source text-center">
        <p>
        Looking forward to enthusiastic students from backgrounds in EE, CS, Math, Physics, Chemistry to work on topics lying in the broad areas of Quantum Information Science.

        <br/><br/>To take admission to PhD program:<a href="https://www.iiserb.ac.in/doaa/admission" target="_blank" className="text-[#D136D1] italic  hover:underline"> Click here.</a>
        </p>
    </div> */}




    </div>
    </Transition>
    </div>
  );
};

export default Contact;
