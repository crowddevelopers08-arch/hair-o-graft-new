import Image from "next/image";

const features = [
  {
    title: "Hair Regrowth Treatment",
  },
  {
    title: "Hair Loss Treatment",
  },
  {
    title: "Baldness Treatment",
  },
  {
    title: "Scalp Treatments",
  },
];

function CheckIcon() {
  return (
    <svg className="h-3.5 w-3.5" viewBox="0 0 16 16" fill="none" aria-hidden="true">
      <path
        d="m3.25 8.25 3 3 6.5-6.5"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2.2"
      />
    </svg>
  );
}

function ArrowRightIcon() {
  return (
    <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M5 12h14M13 6l6 6-6 6"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2.4"
      />
    </svg>
  );
}

function QuoteIcon() {
  return (
    <svg className="h-8 w-8" viewBox="0 0 32 24" fill="none" aria-hidden="true">
      <path
        d="M0 24V14.6C0 6.6 4.6 1.2 12.4 0l1.4 3.6C9 4.8 6.6 7.6 6.4 12H13v12H0Zm18.6 0V14.6c0-8 4.6-13.4 12.4-14.6L32.4 3.6C27.6 4.8 25.2 7.6 25 12h6.6v12H18.6Z"
        fill="currentColor"
      />
    </svg>
  );
}

export default function ProfessionalsSection() {
  return (
    <section
      className="relative scroll-mt-28 overflow-hidden bg-white px-5 py-8 max-sm:px-4 max-sm:py-10 sm:px-5 lg:px-10 lg:py-8"
      id="doctors"
    >
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

      {/* centered intro — one eyebrow, one headline, one accent bar, all on one axis */}
      <div className="relative z-10 mx-auto flex max-w-[1160px] flex-col items-center text-center">
        <span className="animate-slip-up inline-flex items-center gap-2 text-[13px] font-bold uppercase tracking-[0.28em] text-[#364B9B]">
          <span className="h-px w-6 bg-[#364b9b]" />
          Doctor Section
          <span className="h-px w-6 bg-[#d92732]" />
        </span>

        <h2 className="animate-slip-up animation-delay-100 mt-3 max-w-[580px] text-[32px] font-extrabold leading-[1.16] text-[#0b1233] sm:text-[40px] lg:text-[44px]">
          Meet Your Hair Specialist
        </h2>

      </div>

      {/* framed detail card — text and imagery share one contained, symmetric composition */}
      <div className="relative z-10 mx-auto mt-4 max-w-[1220px] rounded-[44px] bg-white/70 p-6 max-sm:mt-3 max-sm:p-4 backdrop-blur-sm sm:p-10 lg:p-14">
        <div className="relative grid max-w-[1160px] items-center gap-14 lg:mx-auto lg:grid-cols-2 lg:gap-16">
          <span className="pointer-events-none absolute left-1/2 top-0 hidden h-full w-px -translate-x-1/2 bg-gradient-to-b from-transparent via-[#0b1233]/10 to-transparent lg:block" />

          <div className="relative z-10 mx-auto w-full max-w-[540px] lg:mx-0 lg:justify-self-start">
            <div className="animate-slip-up animation-delay-150 flex items-center gap-3">
              <span className="text-[15px] font-extrabold uppercase text-[#0b1233] sm:text-[16px]">
                Dr. E. Hema Shree
              </span>
              <span className="h-4 w-px bg-[#0b1233]/15" />
              <span className="rounded-full bg-[#364b9b]/[0.08] px-3 py-1 text-[12px] font-bold tracking-wide text-[#364b9b]">
                BDS
              </span>
              <span className="rounded-full bg-[#d92732]/[0.08] px-3 py-1 text-[12px] font-bold tracking-wide text-[#d92732]">
                FMC
              </span>
            </div>

            <p className="animate-slip-left animation-delay-200 mt-4 max-sm:mt-3 max-w-[500px] text-[15px] font-medium leading-7 text-[#2b3a55] sm:text-[16px]">
              Aesthetic Practitioner &amp; Cosmetology Specialist with over 5+
              years of clinical experience. She creates personalized treatment
              plans based on each patient&apos;s unique hair condition.
            </p>

            <div className="animate-slip-up animation-delay-300 relative mx-auto mt-8 max-sm:mt-5 min-h-[510px] w-full max-w-[420px] sm:min-h-[560px] lg:hidden">
              <div className="absolute inset-x-4 top-6 bottom-6 -z-10 rounded-[40px] bg-gradient-to-br from-[#364b9b]/[0.08] to-[#d92732]/[0.06]" />
              <div className="absolute right-0 top-3 h-[461px] w-[84%] overflow-hidden rounded-[34px] bg-[#f6f8ff] shadow-[0_20px_45px_rgb(11_18_51_/_12%)] sm:h-[400px] sm:rounded-[42px]">
                <Image
                  src="/surgery_gfc.png"
                  alt="Dr. E. Hema Shree hair specialist caring for patient"
                  fill
                  className="object-cover object-center"
                  sizes="82vw"
                  priority
                />
              </div>

              <div className="absolute left-0 top-0 w-[58%] min-w-[190px] overflow-hidden rounded-[26px] bg-[#0b1233] shadow-[0_18px_40px_rgb(11_18_51_/_22%)] sm:min-w-[215px] sm:rounded-[28px]">
                <div className="relative h-[190px] sm:h-[215px]">
                  <Image
                    src="/doctors.jpeg"
                    alt="Professional hair consultation video support"
                    fill
                    className="object-cover"
                    sizes="220px"
                  />
                </div>
                <div className="bg-[#0b1233] py-3 text-center text-[12px] font-extrabold leading-none tracking-wide text-white sm:text-[13px]">
                  DR. E. HEMA SHREE
                </div>
              </div>

              <div className="animate-pop animation-delay-500 absolute bottom-2 right-0 w-[78%] max-w-[300px] rounded-2xl bg-[#364b9b] px-5 py-5 text-white shadow-[0_18px_36px_rgb(54_75_155_/_28%)]">
                <div className="absolute -right-3 -top-5 flex h-[62px] w-[62px] items-center justify-center rounded-full bg-[#d92732]">
                  <span className="text-[20px] font-extrabold leading-none text-white">
                    5+
                  </span>
                </div>
                <h3 className="pr-9 text-[18px] font-extrabold leading-tight">
                  Years Experience
                </h3>
                <p className="mt-3 text-[13px] font-semibold leading-6 text-white/90">
                  Clinical experience in advanced hair restoration and
                  cosmetology care.
                </p>
              </div>
            </div>

            <div className="mt-9 max-sm:mt-6 h-px w-full max-w-[500px] bg-gradient-to-r from-[#0b1233]/12 via-[#0b1233]/12 to-transparent" />

            <div className="mt-8 max-sm:mt-5 max-w-[500px] rounded-[22px] bg-[#f6f8ff]/60 p-5 max-sm:p-4 shadow-[0_2px_10px_rgb(11_18_51_/_4%)] sm:p-6">
              <span className="text-[12px] font-extrabold uppercase tracking-[0.14em] text-[#364b9b]/70">
                Areas of Expertise
              </span>
              <div className="mt-4 max-sm:mt-3 grid gap-x-4 max-sm:gap-y-2.5 gap-y-3 sm:grid-cols-2">
                {features.map((feature, index) => (
                  <div
                    className="animate-slip-left flex items-center gap-3 rounded-2xl bg-white px-4 py-3 shadow-[0_2px_8px_rgb(11_18_51_/_5%)] transition-colors duration-200 hover:bg-[#364b9b]/[0.06]"
                    style={{ animationDelay: `${300 + index * 120}ms` }}
                    key={feature.title}
                  >
                    <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#364b9b] text-white">
                      <CheckIcon />
                    </div>
                    <div className="flex min-h-8 items-center">
                      <h3 className="text-[15px] font-extrabold leading-tight text-[#0b1233] sm:text-[16px]">
                        {feature.title}
                      </h3>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative mt-8 max-sm:mt-5 flex max-w-[500px] gap-4 rounded-[22px] bg-[#0b1233]/[0.02] py-4 max-sm:py-3 pl-5 max-sm:pl-4 pr-4 max-sm:pr-3">
              <span className="absolute inset-y-2 left-0 w-[3px] rounded-full bg-[#d92732]" />
              <span className="mt-1 shrink-0 text-[#364b9b]/20">
                <QuoteIcon />
              </span>
              <p className="animate-slip-left animation-delay-600 text-[15px] font-medium italic leading-7 text-[#2b3a55] sm:text-[16px]">
                She believes every patient deserves a personalized treatment
                plan based on their unique hair condition and focuses on
                achieving natural-looking, long-lasting results.
              </p>
            </div>

            <div className="mt-9 max-sm:mt-6 h-px w-full max-w-[500px] bg-gradient-to-r from-[#0b1233]/12 via-[#0b1233]/12 to-transparent" />

            <a
              className="animate-slip-up animation-delay-600 group max-sm:mt-5 mt-8 inline-flex h-[52px] items-center justify-center gap-2 rounded-full bg-[#364b9b] px-8 text-[16px] font-bold text-white transition-colors duration-200 hover:bg-[#d92732]"
              href="#lead-form"
            >
              Book Appointment
              <ArrowRightIcon />
            </a>
          </div>

          <div className="animate-slip-right relative mx-auto hidden min-h-[560px] w-full max-w-[540px] lg:mx-0 lg:block lg:justify-self-end">
            <div className="absolute -inset-6 -z-10 rounded-[64px] bg-gradient-to-br from-[#364b9b]/[0.08] to-[#d92732]/[0.06]" />
            <svg
              className="pointer-events-none absolute -left-8 bottom-10 -z-10 h-24 w-24 text-[#364b9b]/15"
              viewBox="0 0 100 100"
              fill="none"
              aria-hidden="true"
            >
              {Array.from({ length: 5 }).map((_, row) =>
                Array.from({ length: 5 }).map((_, col) => (
                  <circle
                    key={`${row}-${col}`}
                    cx={10 + col * 20}
                    cy={10 + row * 20}
                    r="2.5"
                    fill="currentColor"
                  />
                ))
              )}
            </svg>
            <div className="absolute right-0 top-0 h-[420px] w-[82%] overflow-hidden rounded-[52px] bg-[#f6f8ff] shadow-[0_28px_60px_rgb(11_18_51_/_14%)] sm:h-[520px]">
              <Image
                src="/surgery_gfc.png"
                alt="Dr. E. Hema Shree hair specialist caring for patient"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 72vw, 520px"
                priority
              />
            </div>

            <div className="absolute left-0 top-[-50px] w-[50%] min-w-[260px] overflow-hidden rounded-[32px] bg-[#0b1233] shadow-[0_18px_40px_rgb(11_18_51_/_22%)]">
              <div className="relative h-[220px] sm:h-[260px]">
                <Image
                  src="/doctors.jpeg"
                  alt="Professional hair consultation video support"
                  fill
                  className="object-cover"
                  sizes="320px"
                />
              </div>
              <div className="bg-[#0b1233] py-3 text-center text-[16px] font-extrabold leading-none tracking-wide text-white">
                DR. E. HEMA SHREE
              </div>
            </div>

            <div className="animate-pop animation-delay-500 absolute bottom-[-50px] right-[-50px] w-[255px] rounded-2xl bg-[#364b9b] px-6 py-6 text-white shadow-[0_18px_36px_rgb(54_75_155_/_28%)] sm:w-[315px]">
              <div className="absolute -right-7 -top-8 flex h-[82px] w-[82px] items-center justify-center rounded-full bg-[#d92732]">
                <span className="text-[28px] font-extrabold leading-none text-white">
                  5+
                </span>
              </div>
              <h3 className="text-[21px] font-extrabold leading-tight">
                Years Experience
              </h3>
              <p className="mt-5 text-[15px] font-semibold leading-7 text-white/90">
                Clinical experience in advanced hair restoration and
                cosmetology care.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}