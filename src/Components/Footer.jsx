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
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4  max-w-6xl text-start">
            <p className="hover:text-blue-700">নাগরিক সংবাদ</p>
            <p className="hover:text-blue-700">কিশোর আলো</p>
            <p className="hover:text-blue-700">বিজ্ঞানচিন্তা</p>
            <p className="hover:text-blue-700">প্রথম আলো ট্রাস্ট</p>
            <p className="hover:text-blue-700">বন্ধুসভা</p>
            <p className="hover:text-blue-700">চিরন্তন ১৯৭১</p>
            <p className="hover:text-blue-700">ইপেপার</p>
            <p className="hover:text-blue-700">প্রথমা</p>
            <p className="hover:text-blue-700">মোবাইল ভাস</p>
          </div>
        </div>

        <div className="border-t border-gray-300 my-10"></div>

        <div className="flex items-center justify-between">
          {/* Social Media */}
          <div className="space-y-4  pb-6">
            <p className="font-semibold text-gray-500 text-xs">অনুসরণ করুন</p>
            <div className="flex justify-center gap-3 text-xl">
              <div className="flex gap-4 items-center">
                {/* Facebook */}
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-full"
                >
                  <img
                    src="https://i.postimg.cc/GpBTCPCD/image.png"
                    alt="Facebook"
                    className="h-9 w-9  hover:scale-125 active:scale-95 transition-transform duration-200 cursor-pointer"
                  />
                </a>

                {/* Twitter (X) */}
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src="https://i.postimg.cc/6qK8nDGV/image.png"
                    alt="Twitter"
                    className="h-10 w-10  object-contain hover:scale-125 active:scale-95 transition-transform duration-200 cursor-pointer"
                  />
                </a>

                {/* Instagram */}
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src="https://i.postimg.cc/7bvm3Pns/image.png"
                    alt="Instagram"
                    className="h-10 w-10 object-contain hover:scale-125 active:scale-95 transition-transform duration-200 cursor-pointer"
                  />
                </a>

                {/* YouTube */}
                <a
                  href="https://youtube.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src="https://i.postimg.cc/R0nh8M7Q/image.png"
                    alt="YouTube"
                    className="h-10 w-10  object-contain hover:scale-125 active:scale-95 transition-transform duration-200 cursor-pointer"
                  />
                </a>

                {/* Google news */}
                <a
                  href="https://www.google.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-full  bg-gray-300 hover:scale-125 active:scale-95 transition-transform duration-200 cursor-pointer"
                >
                  <img
                    src="https://i.postimg.cc/nLvZBMK5/image.png"
                    alt="Google"
                    className="h-6 w-6 rounded-full object-contain  p-0.5"
                  />
                </a>
              </div>
            </div>
          </div>

          {/* App Downloads */}

          <div>
            <p className="font-semibold text-gray-500 text-xs">মোবাইল অ্যাপস ডাউনলোড করুন</p>
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
                  className="h-10 border-1 border-gray-300 rounded"
                />
              </a>

              {/* App Store – SVG badge with white effect */}
              <a
                href="https://www.apple.com/app-store/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="https://i.postimg.cc/L6Ry85h5/image.png"
                  alt="Download on the App Store"
                  className="h-10 border-1 rounded bg-white border-gray-300 hover:scale-105 transition-transform duration-300 "
                />
              </a>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-300"></div>
        {/* Bottom Links */}
        <div className="flex flex-wrap justify-center gap-3 text-gray-500 text-xs">
          <p className="flex items-center hover:text-blue-700">
            প্রথম আলো{" "}
            <span className="ml-4 rounded-full align-bottom bg-gray-300 w-2 h-2"></span>
          </p>
          <p className="flex items-center hover:text-blue-700">
            বিজ্ঞাপন{" "}
            <span className="ml-4 rounded-full align-bottom bg-gray-300 w-2 h-2"></span>
          </p>
          <p className="flex items-center hover:text-blue-700">
            সার্কুলেশন{" "}
            <span className="ml-4 rounded-full align-bottom bg-gray-300 w-2 h-2"></span>
          </p>
          <p className="flex items-center hover:text-blue-700">
            শর্তাবলি ও নীতিমালা{" "}
            <span className="ml-4 rounded-full align-bottom bg-gray-300 w-2 h-2"></span>
          </p>
          <p className="flex items-center hover:text-blue-700">
            গোপনীয়তা নীতি{" "}
            <span className="ml-4 rounded-full align-bottom bg-gray-300 w-2 h-2"></span>
          </p>
          <p className="flex items-center hover:text-blue-700">
            যোগাযোগ{" "}
            <span className="ml-4 rounded-full align-bottom bg-gray-300 w-2 h-2"></span>
          </p>
          <p className="hover:text-blue-700">নিউজলেটার</p>
        </div>

        <div className="border-t border-gray-300 "></div>
        {/* Copyright */}
        <p className="pt-2 text-xs text-gray-500 hover:text-blue-700">
          স্বত্ব © ১৯৯৮-২০২৫ প্রথম আলো | সম্পাদক ও প্রকাশক: মতিউর রহমান
        </p>
      </div>
    </footer>
  );
};

export default Footer;
