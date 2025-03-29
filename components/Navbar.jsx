"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoCloseOutline } from "react-icons/io5";

export default function Navbar() {
  const path = usePathname();
  const router = useRouter();

  // CONDITIONALLY RENDERING HAMBURGER AND NAVBAR THROUGH WINDOW SCREEN SIZE
  // const [isDesktop, setDesktop] = useState(false);
  // useEffect(() => {
  //   if (window.innerWidth > 1024) {
  //     setDesktop(true);
  //   } else {
  //     setDesktop(false);
  //   }

  //   const updateMedia = () => {
  //     if (window.innerWidth > 1024) {
  //       setDesktop(true);
  //     } else {
  //       setDesktop(false);
  //     }
  //   };
  //   window.addEventListener("resize", updateMedia);
  //   return () => window.removeEventListener("resize", updateMedia);
  // }, [isDesktop, router]);

  // SHOW MENU ON CLICK LOGIC
  const [showMenu, setShowMenu] = useState(false);

  return (
    <>
      <nav className=" font-asans z-[100] top-0 absolute left-0 px-12 w-full h-[15vh]   flex justify-between items-center  text-lg font-regular ">
        <div
          className={` font-asans font-bold text-[32px] ${
            path === "/" ? "text-[#DE97FF]" : "text-white/80"
          }`}
        >
          <Link href="/">QuCIS</Link>
        </div>
        {/* {isDesktop ? ( */}
        <ul className=" flex flex-col lg:flex-row gap-6 text-md font-regular font-asans items-center  lg:visible invisible">
          <li
            className={` ${
              path === "/about" ? "text-purple-400" : "text-white/80"
            }`}
          >
            <Link href="/about">About</Link>
          </li>
          <li
            className={` ${path === "/team" ? "text-[#DE97FF]" : "text-white/80"}`}
          >
            <Link href="/team">Team</Link>
          </li>
          <li
            className={` ${
              path === "/publications" ? "text-[#DE97FF]" : "text-white/80"
            }`}
          >
            <Link href="/publications">Publications</Link>
          </li>

          <li
            className={` ${
              path === "/funding" ? "text-[#DE97FF]" : "text-white/80"
            }`}
          >
            <Link href="/funding">Funding</Link>
          </li>
          <li
            className={` ${
              path === "/gallery" ? "text-[#DE97FF]" : "text-white/80"
            }`}
          >
            <Link href="/gallery">Moments</Link>
          </li>
          <li
            className={` ${
              path === "/resources" ? "text-[#DE97FF]" : "text-white/80"
            }`}
          >
            <Link href="/resources">Career and Opportunities</Link>
          </li>
          <Link href="/contact">
            <li
              className={`contact_btn rounded-[16px] cursor-pointer transition-all ${
                path === "/contact"
                  ? "bg-white text-[#9717E5]"
                  : "text-white/80 bg-[#9717E5]"
              }`}
            >
              Contact
            </li>
          </Link>
        </ul>
        {/*  ) : ( */}

        {/*  )} */}
        <div className=" lg:invisible visible absolute right-12">
          <GiHamburgerMenu
            color="#fff"
            onClick={() => setShowMenu(!showMenu)}
          />
        </div>
      </nav>

      <div
        className={`bg-violet-700  z-[100] px-6 py-6 absolute h-[100vh] top-[-100vh] left-0 w-full origin-top ${
          showMenu ? "top-[0vh]" : "top-[-100vh]"
        } transition-all  z-10 ease-linear`}
      >
        <div className="p-4  flex items-center justify-between ">
          <h1
            className={`font-asans font-bold text-[32px] drop-shadow-lg ${
              path === "/about" ? "text-black" : "text-white/80"
            }`}
          >
            <Link onClick={() => setShowMenu(!showMenu)} href="/">
              QuCIS
            </Link>
          </h1>
          <IoCloseOutline
            className="text-[32px] text-white/80 "
            onClick={() => setShowMenu(!showMenu)}
          />
        </div>
        <div className="p-4 mt-6 ">
          <ul className="text-white/80 font-asans   text-lg tracking-wide grid gap-2">
            <li
              className={` ${
                path === "/about" ? "text-[#DE97FF]" : "text-white/80"
              }`}
            >
              <Link onClick={() => setShowMenu(!showMenu)} href="/about">
                About
              </Link>
            </li>

            <li
              className={` ${
                path === "/publications" ? "text-[#DE97FF]" : "text-white/80"
              }`}
            >
              <Link onClick={() => setShowMenu(!showMenu)} href="/publications">
                Publications
              </Link>
            </li>
            <li
              className={` ${
                path === "/team" ? "text-[#DE97FF]" : "text-white/80"
              }`}
            >
              <Link onClick={() => setShowMenu(!showMenu)} href="/team">
                Team
              </Link>
            </li>
            <li
              className={` ${
                path === "/funding" ? "text-[#DE97FF]" : "text-white/80"
              }`}
            >
              <Link onClick={() => setShowMenu(!showMenu)} href="/funding">
                Funding
              </Link>
            </li>
            <li
              className={` ${
                path === "/gallery" ? "text-[#DE97FF]" : "text-white/80"
              }`}
            >
              <Link href="/gallery">Moments</Link>
            </li>
            <li
              className={` ${
                path === "/resources" ? "text-[#DE97FF]" : "text-white/80"
              }`}
            >
              <Link href="/resources">Career and Opportunities</Link>
            </li>
          </ul>

          <Link onClick={() => setShowMenu(!showMenu)} href="/contact">
            <button
              className={`${
                path === "/contact"
                  ? "bg-white text-[#9717E5]"
                  : "text-white/80 bg-[#9717E5]"
              } mt-10 w-full py-3 rounded-full text-lg font-bold font-asans`}
            >
              Contact Us
            </button>
          </Link>
        </div>
      </div>
    </>
  );
}
