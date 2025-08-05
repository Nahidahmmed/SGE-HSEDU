import SearcheForm from "./SearcheForm";

const Banner = () => {
  return (
    <div className="relative h-[650px] w-full max-w-[1400px] mx-auto rounded-3xl py-12 px-0 md:px-8 lg:px-16 overflow-hidden bg-blue-100">
      {/* Overlay content */}
      <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-10 ">
        {/* Mobile Text Section */}
        <div className="block md:hidden px-6 text-center pt-20">
          <h1 className="text-4xl font-bold text-[#363B51]">
            Your Future Goes
          </h1>
          <h1 className="text-4xl font-bold text-[#145cf8]">Beyond Borders</h1>
          <p className="mt-2 text-sm text-[#363B51]">
            Explore 1,500+ global universities and colleges. Submit your best
            possible application with a 95% success rate. Unlock your full
            potential with HSEDU!
          </p>
          <button className="mt-4 bg-[#145cf8] text-white px-4 py-2 rounded hover:bg-[#3e14f8] transition duration-300">
            Register Now
          </button>
        </div>

        <div className="hidden md:block flex-1 text-left px-4 md:px-8 lg:px-16 pt-20">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#363B51] pb-2">
            Your Future Goes
          </h1>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#E72700]">
            Beyond Borders
          </h1>
          <p className="mt-4 text-base text-[#363B51]">
            Explore 1,500+ global universities and colleges. Submit your best
          </p>
          <p className="mt-4 text-base text-[#363B51]">
            possible application with a 95% success rate. Unlock your full
            potential
          </p>
          <p className="mt-4 text-base text-[#363B51]">with HSEDU!</p>
          <button className="mt-6 bg-[#E72700] text-white px-6 py-2 rounded hover:bg-[#d61f00] transition duration-300">
            Register Now
          </button>
        </div>

        <div className="lg:flex md:flex absolute w-full lg:w-1/2 top-[300px] lg:-right-16 -right-28  md:-top-16 lg:-top-4 xl:-top-4">
          <img
            src="/assets/Container.png"
            alt="Right Side Illustration"
            className="w-full max-w-sm md:max-w-md lg:max-w-lg"
          />
        </div>
      </div>

      {/* Search Form (You can add it here if needed) */}
      {/* <SearcheForm /> */}
    </div>
  );
};

export default Banner;
