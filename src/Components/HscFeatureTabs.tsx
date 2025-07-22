'use client';

import Image from 'next/image';
import React, { useState } from 'react';

type Feature = {
  id: number;
  title: string;
  image: string;
  icon: string;
};

const features: Feature[] = [
  { id: 1, title: 'লাইভ এবং রেকর্ডেড ক্লাস', image: '/pic/live.webp', icon: '/pic2/a1.webp' },
  { id: 2, title: 'অ্যানিমেটেড ভিডিও', image: '/pic/animate.webp', icon: '/pic2/a2.webp' },
  { id: 3, title: 'লাইভ MCQ টেস্ট', image: '/pic/mcq.webp', icon: '/pic2/a3.webp' },
  { id: 4, title: 'ক্লাস নোট', image: '/pic/live.webp', icon: '/pic2/a4.webp' },
  { id: 5, title: 'স্মার্ট নোট', image: '/pic/smnote.webp', icon: '/pic2/a5.webp' },
  { id: 6, title: 'রিপোর্ট কার্ড', image: '/pic/report.webp', icon: '/pic2/a6.webp' },
];

const HscFeatureTabs: React.FC = () => {
  const [selectedId, setSelectedId] = useState<number>(features[0].id);

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="text-center mb-8">
        <h1 className="text-2xl md:text-3xl font-bold mb-2">HSC একাডেমিতে যা যা থাকছে</h1>
        <p className="text-gray-600 mb-4">
          ক্লাসের পড়ায় ও বোর্ড পরীক্ষার প্রস্তুতিতে সবার চেয়ে এগিয়ে রাখতে এই প্রোগ্রামে রয়েছে-
        </p>
        <div className="flex items-center justify-center">
          <Image src="/pic/had.webp" width={20} height={20} alt="had" className="mr-2" />
          <p>লাইভ এবং রেকরডেড ক্লাস</p>
        </div>
      </div>

      {/* Desktop View */}
      <div className="hidden md:block">
        <div className="grid grid-cols-3 gap-6">
          <div className="col-span-1 space-y-4">
            {features.map((feature) => (
              <button
                key={feature.id}
                className={`w-full flex items-center p-4 border rounded-lg transition-all ${
                  selectedId === feature.id 
                    ? 'bg-blue-50 border-blue-200 shadow-md' 
                    : 'bg-white hover:bg-gray-50'
                }`}
                onClick={() => setSelectedId(feature.id)}
              >
                <Image
                  src={feature.icon}
                  width={40}
                  height={40}
                  alt={feature.title}
                  className="mr-3"
                />
                <span className="text-left">{feature.title}</span>
              </button>
            ))}
          </div>
          <div className="col-span-2">
            <div className="relative h-full min-h-[400px] rounded-xl overflow-hidden shadow-lg">
              <Image
                src={features.find((f) => f.id === selectedId)?.image || ''}
                alt={features.find((f) => f.id === selectedId)?.title || ''}
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </div>

      {/* Mobile View */}
      <div className="md:hidden space-y-6">
        {features.map((feature) => (
          <div 
            key={feature.id} 
            className="bg-white bg-opacity-80 rounded-xl p-4 shadow-md border border-gray-100"
          >
            <div className="flex items-center mb-3">
              <Image
                src={feature.icon}
                width={24}
                height={24}
                alt={feature.title}
                className="mr-2"
              />
              <h3 className="font-semibold text-lg">{feature.title}</h3>
            </div>
            <div className="relative h-48 w-full rounded-lg overflow-hidden">
              <Image
                src={feature.image}
                alt={feature.title}
                fill
                className="object-cover"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HscFeatureTabs;