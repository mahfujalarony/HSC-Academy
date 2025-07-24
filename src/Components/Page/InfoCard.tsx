// components/InfoCard.tsx
import React from "react";
import Image from "next/image";

const InfoCard = () => {
  const courses = [
    { title: "স্কুল", range: "৬ষ্ঠ থেকে ৮ম শ্রেণী", img: "/pic/cls-6-8.svg" },
    { title: "মাধ্যমিক", range: "৯ম থেকে ১০ম শ্রেণী", img: "/pic/cls-9-12.svg" },
    { title: "উচ্চমাধ্যমিক", range: "১১তম থেকে ১২তম শ্রেণী", img: "/pic/cls-12-plus.svg" },
  ];

  return (
    <div className="pb-10">
      <div className="py-20 grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 md:gap-6 xl:w-[85%] xl:border items-center p-6 bg-gray-50 mx-auto xl:mt-[-5rem] rounded-lg shadow-md relative z-20">
        {[  // স্ট্যাটিসটিক্স
          { value: "৩০ লক্ষ +", label: "ছাত্র-ছাত্রী", color: "text-red-500" },
          { value: "১০০ জন +", label: "শিক্ষক", color: "text-blue-600" },
          { value: "৫ শত +", label: "কোর্স", color: "text-yellow-600" },
          { value: "১০০০ জন +", label: "সফল শিক্ষার্থী", color: "text-green-600" },
        ].map((item, index) => (
          <div key={index} className="text-center space-y-2">
            <h1 className={`${item.color} text-2xl font-bold`}>{item.value}</h1>
            <p className="font-bold text-xl">{item.label}</p>
          </div>
        ))}
      </div>

      <div
        className="bg-[url('/pic/i-bg.png')] bg-cover bg-center border bg-slate-100 border-blue-700 rounded-lg py-10 container mx-auto px-4 mt-10"
      >
        <h1 className="text-2xl md:text-3xl font-bold text-center mb-4">
          মাধ্যমিক ও উচ্চমাধ্যমিকের পড়ালেখা এবং পরীক্ষা প্রস্তুতির পূর্ণাঙ্গ প্রোগ্রাম
        </h1>
        <p className="text-gray-600 text-center mb-8 max-w-2xl mx-auto">
          বছরজুড়ে দেশসেরা মেন্টরদের লাইভ ক্লাস, লাইভ এক্সাম, ক্লাস নোট, অ্যানিমেটেড ভিডিও-তে A+ প্রস্তুতি নাও
        </p>

        <div className="flex flex-wrap justify-center gap-4">
          {courses.map((course, index) => (
            <div
              key={index}
              className="border bg-gray-200 rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow w-full sm:w-[45%] md:w-[30%] lg:w-[30%]"
            >
              <Image
                src={course.img}
                alt={course.title}
                width={80}
                height={80}
                className="mx-auto"
              />
              <h1 className="text-lg font-bold text-gray-800 mt-2 text-center">
                {course.title}
              </h1>
              <p className="text-sm text-gray-600 text-center">{course.range}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default InfoCard;
