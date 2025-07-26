import React from "react";

const Left = () => {
  return (
    <div className="border-1 border-gray-600 p-7 xl:mx-0 mx-4 relative xl:mb-0 mb-4" >
       <p className=" absolute -left-5 text-xl space-y-2  text-white font-bold hover:text-[#ffb300] cursor-pointer">
                <span className="text-[#ffb300] bg-[#001246] p-1">
                 মাইলস্টোন স্কুল ট্র্যাজেডি
                  <span className="mx-2 inline-block w-1.5 h-1.5 bg-[#ffb300] rounded-full align-middle"></span>
                </span>{" "}<br></br>
                <span className="bg-[#001246] p-1">চিকিৎসায় যেন কোনো</span><br></br>
                <span className="bg-[#001246] p-1">অবহেলা না হয়</span> 
              </p>
     <p className="mb-8 px-3 pt-30 text-xl text-gray-500 hover:text-gray-800">যঁারা মারা গেছেন, তঁাদের আর আমরা ফিরিয়ে আনতে পারব না। যঁারা আহত হয়ে
      হাসপাতালে ভর্তি হয়েছেন, তঁাদের সুচিকিৎসা দেওয়া এখন সরকারের প্রধান দায়িত্ব।</p> 
    <hr className="border-2 border-gray-400 w-10"></hr>
      <p className="text-lg font-medium">সম্পাদকীয়</p>
    </div>
  );
};

export default Left;
