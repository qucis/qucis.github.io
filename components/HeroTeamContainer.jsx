import Link from "next/link";
import React from "react";
import { ReactSVG } from "react-svg";
import { createRoot } from "react-dom/client";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP);

const HeroTeamContainer = () => {
  const container = useRef(null);

  useGSAP(
    () => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: ".svg",
          markers: true,
          start: "top 80%",
          end: "top 30%",
          scrub: true,
        },
      });

      tl.to(".svg", {
        scrollTrigger: ".svg",

        x: -300,
        duration: 5,
      });
    },
    { scope: container }
  );

  return (
    <div
      ref={container}
      className="w-full overflow-hidden relative py-24 md:p-0 md:py-[200px]  grid place-items-center"
    >
      <div className="  w-[80%]  flex md:flex-row  flex-col-reverse justify-around  gap-12 items-center ">
        <img
          src="illustrations/sssquiggly1.svg"
          className="svg absolute lg:block hidden opacity-50 -right-48 rotate-[160deg] h-[500px] w-[600px] z-[-1]"
        />

        <div className="md:w-[50%] flex flex-col  gap-6   ">
          <h1 className="text-black/80 font-unbounded font-bold text-[40px] md:text-6xl  ">
            Our Team
          </h1>
          <p className=" text-[20px] mt-6 md:text-lg  text-black/80 font-asans">
          We are a group of quantum enthusiasts, consisting of graduate and undergraduate students, 
          led by Dr. Ankur Raina. We are conducting some exciting research in the field of quantum information. 
          Be sure to check out our work and recent news to stay up-to-date with our latest developments.
          </p>
          <Link href="/team">
            <button className="text-purple/80 border-2 border-purple-200  shadow-lg  bg-white text-purple-500 font-bold rounded-[16px] px-4 py-2  gap-4  font-asans flex items-center hover:bg-purple-100 hover:shadow-xl transition-all">
              Know Us
              <svg
                width="9"
                height="14"
                viewBox="0 0 9 14"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M2 2L7 7L2 12"
                  stroke="rgb(126,34,206)"
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </Link>
        </div>
        <div className="lg:w-[500px] lg:h-[600px] object-center rounded-xl border-2 border-gray-600  w-[250px] h-[300px] bg-[url(/members/AnkurRaina.jpeg)] bg-cover   shadow-[15px_15px_0px_0px_rgba(0,0,0,0.8)]"></div>
      </div>
    </div>
  );
};

export default HeroTeamContainer;
