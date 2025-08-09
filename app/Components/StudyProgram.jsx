import { BookOpenIcon, IdentificationIcon, ChartBarIcon } from "@heroicons/react/24/solid";
import StudySplit from "./StudySplit";

const StudyProgram = () => {
  return (
    <div >
      <StudySplit
      orientation="right"
      eyebrow="INTERNATIONAL STUDENTS"
      title="Find Your Perfect Study Program"
      description="We’ve spent a decade perfecting a faster, easier, quality-first international study application process. Now, the world is yours to explore in just a few clicks."
      bullets={[
        { icon: <BookOpenIcon className="w-7 h-7 text-[#E72700]" />, text: "Easily apply to multiple programs" },
        { icon: <IdentificationIcon className="w-7 h-7 text-[#E72700]" />, text: "Find your perfect program from 140,000+ options in five top destinations" },
        { icon: <ChartBarIcon className="w-7 h-7 text-[#E72700]" />, text: "Higher chance of success with quality checks and AI technology" },
      ]}
      ctaLabel="Try It Today"
      ctaHref="/apply"
      imageDesktop="/assets/study.png"
      imageMobile="/assets/study-boy.png"
      imageAlt="Study Abroad Illustration"
    />
    </div>
  );
};

export default StudyProgram;
