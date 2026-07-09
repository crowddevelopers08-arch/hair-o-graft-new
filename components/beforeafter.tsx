"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

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
    <svg className="h-5 w-5 sm:h-6 sm:w-6" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M15 18l-6-6 6-6" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" />
    </svg>
  );
}

function ArrowRightIcon() {
  return (
    <svg className="h-5 w-5 sm:h-6 sm:w-6" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M9 6l6 6-6 6" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" />
    </svg>
  );
}

/** Split label bar — since each image already contains a before/after
 *  pair, this names the two halves explicitly instead of leaving the
 *  viewer to guess which side is which. Blue/red match the two sides
 *  to the site's brand colors. */
function BeforeAfterLabel() {
  return (
    <div className="absolute left-0 right-0 top-0 z-10 flex text-[11px] font-bold uppercase tracking-[0.14em]">
      <span className="flex-1 bg-[#364B9B] py-1.5 text-center text-white">Before</span>
      <span className="flex-1 bg-[#D92732] py-1.5 text-center text-white">After</span>
    </div>
  );
}

export default function BeforeAfter() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);
  const [visibleItems, setVisibleItems] = useState(1);
  const [isPaused, setIsPaused] = useState(false);
  const prefersReducedMotion = useRef(false);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
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
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    prefersReducedMotion.current = media.matches;
    const handleChange = () => {
      prefersReducedMotion.current = media.matches;
    };
    media.addEventListener("change", handleChange);
    return () => media.removeEventListener("change", handleChange);
  }, []);

  // Autoplay — pauses on hover/focus and respects prefers-reduced-motion,
  // instead of running unconditionally in the background.
  useEffect(() => {
    if (isPaused || prefersReducedMotion.current) return;

    const interval = window.setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
    }, 3500);

    return () => window.clearInterval(interval);
  }, [isPaused]);

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

  const handleKeyDown = (event: React.KeyboardEvent<HTMLDivElement>) => {
    if (event.key === "ArrowLeft") {
      event.preventDefault();
      prevSlide();
    } else if (event.key === "ArrowRight") {
      event.preventDefault();
      nextSlide();
    }
  };

  const displayImages = Array.from({ length: visibleItems }, (_, index) => {
    return images[(currentIndex + index) % images.length];
  });

  return (
    <section className="relative w-full scroll-mt-28 overflow-hidden bg-white px-4 py-8 sm:px-6 sm:py-12 lg:px-8" id="results">
      {/* Ambient brand glow, consistent with the CTA section */}
      <div className="pointer-events-none absolute -right-24 -top-32 h-[420px] w-[420px] rounded-full bg-[#364b9b]/[0.06] blur-3xl" />
      <div className="pointer-events-none absolute -bottom-28 -left-16 h-[360px] w-[360px] rounded-full bg-[#d92732]/[0.05] blur-3xl" />

      {/* Faint strand linework echoing the CTA section's texture */}
      <svg
        className="pointer-events-none absolute inset-0 h-full w-full opacity-[0.05]"
        preserveAspectRatio="none"
        viewBox="0 0 1200 800"
      >
        {Array.from({ length: 6 }).map((_, i) => (
          <path
            key={i}
            d={`M ${1300 - i * 70} -50 C ${1050 - i * 70} 250, ${1150 - i * 70} 540, ${900 - i * 90} 850`}
            stroke={i % 2 === 0 ? "#364b9b" : "#d92732"}
            strokeWidth="1.5"
            fill="none"
          />
        ))}
      </svg>

      <div className="relative z-10 mx-auto max-w-7xl">
        <div className="mx-auto max-sm:mb-4 mb-8 max-w-3xl text-center sm:mb-10">
          <span className="animate-slip-up mb-3 inline-flex items-center gap-2 rounded-full bg-[#364B9B]/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.18em] text-[#364B9B]">
            <span className="h-2 w-2 rounded-full bg-[#D92732]" />
            Before &amp; After
          </span>
          <h2 className="animate-slip-up animation-delay-100 text-2xl font-extrabold leading-tight text-[#364B9B] sm:text-3xl lg:text-4xl">
            See What Our Clients <span className="text-[#D92732]">Achieved</span>
          </h2>
          <p className="animate-slip-up animation-delay-200 mt-3 max-sm:mt-1 text-sm leading-6 text-[#2b2b2b]/70 sm:text-base lg:text-lg">
            A running carousel of real client results, before and after treatment.
          </p>
        </div>

        <div
          className="animate-pop animation-delay-300 relative"
          role="region"
          aria-roledescription="carousel"
          aria-label="Before and after client results"
          tabIndex={0}
          onKeyDown={handleKeyDown}
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          onFocus={() => setIsPaused(true)}
          onBlur={() => setIsPaused(false)}
        >
          {/* Screen-reader-only status, so assistive tech knows the slide
              changed even though the visual dots are decorative. */}
          <p className="sr-only" aria-live="polite">
            {`Showing result ${currentIndex + 1} of ${images.length}`}
          </p>

          <div
            className="relative mx-auto overflow-hidden"
            onTouchStart={(event) => setTouchStart(event.targetTouches[0].clientX)}
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
                  <div className="group relative mx-auto overflow-hidden rounded-xl border border-[#364B9B]/25 bg-white shadow-[0_14px_35px_rgb(54_75_155_/_14%)] transition-shadow duration-300 hover:shadow-[0_20px_45px_rgb(54_75_155_/_22%)]">
                    <BeforeAfterLabel />
                    <div className="relative aspect-[4/3] w-full">
                      <Image
                        src={image.src}
                        alt={image.alt}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                        sizes="(max-width: 768px) 320px, (max-width: 1024px) 360px, 380px"
                      />
                    </div>
                    <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#364B9B]/10 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="pointer-events-none absolute inset-y-0 left-0 right-0 flex items-center justify-between">
            <button
              className="animate-slip-left animation-delay-500 pointer-events-auto relative -left-2 rounded-full bg-[#364B9B] p-2 text-white shadow-lg transition-colors duration-200 hover:bg-[#2b3d80] sm:-left-4 sm:p-3 lg:-left-8"
              type="button"
              onClick={prevSlide}
              aria-label="Previous before and after image"
            >
              <ArrowLeftIcon />
            </button>

            <button
              className="animate-slip-right animation-delay-500 pointer-events-auto relative -right-2 rounded-full bg-[#D92732] p-2 text-white shadow-lg transition-colors duration-200 hover:bg-[#b81f29] sm:-right-4 sm:p-3 lg:-right-8"
              type="button"
              onClick={nextSlide}
              aria-label="Next before and after image"
            >
              <ArrowRightIcon />
            </button>
          </div>

          <div className="animate-slip-up animation-delay-600 mt-6 flex flex-col items-center justify-center gap-3 sm:mt-8">
            <div className="flex items-center gap-2 sm:gap-3">
              {images.map((_, index) => (
                <button
                  key={index}
                  className={`h-2.5 rounded-full transition-all duration-300 sm:h-3 ${
                    index === currentIndex
                      ? "w-8 bg-[#364B9B]"
                      : "w-2.5 bg-[#D92732]/25 hover:bg-[#D92732]/50 sm:w-3"
                  }`}
                  type="button"
                  onClick={() => setCurrentIndex(index)}
                  aria-label={`Go to before and after image ${index + 1}`}
                  aria-current={index === currentIndex}
                />
              ))}
            </div>
            <p className="font-mono text-[12px] tracking-wide text-[#2b2b2b]/50">
              {String(currentIndex + 1).padStart(2, "0")} / {String(images.length).padStart(2, "0")}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}