 "use client";

import Image from "next/image";
import { useState } from "react";

const galleryImages = [
  {
    src: "/images-4.jpg",
    alt: "Hair thinning treatment consultation",
    title:
      "Boost natural hair growth with personalized therapies that nourish the scalp, strengthen hair follicles, and improve hair density for healthier, thicker hair.",
    category: "Hair Thinning Treatment",
  },
  {
    src: "/images.avif",
    alt: "Hair fall treatment care",
    title:
      "Effectively control excessive hair fall by identifying the root cause and treating weakened hair follicles with evidence-based medical solutions.",
    category: "Hair Fall Treatment",
  },
  {
    src: "/images-1.avif",
    alt: "Hair loss treatment consultation",
    title:
      "Target progressive hair loss with advanced treatments that help restore hair volume, improve scalp health, and prevent further hair thinning.",
    category: "Hair Loss Treatment",
  },
  {
    src: "/images-2.avif",
    alt: "Baldness treatment technology",
    title:
      "Comprehensive treatment options for male and female pattern baldness, including non-surgical therapies and permanent hair restoration solutions.",
    category: "Baldness Treatment",
  },
  {
    src: "/images-3.avif",
    alt: "Dandruff and scalp treatment",
    title:
      "Treat dandruff, scalp infections, itching, excessive oiliness, and scalp inflammation to create a healthy foundation for stronger hair growth.",
    category: "Dandruff & Scalp Treatment",
  },
];

function UpArrowIcon() {
  return (
    <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="m6 12 6-6 6 6M12 6v13"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2.5"
      />
    </svg>
  );
}

export default function ClinicGallery() {
  const [activeIndex, setActiveIndex] = useState(galleryImages.length - 1);

  return (
    <section className="scroll-mt-28 bg-white px-3 py-10 sm:px-5 lg:px-3" id="services">
      <div className="mx-auto max-sm:mb-4 mb-8 max-w-4xl text-center sm:mb-10">
        <span className="animate-slip-up mb-3 inline-flex items-center gap-2 rounded-full bg-[#354f9f]/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.18em] text-[#354f9f]">
          <span className="h-2 w-2 rounded-full bg-[#f6dc24]" />
          Treatment Section
        </span>
                  <h2 className="animate-slip-up text-2xl font-extrabold leading-tight text-[#354f9f] sm:text-3xl lg:text-[44px]">
            Advanced Hair Solutions for Hair Fall,  {" "}
            <span className="text-[#f1323d]">Hair Loss & Baldness.</span>
          </h2>
        <p className="animate-slip-up animation-delay-200 mx-auto max-sm:mt-1 mt-3 max-w-3xl text-sm leading-6 text-[#2b2b2b]/70 sm:text-base lg:text-lg">
          Whether you&apos;re experiencing hair fall, hair thinning, excessive
          hair loss, a receding hairline, or bald patches, our advanced hair
          restoration treatments are designed to strengthen hair follicles,
          stimulate natural hair growth, and restore healthy, fuller hair.
        </p>
      </div>

      <div className="animate-slip-up mx-auto flex max-w-[1080px] flex-col gap-0 lg:h-[570px] lg:flex-row lg:gap-[26px]">
        {galleryImages.map((image, index) => {
          const isActive = index === activeIndex;

          return (
            <button
              className={`group relative mb-1 overflow-hidden rounded-2xl bg-[#2b2b2b] text-left outline-none ring-[#f1323d] transition-[min-height,flex,transform,box-shadow] duration-500 ease-out last:mb-0 hover:-translate-y-1 hover:ring-4 focus-visible:ring-4 lg:mb-0 lg:min-h-0 ${
                isActive
                  ? "min-h-[390px] sm:min-h-[430px] lg:flex-[2.65]"
                  : "min-h-[125px] sm:min-h-[145px] lg:flex-[0.53]"
              }`}
              key={image.src}
              type="button"
              onClick={() => setActiveIndex(index)}
              aria-label={`Expand ${image.alt}`}
              aria-pressed={isActive}
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className={`object-cover transition duration-500 group-hover:scale-105 ${
                  isActive ? "brightness-100" : "brightness-75"
                }`}
                priority={isActive}
                sizes={
                  isActive
                    ? "(max-width: 1024px) 100vw, 52vw"
                    : "(max-width: 1024px) 100vw, 12vw"
                }
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/25 via-transparent to-transparent" />

              <div
                className={`absolute left-[3.5%] top-1/2 hidden h-8 w-8 -translate-y-1/2 rounded-full border-2 border-[#f1323d]/80 bg-white/15 backdrop-blur-sm ${
                  isActive ? "lg:block" : ""
                }`}
              />

              <div
                className={`absolute bottom-[34px] left-1/2 w-[88%] max-w-[490px] -translate-x-1/2 sm:left-[34px] sm:w-auto sm:translate-x-0 ${
                  isActive ? "" : "hidden"
                }`}
              >
                <div className="w-fit bg-[#f1323d] px-4 py-[12px] text-[14px] font-bold leading-none text-white sm:px-5">
                  {image.category}
                </div>
                <div className="bg-[#354f9f] px-4 py-[13px] text-[15px] font-bold leading-tight text-white sm:px-5 sm:text-[16px]">
                  {image.title}
                </div>
              </div>
            </button>
          );
        })}
      </div>
    </section>
  );
}
