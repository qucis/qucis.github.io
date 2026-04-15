"use client";
import Link from "next/link";
import React from "react";
import Image from "next/image";
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
      className="w-full overflow-hidden relative py-24 md:p-0 md:py-[200px] grid place-items-center"
    >
      <div className="w-[80%] p-8 md:p-12 flex md:flex-row flex-col-reverse justify-around gap-12 items-center glass-panel relative">
        <Image
          src="/illustrations/sssquiggly1.svg"
          alt="Squiggly illustration"
          width={600}
          height={500}
          className="svg absolute lg:block hidden opacity-50 -right-48 rotate-[160deg] z-[-1]"
          priority
        />

        <div className="md:w-[50%] flex flex-col gap-6">
          <h1 className="text-slate-100 font-unbounded font-bold text-[40px] md:text-6xl">
            Our Team
          </h1>
          <p className="text-[20px] mt-6 md:text-lg text-slate-300 font-asans leading-relaxed">
          We are a group of quantum enthusiasts, consisting of graduate and undergraduate students, 
          led by Dr. Ankur Raina. We are conducting some exciting research in the field of quantum information. 
          Be sure to check out our work and recent news to stay up-to-date with our latest developments.
          </p>
          <Link href="/team">
            <button className="border border-[var(--primary-accent)] shadow-lg bg-[var(--primary-accent)] text-white font-bold rounded-[16px] px-6 py-3 gap-4 font-asans flex items-center hover:bg-[var(--primary-hover)] hover:shadow-[0_4px_15px_rgba(110,86,207,0.4)] transition-all">
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
                  stroke="#ffffff"
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </Link>
        </div>
        <div className="relative lg:w-[450px] lg:h-[550px] w-[250px] h-[300px] rounded-[24px] border border-white/10 shadow-2xl overflow-hidden">
          <Image 
            src="/members/AnkurRaina.jpeg" 
            alt="Dr. Ankur Raina" 
            fill 
            style={{objectFit: "cover", objectPosition: "center"}} 
            loading="lazy" 
          />
        </div>
      </div>
    </div>
  );
};

export default HeroTeamContainer;
