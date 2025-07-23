import React from "react";
import {
  FaFacebookF,
  //   FaXTwitter,
  FaInstagram,
  FaYoutube,
  FaGoogle,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="max-w-7xl mx-auto bg-white border-t border-gray-300 mt-10 text-center text-black text-sm">
      <div className="px-4 py-8 space-y-6">
        {/* Logo & Links */}
        <div>
          <img
            src="https://i.postimg.cc/CdyDCGvD/image.png"
            alt="prothom alo"
            className="w-48 pb-10"
          />
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 text-center max-w-6xl text-start">
            <p>নাগরিক সংবাদ</p>
            <p>কিশোর আলো</p>
            <p>বিজ্ঞানচিন্তা</p>
            <p>প্রথম আলো ট্রাস্ট</p>
            <p>বন্ধুসভা</p>
            <p>চিরন্তন ১৯৭১</p>
            <p>ইপেপার</p>
            <p>প্রথমা</p>
            <p>মোবাইল ভাস</p>
          </div>
        </div>

        <div className="border-t border-gray-300 my-10"></div>

        <div className="flex items-center justify-between">
          {/* Social Media */}
          <div className="space-y-4  pb-6">
            <p className="font-semibold">অনুসরণ করুন</p>
            <div className="flex justify-center gap-4 text-xl">
              <FaFacebookF className="hover:text-blue-600 hover:scale-125 active:scale-95 transition-transform duration-200 cursor-pointer" />
              {/* <FaXTwitter className="hover:text-black hover:scale-125 active:scale-95 transition-transform duration-200 cursor-pointer" /> */}
              <FaInstagram className="hover:text-pink-600 hover:scale-125 active:scale-95 transition-transform duration-200 cursor-pointer" />
              <FaYoutube className="hover:text-red-600 hover:scale-125 active:scale-95 transition-transform duration-200 cursor-pointer" />
              <FaGoogle className="hover:text-green-600 hover:scale-125 active:scale-95 transition-transform duration-200 cursor-pointer" />
            </div>
          </div>

          {/* App Downloads */}

          <div>
            <p className="font-semibold">মোবাইল অ্যাপস ডাউনলোড করুন</p>
            <div className="flex items-center gap-4">
              {/* Google Play – PNG badge with white effect */}
              <a
                href="https://play.google.com/store"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-white p-1 rounded hover:scale-105 transition-transform duration-300"
              >
                <img
                  src="https://i.postimg.cc/hGqd4X0j/image.png"
                  alt="Get it on Google Play"
                  className="h-10 border-1 rounded"
                />
              </a>

              {/* App Store – SVG badge with white effect */}
              <a
                href="https://www.apple.com/app-store/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg"
                  alt="Download on the App Store"
                  className="h-10 hover:scale-105 transition-transform duration-300 filter invert brightness-200"
                />
              </a>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-300"></div>
        {/* Bottom Links */}
        <div className="flex flex-wrap justify-center gap-3 text-gray-500 text-xs">
          <p className="flex items-center">
            প্রথম আলো{" "}
            <span className=" ml-4 rounded-full align-bottom bg-gray-300 w-2 h-2"></span>
          </p>
          <p>
            বিজ্ঞাপন{" "}
            <span className=" ml-4 rounded-full align-bottom bg-gray-300 w-2 h-2"></span>
          </p>
          <p>
            সার্কুলেশন{" "}
            <span className=" ml-4 rounded-full align-bottom bg-gray-300 w-2 h-2"></span>
          </p>
          <p>
            শর্তাবলি ও নীতিমালা{" "}
            <span className=" ml-4 rounded-full align-bottom bg-gray-300 w-2 h-2"></span>
          </p>
          <p>
            গোপনীয়তা নীতি{" "}
            <span className=" ml-4 rounded-full align-bottom bg-gray-300 w-2 h-2"></span>
          </p>
          <p>
            যোগাযোগ{" "}
            <span className=" ml-4 rounded-full align-bottom bg-gray-300 w-2 h-2"></span>
          </p>
          <p>নিউজলেটার</p>
        </div>
        <div className="border-t border-gray-300 "></div>
        {/* Copyright */}
        <p className="pt-2 text-xs text-gray-500">
          স্বত্ব © ১৯৯৮-২০২৫ প্রথম আলো | সম্পাদক ও প্রকাশক: মতিউর রহমান
        </p>
      </div>
    </footer>
  );
};

export default Footer;
