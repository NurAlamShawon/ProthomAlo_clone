import React from "react";
import SecondSection from "../Components/SecondSection";
import ThirdSection from "../Components/ThirdSection";
import FirstSection from "../Components/FirstSection/FirstSection";
import FourthSection from "../Components/FourthSection/FourthSection";
import FifthSection from "../Components/FifthSection/FifthSection";
import SixthSection from "../Components/SixthSection/SixthSection";
import SeventhSection from "../Components/SeventhSection/SeventhSection";
import EigthSection from "../Components/EigthSection";
import NinthSection from "../Components/NinthSection/NinthSection";
import TenthSection from "../Components/TenthSection.jsx/TenthSection";
import AddSection from "../Components/AddSection";
import ElevenSection from "../Components/ElevenSection/ElevenSection";
import TwelveSection from "../Components/TwelveSection/TwelveSection";
import ThirteenSection from "../Components/ThirteenSection/ThirteenSection";
import FourteenSection from "../Components/FourteenSection";
import Fifteen from "../Components/Fifteen/Fifteen";
import SixteenSection from "../Components/SixteenSection";
import { Helmet } from "react-helmet";

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>আজকের খবর | আজকের ব্রেকিং নিউজ বাংলাদেশ</title>
        <meta
          name="description"
          content="বাংলাদেশ ও আন্তর্জাতিক রাজনীতির সর্বশেষ খবর পড়ুন প্রথম আলোতে।"
        />
        <meta property="og:title" content="রাজনীতি - প্রথম আলো" />
        <meta
          property="og:description"
          content="বাংলাদেশ ও আন্তর্জাতিক রাজনীতির সর্বশেষ খবর পড়ুন প্রথম আলোতে।"
        />
        <meta
          name="keywords"
          content="রাজনীতি, বাংলাদেশ, খবর, নির্বাচন, দলীয় রাজনীতি"
        />
      </Helmet>
      <FirstSection />
      <SecondSection />
      <ThirdSection />
      <FourthSection />
      <FifthSection />
      <SixthSection />
      <SeventhSection />
      <EigthSection />
      <NinthSection />
      <TenthSection />
      <AddSection />
      <ElevenSection />
      <TwelveSection />
      <ThirteenSection />
      <FourteenSection />
      <Fifteen />
      <SixteenSection />
    </div>
  );
};

export default Home;
