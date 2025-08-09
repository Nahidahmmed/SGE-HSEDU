// components/Programs.jsx
import Image from "next/image";

export default function Programs({
  imageSrc = "/assets/boy.png",
  imageAlt = "Student",
  title = "Choose from 140,000+ Study Programs",
  subtitle = "Pick your programs. Apply all at once. Built-in quality checks give you a ~95% chance of application success.",
  ctaLabel = "Start Your Journey",
  ctaHref = "#",
  showCTA = true,
}) {
  return (
    <section className="w-full lg:p-0 md:p-0 p-4">
      <div className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-[#2E6CF6] to-[#0542a3] lg:h-[300px]">
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 py-6 sm:py-8 lg:px-6 lg:py-6">
          <div className="flex flex-col items-center gap-6 sm:gap-8 lg:flex-row">
            
            {/* IMAGE — hidden on mobile */}
            <div className="hidden lg:flex relative w-full lg:w-[44%] justify-center lg:justify-start">
              {/* Concentric circle behind character */}
              <div
                className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-[500px] w-[500px] opacity-30"
                style={{
                  background:
                    "radial-gradient(circle, rgba(255,255,255,0.25) 0%, rgba(255,255,255,0.15) 40%, rgba(255,255,255,0.06) 70%, rgba(255,255,255,0) 72%)",
                  borderRadius: "9999px",
                }}
              />
              <div className="w-72 h-72 border-[40px] ml-5 mt-3 border-[#3671f0] rounded-full">
                <div className="w-64 h-64 border-[40px] border-[#3671f0] rounded-full relative right-7" />
              </div>
               <Image
                src={imageSrc}
                alt={imageAlt}
                width={520}
                height={520}
                className="h-[280px] w-auto object-contain absolute z-10"
                priority
              />
            </div>

            {/* TEXT AREA */}
            <div className="w-full lg:w-[80%] text-white text-left relative z-10 p-5">
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-extrabold leading-snug">
                {title}
              </h2>

              <p className="mt-3 text-sm md:text-base lg:text-lg/7 text-white/90 max-w-2xl mx-auto lg:mx-0">
                {subtitle}
              </p>

              {showCTA && (
                <div className="mt-6">
                  <a
                    href={ctaHref}
                    className="inline-block rounded-md bg-white px-5 py-2.5 text-[#184FCB] font-semibold shadow-sm hover:bg-gray-100 transition"
                  >
                    {ctaLabel}
                  </a>
                </div>
              )}
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
