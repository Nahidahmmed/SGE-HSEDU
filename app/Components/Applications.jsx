import Image from "next/image";
import React from "react";

const Applications = () => {
  return (
    <div className="bg-[#FFF9F8]">
      <p>360 Solutions</p>
      <h1>Find Every Solution, From Applications to Accommodations</h1>
      <p>
        Access our full 360 Solutions, covering everything from application to
        arrival. Get instant language test vouchers, explore financial services,
        and invest in your future with flexible student loans. It’s all here.
      </p>
      <button className="mt-6 bg-[#E72700] text-white px-6 py-2 rounded hover:bg-[#d61f00] transition duration-300">
        Register Now
      </button>
      <Image
                    src="/assets/graphic.png"
                    alt="360 Solutions"
                    width={500}
                    height={500}
                    className="w-3/4 h-auto object-contain mx-auto mt-10"
                  />
    </div>
  );
};

export default Applications;
