"use client";

import Image from "next/image";
import { useState } from "react";

const services = [
  {
    title: "Book Your Appointment",
    lines: [
      "Schedule your consultation in just a few clicks.",
    ],
    icon: "/icons-4.png",
  },
  {
    title: "Hair & Scalps Analysis",
    lines: [
      "Our specialist evaluates your hair condition and identifies the root cause.",
    ],
    icon: "/icons-3.png",
  },
  {
    title: "Personalized Treatment Plan",
    lines: [
      "Receive the right treatment based on your hair condition.",
    ],
    icon: "/icons-2.png",
  },
  {
    title: "Hair Regrowth & Follow-up",
    lines: [
      "Watch your hair become healthier, thicker, and stronger with follow-ups.",
    ],
    icon: "/icons-1.png",
  },
];

function ArrowLeftIcon() {
  return (
    <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M15 18l-6-6 6-6"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2.5"
      />
    </svg>
  );
}

function ArrowRightIcon() {
  return (
    <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M9 6l6 6-6 6"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2.5"
      />
    </svg>
  );
}

function JourneyCard({ service }: { service: (typeof services)[number] }) {
  return (
    <article className="animate-pop group flex flex-col items-center rounded-[8px] border border-white/10 bg-white/[0.06] px-5 py-7 text-center shadow-[0_18px_42px_rgb(0_0_0_/_18%)] backdrop-blur-md">
      <div className="animate-slip-up animation-delay-100 mb-[34px] flex h-[128px] w-[128px] items-center justify-center rounded-full transition-colors duration-300 group-hover:bg-[#354f9f] max-sm:mb-[5px]">
        <Image
          src={service.icon}
          alt={`${service.title} icon`}
          width={93}
          height={93}
          className="h-24 w-24 object-contain brightness-0 invert transition duration-300"
        />
      </div>
      <h3 className="animate-slip-up animation-delay-200 text-[25px] font-bold leading-tight text-white">
        {service.title}
      </h3>
      <div className="animate-slip-up animation-delay-300 mt-[27px] space-y-[10px] text-[19px] leading-[1.25] text-white/75 max-sm:mt-[10px]">
        {service.lines.map((line) => (
          <p key={line}>{line}</p>
        ))}
      </div>
    </article>
  );
}

export default function WhatToExpect() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const currentService = services[currentIndex];

  const prevSlide = () => {
    setCurrentIndex((index) =>
      index === 0 ? services.length - 1 : index - 1
    );
  };

  const nextSlide = () => {
    setCurrentIndex((index) =>
      index === services.length - 1 ? 0 : index + 1
    );
  };

  return (
    <section
      className="relative scroll-mt-28 overflow-hidden bg-[#070b16] px-5 py-5 text-white sm:py-12 lg:py-[35px]"
      id="journey"
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_14%_20%,rgb(53_79_159_/_32%),transparent_28%),radial-gradient(circle_at_86%_14%,rgb(241_50_61_/_22%),transparent_24%),linear-gradient(135deg,rgb(255_255_255_/_7%)_0_1px,transparent_1px_14px)]" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-[#070b16] to-transparent" />

      <div className="relative z-10 mx-auto max-w-[1280px] text-center">
          <h2 className="animate-slip-up text-2xl font-extrabold leading-tight text-white sm:text-3xl lg:text-[44px]">
            Process / Journey {" "}
            <span className="text-[#f1323d]">Section</span>
          </h2>
        <p className="animate-slip-up animation-delay-100 mt-1 text-[19px] leading-7 text-white/72 sm:text-[21px]">
          Your Hair Restoration Journey
        </p>

        <div className="mt-[62px] max-sm:mt-[10px] sm:hidden">
          <JourneyCard service={currentService} />

          <div className="mt-10 max-sm:mt-5 flex items-center justify-center gap-5">
            <button
              className="animate-slip-left animation-delay-400 flex h-11 w-11 items-center justify-center rounded-full bg-[#354f9f] text-white shadow-md transition-colors duration-200 hover:bg-[#f1323d]"
              type="button"
              onClick={prevSlide}
              aria-label="Previous journey step"
            >
              <ArrowLeftIcon />
            </button>
            <button
              className="animate-slip-right animation-delay-400 flex h-11 w-11 items-center justify-center rounded-full bg-[#354f9f] text-white shadow-md transition-colors duration-200 hover:bg-[#f1323d]"
              type="button"
              onClick={nextSlide}
              aria-label="Next journey step"
            >
              <ArrowRightIcon />
            </button>
          </div>
        </div>

        <div className="mt-[82px] max-sm:mt-[10px] hidden gap-y-14 sm:grid sm:grid-cols-2 sm:gap-x-10 lg:grid-cols-4 lg:gap-x-14">
          {services.map((service) => (
            <JourneyCard service={service} key={service.title} />
          ))}
        </div>
      </div>
    </section>
  );
}
