"use client";
import { useState } from "react";
import { ChevronDownIcon } from "@heroicons/react/24/solid";

export default function FaqSection({
  eyebrow = "FAQ’s",
  heading = "Got Questions? We Have Answers",
  blurb = `Still wondering about studying abroad, and how HSEDU can get you there?
Read these answers to our most commonly asked questions.`,
  items = [
    {
      q: "How can I find my dream program?",
      a: "It couldn’t be easier! Register for a free HSEDU account, then take a few short minutes to tell us about your educational goals and set up your profile. Our platform will suggest study programs just for your needs, and you’ll have full access to explore the 140,000+ programs available through our AI-guided search."
    },
    { q: "How do I apply once I’ve found the right program?", a: "Complete your profile, upload documents, and submit in one place. We’ll guide you through each step." },
    { q: "Why should I use HSEDU?", a: "Faster applications, quality checks, expert support, and better outcomes." },
    { q: "Which countries can I apply to study in?", a: "Choose from top destinations including the US, UK, Canada, Australia, and more." },
    { q: "I’ve applied, so what’s next?", a: "Track status, get notifications, and manage offers right from your dashboard." }
  ],
}) {
  // single-open accordion (first item open by default)
  const [open, setOpen] = useState(0);

  return (
    <section className="w-full">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-14 lg:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
          {/* Left intro */}
          <div className="lg:col-span-4 text-left">
            <p className="text-[#FF6A3D] text-sm font-semibold tracking-wide">{eyebrow}</p>
            <h2 className="mt-3 text-3xl sm:text-4xl font-extrabold text-[#202637] leading-tight">
              {heading}
            </h2>
            <p className="mt-4 text-[#5B6275] whitespace-pre-line">
              {blurb}
            </p>
          </div>

          {/* Right accordions */}
          <div className="lg:col-span-8 space-y-4">
            {items.map((item, i) => {
              const isOpen = open === i;
              return (
                <div
                  key={i}
                  className={`rounded-xl border border-transparent bg-[#FFF3F0] hover:border-[#f0d9d9] transition`}
                >
                  <button
                    type="button"
                    aria-expanded={isOpen}
                    aria-controls={`faq-panel-${i}`}
                    onClick={() => setOpen(isOpen ? -1 : i)}
                    className="w-full flex items-center justify-between gap-4 px-5 sm:px-6 py-4 sm:py-5 text-left"
                  >
                    <span className="text-base sm:text-lg font-semibold text-[#434A63]">
                      {item.q}
                    </span>
                    <ChevronDownIcon
                      className={`w-5 h-5 shrink-0 text-[#434A63] transition-transform ${isOpen ? "rotate-180" : "rotate-0"}`}
                    />
                  </button>

                  {/* Panel */}
                  <div
                    id={`faq-panel-${i}`}
                    className={`grid transition-[grid-template-rows,opacity] duration-300 ease-out ${
                      isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                    }`}
                  >
                    <div className="overflow-hidden">
                      <div className="px-5 font-thin sm:px-6 pb-5 sm:pb-6 text-[#434A63] leading-7">
                        {item.a}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
