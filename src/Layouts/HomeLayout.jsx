import React, { useEffect, useState } from "react";
import Navbar from "../Components/Navbar";
import { Outlet } from "react-router";
import Topsection from "../Components/Topsection";
import Footer from "../Components/Footer";
import useWindowsWidth from "../Hooks/useWindowsWidth";

const HomeLayout = () => {
  const [showTop, setShowTop] = useState(true);
  let lastScrollY = 0;

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY < lastScrollY) {
        setShowTop(true); // Scrolling up
      } else {
        setShowTop(false); // Scrolling down
      }

      lastScrollY = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);


  const width = useWindowsWidth();

const getTopValue = () => {
  if (!showTop) return "0"; // Navbar at top when Topsection hidden

  
  if (width >= 1024) {
    return "120px";
  } else if (width >= 400) {
   
    return "71px";
  } else {
   
    return "60px";
  }
};

  return (
    <div className="relative bangla-text2">
      {/* Topsection (sticky at top 0) */}
      <div
        className={`sticky top-0 z-50 transition-all duration-300 bg-white ${
          showTop ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
      >
        <Topsection />
      </div>

      {/* Navbar (sticky BELOW topsection: use top-[height-of-topsection]) */}
      <div
        className={`sticky z-40 bg-white shadow transition-all duration-300`}
        style={{ top: showTop ? getTopValue() : "0" }}
      >
        <Navbar />
      </div>

      <Outlet />
      <Footer />
    </div>
  );
};

export default HomeLayout;
