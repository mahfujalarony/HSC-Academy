"use client";

import React, { useState, useEffect } from 'react'

const HelpSection = () => {
  const [isVisible, setIsVisible] = useState(false)
  const [activeCard, setActiveCard] = useState<null | "video" | "group">(null);

  // Mobile: touch simulation for hover
  const [touchCard, setTouchCard] = useState<null | "video" | "group">(null);

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const handleCallClick = () => {
    alert('Calling 166615...')
  }

  const handleVideoClick = () => {
    window.open('/video-library', '_blank')
  }

  const handleGroupClick = () => {
    window.open('https://facebook.com/groups/your-group', '_blank')
  }

  // Helper for mobile hover: touch for highlight, second tap for action
  const handleMobileCardTouch = (card: "video" | "group", callback: () => void) => {
    if (touchCard !== card) {
      setTouchCard(card)
      setTimeout(() => setTouchCard(null), 600) // remove highlight after 600ms
    } else {
      callback()
    }
  }

  return (
    <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
      {/* Mobile Layout */}
      <div className="flex flex-col lg:hidden min-h-screen">
        {/* Main Help Section */}
        <div 
          className="relative overflow-hidden"
          style={{
            backgroundImage: 'url(/pic3/p1.png)', 
            backgroundSize: 'cover', 
            backgroundPosition: 'center',
            minHeight: '60vh'
          }}
        >
          <div className="absolute inset-0 bg-opacity-40"></div>
          <div className="relative z-10 flex items-center justify-center h-full px-4 py-12">
            <div className="text-white text-center max-w-md">
              <h2 className="text-2xl sm:text-3xl font-bold mb-4 leading-tight animate-fade-in-up">
                যেকোনো প্রয়োজনে কল করো এখনই
              </h2>
              <p className="text-base sm:text-lg mb-4 opacity-90 animate-fade-in-up animation-delay-200">
                আমাদের টিম সবসময় তোমার পাশে আছে। যেকোনো প্রশ্ন বা সমস্যার জন্য যোগাযোগ করো।
              </p>
              <p className="text-base sm:text-lg mb-6 opacity-90 animate-fade-in-up animation-delay-400">
                সকাল ৯ টা থেকে রাত ১০ টা
              </p>
              <button 
                onClick={handleCallClick}
                className="px-8 py-4 bg-blue-600 hover:bg-blue-700 active:bg-blue-800 text-white rounded-lg text-xl font-bold transform transition-all duration-200 hover:scale-105 active:scale-95 shadow-lg hover:shadow-xl animate-fade-in-up animation-delay-600"
              >
                📞 166615
              </button>
              <p className="text-sm mt-4 opacity-80 animate-fade-in-up animation-delay-800">
                যেকোনো নাম্বর থেকে সাধারন কল রেট
              </p>
            </div>
          </div>
        </div>

        {/* Video Library Section */}
        <div
          className={`
            relative overflow-hidden cursor-pointer transform transition-all duration-300
            ${touchCard === 'video' ? 'scale-105' : ''}
            ${activeCard === 'video' ? 'scale-105' : ''}
          `}
          style={{
            backgroundImage: 'url(/pic3/p2.png)', 
            backgroundSize: 'cover', 
            backgroundPosition: 'center',
            minHeight: '35vh'
          }}
          // Desktop hover
          onMouseEnter={() => setActiveCard('video')}
          onMouseLeave={() => setActiveCard(null)}
          // Mobile touch
          onTouchStart={e => {
            e.stopPropagation()
            handleMobileCardTouch('video', handleVideoClick)
          }}
          onClick={() => handleVideoClick()}
        >
          <div className="absolute inset-0 transition-all duration-300"></div>
          {/* Hover Overlay */}
          <div className={`absolute inset-0 bg-blue-600 bg-opacity-20 transition-all duration-300 
            ${(activeCard === 'video' || touchCard === 'video') ? 'opacity-100' : 'opacity-0'}`}></div>
          
          <div className="relative z-10 flex flex-col items-center justify-center h-full p-6 text-center">
            <h3 className="font-bold text-lg sm:text-xl text-white mb-4 drop-shadow-lg">
              📚 ফ্রী ভিডিও লাইব্রেরি
            </h3>
            <button className="px-6 py-3 bg-blue-600 hover:bg-blue-700 active:bg-blue-800 text-white rounded-lg transform transition-all duration-200 hover:scale-105 active:scale-95 shadow-lg">
              ভিডিও দেখ →
            </button>
          </div>
        </div>

        {/* Facebook Group Section */}
        <div
          className={`
            relative overflow-hidden cursor-pointer transform transition-all duration-300
            ${touchCard === 'group' ? 'scale-95' : ''}
            ${activeCard === 'group' ? 'scale-95' : ''}
          `}
          style={{
            backgroundImage: 'url(/pic3/p3.png)', 
            backgroundSize: 'cover', 
            backgroundPosition: 'center',
            minHeight: '25vh'
          }}
          // Desktop hover
          onMouseEnter={() => setActiveCard('group')}
          onMouseLeave={() => setActiveCard(null)}
          // Mobile touch
          onTouchStart={e => {
            e.stopPropagation()
            handleMobileCardTouch('group', handleGroupClick)
          }}
          onClick={() => handleGroupClick()}
        >
          <div className="absolute inset-0  bg-opacity-30 transition-all duration-300"></div>
          <div className={`absolute inset-0 bg-blue-600 bg-opacity-20 transition-all duration-300 ${(activeCard === 'group' || touchCard === 'group') ? 'opacity-100' : 'opacity-0'}`}></div>
          
          <div className="relative z-10 flex flex-col items-center justify-center h-full p-6 text-center">
            <h3 className="font-bold text-lg sm:text-xl text-white mb-4 drop-shadow-lg leading-tight">
              👥 এইস এসসি একাডেমির ফেইসবুক গ্রুপে জোগ দাও
            </h3>
            <button className="px-6 py-3 bg-blue-600 hover:bg-blue-700 active:bg-blue-800 text-white rounded-lg transform transition-all duration-200 hover:scale-105 active:scale-95 shadow-lg">
              গ্রুপে যোগ দাও →
            </button>
          </div>
        </div>
      </div>

      {/* Desktop Layout */}
      <div className="hidden  p-10 bg-slate-200 lg:flex min-h-screen">
        {/* Main Help Section - Left Side */}
        <div 
          className="flex-1 hover:scale-95 transition-all duration-300  relative overflow-hidden"
          style={{
            backgroundImage: 'url(/pic3/p1.png)', 
            backgroundSize: 'cover', 
            backgroundPosition: 'center'
          }}
        >
          <div className="absolute inset-0  bg-opacity-40"></div>
          
          <div className="relative z-10 flex  items-center justify-center h-full p-8">
            <div className="text-white  max-w-lg">
              <h2 className="text-4xl text-cyan-800 xl:text-5xl font-bold mb-6 leading-tight animate-fade-in-up">
                যেকোনো প্রয়োজনে কল করো এখনই
              </h2>
              <p className="text-xl xl:text-2xl text-emerald-800 mb-6 opacity-90 animate-fade-in-up animation-delay-200">
                আমাদের টিম সবসময় তোমার পাশে আছে। যেকোনো প্রশ্ন বা সমস্যার জন্য যোগাযোগ করো।
              </p>
              <p className="text-xl xl:text-2xl mb-8 text-fuchsia-500 opacity-90 animate-fade-in-up animation-delay-400">
                সকাল ৯ টা থেকে রাত ১০ টা
              </p>
              <button 
                onClick={handleCallClick}
                className="px-10 py-5 bg-blue-600 hover:bg-blue-700 active:bg-blue-800 text-white rounded-lg text-2xl font-bold transform transition-all duration-300 hover:scale-105 active:scale-95 shadow-lg hover:shadow-xl animate-fade-in-up animation-delay-600"
              >
                📞 166615
              </button>
              <p className="text-lg text-indigo-900 mt-6 opacity-80 animate-fade-in-up animation-delay-800">
                যেকোনো নাম্বর থেকে সাধারন কল রেট
              </p>
            </div>
          </div>
        </div>

        {/* Right Side - Video Library and Facebook Group */}
        <div className="flex flex-col w-1/2">
          {/* Video Library Section */}
          <div
            className="flex-1 relative overflow-hidden cursor-pointer transform transition-all duration-300 hover:scale-95"
            style={{
              backgroundImage: 'url(/pic3/p4.png)', 
              backgroundSize: 'cover', 
              backgroundPosition: 'center'
            }}
            onClick={handleVideoClick}
            onMouseEnter={() => setActiveCard('video')}
            onMouseLeave={() => setActiveCard(null)}
          >
            <div className="absolute inset-0  bg-opacity-30 transition-all duration-300"></div>
            <div className="relative z-10 flex flex-col  justify-center h-full p-8 ">
              <h3 className="font-bold  text-2xl xl:text-3xl text-cyan-300 mb-6 drop-shadow-lg">
                📚 ফ্রী ভিডিও লাইব্রেরি
              </h3>
              <button className="px-8 w-56 py-4 bg-blue-600 hover:bg-blue-700 active:bg-blue-800 text-white rounded-lg text-lg transform transition-all duration-300 hover:scale-105 active:scale-95 shadow-lg">
                ভিডিও দেখ →
              </button>
            </div>
          </div>

          {/* Facebook Group Section */}
          <div
            className="flex-1 relative overflow-hidden cursor-pointer transform transition-all duration-300 hover:scale-95"
            style={{
              backgroundImage: 'url(/pic3/p5.png)', 
              backgroundSize: 'cover', 
              backgroundPosition: 'center'
            }}
            onClick={handleGroupClick}
            onMouseEnter={() => setActiveCard('group')}
            onMouseLeave={() => setActiveCard(null)}
          >
            <div className="absolute inset-0 bg-opacity-30 transition-all duration-300"></div>
            <div className="relative z-10 flex flex-col  justify-center h-full p-8 ">
              <h3 className="font-bold text-2xl xl:text-3xl text-fuchsia-700 mb-6 drop-shadow-lg leading-tight">
                👥 এইস এসসি একাডেমির <br /> ফেইসবুক গ্রুপে জোগ দাও
              </h3>
              <button className="px-8 w-56 py-4 bg-blue-600 hover:bg-blue-700 active:bg-blue-800 text-white rounded-lg text-lg transform transition-all duration-200 hover:scale-105 active:scale-95 shadow-lg">
                গ্রুপে যোগ দাও →
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HelpSection