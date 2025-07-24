"use client";

import Button from '@/Components/ui/Button';

export default function Hero() {
  return (
    <div 
      className="relative flex flex-col   hero-section px-4"
      style={{ 
      
        backgroundSize: 'cover', 
        backgroundPosition: 'center', 
        minHeight: '100vh' 
      }}
    >
      {/* Dark overlay for better text readability */}
   
      {/* Content */}
      <div className="relative z-10 max-w-4xl ">
        <h1 className="mt-20 text-xl sm:text-2xl md:text-4xl font-bold text-[#c7294b] mb-4">
          একাডেমিক থেকে এডমিশন
        </h1>
<h2 className="mt-5 sm:mt-10 text-xl sm:text-2xl md:text-4xl font-bold text-[#600ead] mb-8">
  <span>প্রস্তুতি নাও দেশের সেরা</span>
  <span className="block mt-2">শিক্ষকদের সাথে</span>
</h2>
        
        <div className="flex mt-5  sm:mt-24 flex-col sm:flex-row gap-4 ">
          <Button variant="primary" className="px-8 py-3 text-lg">
            একাডেমিক প্রোগ্রাম দেখুন 
          </Button>
          <Button variant="secondary" className="px-8 py-3 text-lg">
            শিখতে শুরু করুন
          </Button>
        </div>
      </div>
    </div>
  );
}