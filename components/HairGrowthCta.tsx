const highlights = [
  "Personalized Hair & Scalp Analysis",
  "Advanced PRP, GFC & Hair Restoration Treatments",
  "Experienced Hair Specialists & Modern Technology",
  "Safe, Effective & Result-Driven Care",
];

function CheckIcon() {
  return (
    <svg className="h-4 w-4" viewBox="0 0 18 18" fill="none" aria-hidden="true">
      <path
        d="m3.75 9.25 3.25 3.25 7.25-7.25"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2.4"
      />
    </svg>
  );
}

function HairMark() {
  return (
    <svg className="h-28 w-28 text-[#354f9f]/10" viewBox="0 0 120 120" fill="none" aria-hidden="true">
      <path
        d="M27 82c8-39 38-62 72-51-24 9-40 27-48 61"
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth="10"
      />
      <path
        d="M40 92c9-27 29-42 54-43"
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth="8"
      />
    </svg>
  );
}

export default function HairGrowthCta() {
  return (
    <section
      className="relative scroll-mt-28 overflow-hidden bg-white px-5 py-8 text-[#0b1233] sm:px-8 lg:px-10 lg:py-20"
      id="contact"
    >


      <div className="relative z-10 mx-auto grid max-w-[1120px] items-center gap-10 lg:grid-cols-[1.05fr_0.95fr]">
        <div>
          <span className="animate-slip-left inline-flex rounded-full border border-[#354f9f]/15 bg-[#354f9f]/8 px-5 py-2 text-[13px] font-bold uppercase tracking-[0.18em] text-[#354f9f]">
            Hair O Graft
          </span>

          <h1 className="animate-slip-left animation-delay-100 mt-5 max-sm:mt-2 max-w-[760px] text-[36px] font-extrabold leading-[1.12] text-[#0b1233] sm:text-[48px] lg:text-[48px]">
            Stop Your Hair Loss. Start Your Hair Regrowth.
          </h1>

          <p className="animate-slip-left animation-delay-200 mt-5 max-sm:mt-2 max-w-[680px] text-[18px] font-medium leading-8 text-[#5a6a82] sm:text-[20px]">
            Advanced Hair Growth, Hair Loss & Baldness Treatments Tailored Just
            for You
          </p>

          <a
            className="animate-slip-up animation-delay-500 max-sm:mt-4 mt-8 inline-flex h-[54px] items-center justify-center rounded-full bg-[#354f9f] px-8 text-[16px] font-extrabold text-white transition-colors duration-200 hover:bg-[#d92732]"
            href="#"
          >
            Book Your Appointment Now
          </a>
        </div>

        <div className="animate-slip-right rounded-[8px] border border-[#354f9f]/10 bg-[#f6f8ff] p-5 shadow-[0_22px_50px_rgb(20_41_86_/_10%)] sm:p-7">
          <div className="grid gap-4">
            {highlights.map((item, index) => (
              <div
                className="animate-slip-right flex items-center gap-3 rounded-[8px] border border-[#354f9f]/10 bg-white px-4 py-4"
                style={{ animationDelay: `${260 + index * 90}ms` }}
                key={item}
              >
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#354f9f] text-white">
                  <CheckIcon />
                </span>
                <p className="text-[15px] font-bold leading-6 text-[#0b1233] sm:text-[16px]">
                  {item}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
