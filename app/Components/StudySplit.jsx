// components/StudySplit.jsx
import Image from "next/image";

export default function StudySplit({
  orientation = "right", // "left" or "right"
  eyebrow,
  title,
  description,
  bullets = [],
  ctaLabel = "Try It Today",
  ctaHref = "#",
  imageDesktop,
  imageMobile,
  imageAlt,
  className = "",
}) {
  // Desktop row direction
  const dir = orientation === "left" ? "lg:flex-row" : "lg:flex-row-reverse";

  return (
    <section className={`max-w-[1200px] mx-auto px-4 py-16 ${className}`}>
      <div className={`flex flex-col ${dir} items-center gap-10`}>
        
        {/* Image Section */}
        <div className="w-full lg:w-1/2">
          {/* Mobile image */}
          <div className="relative w-full aspect-square sm:aspect-[4/3] block lg:hidden">
            <Image
              src={imageMobile}
              alt={imageAlt}
              fill
              className="object-contain"
              priority
            />
          </div>

          {/* Desktop image */}
          <div className="relative w-full aspect-square sm:aspect-[4/3] hidden lg:block">
            <Image
              src={imageDesktop}
              alt={imageAlt}
              fill
              className="object-contain"
              priority
            />
          </div>
        </div>

        {/* Text Section */}
        <div className="w-full lg:w-1/2 text-left space-y-6">
          {eyebrow && (
            <p className="text-sm text-[#E72700] font-semibold tracking-widest">
              {eyebrow}
            </p>
          )}

          {title && (
            <h2 className="text-3xl md:text-4xl font-bold text-[#363B51]">
              {title}
            </h2>
          )}

          {description && <p className="text-[#363B51]">{description}</p>}

          {bullets.length > 0 && (
            <div className="space-y-4">
              {bullets.map((b, i) => (
                <div key={i} className="flex items-center gap-3">
                  {b.icon}
                  <span className="text-[#363B51]">{b.text}</span>
                </div>
              ))}
            </div>
          )}

          {ctaLabel && (
            <a
              href={ctaHref}
              className="inline-block mt-2 bg-[#EB401E] text-white px-6 py-2 rounded-lg hover:bg-[#d61f00] transition duration-300"
            >
              {ctaLabel}
            </a>
          )}
        </div>
      </div>
    </section>
  );
}
