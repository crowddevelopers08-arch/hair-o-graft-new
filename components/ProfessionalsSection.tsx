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

function LabelIcon() {
  return (
    <svg className="h-7 w-7" viewBox="0 0 32 32" fill="none" aria-hidden="true">
      <path
        d="M10 7v7a6 6 0 0 0 12 0V7M14 7v7a2 2 0 0 0 4 0V7M16 22v4"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2.4"
      />
      <circle cx="24" cy="24" r="2" fill="currentColor" />
    </svg>
  );
}

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

function HairOrb() {
  return (
    <svg className="h-16 w-16" viewBox="0 0 80 80" fill="none" aria-hidden="true">
      <circle cx="40" cy="40" r="38" fill="#f6f8ff" />
      <path
        d="M22 51c4-19 18-30 36-25-10 4-16 12-19 27M29 57c4-13 13-21 27-22"
        stroke="#354f9f"
        strokeLinecap="round"
        strokeWidth="4"
      />
    </svg>
  );
}

export default function ProfessionalsSection() {
  return (
    <section
      className="relative scroll-mt-28 overflow-hidden bg-white px-5 py-14 sm:px-8 lg:px-10 lg:py-20"
      id="doctors"
    >
      <div className="mx-auto grid max-w-[1120px] items-center gap-12 lg:grid-cols-2 lg:gap-10">
        <div className="relative z-10 w-full max-w-[540px] lg:justify-self-start">
          <div className="animate-slip-left inline-flex items-center gap-3 text-[16px] font-semibold text-[#354f9f]">
            <LabelIcon />
            Doctor Section
          </div>

          <h2 className="animate-slip-left animation-delay-100 max-sm:mt-2 mt-5 max-w-[480px] text-[32px] font-extrabold leading-[1.16] text-[#0b1233] sm:text-[40px] lg:text-[44px]">
            Meet Your Hair Specialist
          </h2>

          <p className="animate-slip-left animation-delay-200 max-sm:mt-2 mt-5 max-w-[500px] text-[15px] font-medium leading-7 text-[#2b3a55] sm:text-[16px]">
            Dr. E. Hema Shree, BDS | FMC, is an Aesthetic Practitioner &
            Cosmetology Specialist with over 5+ years of clinical experience.
            She creates personalized treatment plans based on each patient&apos;s
            unique hair condition.
          </p>

          <div className="animate-slip-up animation-delay-300 relative mx-auto max-sm:mt-4 mt-8 min-h-[430px] w-full max-w-[420px] lg:hidden">
            <div className="absolute right-0 top-0 h-[360px] w-[82%] overflow-hidden rounded-[42px] bg-[#f6f8ff]">
              <Image
                src="/doctors.jpeg"
                alt="Dr. E. Hema Shree hair specialist caring for patient"
                fill
                className="object-cover"
                sizes="82vw"
                priority
              />
            </div>

            <div className="absolute left-0 top-8 w-[54%] min-w-[205px] overflow-hidden rounded-[28px] border-[7px] border-white bg-[#0b1233] shadow-[0_18px_40px_rgb(11_18_51_/_18%)]">
              <div className="relative h-[205px]">
                <Image
                  src="/doctors.jpeg"
                  alt="Professional hair consultation video support"
                  fill
                  className="object-cover"
                  sizes="220px"
                />
              </div>
              <div className="bg-[#0b1233] py-3 text-center text-[13px] font-extrabold leading-none text-white">
                DR. E. HEMA SHREE
              </div>
            </div>

            <div className="animate-pop animation-delay-500 absolute bottom-0 right-0 w-[245px] rounded-2xl bg-[#354f9f] px-5 py-5 text-white shadow-[0_18px_36px_rgb(53_79_159_/_25%)]">
              <div className="absolute -right-4 -top-6 flex h-[66px] w-[66px] items-center justify-center rounded-full border-[4px] border-white bg-[#0b1233]">
                <span className="text-[20px] font-extrabold leading-none text-white">
                  5+
                </span>
              </div>
              <h3 className="text-[18px] font-extrabold leading-tight">
                Years Experience
              </h3>
              <p className="mt-4 text-[13px] font-semibold leading-6 text-white/90">
                Clinical experience in advanced hair restoration and
                cosmetology care.
              </p>
            </div>
          </div>

          <div className="mt-9 grid gap-x-5 max-sm:gap-y-2 gap-y-4 sm:grid-cols-2">
            {features.map((feature, index) => (
              <div
                className="animate-slip-left flex items-center gap-3"
                style={{ animationDelay: `${300 + index * 120}ms` }}
                key={feature.title}
              >
                <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#354f9f] text-white">
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
            <p className="animate-slip-left animation-delay-600 max-sm:mt-4 mt-8 max-w-[500px] text-[15px] font-medium leading-7 text-[#2b3a55] sm:text-[16px]">
              She believes every patient deserves a personalized treatment plan
              based on their unique hair condition and focuses on achieving
              natural-looking, long-lasting results.
            </p>
          <a
            className="animate-slip-up animation-delay-600 max-sm:mt-5 mt-10 inline-flex h-[52px] items-center justify-center rounded-full bg-[#354f9f] px-8 text-[16px] font-bold text-white transition-colors duration-200 hover:bg-[#f1323d]"
            href="#"
          >
            Book Appointment
          </a>
        </div>

        <div className="animate-slip-right relative mx-auto hidden min-h-[540px] w-full max-w-[540px] lg:mx-0 lg:block lg:justify-self-end">
          <div className="absolute right-0 top-0 h-[420px] w-[82%] overflow-hidden rounded-[52px] bg-[#f6f8ff] sm:h-[520px]">
            <Image
              src="/surgery_gfc.png"
              alt="Dr. E. Hema Shree hair specialist caring for patient"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 72vw, 520px"
              priority
            />
          </div>

          <div className="absolute left-0 top-[-50px] w-[50%] min-w-[260px] overflow-hidden rounded-[32px] border-[8px] border-white bg-[#0b1233] shadow-[0_18px_40px_rgb(11_18_51_/_18%)]">
            <div className="relative h-[220px] sm:h-[260px]">
              <Image
                src="/doctors.jpeg"
                alt="Professional hair consultation video support"
                fill
                className="object-cover"
                sizes="320px"
              />
            </div>
            <div className="bg-[#0b1233] py-3 text-center text-[16px] font-extrabold leading-none text-white">
              DR. E. HEMA SHREE
            </div>
          </div>

          <div className="animate-pop animation-delay-500 absolute bottom-[-50px] right-[-50px] w-[255px] rounded-2xl bg-[#354f9f] px-6 py-6 text-white shadow-[0_18px_36px_rgb(53_79_159_/_25%)] sm:w-[315px]">
            <div className="absolute -right-7 -top-8 flex h-[82px] w-[82px] items-center justify-center rounded-full border-[5px] border-white bg-[#0b1233]">
              <span className="text-[28px] font-extrabold leading-none text-white">
                5+
              </span>
            </div>
            <h3 className="text-[21px] font-extrabold leading-tight">
              Years Experience
            </h3>
            <p className="mt-5 text-[15px] font-semibold leading-7 text-white/90">
              Clinical experience in advanced hair restoration and cosmetology
              care.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
