"use client";

import { useEffect, useRef, useState } from "react";
import Preloader from "@/components/Preloader";
import { preLoaderAnim } from "@/animations";

import HeroContainer from "@/components/HeroContainer";
import HeroAboutContainer from "@/components/HeroAboutContainer";
import HeroTeamContainer from "@/components/HeroTeamContainer";
import News from "@/components/News";
import LandingCarousel from "@/components/LandingCarousel";

export default function Home() {
  const [loading, setLoading] = useState(true);

  // useEffect(() => {

  //   const timer = setTimeout(() => {
  //     setLoading(false);
  //   }
  //   , 5000);

  //   return () => clearTimeout(timer);
  // })
  const ref = useRef(null);
  return (
    <>
      {/* {loading ? <Preloader /> :  */}
      <main>
        <HeroContainer />

        {/* SECOND SECTION  */}
        <HeroAboutContainer />
        <HeroTeamContainer />

        <News />

        {/* FOURTH SECTION */}
        {/* CAROUSEL SECTION */}
        <LandingCarousel />
      </main>
      {/* } */}
    </>
  );
}
