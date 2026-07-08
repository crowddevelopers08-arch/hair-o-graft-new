"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

const images = [
  {
    src: "https://ik.imagekit.io/cbvg612cb/public/Before-After-2amba.jpg?updatedAt=1773379064179",
    alt: "Hair treatment before and after result 1",
  },
  {
    src: "https://ik.imagekit.io/cbvg612cb/public/Before-After-6amba.jpg?updatedAt=1773379064239",
    alt: "Hair treatment before and after result 2",
  },
  {
    src: "https://ik.imagekit.io/cbvg612cb/public/Before-After-5amba.jpg?updatedAt=1773379064215",
    alt: "Hair treatment before and after result 3",
  },
  {
    src: "https://ik.imagekit.io/cbvg612cb/public/Before-After-3amba.jpg?updatedAt=1773379064188",
    alt: "Hair treatment before and after result 4",
  },
  {
    src: "https://ik.imagekit.io/cbvg612cb/public/Before-After-4amba.jpg?updatedAt=1773379064096",
    alt: "Hair treatment before and after result 5",
  },
  {
    src: "https://ik.imagekit.io/cbvg612cb/public/Before-After-2amba-Copy.jpg?updatedAt=1773379064193",
    alt: "Hair treatment before and after result 6",
  },
];

function ArrowLeftIcon() {
  return (
    <svg
      className="h-5 w-5 sm:h-6 sm:w-6"
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
    >
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
    <svg
      className="h-5 w-5 sm:h-6 sm:w-6"
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
    >
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

export default function BeforeAfter() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);
  const [visibleItems, setVisibleItems] = useState(1);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  useEffect(() => {
    const updateVisibleItems = () => {
      if (window.innerWidth < 768) {
        setVisibleItems(1);
      } else if (window.innerWidth < 1024) {
        setVisibleItems(2);
      } else {
        setVisibleItems(3);
      }
    };

    updateVisibleItems();
    window.addEventListener("resize", updateVisibleItems);

    return () => window.removeEventListener("resize", updateVisibleItems);
  }, []);

  useEffect(() => {
    const interval = window.setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000);

    return () => window.clearInterval(interval);
  }, []);

  const handleTouchEnd = () => {
    if (touchStart === null || touchEnd === null) return;

    const distance = touchStart - touchEnd;

    if (distance > 50) {
      nextSlide();
    } else if (distance < -50) {
      prevSlide();
    }

    setTouchStart(null);
    setTouchEnd(null);
  };

  const displayImages = Array.from({ length: visibleItems }, (_, index) => {
    return images[(currentIndex + index) % images.length];
  });

  return (
    <section className="w-full bg-white px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto max-sm:mb-4 mb-8 max-w-3xl text-center sm:mb-10">
          <span className="animate-slip-up mb-3 inline-flex items-center gap-2 rounded-full bg-[#354f9f]/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.18em] text-[#354f9f]">
            <span className="h-2 w-2 rounded-full bg-[#f6dc24]" />
            Before & After
          </span>
          <h2 className="animate-slip-up animation-delay-100 text-2xl font-extrabold leading-tight text-[#354f9f] sm:text-3xl lg:text-4xl">
            See What Our Clients{" "}
            <span className="text-[#f1323d]">Achieved</span>
          </h2>
          <p className="animate-slip-up animation-delay-200 mt-3  max-sm:mt-1 text-sm leading-6 text-[#2b2b2b]/70 sm:text-base lg:text-lg">
            Carousal of before and after of clients running
          </p>
        </div>

        <div className="animate-pop animation-delay-300 relative">
          <div
            className="relative mx-auto overflow-hidden"
            onTouchStart={(event) =>
              setTouchStart(event.targetTouches[0].clientX)
            }
            onTouchMove={(event) => setTouchEnd(event.targetTouches[0].clientX)}
            onTouchEnd={handleTouchEnd}
          >
            <div className="flex items-center justify-center gap-4 transition-transform duration-500 ease-in-out sm:gap-5 lg:gap-6 xl:gap-8">
              {displayImages.map((image, index) => (
                <div
                  key={`${image.src}-${index}`}
                  className={`shrink-0 transition-all duration-300 ${
                    visibleItems === 1
                      ? "w-full max-w-[320px]"
                      : visibleItems === 2
                        ? "w-[calc(50%-12px)] max-w-[360px]"
                        : "w-[calc(33.333%-16px)] max-w-[380px]"
                  }`}
                >
                  <div className="group relative mx-auto overflow-hidden rounded-lg border-[3px] border-[#354f9f] bg-white shadow-[0_14px_35px_rgb(53_79_159_/_16%)] transition-shadow duration-300 hover:shadow-[0_18px_45px_rgb(53_79_159_/_24%)]">
                    <div className="absolute left-0 top-0 z-10 h-1.5 w-full bg-[#f1323d]" />
                    <div className="relative aspect-[4/3] w-full">
                      <Image
                        src={image.src}
                        alt={image.alt}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                        sizes="(max-width: 768px) 320px, (max-width: 1024px) 360px, 380px"
                      />
                    </div>
                    <div className="pointer-events-none absolute inset-0 bg-[#354f9f] opacity-0 transition-opacity duration-300 group-hover:opacity-10" />
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="pointer-events-none absolute inset-y-0 left-0 right-0 flex items-center justify-between">
            <button
              className="animate-slip-left animation-delay-500 pointer-events-auto relative -left-2 rounded-full bg-[#f1323d] p-2 text-white shadow-lg ring-2 ring-[#f6dc24]/70 transition-colors duration-200 hover:bg-[#d92732] sm:-left-4 sm:p-3 lg:-left-8"
              type="button"
              onClick={prevSlide}
              aria-label="Previous before and after image"
            >
              <ArrowLeftIcon />
            </button>

            <button
              className="animate-slip-right animation-delay-500 pointer-events-auto relative -right-2 rounded-full bg-[#f1323d] p-2 text-white shadow-lg ring-2 ring-[#f6dc24]/70 transition-colors duration-200 hover:bg-[#d92732] sm:-right-4 sm:p-3 lg:-right-8"
              type="button"
              onClick={nextSlide}
              aria-label="Next before and after image"
            >
              <ArrowRightIcon />
            </button>
          </div>

          <div className="animate-slip-up animation-delay-600 mt-6 flex items-center justify-center gap-2 sm:mt-8 sm:gap-3">
            {images.map((_, index) => (
              <button
                key={index}
                className={`h-2.5 rounded-full transition-all duration-300 sm:h-3 ${
                  index === currentIndex
                    ? "w-8 bg-[#354f9f]"
                    : "w-2.5 bg-[#f1323d]/30 hover:bg-[#f1323d]/55 sm:w-3"
                }`}
                type="button"
                onClick={() => setCurrentIndex(index)}
                aria-label={`Go to before and after image ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
