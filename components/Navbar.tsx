"use client";

import Image from "next/image";
import { useState } from "react";

const navItems = [
  { label: "Home ", href: "#" },
  { label: "About", href: "#" },
  { label: "Pages ", href: "#" },
  { label: "Services ", href: "#" },
  { label: "Doctors ", href: "#" },
  { label: "Blog ", href: "#" },
  { label: "Contact", href: "#" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 flex w-full items-center bg-[#354f9f] shadow-[0_1px_0_rgb(255_255_255_/_8%)]">
      <div className="mx-auto flex w-full max-w-[1654px] flex-col px-4 py-4 sm:px-6 lg:grid lg:min-h-[88px] lg:grid-cols-[minmax(260px,340px)_1fr_150px] lg:items-center lg:gap-6 lg:px-10 lg:py-0 xl:min-h-[92px] xl:grid-cols-[minmax(290px,360px)_1fr_163px] xl:px-12">
        <div className="flex w-full items-center justify-between gap-4 lg:contents">
          <a
            className="animate-slip-left inline-flex min-w-0 items-center gap-3 text-white lg:justify-self-start"
            href="#"
            aria-label="Hair O Graft home"
          >
            <Image
              className="block h-14 w-14 shrink-0 rounded-full border-[3px] border-[#f1323d] bg-white object-contain sm:h-16 sm:w-16 xl:h-[68px] xl:w-[68px]"
              src="/image.png"
              alt="Hair O Graft logo"
              width={74}
              height={74}
              priority
            />
            <span className="whitespace-nowrap text-[20px] font-extrabold leading-none text-white sm:text-2xl lg:text-[25px] xl:text-[29px]">
              Hair O Graft
            </span>
          </a>

          <button
            className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-md border border-white/25 text-white transition-colors duration-200 hover:bg-white/10 lg:hidden"
            type="button"
            onClick={() => setIsOpen((open) => !open)}
            aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={isOpen}
            aria-controls="mobile-navigation"
          >
            <svg
              className="h-6 w-6"
              viewBox="0 0 24 24"
              fill="none"
              aria-hidden="true"
            >
              {isOpen ? (
                <path
                  d="M6 6l12 12M18 6 6 18"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeWidth="2.4"
                />
              ) : (
                <path
                  d="M4 7h16M4 12h16M4 17h16"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeWidth="2.4"
                />
              )}
            </svg>
          </button>
        </div>

        <nav
          id="mobile-navigation"
          className={`${
            isOpen ? "flex" : "hidden"
          } animate-slip-up animation-delay-100 mt-4 flex-col gap-3 border-t border-white/15 pt-4 text-white lg:mt-0 lg:flex lg:flex-row lg:items-center lg:justify-self-center lg:gap-x-5 lg:gap-y-0 lg:border-0 lg:pt-0 lg:whitespace-nowrap xl:gap-x-7`}
          aria-label="Primary navigation"
        >
          {navItems.map((item) => (
            <a
              className="rounded-md py-2 text-[14px] font-semibold leading-none text-white transition-colors duration-200 hover:text-[#f6dc24] sm:text-base lg:py-0 lg:text-[16px] xl:text-[17px]"
              href={item.href}
              key={item.label}
              onClick={() => setIsOpen(false)}
            >
              {item.label}
            </a>
          ))}
        </nav>

        <a
          className={`${
            isOpen ? "inline-flex" : "hidden"
          } animate-slip-right animation-delay-200 mt-4 h-10 w-[138px] items-center justify-center rounded-[5px] bg-[#f1323d] text-sm font-bold leading-none text-white transition-colors duration-200 hover:bg-[#d92732] lg:mt-0 lg:inline-flex lg:justify-self-end`}
          href="#"
          onClick={() => setIsOpen(false)}
        >
          Get A Quote
        </a>
      </div>
    </header>
  );
}
