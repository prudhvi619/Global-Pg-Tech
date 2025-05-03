import React from "react";
import HeroSection from "@/pages/home/components/HeroSection";
import HiringPatners from "@/pages/home/components/HiringPatners";
import PeopleReview from "@/pages/home/components/PeopleReview";
import Stats from "@/pages/home/components/Stats";
import WhatWeOffer from "@/pages/home/components/WhatWeOffer";
import { ContinousWhatsappSupport } from "./components/ContinousWhatsappSupport";

const Home: React.FC = () => {
  return (
    <div className="w-full overflow-x-hidden">
      <HeroSection />
      <WhatWeOffer />
      <Stats />
      <HiringPatners />
      <PeopleReview />
      <ContinousWhatsappSupport isVisible={true} />
    </div>
  );
};

export default Home;