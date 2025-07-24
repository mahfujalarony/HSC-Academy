import React from 'react';
import Image from 'next/image';

const PromotionalSection = () => {
  return (
    <div className="p-4 md:p-6 max-w-7xl mx-auto">
      {/* University Cards Section */}
      <div className='flex flex-col lg:flex-row gap-6 justify-center items-stretch'>
        {/* BUETIAN CARD */}
        <div className='w-full lg:w-1/2 rounded-xl shadow-lg border relative overflow-hidden min-h-[300px] bg-gradient-to-br from-blue-50 to-blue-100'>
          <div className="relative z-10 p-6 h-full flex flex-col justify-center">
            <div className="bg-white bg-opacity-80 backdrop-blur-sm rounded-xl p-6">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-2">Next BuEiTian</h2>
              <div className="border-b-2 border-blue-500 w-16 mb-4"></div>
              <p className="my-4 text-lg text-gray-700 leading-relaxed">
                তুমিই কি নেক্সট বুয়েটিয়ান?<br />
                টেস্ট দিয়ে জেনে নাও!
              </p>
              <button className='bg-blue-600 text-white px-6 py-3 rounded-full hover:bg-blue-700 transition-colors text-lg font-semibold mb-4 w-full md:w-auto'>
                টেস্ট দিন
              </button>
              <p className="text-sm text-gray-600">
                অথবা ভিজিট করুন <a href="https://www.buet.ac.bd/" target="_blank" rel="noopener noreferrer" className="underline text-blue-700 hover:text-blue-900">বুয়েটের ওয়েবসাইট</a>
              </p>
            </div>
          </div>
        </div>

        {/* DHAKAIAN CARD */}
        <div className='w-full lg:w-1/2 rounded-xl shadow-lg border relative overflow-hidden min-h-[300px] bg-gradient-to-br from-green-50 to-green-100'>
          <div className="relative z-10 p-6 h-full flex flex-col justify-center">
            <div className="bg-white bg-opacity-80 backdrop-blur-sm rounded-xl p-6">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-2">DAVI - Dhaka University</h2>
              <div className="border-b-2 border-green-500 w-16 mb-4"></div>
              <p className="my-4 text-lg text-gray-700 leading-relaxed">
                তুমিই কি নেক্সট ঢাকা বিশ্ববিদ্যালয়িয়ান?<br />
                টেস্ট দিয়ে জেনে নাও!
              </p>
              <button className='bg-green-600 text-white px-6 py-3 rounded-full hover:bg-green-700 transition-colors text-lg font-semibold mb-4 w-full md:w-auto'>
                টেস্ট দিন
              </button>
              <p className="text-sm text-gray-600">
                অথবা ভিজিট করুন <a href="https://www.du.ac.bd/" target="_blank" rel="noopener noreferrer" className="underline text-green-700 hover:text-green-900">ঢাকা বিশ্ববিদ্যালয়ের ওয়েবসাইট</a>
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Why Choose Us Section */}
      <div className='mt-10 flex flex-col lg:flex-row gap-6'>
        <div className='bg-gradient-to-r from-blue-50 via-white to-green-50 rounded-xl p-6 lg:p-8 shadow-lg flex-1'>
          <h1 className="text-2xl md:text-3xl font-bold mb-4 text-gray-800">কেন Hsc Academy-তে আস্থা রাখবে?</h1>
          <p className="text-gray-700 text-base md:text-lg leading-relaxed">
            সেরা মেন্টর ও সর্বাধুনিক প্রযুক্তির সাথে সারাদেশের ১০ লক্ষ+ শিক্ষার্থীর মানসম্মত পড়ালেখা ও পরীক্ষা প্রস্তুতির নির্ভরযোগ্য প্রতিষ্ঠান Hsc Academy
          </p>
        </div>

        <div className='grid grid-cols-2 sm:grid-cols-4 gap-4 md:gap-6'>
          <div className="bg-white p-4 rounded-lg shadow-md flex flex-col items-center text-center">
            <div className="relative w-16 h-16 md:w-20 md:h-20 mb-3">
              <Image 
                src="/pic3/a1.webp"
                alt="Expert Mentors"
                fill
                className="object-contain"
              />
            </div>
            <h3 className="font-semibold text-gray-800">দক্ষ মেন্টর</h3>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-md flex flex-col items-center text-center">
            <div className="relative w-16 h-16 md:w-20 md:h-20 mb-3">
              <Image 
                src="/pic3/a2.webp"
                alt="Quality Education"
                fill
                className="object-contain"
              />
            </div>
            <h3 className="font-semibold text-gray-800">মানসম্মত শিক্ষা</h3>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-md flex flex-col items-center text-center">
            <div className="relative w-16 h-16 md:w-20 md:h-20 mb-3">
              <Image 
                src="/pic3/a3.webp"
                alt="Modern Technology"
                fill
                className="object-contain"
              />
            </div>
            <h3 className="font-semibold text-gray-800">আধুনিক প্রযুক্তি</h3>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-md flex flex-col items-center text-center">
            <div className="relative w-16 h-16 md:w-20 md:h-20 mb-3">
              <Image 
                src="/pic3/a4.webp"
                alt="Trusted by Students"
                fill
                className="object-contain"
              />
            </div>
            <h3 className="font-semibold text-gray-800">১০ লক্ষ+ শিক্ষার্থী</h3>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PromotionalSection;