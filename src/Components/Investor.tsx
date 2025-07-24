"use client";

import Image from "next/image";

const investors = [
  "/pic3/in1.png",
  "/pic3/in2.png",
  "/pic3/in3.png",
  "/pic3/in4.jpg",
  "/pic3/in5.jpg",
  "/pic3/in6.jpg",
  "/pic3/in7.png",
  "/pic3/in8.jpg",
  "/pic3/in9.png",
  "/pic3/in10.jpg",
  "/pic3/in11.png",
  "/pic3/in12.png",
  "/pic3/in13.png",
  "/pic3/in14.png",
  "/pic3/in15.jpg",
];

const InvestorSlider = () => {
  const duplicatedInvestors = [...investors, ...investors]; // for seamless loop

  return (
    <div className="overflow-hidden mx-auto justify-center h-screen     bg-gray-100 py-4">
      <h2 className="text-center text-2xl xl:text-4xl text-blue-700 font-bold m-24 ">আমাদের ইনভেস্টর</h2>
      <div className="animate-scroll flex w-fit gap-12">
        {duplicatedInvestors.map((src, index) => (
          <div key={index} className="flex-shrink-0 border p-4 rounded-lg border-fuchsia-600">
            <Image
  src={src}
  alt={`Investor ${index + 1}`}
  width={0}
  height={0}
  sizes="100vw"
  className="w-[150px] h-[150px] md:w-[300px] md:h-[300px] object-contain"
/>

          </div>
        ))}
      </div>
    </div>
  );
};

export default InvestorSlider;
