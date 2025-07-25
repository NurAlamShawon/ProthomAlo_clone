import React from 'react';

const Right = () => {
    return (
        <div>
      {/* upper */}
      <div className="grid grid-cols-2 gap-4">
        <div className="pr-4 border-r-2  space-y-2 border-gray-300">
          <img
            src="//media.prothomalo.com/prothomalo-bangla%2F2023-11%2F776bb2ed-1a9f-4043-8710-a8fb8b53afe9%2FCoxs_Bazar_DH0497_20231110_Rell_04.jpg?rect=104%2C0%2C1368%2C912&amp;w=300&amp;auto=format%2Ccompress&amp;fmt=avif" 
            alt=""
            
          />
          <h1 className="text-xl text-black font-bold">
           কক্সবাজারের ট্রেনে দেড় বছরেও পণ্য পরিবহন হচ্ছে না
          </h1>
          <p className="text-base text-gray-600">১ ঘণ্টা আগে</p>
        </div>

        <div className="space-y-2">
          <img
            src="//media.prothomalo.com/prothomalo%2Fimport%2Fmedia%2F2018%2F02%2F04%2F3359161c2bad0eb88e1063764dce2dd8-5a771680e5ff9.jpg?rect=0%2C10%2C1600%2C1067&amp;w=300&amp;auto=format%2Ccompress&amp;fmt=avif" 
            alt=""
           
          />
          <h1 className="text-xl text-black font-bold">
           উৎপাদনস্থলেই মরিচের কেজি ১৮০ টাকা
          </h1>
          <p className="text-base text-gray-600">২ ঘণ্টা আগে</p>
        </div>
      </div>

      <hr className="border-1 my-6 border-gray-200"></hr>

      {/* lower */}
      <div className="grid grid-cols-2 gap-4">
        <div className="pr-4 border-r-2 space-y-2 border-gray-300">
          <img
           src="//media.prothomalo.com/prothomalo-bangla%2F2025-04-04%2F9znxwx8p%2F04042025-cm-16.jpg?rect=136%2C0%2C1281%2C854&amp;w=300&amp;auto=format%2Ccompress&amp;fmt=avif" 
            alt=""
           
          />
          <h1 className="text-xl text-black font-bold">
           দুই সপ্তাহে মুরগির দাম ২০–৩০ টাকা বেড়েছে
          </h1>
          <p className="text-base text-gray-600">৩ ঘণ্টা আগে</p>
        </div>

        <div className="space-y-2">
          <img
            src="//media.prothomalo.com/prothomalo-bangla%2F2020-12%2F614f1f56-0436-44d5-bd9e-5fdd0cbcf173%2F451c7e8d-3819-4f50-80df-9f0604330e9b.jpg?rect=107%2C0%2C1152%2C768&amp;w=300&amp;auto=format%2Ccompress&amp;fmt=avif" 
            alt=""
          
          />
          <h1 className="text-xl text-black font-bold">
           মূল্যস্ফীতির চাপ ঠেকাতে নতুন বেতন কমিশন
          </h1>
          <p className="text-base text-gray-600">৩ ঘণ্টা আগে</p>
        </div>
      </div>
    </div>
    );
};

export default Right;