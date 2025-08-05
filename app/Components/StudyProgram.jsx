import { BookOpenIcon, IdentificationIcon, ChartBarIcon } from "@heroicons/react/24/solid";
import Image from "next/image";

const StudyProgram = () => {
  return (
    <div className="max-w-[1200px] mt-20 mx-auto px-4 py-16">
      <div className="flex flex-col lg:flex-row items-center gap-10">
        
        {/* Mobile Image (on top) */}
        <div className="block lg:hidden w-full">
          <Image
            src="/assets/study-boy.png"
            alt="Study Abroad Illustration"
            className="w-full h-auto object-contain"
            width={500}
            height={500}
            priority
          />
        </div>

        {/* Text Section */}
        <div className="flex-1 text-left space-y-6">
          <p className="text-sm text-[#E72700] font-semibold tracking-widest">
            INTERNATIONAL STUDENTS
          </p>

          <h2 className="text-3xl md:text-4xl font-bold text-[#363B51]">
            Find Your Perfect Study Program
          </h2>

          <p className="text-[#363B51]">
            We’ve spent a decade perfecting a faster, easier, quality-first
            international study application process. Now, the world is yours to
            explore in just a few clicks.
          </p>

          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <BookOpenIcon className="w-8 h-8 text-[#E72700]" />
              <span className="text-[#363B51]">
                Easily apply to multiple programs
              </span>
            </div>

            <div className="flex items-center gap-3">
              <IdentificationIcon className="w-8 h-8 text-[#E72700]" />
              <span className="text-[#363B51]">
                Find your perfect program from 140,000+ options in five top destinations
              </span>
            </div>

            <div className="flex items-center gap-3">
              <ChartBarIcon className="w-8 h-8 text-[#E72700]" />
              <span className="text-[#363B51]">
                Get a higher chance of success with quality checks and AI technology
              </span>
            </div>
          </div>

          <button className="mt-6 bg-[#E72700] text-white px-6 py-2 rounded hover:bg-[#d61f00] transition duration-300">
            Try It Today
          </button>
        </div>

        {/* Desktop Image (on right) */}
        <div className="hidden lg:block flex-1">
          <Image
            src="/assets/study.png"
            alt="Study Abroad Illustration"
            className="w-full h-auto object-contain"
            width={500}
            height={500}
          />
        </div>
      </div>
    </div>
  );
};

export default StudyProgram;
