import React from "react";
import ExclusiveSection from "../components/ExclusiveSection";
import HeroSection from "../components/HeroSection";
import SteakPlatterSection from "../components/SteakPlatterSection";

const HomePage = () => {
  return (
    <>
      <HeroSection />
      <SteakPlatterSection />
      <ExclusiveSection />
    </>
  );
};

export default HomePage;
