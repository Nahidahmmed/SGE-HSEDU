"use client";

import React from "react";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

const reviews = [
  {
    id: 1,
    title: "Like an answer from heaven",
    text: "“I tried [applying to institutions] and it took months, and months, and months for me to get an answer from a school. But then I stumbled upon HSEDU, and it was like an answer from heaven.”",
    user: "Arabelle A.",
    userImage: "/assets/user1.png",
  },
  {
    id: 2,
    title: "All thanks to HSEDU",
    text: "“I wanted to make my parents proud, and they are proud. And it was all thanks to HSEDU.”",
    user: "Krupali P.",
    userImage: "/assets/user2.png",
  },
];

const Review = () => {
  return (
    <div className="max-w-[1200px] mx-auto px-4 py-12 mt-20">
      {/* Header */}
      <div className="flex items-center justify-between flex-wrap gap-4">
        <div>
          <h2 className="text-4xl font-bold text-[#292E3E]">
            What Our Students Have to Say
          </h2>
          <p className="mt-2 text-[#363B51]">
            Hear from real international students about their experience.
          </p>
        </div>

        {/* Buttons (Optional for Desktop only) */}
        <div className="hidden lg:flex gap-3">
          <button className="bg-[#FFF9F8] p-4 rounded-2xl shadow-md hover:bg-gray-100 transition">
            <ChevronLeftIcon className="w-4 h-4 text-[#292E3E]" />
          </button>
          <button className="bg-[#FFF9F8] p-4 rounded-2xl shadow-md hover:bg-gray-100 transition">
            <ChevronRightIcon className="w-4 h-4 text-[#292E3E]" />
          </button>
        </div>
      </div>

      {/* Desktop Grid */}
      <div className="hidden lg:grid grid-cols-2 gap-6 mt-10">
        {reviews.map((review) => (
          <div
            key={review.id}
            className="bg-[#FFF9F8] p-6 rounded-2xl shadow-sm flex flex-col justify-between h-full"
          >
            {/* Content */}
            <div>
              <Image
                src="/assets/Testimonial Icon.png"
                alt="Quote"
                width={50}
                height={50}
                className="w-10 h-auto object-contain"
              />
              <h1 className="text-xl md:text-2xl font-semibold text-left text-[#292E3E] mt-4">
                {review.title}
              </h1>
              <p className="text-left text-[#363B51] mt-2">{review.text}</p>
            </div>

            {/* User Info fixed at bottom */}
            <div className="flex items-center gap-3 pt-6">
              <Image
                src={review.userImage}
                alt={review.user}
                width={50}
                height={50}
                className="w-12 h-12 rounded-full object-cover"
              />
              <p className="text-[#292E3E] font-medium">{review.user}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Mobile Slider */}
      <div className="block lg:hidden mt-10">
        <Swiper
          modules={[Pagination]}
          pagination={{ clickable: true }}
          spaceBetween={20}
          slidesPerView={1}
          className="pb-12"
        >
          {reviews.map((review) => (
            <SwiperSlide key={review.id}>
              <div className="bg-[#FFF9F8] p-6 rounded-2xl shadow-sm flex flex-col justify-between h-[400px]">
                {/* Content */}
                <div>
                  <Image
                    src="/assets/Testimonial Icon.png"
                    alt="Quote"
                    width={50}
                    height={50}
                    className="w-10 h-auto object-contain"
                  />
                  <h1 className="text-xl md:text-2xl font-semibold text-left text-[#292E3E] mt-4">
                    {review.title}
                  </h1>
                  <p className="text-left text-[#363B51] mt-2">{review.text}</p>
                </div>

                {/* User Info fixed at bottom */}
                <div className="flex items-center gap-3 pt-6">
                  <Image
                    src={review.userImage}
                    alt={review.user}
                    width={50}
                    height={50}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <p className="text-[#292E3E] font-medium">{review.user}</p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Review;
