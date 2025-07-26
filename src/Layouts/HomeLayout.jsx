import React, { useEffect, useState } from "react";
import Navbar from "../Components/Navbar";
import { Outlet } from "react-router";
import Topsection from "../Components/Topsection";
import Footer from "../Components/Footer";

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

  return (
    <div className="relative">
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
        style={{ top: showTop ? "120px" : "0" }}
      >
        <Navbar />
      </div>

      <Outlet />
      <Footer />
    </div>
  );
};

export default HomeLayout;
