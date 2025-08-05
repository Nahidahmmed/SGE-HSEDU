"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";

const StudyAbroad = () => {
  return (
    <div className="max-w-[1200px] mx-auto px-4">
      <p className="text-3xl md:text-4xl lg:text-5xl font-semibold text-[#363B51] text-left leading-[60px] lg:mt-36 lg:w-[700px] md:w-auto w-full mt-64 mx-auto">
        The Fastest and Easiest Way to Successfully Study Abroad
      </p>

      {/* Desktop Grid */}
      <div className="hidden md:grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 mt-12">
        {highlights.map((item) => (
          <div
            key={item.id}
            className="rounded-xl p-6 flex flex-col items-center text-center bg-white w-[200px]"
            style={{
              boxShadow: `1px 1px 15px 2px #D4D4D4`,
            }}
          >
            <Image
              src={item.image}
              alt={item.text}
              width={50}
              height={50}
              className="mb-4 rounded-2xl"
            />
            <h3 className="text-2xl font-bold" style={{ color: item.color }}>
              {item.number} +
            </h3>
            <p className="mt-2 text-sm font-thin text-[#7c808d]">
              {item.text}
            </p>
          </div>
        ))}
      </div>

      {/* Mobile Slider */}
      <div className="block md:hidden mt-12 py-10">
        <Swiper
          modules={[Pagination]}
          pagination={{ clickable: true }}
          spaceBetween={20}
          slidesPerView={1}
          className="pb-10"
        >
          {highlights.map((item) => (
            <SwiperSlide key={item.id}>
              <div
                className="rounded-xl p-6 flex flex-col items-center text-center bg-white w-[80%] mx-auto"
                style={{
                  boxShadow: `1px 1px 15px 2px #D4D4D4`,
                }}
              >
                <Image
                  src={item.image}
                  alt={item.text}
                  width={50}
                  height={50}
                  className="mb-4 rounded-2xl"
                />
                <h3
                  className="text-2xl font-bold"
                  style={{ color: item.color }}
                >
                  {item.number} +
                </h3>
                <p className="mt-2 text-sm font-thin text-[#7c808d]">
                  {item.text}
                </p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default StudyAbroad;

const highlights = [
  {
    id: 1,
    image: "/assets/studentsHelped.png",
    text: "Students Helped",
    number: "1.3M",
    color: "#E72700",
  },
  {
    id: 2,
    image: "/assets/Global.png",
    text: "Global Programs",
    number: "140,000",
    color: "#2563EB",
  },
  {
    id: 3,
    image: "/assets/Institution.png",
    text: "Institutions Globally",
    number: "1,500",
    color: "#16A34A",
  },
  {
    id: 4,
    image: "/assets/flag.png",
    text: "Nationalities",
    number: 150,
    color: "#F59E0B",
  },
  {
    id: 5,
    image: "/assets/user.png",
    text: "Years of Expertise",
    number: 10,
    color: "#9333EA",
  },
];
