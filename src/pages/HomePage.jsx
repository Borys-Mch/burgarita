import React from "react";
import ExclusiveSection from "../components/ExclusiveSection";
import HeroSection from "../components/HeroSection";
import RecipeSection from "../components/RecipeSection";
import SteakPlatterSection from "../components/SteakPlatterSection";

const HomePage = () => {
  return (
    <>
      <HeroSection />
      <SteakPlatterSection />
      <ExclusiveSection />
      <RecipeSection />
    </>
  );
};

export default HomePage;
