import React from "react";
import SecondSection from "../Components/SecondSection";
import ThirdSection from "../Components/ThirdSection";
import FirstSection from "../Components/FirstSection/FirstSection";
import FourthSection from "../Components/FourthSection/FourthSection";
import FifthSection from "../Components/FifthSection/FifthSection";
import SixthSection from "../Components/SixthSection/SixthSection";

const Home = () => {
  return (
    <div>
      <FirstSection />
      <SecondSection />
      <ThirdSection />
      <FourthSection />
      <FifthSection/>
      <SixthSection/>
    </div>
  );
};

export default Home;
