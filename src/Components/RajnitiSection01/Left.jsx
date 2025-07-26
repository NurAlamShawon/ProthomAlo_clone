import React from "react";

const Left = () => {
  return (
    <div className="xl:pr-4 ">
      {/* upper */}
      <div className="grid grid-cols-12 xl:pb-8 border-b-1 border-gray-300">
        {/* left */}
        <div className="xl:col-span-8 col-span-12 xl:pr-4  xl:pb-0 pb-6 xl:border-b-0 bordeer-b-1 border-gray-300">
          <div className="relative">
            {/* Image */}
            <img
              src="//media.prothomalo.com/prothomalo-bangla%2F2024-10-03%2F1lkhpxpg%2FUntitled-9.jpg?rect=3%2C0%2C1197%2C798&amp;w=560&amp;auto=format%2Ccompress&amp;fmt=avif"
              alt=""
              className="w-full h-auto"
            />

            {/* Gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/60 to-black"></div>

            {/* Text on top */}
            <div className="absolute bottom-4 px-4 z-10">
              <p className="text-2xl font-bold text-white hover:text-[#ffb300]">
                <span className="text-[#ffb300] ">
                  সাক্ষাৎকার: মির্জা ফখরুল ইসলাম আলমগীর
                  <span className="mx-2 inline-block w-1.5 h-1.5 bg-gray-400 rounded-full align-middle"></span>
                </span>
                রাজনীতিতে দক্ষিণপন্থীদের উত্থান দেখছি, আমি উদ্বিগ্ন
              </p>
              <p className="text-base text-gray-300">৬ ঘণ্টা আগে</p>
            </div>
          </div>
        </div>
        {/* right */}
        <div className="col-span-4 pl-4 space-y-3 border-l-1 border-gray-300 xl:inline hidden">
          <img
            src="//media.prothomalo.com/prothomalo-bangla%2F2025-07-26%2Fum8l9rr7%2FMirza-Fakhrul.jfif?rect=0%2C0%2C1568%2C1045&amp;w=560&amp;auto=format%2Ccompress&amp;fmt=avif"
            alt=""
          />
          <p className="text-base text-gray-900 font-bold hover:text-blue-700">
            কয়েকজন ব্যক্তিকে বিদেশ থেকে ভাড়া করে এনে দেশ চালানো যায় না: মির্জা
            ফখরুল কয়েকজন ব্যক্তিকে বিদেশ থেকে ভাড়া করে এনে দেশ চালানো যায় না:
            মির্জা ফখরুল
          </p>
          <p className="text-sm text-gray-400">১৪ ঘণ্টা আগে</p>
        </div>
      </div>
      {/* lower */}

      <div className="hidden xl:grid grid-cols-3 my-10">
        {/* left */}
        <div className="xl:pr-4 pr-4 border-r-1 border-gray-300 space-y-3">
          <img
            src="//media.prothomalo.com/prothomalo-bangla%2F2023-01%2F88946837-b5fe-4222-8d20-1eea043533b0%2FUntitled_1.png?rect=0%2C30%2C605%2C403&amp;w=300&amp;auto=format%2Ccompress&amp;fmt=avif"
            alt=""
          />
          <p className="text-base text-gray-900 font-bold hover:text-blue-700">
            অভ্যুত্থানের অঙ্গীকার ভুলে গেলে আওয়ামী লীগের পরিণতি ভোগ করতে হবে:
            এবি পার্টি
          </p>
          <p className="text-sm text-gray-400">১৫ ঘণ্টা আগে</p>
        </div>
        {/* middle */}
        <div className="xl:px-4 xl:ml-0 ml-4 xl:border-r-1 border-gray-300 space-y-3  ">
          <img
            src="//media.prothomalo.com/prothomalo-bangla%2F2025-07-25%2Fbof11fhd%2Folamayebangladeshislam.jpg?rect=0%2C67%2C1600%2C1067&amp;w=300&amp;auto=format%2Ccompress&amp;fmt=avif"
            alt=""
          />
          <p className="text-base text-gray-900 font-bold hover:text-blue-700">
            জাতিসংঘের কার্যালয় স্থাপন দেশের স্বাধীনতা-সার্বভৌমত্বের ওপরে আঘাত:
            জমিয়তে ওলামায়ে ইসলাম
          </p>
          <p className="text-sm text-gray-400">১৭ ঘণ্টা আগে</p>
        </div>
        {/* right */}
        <div className="xl:pl-4 xl:pr-0 pr-4 space-y-3 xl:border-r-0 border-r-1 border-gray-300">
          <img
            src="//media.prothomalo.com/prothomalo-bangla%2F2025-07-25%2F4k5gs9ks%2FWhatsApp-Image-2025-07-25-at-10.06.43-PM.jpeg?rect=0%2C0%2C1600%2C1067&amp;w=300&amp;auto=format%2Ccompress&amp;fmt=avif"
            alt=""
          />
          <p className="text-base text-gray-900 font-bold hover:text-blue-700">
            বিএনপির সমালোচনার কড়া জবাব দিলেন চরমোনাই পীর
          </p>
          <p className="text-sm text-gray-400">১৭ ঘণ্টা আগে</p>
        </div>
      </div>

      <div className="xl:hidden grid grid-cols-1 mt-6">
        {/* upper */}
         <div className="grid grid-cols-2 pb-6 border-b-1 border-gray-300">
          <div className="xl:pr-4 pr-4 border-r-1 border-gray-300 space-y-3">
            <img
              src="//media.prothomalo.com/prothomalo-bangla%2F2023-01%2F88946837-b5fe-4222-8d20-1eea043533b0%2FUntitled_1.png?rect=0%2C30%2C605%2C403&amp;w=300&amp;auto=format%2Ccompress&amp;fmt=avif"
              alt=""
            />
            <p className="text-base text-gray-900 font-bold hover:text-blue-700">
              অভ্যুত্থানের অঙ্গীকার ভুলে গেলে আওয়ামী লীগের পরিণতি ভোগ করতে হবে:
              এবি পার্টি
            </p>
            <p className="text-sm text-gray-400">১৫ ঘণ্টা আগে</p>
          </div>
          {/* middle */}
          <div className="xl:px-4 xl:ml-0 ml-4 xl:border-r-1 border-gray-300 space-y-3  ">
            <img
              src="//media.prothomalo.com/prothomalo-bangla%2F2025-07-25%2Fbof11fhd%2Folamayebangladeshislam.jpg?rect=0%2C67%2C1600%2C1067&amp;w=300&amp;auto=format%2Ccompress&amp;fmt=avif"
              alt=""
            />
            <p className="text-base text-gray-900 font-bold hover:text-blue-700">
              জাতিসংঘের কার্যালয় স্থাপন দেশের স্বাধীনতা-সার্বভৌমত্বের ওপরে আঘাত:
              জমিয়তে ওলামায়ে ইসলাম
            </p>
            <p className="text-sm text-gray-400">১৭ ঘণ্টা আগে</p>
          </div>
        </div>
        {/* lower */}
        <div className="grid grid-cols-2 mt-6 pb-6 border-b-1 border-gray-300">
          {/* third */}
          <div className=" pr-4 space-y-3 xl:border-r-0 border-r-1 border-gray-300">
            <img
              src="//media.prothomalo.com/prothomalo-bangla%2F2025-07-25%2F4k5gs9ks%2FWhatsApp-Image-2025-07-25-at-10.06.43-PM.jpeg?rect=0%2C0%2C1600%2C1067&amp;w=300&amp;auto=format%2Ccompress&amp;fmt=avif"
              alt=""
            />
            <p className="text-base text-gray-900 font-bold hover:text-blue-700">
              বিএনপির সমালোচনার কড়া জবাব দিলেন চরমোনাই পীর
            </p>
            <p className="text-sm text-gray-400">১৭ ঘণ্টা আগে</p>
          </div>

          {/* fourth */}
          <div className="space-y-3 pl-4 ">
            <img
              src="//media.prothomalo.com/prothomalo-bangla%2F2025-07-26%2Fum8l9rr7%2FMirza-Fakhrul.jfif?rect=0%2C0%2C1568%2C1045&amp;w=560&amp;auto=format%2Ccompress&amp;fmt=avif"
              alt=""
            />
            <p className="text-base text-gray-900 font-bold hover:text-blue-700">
              কয়েকজন ব্যক্তিকে বিদেশ থেকে ভাড়া করে এনে দেশ চালানো যায় না: মির্জা
              ফখরুল কয়েকজন ব্যক্তিকে বিদেশ থেকে ভাড়া করে এনে দেশ চালানো যায় না:
              মির্জা ফখরুল
            </p>
            <p className="text-sm text-gray-400">১৪ ঘণ্টা আগে</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Left;
