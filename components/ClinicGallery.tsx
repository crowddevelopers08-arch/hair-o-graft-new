import Image from "next/image";

const sideImages = [
  {
    src: "https://images.unsplash.com/photo-1584515933487-779824d29309?auto=format&fit=crop&w=420&q=85",
    alt: "Specialist caring for patient",
  },
  {
    src: "https://images.unsplash.com/photo-1632053002401-b9b1f617c15f?auto=format&fit=crop&w=420&q=85",
    alt: "Patient in clinic room",
  },
  {
    src: "https://images.unsplash.com/photo-1582750433449-648ed127bb54?auto=format&fit=crop&w=420&q=85",
    alt: "Clinic consultation",
  },
  {
    src: "https://images.unsplash.com/photo-1581093458791-9d15482442f6?auto=format&fit=crop&w=420&q=85",
    alt: "Advanced clinical treatment equipment",
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
  return (
    <section className="bg-white px-3 py-10 sm:px-5 lg:px-3">
      <div className="mx-auto flex max-w-[1880px] flex-col gap-6 lg:flex-row lg:gap-[26px]">
        <div className="grid grid-cols-2 gap-5 sm:grid-cols-4 lg:w-[46.5%] lg:grid-cols-4 lg:gap-[26px]">
          {sideImages.map((image, index) => (
            <div
              className="animate-slip-up h-[280px] overflow-hidden rounded-2xl bg-[#2b2b2b] sm:h-[360px] lg:h-[570px]"
              style={{ animationDelay: `${index * 100}ms` }}
              key={image.alt}
            >
              <Image
                src={image.src}
                alt={image.alt}
                width={420}
                height={760}
                className="h-full w-full object-cover"
              />
            </div>
          ))}
        </div>

        <div className="animate-slip-right animation-delay-300 relative min-h-[360px] overflow-hidden rounded-2xl bg-[#f6f8ff] lg:min-h-[570px] lg:flex-1">
          <Image
            src="https://images.unsplash.com/photo-1631815588090-d4bfec5b1ccb?auto=format&fit=crop&w=1300&q=85"
            alt="Specialist speaking with patient in recovery room"
            fill
            className="object-cover"
            priority
            sizes="(max-width: 1024px) 100vw, 52vw"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />

          <div className="absolute left-[3.5%] top-1/2 hidden h-8 w-8 -translate-y-1/2 rounded-full border-2 border-[#f1323d]/80 bg-white/15 backdrop-blur-sm lg:block" />

          <div className="absolute bottom-[34px] left-1/2 w-[88%] max-w-[490px] -translate-x-1/2 sm:left-[34px] sm:w-auto sm:translate-x-0">
            <div className="bg-[#354f9f] px-4 py-[13px] text-[15px] font-bold leading-tight text-white sm:px-5 sm:text-[16px]">
              Dedicated Hair O Graft Recovery for Faster Natural Growth
            </div>
            <div className="w-fit bg-[#f1323d] px-4 py-[12px] text-[14px] font-bold leading-none text-white sm:px-5">
              Medical
            </div>
          </div>

          <button
            className="absolute bottom-[18px] right-[24px] flex h-12 w-12 items-center justify-center rounded-full border-2 border-white/80 bg-[#354f9f]/20 text-white backdrop-blur-sm transition-colors duration-200 hover:bg-[#f1323d]"
            type="button"
            aria-label="Back to top"
          >
            <UpArrowIcon />
          </button>
        </div>
      </div>
    </section>
  );
}
