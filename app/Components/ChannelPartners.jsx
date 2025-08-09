import {
  BookOpenIcon,
  IdentificationIcon,
  GlobeAltIcon,
  UserCircleIcon,
  CurrencyDollarIcon 
} from "@heroicons/react/24/outline";
import StudySplit from "./StudySplit";

const ChannelPartners = () => {
  return (
    <div>
      <StudySplit
        orientation="left"
        eyebrow="PARTNERS INSTITUTIONS"
        title="How We Help Partner Institutions"
        description="Manage documents, track statuses, and submit complete applications faster with our guided checks."
        bullets={[
          {
            icon: <GlobeAltIcon className="w-7 h-7 text-[#E72700]" />,
            text: "Diversify your enrolment with students from 150+ nationalities",
          },
          {
            icon: <IdentificationIcon className="w-7 h-7 text-[#E72700]" />,
            text: "Receive higher quality applications and improve conversion by 10%",
          },
          {
            icon: <UserCircleIcon className="w-7 h-7 text-[#E72700]" />,
            text: "Leverage proven technology to save time and reduce manual processing by 40%",
          },
        ]}
        ctaLabel="Partner with Us"
        ctaHref="/partners"
        imageDesktop="/assets/partner1.png"
        imageMobile="/assets/partner1m.png"
        imageAlt="Student with books"
      />
      <StudySplit
        orientation="right"
        eyebrow="RECRUITMENT PARTNERS"
        title="How We Help Recruitment Partners"
        description="We’ve spent a decade perfecting a faster, easier, quality-first international study application process. Now, the world is yours to explore in just a few clicks."
        bullets={[
          {
            icon: <BookOpenIcon className="w-7 h-7 text-[#E72700]" />,
            text: "Access 140,000+ programs at 1,500+ academic institutions",
          },
          {
            icon: <IdentificationIcon className="w-7 h-7 text-[#E72700]" />,
            text: "Use AI-powered tools to benefit from HSEDU 95% application success rate",
          },
          {
            icon: <CurrencyDollarIcon className="w-7 h-7 text-[#E72700]" />,
            text: "Support students with extra built-in services, from language tests to student loans",
          },
        ]}
        ctaLabel="Join Our Network"
        ctaHref="/apply"
        imageDesktop="/assets/partner2.png"
        imageMobile="/assets/partner2m.png"
        imageAlt="Study Abroad Illustration"
      />
    </div>
  );
};

export default ChannelPartners;
