// components/GetStarted.jsx
import Image from "next/image";

export default function GetStarted({
  title = "Get Started with HSEDU",
  cards = [
    {
      image: "/assets/started1.png",
      alt: "Student",
      heading: "Student",
      text: "Are you a student looking to study in Canada, the US, the UK, Ireland, Australia, or Germany? Register to launch your journey now!",
      button: "Sign Up for Free",
      href: "#",
    },
    {
      image: "/assets/started2.png",
      alt: "Recruitment Partner",
      heading: "Recruitment Partner",
      text: "Do you recruit and guide international students? Join our partner network and revolutionize your process!",
      button: "Become a Recruitment Partner",
      href: "#",
    },
    {
      image: "/assets/started3.png",
      alt: "Partner School",
      heading: "Partner School",
      text: "Join 1,500+ global institutions on the HSEDU platform! Complete our contact form, and our Partner Relations team will be in touch soon.",
      button: "Become a Partner Institution",
      href: "#",
    },
  ],
}) {
  return (
    <section className="w-full">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h2 className="text-center text-2xl sm:text-3xl font-extrabold text-[#2a2f3e] mb-10">
          {title}
        </h2>

        {/* Grid keeps 1 -> 2 -> 3 cols; cards are centered on small screens */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center lg:justify-items-stretch mx-auto">
          {cards.map((card, idx) => (
            <div
              key={idx}
              className="
                flex flex-col bg-white rounded-2xl overflow-hidden
                w-full max-w-[440px] lg:w-[340px]"
            >
              <div className="relative lg:w-[300px] md:w-[300px] w-[80%] mx-auto h-40 sm:h-48 lg:h-56">
                <Image
                  src={card.image}
                  alt={card.alt}
                  fill
                  className="object-cover rounded-t-3xl rounded-b-lg"
                  sizes="(max-width: 500px) 90vw, (max-width: 1024px) 45vw, 340px"
                  priority={idx === 0}
                />
              </div>

              {/* Text */}
              <div className="flex flex-col flex-1 px-4 sm:px-5">
                <h3 className="text-xl lg:text-2xl pt-4 lg:pt-5 font-bold text-[#434A63]">
                  {card.heading}
                </h3>
                <p className="mt-2 text-[#5B6275] leading-relaxed flex-1 text-sm lg:text-base">
                  {card.text}
                </p>
                <a
                  href={card.href}
                  className="my-4 lg:my-5 inline-block w-full text-center rounded-md bg-[#EB401E] text-white px-4 py-2 font-thin hover:bg-[#c81f00] transition"
                >
                  {card.button}
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
