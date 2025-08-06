import Image from "next/image";
import React from "react";

const Applications = () => {
  return (
    <div className="bg-[#FFF9F8]  rounded-4xl">
      <div className="lg:text-center md:text-center text-left lg:pt-20 md:pt-20 px-10 pt-10">
        <p className="text-[#E72700] text-lg font-thin">360 Solutions</p>
        <h1 className="text-3xl font-bold text-[#292E3E] mt-4">
          Find Every Solution, From Applications to <br /> Accommodations
        </h1>
        <p className="mt-4">
          Access our full 360 Solutions, covering everything from application to
          arrival. Get instant language test vouchers, <br /> explore financial
          services, and invest in your future with flexible student loans. It’s
          all here.
        </p>
        <button className="mt-6 bg-[#E72700] text-white px-6 py-2 rounded hover:bg-[#d61f00] transition duration-300">
          Register Now
        </button>
      </div>
      <Image
        src="/assets/graphic.png"
        alt="360 Solutions"
        width={800}
        height={600}
        className="w-3/4 h-auto object-contain mx-auto mt-10"
      />
    </div>
  );
};

export default Applications;
