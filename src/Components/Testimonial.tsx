"use client";

import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';

interface Testimonial {
  id: number;
  quote: string;
  author: string;
  designation: string;
  school: string;
  imageUrl: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    quote: "লাইভ ক্লাসে চ্যাটের মাধ্যমে প্রশ্ন করলে টিচাররা তার উত্তর দেয়, এজন্য আমার অনেক সুবিধা হয়েছে।",
    author: "সাইফাওয়াত নাওযার",
    designation: "১০ম শ্রেণি",
    school: "হলি ক্রস উচ্চ বালিকা বিদ্যালয়",
    imageUrl: "/pic2/v1.jpg",
  },
  {
    id: 2,
    quote: "শিক্ষকরা অনেক যত্ন সহকারে পড়ান এবং যেকোনো সমস্যা সমাধান করে দেন, যা আমার পড়াশোনায় অনেক সাহায্য করেছে।",
    author: "আয়শা সিদ্দিকা",
    designation: "৯ম শ্রেণি",
    school: "ভিকারুননিসা নূন স্কুল ও কলেজ",
    imageUrl: "/pic2/v2.jpg",
  },
  {
    id: 3,
    quote: "কুইজ এবং মডেল টেস্টগুলো পরীক্ষার জন্য আমাকে দারুণভাবে প্রস্তুত করতে সাহায্য করে।",
    author: "রিফাত আহমেদ",
    designation: "৮ম শ্রেণি",
    school: "মতিঝিল মডেল স্কুল এন্ড কলেজ",
    imageUrl: "/pic2/v3.jpg",
  },
  {
    id: 4,
    quote: "প্রতিটি অধ্যায়ের বিস্তারিত আলোচনা এবং নোটগুলো বিষয়বস্তু বুঝতে সহজ করে তুলেছে।",
    author: "ফারজানা আক্তার",
    designation: "৭ম শ্রেণি",
    school: "আইডিয়াল স্কুল এন্ড কলেজ",
    imageUrl: "/pic2/v4.jpg",
  },
  {
    id: 5,
    quote: "বাসায় বসেই ক্লাস করতে পারায় সময় এবং যাতায়াতের খরচ দুটোই বেঁচেছে, যা আমার জন্য খুবই সুবিধাজনক।",
    author: "তানভীর হাসান",
    designation: "৬ষ্ঠ শ্রেণি",
    school: "রাজউক উত্তরা মডেল কলেজ",
    imageUrl: "/pic2/v5.jpg",
  },
  {
    id: 6,
    quote: "লাইভ ক্লাসগুলো খুব ইন্টারেক্টিভ হয় এবং শিক্ষকদের সাথে সরাসরি কথা বলার সুযোগ থাকায় প্রশ্ন করতে দ্বিধা হয় না।",
    author: "নুসরাত জাহান",
    designation: "৯ম শ্রেণি",
    school: "মনিপুর উচ্চ বিদ্যালয় ও কলেজ",
    imageUrl: "/pic2/v2.jpg",
  },
];

const Testimonial: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const goToNext = useCallback(() => {
    if (isAnimating) return;
    setIsAnimating(true);
    setDirection(1);
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  }, [isAnimating]);

  const goToPrevious = useCallback(() => {
    if (isAnimating) return;
    setIsAnimating(true);
    setDirection(-1);
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  }, [isAnimating]);

  const goToSlide = useCallback((index: number) => {
    if (isAnimating || index === currentIndex) return;
    setIsAnimating(true);
    setDirection(index > currentIndex ? 1 : -1);
    setCurrentIndex(index);
  }, [currentIndex, isAnimating]);

  useEffect(() => {
    const autoplayInterval = setInterval(goToNext, 5000);
    return () => clearInterval(autoplayInterval);
  }, [goToNext]);

  const currentTestimonial = testimonials[currentIndex];

  return (
    <div className="relative w-full max-w-4xl mx-auto p-6 md:p-8 bg-white rounded-lg shadow-lg mt-10 overflow-hidden">
      <div className="relative h-[500px] md:h-[400px]">
        <AnimatePresence initial={false} custom={direction}>
          <motion.div
            key={currentTestimonial.id}
            custom={direction}
            initial={{ x: direction > 0 ? '100%' : '-100%', opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: direction < 0 ? '100%' : '-100%', opacity: 0 }}
            transition={{ duration: 0.5, ease: 'easeInOut' }}
            onAnimationComplete={() => setIsAnimating(false)}
            className="absolute w-full h-full flex flex-col md:flex-row items-center justify-center gap-8 md:gap-12"
          >
            {/* Quote Section */}
            <div className="md:w-1/2 flex flex-col items-start space-y-4 px-4">
              <div className="text-4xl text-blue-600">
                <span className="font-serif">&ldquo;</span>
              </div>
              <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
                {currentTestimonial.quote}
              </p>
              <div className="mt-4">
                <h3 className="text-xl font-semibold text-gray-900">
                  {currentTestimonial.author}
                </h3>
                <p className="text-gray-600">
                  {currentTestimonial.designation}, {currentTestimonial.school}
                </p>
              </div>
            </div>

            {/* Image Section */}
            <div className="md:w-1/2 flex justify-center items-center h-full">
              <div className="relative w-full h-full max-w-md max-h-64 rounded-lg overflow-hidden shadow-xl">
<Image
  src={currentTestimonial.imageUrl}
  alt={currentTestimonial.author}
  width={400}
  height={300}
  className="object-cover rounded-lg w-full h-auto"
/>

              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Navigation Buttons */}
      <button
        onClick={goToPrevious}
        className="absolute top-1/2 -translate-y-1/2 left-2 md:left-4 bg-blue-500 hover:bg-blue-600 text-white p-2 md:p-3 rounded-full shadow-lg transition-all duration-300 hover:scale-110 focus:outline-none disabled:opacity-50 z-10"
        disabled={testimonials.length <= 1 || isAnimating}
        aria-label="Previous testimonial"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 md:h-6 md:w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>
      <button
        onClick={goToNext}
        className="absolute top-1/2 -translate-y-1/2 right-2 md:right-4 bg-blue-500 hover:bg-blue-600 text-white p-2 md:p-3 rounded-full shadow-lg transition-all duration-300 hover:scale-110 focus:outline-none disabled:opacity-50 z-10"
        disabled={testimonials.length <= 1 || isAnimating}
        aria-label="Next testimonial"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 md:h-6 md:w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>

      {/* Indicators */}
      <div className="flex justify-center mt-6 space-x-2">
        {testimonials.map((_, idx) => (
          <button
            key={idx}
            onClick={() => goToSlide(idx)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              idx === currentIndex ? 'bg-blue-600 scale-125' : 'bg-gray-300 hover:bg-gray-400'
            } focus:outline-none`}
            aria-label={`Go to testimonial ${idx + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default Testimonial;