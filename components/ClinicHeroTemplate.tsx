"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect, useState, type FormEvent } from "react";

const navItems = [
  { label: "Home", href: "#home", hasChevron: true, active: true },
  { label: "About", href: "#about" },
  { label: "Treatments", href: "#services" },
  { label: "Journey", href: "#journey", hasChevron: true },
  { label: "FAQ", href: "#faq" },
  { label: "Contact", href: "#contact" },
];

function ChevronIcon() {
  return (
    <svg className="h-3 w-3" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="m6 9 6 6 6-6"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2.4"
      />
    </svg>
  );
}

function ClockIcon() {
  return (
    <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.8" />
      <path
        d="M12 7v5l3.5 2"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.8"
      />
    </svg>
  );
}

function MailIcon() {
  return (
    <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <rect x="3" y="5" width="18" height="14" rx="2" stroke="currentColor" strokeWidth="1.8" />
      <path
        d="m4 6.5 8 6 8-6"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.8"
      />
    </svg>
  );
}

function PhoneIcon() {
  return (
    <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M6.6 10.8c1.4 2.8 3.8 5.2 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1-9.4 0-17-7.6-17-17 0-.6.4-1 1-1h3.4c.6 0 1 .4 1 1 0 1.3.2 2.5.6 3.6.1.4 0 .8-.2 1L6.6 10.8Z"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.6"
      />
    </svg>
  );
}

function InstagramIcon() {
  return (
    <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <rect x="3.5" y="3.5" width="17" height="17" rx="5" stroke="currentColor" strokeWidth="1.6" />
      <circle cx="12" cy="12" r="3.8" stroke="currentColor" strokeWidth="1.6" />
      <circle cx="17.2" cy="6.8" r="1" fill="currentColor" />
    </svg>
  );
}

function FacebookIcon() {
  return (
    <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M14 8.5h2V5.3c-.4-.05-1.5-.15-2.8-.15-2.8 0-4.7 1.7-4.7 4.85V13H5.9v3.5h2.6V21h3.6v-4.5h2.5l.4-3.5h-2.9v-2.6c0-1 .3-1.9 2-1.9Z"
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth="1.6"
      />
    </svg>
  );
}

function DribbbleIcon() {
  return (
    <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <circle cx="12" cy="12" r="8.5" stroke="currentColor" strokeWidth="1.6" />
      <path
        d="M4 10.5c4.5 1.4 10 1.2 14.8-1M6 18c2.4-4.6 5.4-7.6 12.4-8.3M9.5 3.8c2.8 3.5 4.5 8 4.7 15.4"
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth="1.4"
      />
    </svg>
  );
}

function UserIcon() {
  return (
    <svg className="h-[18px] w-[18px]" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <circle cx="12" cy="8" r="3.6" stroke="currentColor" strokeWidth="1.7" />
      <path
        d="M4.8 19.5c1.3-3.4 4-5.2 7.2-5.2s5.9 1.8 7.2 5.2"
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth="1.7"
      />
    </svg>
  );
}

function StethoscopeIcon() {
  return (
    <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M6 3v6a4 4 0 0 0 8 0V3M6 3H4.5M14 3h1.5M18 9v2.5a6.5 6.5 0 0 1-13 0V9"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.6"
      />
      <circle cx="19.5" cy="9" r="1.8" stroke="currentColor" strokeWidth="1.6" />
    </svg>
  );
}

function CheckIcon() {
  return (
    <svg className="h-4 w-4 shrink-0" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <circle cx="12" cy="12" r="10" fill="currentColor" fillOpacity="0.18" />
      <path
        d="m8 12.5 2.5 2.5L16 9.5"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      />
    </svg>
  );
}

function StarIcon() {
  return (
    <svg className="h-4 w-4 shrink-0" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="m12 2.5 2.9 6 6.6.8-4.8 4.6 1.2 6.6L12 17.4l-5.9 3.1 1.2-6.6L2.5 9.3l6.6-.8Z" />
    </svg>
  );
}

const uspItems = [
  { label: "1000+ Patients", icon: "check" as const },
  { label: "100% Effective Treatment", icon: "check" as const },
  { label: "5 Rated", icon: "star" as const },
];

const concernOptions = ["Hair Fall", "Hair Regrowth", "Hair Loss", "Extreme Baldness"];

const beforeAfterImages = [
  "https://ik.imagekit.io/cbvg612cb/public/Before-After-3amba.jpg?updatedAt=1773379064188",
  "https://ik.imagekit.io/cbvg612cb/public/Before-After-2amba.jpg?updatedAt=1773379064179",
  "https://ik.imagekit.io/cbvg612cb/public/Before-After-6amba.jpg?updatedAt=1773379064239",
  "https://ik.imagekit.io/cbvg612cb/public/Before-After-5amba.jpg?updatedAt=1773379064215",
];

export default function ClinicHeroTemplate() {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);
  const [beforeAfterIndex, setBeforeAfterIndex] = useState(0);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const formData = new FormData(form);

    setIsSubmitting(true);
    setSubmitStatus("idle");

    try {
      const res = await fetch("/api/submissions", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          source: "Hero Form",
          name: formData.get("name"),
          phone: formData.get("phone"),
          email: formData.get("email"),
          concern: formData.get("concern"),
          pageUrl: window.location.href,
        }),
      });

      const data = await res.json();
      if (!res.ok || !data.success) throw new Error(data.error || "Submission failed");

      form.reset();
      router.push("/thank-you");
    } catch {
      setSubmitStatus("error");
      setIsSubmitting(false);
    }
  }

  useEffect(() => {
    const interval = window.setInterval(() => {
      setBeforeAfterIndex((index) => (index + 1) % beforeAfterImages.length);
    }, 10000);

    return () => window.clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full bg-white" id="home">
      {/* Top info bar */}

      {/* Navbar */}
      <header className="sticky top-0 z-50 w-full border-b border-black/5 bg-white shadow-[0_1px_0_rgb(0_0_0_/_4%)]">
        <div className="mx-auto flex max-w-[1400px] items-center justify-between px-4 py-4 sm:px-6 lg:px-8 xl:px-12">
          <a href="#home" className="flex items-center gap-3" aria-label="Hair O Graft home">
            <Image
              src="/image.png"
              alt="Hair O Graft logo"
              width={44}
              height={44}
              className="h-11 w-11 rounded-full border-2 border-[#354f9f] bg-white object-contain"
              priority
            />
            <span className="text-[16px] md:text-[18px] lg:text-[20px] xl:text-[22px] font-extrabold leading-none text-[#1c2437]">
              Hair O Graft
            </span>
          </a>

          <nav className="hidden items-center gap-8 lg:flex" aria-label="Primary navigation">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className={`flex items-center gap-1 text-[14px] lg:text-[16px] font-semibold transition-colors ${
                  item.active
                    ? "text-[#354f9f]"
                    : "text-[#1c2437]/80 hover:text-[#354f9f]"
                }`}
              >
                {item.label}
                {item.hasChevron }
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <a
              href="#lead-form"
              className="hidden h-11 items-center justify-center rounded-full bg-gradient-to-r from-[#354f9f] to-[#4a63b8] px-6 text-[14px] lg:text-[16px] font-bold text-white shadow-md shadow-[#354f9f]/25 transition-transform hover:-translate-y-0.5 lg:inline-flex"
            >
              Book Appointment
            </a>

            <button
              className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-black/10 text-[#1c2437] lg:hidden"
              type="button"
              onClick={() => setIsOpen((open) => !open)}
              aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
              aria-expanded={isOpen}
            >
              <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                {isOpen ? (
                  <path d="M6 6l12 12M18 6 6 18" stroke="currentColor" strokeLinecap="round" strokeWidth="2.2" />
                ) : (
                  <path d="M4 7h16M4 12h16M4 17h16" stroke="currentColor" strokeLinecap="round" strokeWidth="2.2" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {isOpen && (
          <nav className="flex flex-col gap-1 border-t border-black/5 px-4 py-3 lg:hidden" aria-label="Mobile navigation">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className={`rounded-md px-2 py-2 text-[14px] lg:text-[16px] font-semibold ${
                  item.active ? "text-[#354f9f]" : "text-[#1c2437]/80"
                }`}
              >
                {item.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setIsOpen(false)}
              className="mt-2 inline-flex h-11 items-center justify-center rounded-full bg-gradient-to-r from-[#354f9f] to-[#4a63b8] px-6 text-[14px] lg:text-[16px] font-bold text-white"
            >
              Book Appointment
            </a>

            <div className="mt-3 flex flex-col gap-2 border-t border-black/5 pt-3 text-[12px] md:text-[13px] lg:text-[14px] font-medium text-[#1c2437]/80">
              <span className="flex items-center gap-2">
                <ClockIcon />
                08:00am to 09:00pm
              </span>
              <span className="flex items-center gap-2">
                <PhoneIcon />
                +91 7448866675
              </span>
            </div>
          </nav>
        )}

        {/* connecting dot */}
        <span className="absolute left-1/2 top-full hidden h-2 w-2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#354f9f] lg:block" />
      </header>

      {/* Hero banner */}
      <section className="relative px-3 pb-6 pt-4 sm:px-5 sm:pb-10 sm:pt-6 lg:px-8 xl:px-12">
        <div className="relative mx-auto max-w-[1400px] overflow-hidden rounded-[24px] sm:rounded-[40px] lg:rounded-[64px]">
          <div className="relative min-h-[440px] w-full sm:min-h-[600px] lg:min-h-[700px]">
            <Image
              src="/images-4.jpg"
              alt="Hair restoration consultation"
              fill
              priority
              className="object-cover"
              sizes="100vw"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-[#1c2b5e]/85 via-[#26397a]/75 to-[#1c2b5e]/85" />

            <div className="relative z-10 mx-auto grid h-full max-w-[1200px] grid-cols-1 items-center gap-10 px-4 py-12 sm:px-6 sm:py-16 lg:grid-cols-2 lg:items-center lg:gap-14 lg:px-10 lg:py-14">
              {/* Left: banner content */}
              <div className="flex w-full flex-col items-center text-center lg:items-start lg:text-left">
                <span className="mb-4 inline-flex items-center gap-2 text-[12px] md:text-[13px] lg:text-[14px] font-semibold text-white/90 sm:mb-5">
                  <StethoscopeIcon />
                  Your Hair Our Priority
                </span>

                <h1 className="text-[28px] md:text-[32px] lg:text-[36px] xl:text-[42px] font-extrabold leading-tight text-white">
                  90 Day{" "}
                  <span className="relative inline-block text-[#d92732]">
                    Hair Regrowth
                    <svg
                      className="absolute -bottom-2 left-0 w-full"
                      height="10"
                      viewBox="0 0 260 10"
                      preserveAspectRatio="none"
                    >
                      <path
                        d="M2 7 C 70 2, 190 2, 258 7"
                        stroke="#d92732"
                        strokeWidth="3"
                        strokeLinecap="round"
                        fill="none"
                      />
                    </svg>
                  </span>{" "}
                  Treatment
                </h1>

                <div className="mt-6 inline-flex items-center gap-4 rounded-2xl bg-white/95 p-3 pr-5 shadow-xl sm:mt-7 sm:gap-5 sm:p-3.5 sm:pr-6">
                  <div className="relative aspect-[4/4] w-36 shrink-0 overflow-hidden rounded-xl bg-[#e8ecfa] sm:w-40 lg:w-84">
                    <div
                      className="instant-print-image absolute inset-0"
                      key={beforeAfterImages[beforeAfterIndex]}
                    >
                      <Image
                        src={beforeAfterImages[beforeAfterIndex]}
                        alt="Hair regrowth before and after result"
                        fill
                        className="object-cover"
                        sizes="176px"
                      />
                      <div className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-black/10 via-transparent to-white/20" />
                    </div>
                  </div>
                  <div className="text-left">
                    <p className="text-[16px] md:text-[18px] lg:text-[20px] xl:text-[22px] font-extrabold uppercase tracking-[0.1em] text-[#354f9f]">
                      Before &amp; After
                    </p>
                    <p className="mt-1 text-[12px] md:text-[13px] lg:text-[14px] text-[#1c2437]/60">
                      Real patient result, 90 days
                    </p>
                  </div>
                </div>

                <div className="mt-6 flex flex-wrap items-center justify-center gap-3 sm:mt-8 lg:justify-start">
                  {uspItems.map((item) => (
                    <span
                      key={item.label}
                      className="inline-flex items-center gap-2 rounded-full bg-white/15 px-4 py-2 text-[12px] md:text-[13px] lg:text-[14px] font-semibold text-white backdrop-blur-sm"
                    >
                      {item.icon === "star" ? <StarIcon /> : <CheckIcon />}
                      {item.label}
                    </span>
                  ))}
                </div>
                <style jsx>{`
                  .instant-print-image {
                    transform-origin: top center;
                    animation:
                      instantImageSlip 2.4s cubic-bezier(0.22, 1, 0.36, 1)
                        both,
                      instantImageWave 1.4s ease-in-out 2.4s infinite;
                  }

                  @keyframes instantImageSlip {
                    0% {
                      clip-path: inset(0 0 100% 0);
                      transform: translateY(-36px) skewX(-2deg);
                    }
                    42% {
                      clip-path: inset(0 0 48% 0);
                      transform: translateY(-16px) skewX(2deg);
                    }
                    72% {
                      clip-path: inset(0 0 12% 0);
                      transform: translateY(-4px) skewX(-1deg);
                    }
                    100% {
                      clip-path: inset(0 0 0 0);
                      transform: translateY(0) skewX(0);
                    }
                  }

                  @keyframes instantImageWave {
                    0%,
                    100% {
                      transform: translateY(0) skewX(0);
                    }
                    35% {
                      transform: translateY(1px) skewX(1.2deg);
                    }
                    70% {
                      transform: translateY(0) skewX(-0.8deg);
                    }
                  }
                `}</style>
              </div>

              {/* Right: lead capture form */}
              <div id="lead-form" className="flex w-full max-w-md flex-col justify-self-right rounded-[28px] border border-black/5 bg-white p-6 shadow-2xl sm:p-7 lg:max-w-none lg:justify-self-stretch lg:p-9">
                <div className="flex items-center gap-3">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#354f9f]/10 text-[#354f9f]">
                    <StethoscopeIcon />
                  </span>
                  <div>
                    <h2 className="text-[18px] md:text-[20px] lg:text-[22px] xl:text-[24px] font-extrabold text-[#1c2437]">
                      Book Your Free Consultation
                    </h2>
                    <p className="text-[14px] md:text-[15px] lg:text-[16px] text-[#1c2437]/60">
                      Get in touch with our specialists
                    </p>
                  </div>
                </div>

                <form className="mt-5 flex flex-col gap-3.5" onSubmit={handleSubmit}>
                  <div className="relative">
                    <span className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-[#1c2437]/40">
                      <UserIcon />
                    </span>
                    <input
                      type="text"
                      name="name"
                      placeholder="Name"
                      required
                      className="h-12 w-full rounded-xl border border-black/10 bg-[#f7f8fb] pl-11 pr-4 text-[14px] md:text-[15px] lg:text-[16px] text-[#1c2437] placeholder:text-[#1c2437]/40 transition-colors focus:border-[#354f9f] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#354f9f]/20"
                    />
                  </div>

                  <div className="relative">
                    <span className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-[#1c2437]/40">
                      <PhoneIcon />
                    </span>
                    <input
                      type="tel"
                      name="phone"
                      placeholder="Phone"
                      required
                      className="h-12 w-full rounded-xl border border-black/10 bg-[#f7f8fb] pl-11 pr-4 text-[14px] md:text-[15px] lg:text-[16px] text-[#1c2437] placeholder:text-[#1c2437]/40 transition-colors focus:border-[#354f9f] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#354f9f]/20"
                    />
                  </div>

                  <div className="relative">
                    <span className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-[#1c2437]/40">
                      <MailIcon />
                    </span>
                    <input
                      type="email"
                      name="email"
                      placeholder="Email"
                      required
                      className="h-12 w-full rounded-xl border border-black/10 bg-[#f7f8fb] pl-11 pr-4 text-[14px] md:text-[15px] lg:text-[16px] text-[#1c2437] placeholder:text-[#1c2437]/40 transition-colors focus:border-[#354f9f] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#354f9f]/20"
                    />
                  </div>

                  <div className="relative">
                    <span className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-[#1c2437]/40">
                      <StethoscopeIcon />
                    </span>
                    <select
                      name="concern"
                      required
                      defaultValue=""
                      className="h-12 w-full appearance-none rounded-xl border border-black/10 bg-[#f7f8fb] pl-11 pr-10 text-[14px] md:text-[15px] lg:text-[16px] text-[#1c2437] transition-colors focus:border-[#354f9f] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#354f9f]/20"
                    >
                      <option value="" disabled>
                        Select your concern
                      </option>
                      {concernOptions.map((concern) => (
                        <option key={concern} value={concern}>
                          {concern}
                        </option>
                      ))}
                    </select>
                    <span className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-[#1c2437]/40">
                      <ChevronIcon />
                    </span>
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="mt-2 inline-flex h-12 w-full items-center justify-center rounded-full bg-gradient-to-r from-[#354f9f] to-[#4a63b8] text-[14px] lg:text-[16px] font-bold text-white shadow-md shadow-[#354f9f]/25 transition-transform hover:-translate-y-0.5 disabled:opacity-60 disabled:hover:translate-y-0"
                  >
                    {isSubmitting ? "Sending..." : "Get Free Consultation"}
                  </button>

                  {submitStatus === "error" && (
                    <p className="text-center text-[12px] md:text-[13px] lg:text-[14px] font-semibold text-[#f1323d]">
                      Something went wrong. Please try again.
                    </p>
                  )}

                  <p className="text-center text-[12px] md:text-[13px] lg:text-[14px] text-[#1c2437]/45">
                    Your information is safe with us. No spam, ever.
                  </p>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
