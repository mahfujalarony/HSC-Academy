"use client";

import React, { useState } from "react";
import Image from "next/image";

interface Video {
  id: string;
  src: string;
  title: string;
  description: string;
  category: string;
}

const CourseIntro = () => {
  const [activeTab, setActiveTab] = useState("all");
  const tabs = [
    { id: "all", label: "সকল ক্লাস" },
    { id: "ssc", label: "SSC" },
    { id: "hsc", label: "HSC" }
  ];

  const videos: Video[] = [
    { id: "video1", src: "/pic2/v1.jpg", title: "Video 1", description: "Description for Video 1", category: "all" },
    { id: "video2", src: "/pic2/v2.jpg", title: "Video 2", description: "Description for Video 2", category: "ssc" },
    { id: "video3", src: "/pic2/v3.jpg", title: "Video 3", description: "Description for Video 3", category: "ssc" },
    { id: "video4", src: "/pic2/v4.jpg", title: "Video 4", description: "Description for Video 4", category: "hsc" },
    { id: "video5", src: "/pic2/v5.jpg", title: "Video 5", description: "Description for Video 5", category: "hsc" },
  ];

  const filteredVideos = activeTab === "all" ? videos : videos.filter(video => video.category === activeTab);

  return (
    <div className="container mx-auto px-4 py-8 md:py-12">
      <div className="text-center mb-8 md:mb-12">
        <h1 className="text-2xl md:text-3xl font-bold text-blue-600 mb-4">
          দারুণ সব অ্যানিমেটেড উদাহরণের ভিডিও লেসনে শেখা হবে আরও সহজ
        </h1>
        <p className="text-lg md:text-xl text-cyan-800 font-medium">
          সেরা মেন্টরদের তৈরি চমৎকার সব অ্যানিমেটেড উদাহরণ দিয়ে সাজানো ভিডিও লেসন দেখে সহজেই শিখে ক্লাসে-পরীক্ষায় এগিয়ে যাও
        </p>
      </div>

      {/* Tab Navigation */}
      <div className="flex justify-center mb-8 md:mb-10">
        <div className="flex space-x-2 md:space-x-4 bg-white p-1 rounded-full shadow-md">
          {tabs.map(tab => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-4 py-2 md:px-6 md:py-3 rounded-full text-sm md:text-base font-medium transition-colors ${
                activeTab === tab.id
                  ? "bg-blue-600 text-white"
                  : "text-gray-700 hover:bg-gray-100"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      {/* Horizontal Scrollable Video Cards */}
      <div className="relative pb-6">
        {filteredVideos.length === 0 ? (
          <div className="text-center py-8">
            <p className="text-gray-500">এই ক্যাটাগরির কোনো ভিডিও পাওয়া যায়নি।</p>
          </div>
        ) : (
          <div className="flex space-x-4 overflow-x-auto pb-4 -mx-4 px-4 scrollbar-hide">
            {filteredVideos.map(video => (
              <div
                key={video.id}
                className="flex-shrink-0 w-64 md:w-72 lg:w-80 bg-white rounded-xl overflow-hidden shadow-lg border-2 border-blue-100 hover:border-blue-300 transition-all"
              >
                <div className="relative h-40 md:h-48 w-full">
                  <Image
                    src={video.src}
                    alt={video.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                </div>
                <div className="p-4">
                  <h3 className="font-semibold text-lg mb-2 line-clamp-1">{video.title}</h3>
                  <p className="text-gray-600 text-sm line-clamp-2">{video.description}</p>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default CourseIntro;