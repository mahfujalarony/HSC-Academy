'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { courseList } from '@/Components/course/data/courseList';
import Image from 'next/image';

const categories: { [key: string]: string } = {
  all: 'সকল ক্লাস',
  admission: 'এডমিশন',
  hsc: 'এইচএসসি',
  'class-10': 'ক্লাস ১০',
  'class-9': 'ক্লাস ৯',
  'class-8': 'ক্লাস ৮',
  'class-7': 'ক্লাস ৭',
  'class-6': 'ক্লাস ৬',
};

export default function CategoryPage({
  params,
}: {
  params: Promise<{ category: string }>;
}) {
  const router = useRouter();
  const [category, setCategory] = useState<string>('');
  const [isLoading, setIsLoading] = useState(true);

  // Extract category from params Promise
  useEffect(() => {
    params.then((resolvedParams) => {
      setCategory(resolvedParams.category);
    });
  }, [params]);

  const title = categories[category] || 'কোর্স';

  useEffect(() => {
    if (category) {
      document.title = `${title} - কোর্সসমূহ`;
      
      const timer = setTimeout(() => {
        setIsLoading(false);
      }, 1000);
      
      return () => clearTimeout(timer);
    }
  }, [category, title]);

  const filteredCourses =
    category === 'all'
      ? courseList
      : courseList.filter((course) => course.category === category);

  return (
    <div className="p-6 max-w-7xl mx-auto">
      {/* Navigation Buttons - Skeleton */}
      <div className="flex flex-wrap gap-3 mb-6">
        {isLoading ? (
          Array(8).fill(0).map((_, i) => (
            <div key={i} className="h-10 w-24 bg-gray-200 rounded animate-pulse"></div>
          ))
        ) : (
          Object.entries(categories).map(([key, value]) => (
            <button
              key={key}
              onClick={() => router.push(`/courses/${key}`)}
              className={`px-4 py-2 rounded border ${
                key === category ? 'bg-blue-600 text-white' : 'bg-white text-gray-800'
              } hover:shadow transition`}
            >
              {value}
            </button>
          ))
        )}
      </div>

      {/* Section Title - Skeleton */}
      <div className="text-xl font-semibold text-gray-700 mb-4">
        {isLoading ? (
          <div className="h-7 w-64 bg-gray-200 rounded animate-pulse"></div>
        ) : (
          <>🔰 আপনি দেখছেন: <span className="text-blue-600">{title}</span> এর কোর্সসমূহ</>
        )}
      </div>

      {/* Course Grid - Skeleton */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {isLoading ? (
          Array(8).fill(0).map((_, i) => (
            <div key={i} className="border rounded-xl p-4">
              <div className="bg-gray-200 rounded-md w-full h-[180px] animate-pulse"></div>
              <div className="h-6 bg-gray-200 rounded mt-3 w-3/4 animate-pulse"></div>
              <div className="h-4 bg-gray-200 rounded mt-2 w-full animate-pulse"></div>
              <div className="h-4 bg-gray-200 rounded mt-1 w-5/6 animate-pulse"></div>
            </div>
          ))
        ) : (
          filteredCourses.map((course) => (
            <div 
              key={course.id} 
              className="border rounded-xl p-4 shadow hover:shadow-lg transition cursor-pointer"
              onClick={() => router.push(`/course/${course.id}`)}
            >
              <Image
                src={course.thumbnail}
                alt={course.alt}
                title={course.title}
                width={400}
                height={250}
                className="rounded-md object-cover w-full h-[180px]"
              />
              <h3 className="text-lg font-bold mt-3 text-gray-800">{course.title}</h3>
              <p className="text-sm text-gray-600 line-clamp-2">{course.description}</p>
            </div>
          ))
        )}
      </div>
    </div>
  );
}