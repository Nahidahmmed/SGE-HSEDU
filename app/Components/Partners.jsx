
import Image from "next/image";
import React from "react";
import UniversityCard from "./UniversiyCard";

const partners = [
  {
    id: 1,
    name: "Western University",
    logo: "/assets/logo/logo1.png",
    cover: "/assets/featured/image1.png",
    title: "London, Ontario, CA",
    text: "Since 1878, Western University has been a choice destination for minds seeking the best education at a research university in Canada. Students at Western University can choose from over 400…"
  },
  {
    id: 2,
    name: "Laurentian University",
    logo: "/assets/logo/logo2.png",
    cover: "/assets/featured/image2.png",
    title: "Sudbury, Ontario, CA",
    text: "Laurentian University was once only a regional school serving Sudbury, and while it still serves the area well, it has grown into an international leader in niches such as stressed watershed systems…"
  },
  {
    id: 3,
    name: "Lakehead University",
    logo: "/assets/logo/logo3.png",
    cover: "/assets/featured/image3.png",
    title: "Thunder Bay, Ontario, CA",
    text: "Lakehead University is small enough to offer the personalized approach to supports and education that allows students to thrive. And they’re big enough to embody a truly global perspective."
  },
  {
    id: 4,
    name: "Southern New Hampshire University",
    logo: "/assets/logo/logo4.png",
    cover: "/assets/featured/image4.png",
    title: "Manchester, New Hampshire, US",
    text: "Founded in 1932, Southern New Hampshire University, a private, non-profit institution is widely recognized as one of the nation’s most innovative organizations and fastest growing universities…"
  },
  {
    id: 5,
    name: "University of Arizona",
    logo: "/assets/logo/logo5.png",
    cover: "/assets/featured/image5.png",
    title: "Tucson, Arizona, US",
    text: "The University of Arizona is a Top 100 university in the world and the first institution in the state of Arizona. As one of the most respected research universities in the United States…"
  },
  {
    id: 6,
    name: "California State University",
    logo: "/assets/logo/logo6.png",
    cover: "/assets/featured/image6.png",
    title: "Northridge, California, US",
    text: "Picture a beautiful campus in sunny Los Angeles with acres of green space, palm trees and contemporary architecture. Add academically competitive programs taught by respected scholars and researchers…"
  },
  {
    id: 7,
    name: "Bournemouth University",
    logo: "/assets/logo/logo7.png",
    cover: "/assets/featured/image7.png",
    title: "Bournemouth, South West, GB",
    text: "Bournemouth University is an innovative and vibrant public university located in Bournemouth, Dorset, a coastal town famous for its seven-mile stretch of sandy beaches."
  },
  {
    id: 8,
    name: "University of Greenwich",
    logo: "/assets/logo/logo8.png",
    cover: "/assets/featured/image8.png",
    title: "London, Greater London, GB",
    text: "Greenwich is more than a collection of individual students and staff, it is a community of people united by their passion for learning. University of Greenwich courses will give you…"
  },
  {
    id: 9,
    name: "University of Edinburgh",
    logo: "/assets/logo/logo9.png",
    cover: "/assets/featured/image9.png",
    title: "Edinburgh, Scotland, GB",
    text: "Founded by the city of Edinburgh in 1583, the University of Edinburgh was the first true civic university in the UK and one of the four ancient universities of Scotland. Join some of the best students from…"
  },
  {
    id: 10,
    name: "Hochschulen Fresenius",
    logo: "/assets/logo/logo10.png",
    cover: "/assets/featured/image10.png",
    title: "Berlin, Berlin, DE",
    text: "Hochschule Fresenius began life as the “Chemisches Laboratorium Fresenius” (Fresenius Chemical Laboratory) in 1848 and has evolved into a privately owned German university with a long…"
  },
  {
    id: 11,
    name: "Mediadesign Hochschule",
    logo: "/assets/logo/logo11.png",
    cover: "/assets/featured/image11.png",
    title: "Berlin, Berlin, DE",
    text: "For over 35 years, mdh has been guiding students with their expertise and experience into one of the most exciting industries of the present – and future. And they do it exactly where business…"
  },
  {
    id: 12,
    name: "University of Europe fo...",
    logo: "/assets/logo/logo12.png",
    cover: "/assets/featured/image12.png",
    title: "Iserlohn, Nordrhein-Westfalen, DE",
    text: "The University of Europe for Applied Sciences (UE) is a vibrant and dynamic institution that is dedicated to providing top-quality education to students from all around the world."
  },
  {
    id: 13,
    name: "Griffith University",
    logo: "/assets/logo/logo13.png",
    cover: "/assets/featured/image13.png",
    title: "Southport, Queensland, AU",
    text: "Founded in 1971, Griffith University has become a highly-ranked university with an international outlook. Their teaching and research spans six campuses in South East Queensland and all disciplines…"
  },
  {
    id: 14,
    name: "La Trobe University",
    logo: "/assets/logo/logo14.png",
    cover: "/assets/featured/image14.png",
    title: "Bundoora, Victoria, AU",
    text: "Focused on creating a culture of safety, inclusivity, and academic excellence, La Trobe University works to cater to the needs of their community and support students studying with them."
  },
  {
    id: 15,
    name: "Deakin University",
    logo: "/assets/logo/logo15.png",
    cover: "/assets/featured/image15.png",
    title: "Geelong, Victoria, AU",
    text: "Deakin University, founded in 1974, is ranked in the top 1% of universities worldwide (ARWU Rankings, 2020) and is one of the top 50 young universities (QS World University Rankings Top 50…"
  },
  {
    id: 16,
    name: "Dublin Business School",
    logo: "/assets/logo/logo16.png",
    cover: "/assets/featured/image16.png",
    title: "Dublin, County of Dublin, IE",
    text: "Founded in 1975, Dublin Business School specialises in the provision of career-focused education. The school has evolved over the years, expanding their offerings to meet the demand of various sectors."
  },
  {
    id: 17,
    name: "University College Cork",
    logo: "/assets/logo/logo17.png",
    cover: "/assets/featured/image17.png",
    title: "Cork, County of Cork, IE",
    text: "On a limestone bluff overlooking the River Lee in Ireland is University College Cork (UCC). Its motto ‘Where Finbarr Taught, Let Munster Learn,’ refers to the 6th century Saint Finbarr, whose monastery …"
  },
  {
    id: 18,
    name: "Trinity College Dublin",
    logo: "/assets/logo/logo18.png",
    cover: "/assets/featured/image18.png",
    title: "Dublin, County of Dublin, IE",
    text: "Trinity College Dublin offers undergraduate and postgraduate courses across all major disciplines such as arts and humanities, business, law, engineering, science, maths and health sciences."
  }
];


const Partners = () => {
  return (
    <section className="px-4 sm:px-6 md:px-8 lg:px-12 py-10 lg:py-16">
      <div className="mx-auto max-w-7xl text-left md:text-center">
        <p className="text-[#E72700] text-base sm:text-lg font-light">TRUSTED PARTNERS</p>
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#292E3E] mt-2">
          Trusted by 1,500+ Universities, Colleges,
          <br className="hidden md:block" /> and Schools Worldwide
        </h1>
      </div>

      {/* Responsive grid */}
      <div className="mx-auto max-w-7xl mt-8 sm:mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-5 sm:gap-6 lg:gap-8">
        {partners.map((p) => (
          <UniversityCard key={p.id} item={p} />
        ))}
      </div>
      <button className="mt-20 bg-[#E72700] text-white text-base px-6 py-2 rounded-lg hover:bg-[#d61f00] transition duration-300 mx-auto block">
          Explore More Irish Institutions
        </button>
    </section>
  );
};
export default Partners;
