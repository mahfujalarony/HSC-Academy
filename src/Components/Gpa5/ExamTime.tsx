import Image from 'next/image'
import React from 'react'

const ExamTime = () => {
  const batches = [
    {
      id: 1,
      name: 'ব্যাচ ১',
      time: '7:00 AM - 10:00 AM',
      image: '/pic5/a.jpg'
    },
    {
      id: 2,
      name: 'ব্যাচ ২',
      time: '12:00 PM - 3:00 PM',
      image: '/pic5/a.jpg'
    },
    {
      id: 3,
      name: 'ব্যাচ ৩',
      time: '4:00 PM - 7:00 PM',
      image: '/pic5/a.jpg'
    },
    {
      id: 4,
      name: 'ব্যাচ ৪',
      time: '8:00 PM - 11:00 PM',
      image: '/pic5/a.jpg'
    }
  ]

  return (
    <div className="max-w-6xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
      <div className="text-center mb-10">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white sm:text-4xl">
          ব্যাচভিত্তিক পরীক্ষা
        </h1>
        <p className="mt-3 text-xl text-gray-600 dark:text-gray-300">
          সুবিধা ও পছন্দ অনুযায়ী যেকোনো ব্যাচে মডেল টেস্ট দেয়ার সুযোগ
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {batches.map((batch) => (
          <div 
            key={batch.id}
            className="group relative bg-white dark:bg-gray-800 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden border border-gray-200 dark:border-gray-700"
          >
            <div className="p-6">
              <div className="flex items-center space-x-4">
                <div className="flex-shrink-0">
                  <div className="relative h-12 w-12 rounded-full overflow-hidden">
                    <Image
                      src={batch.image}
                      width={50}
                      height={50}
                      alt={`batch-${batch.id}`}
                      className="object-cover"
                    />
                  </div>
                </div>
                <div className="flex-1 min-w-0">
                  <h2 className="text-lg font-semibold text-gray-900 dark:text-white truncate">
                    {batch.name}
                  </h2>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    {batch.time}
                  </p>
                </div>
              </div>
              
              <div className="mt-6 flex justify-center">
                <button
                  className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-colors duration-200"
                >
                  পরীক্ষা দিন
                </button>
              </div>
            </div>
            
            {/* Hover effect */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-0 group-hover:opacity-10 transition-opacity duration-300 pointer-events-none"></div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default ExamTime