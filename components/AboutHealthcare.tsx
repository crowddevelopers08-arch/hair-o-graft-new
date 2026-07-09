import Image from "next/image";

const clinicPoints = [
  "Root Cause Diagnosis",
  "Certified Hair Specialists",
  "Advanced PRP & GFC Technology",
  "Customized Treatment Plans",
  "Safe & Minimally Invasive Procedures",
  "Affordable Treatment Option",
];


function ClockIcon() {
  return (
    <svg className="h-7 w-7" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M12 7v6l4 2"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.8"
      />
      <circle
        cx="12"
        cy="12"
        r="9"
        stroke="currentColor"
        strokeWidth="1.8"
      />
    </svg>
  );
}

function PlusIcon() {
  return (
    <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#f1323d] text-sm font-bold leading-none text-white">
      +
    </span>
  );
}

function ArrowRightIcon() {
  return (
    <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M5 12h14m-6-6 6 6-6 6"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2.4"
      />
    </svg>
  );
}

function HairShieldIcon() {
  return (
    <svg
      className="h-[220px] w-[220px] text-[#e8ecfa]"
      viewBox="0 0 220 220"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M110 20c31 24 60-5 78 23v52c0 52-31 88-78 105-47-17-78-53-78-105V43c18-28 47 1 78-23Z"
        fill="currentColor"
      />
      <path
        d="M86 92c8-18 44-19 52 0 8 18-14 33-26 47-12-14-34-29-26-47Z"
        fill="white"
        opacity="0.72"
      />
      <path
        d="M95 125c21-18 41-14 52 12"
        stroke="white"
        strokeLinecap="round"
        strokeWidth="12"
      />
    </svg>
  );
}

function HairCapsule() {
  return (
    <svg
      className="h-24 w-24 drop-shadow-[0_8px_12px_rgb(20_41_86_/_18%)]"
      viewBox="0 0 104 104"
      fill="none"
      aria-hidden="true"
    >
      <g transform="rotate(42 52 52)">
        <rect
          x="34"
          y="7"
          width="36"
          height="88"
          rx="18"
          fill="#f6f8ff"
          stroke="#dfe6ff"
          strokeWidth="2"
        />
        <path
          d="M34 51h36v26c0 10-8 18-18 18S34 87 34 77V51Z"
          fill="#354f9f"
        />
        <path d="M41 53v35M52 53v42M63 53v35" stroke="#f6dc24" strokeWidth="3" />
        <path
          d="M39 20c7 14 20 12 26 0"
          stroke="white"
          strokeLinecap="round"
          strokeWidth="4"
          opacity="0.7"
        />
      </g>
    </svg>
  );
}


export default function AboutHealthcare() {
  return (
    <section
      className="relative scroll-mt-28 overflow-hidden bg-[#070b16] px-5 py-8 text-white sm:px-8 lg:px-10 lg:py-24"
      id="about"
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_14%_20%,rgb(53_79_159_/_32%),transparent_28%),radial-gradient(circle_at_86%_14%,rgb(241_50_61_/_22%),transparent_24%),linear-gradient(135deg,rgb(255_255_255_/_7%)_0_1px,transparent_1px_14px)]" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-[#070b16] to-transparent" />

      <div className="absolute right-8 top-6 hidden rotate-12 lg:block">
        <HairCapsule />
      </div>

      <div className="relative z-10 mx-auto grid max-w-[1460px] items-center gap-14 lg:grid-cols-[0.93fr_1fr] xl:gap-20">
        <div className="animate-slip-left relative mx-auto hidden w-full max-w-[620px] lg:mx-0 lg:block">
          <div className="absolute -left-7 -top-7 h-[92%] w-[34%] rounded-2xl bg-white/10" />
          <div className="relative overflow-hidden rounded-2xl bg-white/[0.06] shadow-[0_22px_50px_rgb(0_0_0_/_24%)]">
            <Image
              src="/surgery_fue.png"
              alt="Smiling healthcare specialist"
              width={920}
              height={930}
              className="h-[360px] w-full object-cover object-center sm:h-[520px] lg:h-[600px]"
              priority
            />
          </div>

          <div className="animate-pop animation-delay-400 absolute bottom-5 right-5 flex w-[260px] items-center gap-4 rounded-2xl border border-white/10 bg-white/[0.92] px-7 py-5 shadow-[0_16px_36px_rgb(0_0_0_/_24%)] backdrop-blur-md sm:bottom-8 sm:right-8 sm:w-[305px]">
            <div className="flex h-[46px] w-[46px] shrink-0 items-center justify-center rounded-full border-2 border-[#f1323d] text-[#f1323d]">
              <ClockIcon />
            </div>
            <div>
              <p className="text-[18px] font-extrabold leading-tight text-[#2b2b2b]">
                24/7 availability
              </p>
              <p className="mt-1 text-[15px] font-medium text-[#8c94b0]">
                For your peace of mind
              </p>
            </div>
          </div>
        </div>

        <div className="relative">
          <div className="absolute -left-16 top-1 hidden h-9 w-9 rounded-full border border-[#7dd9ff] lg:block" />
          <div className="animate-slip-right mb-6 max-sm:mb-2 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/8 px-5 py-2 text-[15px] font-semibold text-[#7dd9ff]">
            <span className="h-2 w-2 rounded-full bg-[#f1323d]" />
            Clinic Section
          </div>

          <h2 className="animate-slip-right animation-delay-100 max-w-[720px] text-[36px] font-extrabold leading-[1.22] text-white sm:text-[44px] lg:text-[48px]">
            Why Choose Hair O Graft?
          </h2>

          <p className="animate-slip-right animation-delay-200 mt-5 max-sm:mt-1 max-w-[660px] text-[18px] font-medium leading-8 text-white/75">
            Chennai&apos;s Trusted Hair Restoration Clinic. At Hair O Graft, we
            focus on treating the root cause of hair loss, not just masking the
            symptoms. Using advanced medical technology and evidence-based
            treatments, we create personalized solutions that help restore
            natural hair growth safely and effectively.
          </p>

          <div className="animate-slip-up animation-delay-300 relative mx-auto mt-8 w-full max-w-[620px] lg:hidden">
            <div className="absolute -left-4 -top-4 h-[92%] w-[34%] rounded-2xl bg-white/10" />
            <div className="relative overflow-hidden rounded-2xl bg-white/[0.06] shadow-[0_22px_50px_rgb(0_0_0_/_24%)]">
              <Image
                src="/surgery_fue.png"
                alt="Smiling healthcare specialist"
                width={920}
                height={930}
                className="h-[360px] w-full object-cover object-center sm:h-[520px]"
                priority
              />
            </div>

            <div className="animate-pop animation-delay-400 absolute bottom-5 right-5 flex w-[260px] items-center gap-4 rounded-2xl border border-white/10 bg-white/[0.92] px-7 py-5 shadow-[0_16px_36px_rgb(0_0_0_/_24%)] backdrop-blur-md sm:bottom-8 sm:right-8 sm:w-[305px]">
              <div className="flex h-[46px] w-[46px] shrink-0 items-center justify-center rounded-full border-2 border-[#f1323d] text-[#f1323d]">
                <ClockIcon />
              </div>
              <div>
                <p className="text-[18px] font-extrabold leading-tight text-[#2b2b2b]">
                  24/7 availability
                </p>
                <p className="mt-1 text-[15px] font-medium text-[#8c94b0]">
                  For your peace of mind
                </p>
              </div>
            </div>
          </div>

          <div className="animate-slip-up animation-delay-300 relative mt-8 max-w-[740px]">
            <div className="absolute right-8 top-[-18px] hidden opacity-80 sm:block">
              <HairShieldIcon />
            </div>

            <ul className="relative z-10 flex flex-wrap gap-y-5">
              {clinicPoints.map((point) => (
                <li
                  className="flex w-full items-center gap-3 pr-4 text-[16px] font-semibold leading-6 text-white/82 sm:w-1/2"
                  key={point}
                >
                  <PlusIcon />
                  <span className="block flex-1 text-left">{point}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-9 h-px max-w-[740px] bg-white/12" />

          <div className="animate-slip-up animation-delay-500 mt-8 flex max-w-[740px] flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex items-center gap-5">
              <div className="relative h-[58px] w-[58px] overflow-hidden rounded-full bg-[#f6d6cd]">
                <Image
                  src="/doctors.jpeg"
                  alt="Michael Jordan"
                  fill
                  className="object-cover"
                />
              </div>
              <div>
                <p className="text-[22px] font-extrabold leading-tight text-white">
                  Dr. E. Hema Shree
                </p>
                <p className="mt-1 text-[16px] font-medium text-white/65">
                  BDS | FMC
                </p>
              </div>
            </div>

            <div className="flex items-center gap-10">

              <a
                className="inline-flex h-[54px] min-w-[178px] items-center justify-between rounded-full border border-white/15 bg-white/8 pl-8 pr-2 text-[16px] font-semibold text-white transition-colors duration-200 hover:border-[#f1323d] hover:bg-white/12"
                href="#"
              >
                Learn More
                <span className="ml-5 flex h-10 w-10 items-center justify-center rounded-full bg-[#f1323d] text-white">
                  <ArrowRightIcon />
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>

    </section>
  );
}
