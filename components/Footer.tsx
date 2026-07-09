export default function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-white/10 bg-[#070b16] px-5 py-6 text-white sm:px-8 lg:px-10">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_14%_20%,rgb(53_79_159_/_32%),transparent_28%),radial-gradient(circle_at_86%_14%,rgb(241_50_61_/_22%),transparent_24%),linear-gradient(135deg,rgb(255_255_255_/_7%)_0_1px,transparent_1px_14px)]" />
      <div className="relative z-10 mx-auto flex max-w-[1005px] flex-col items-center max-sm:gap-2 gap-4 text-center text-[17px] font-medium text-white/82 sm:flex-row sm:justify-between sm:text-left">
        <p>
          Copyright 2026{" "}
          <span className="font-extrabold text-white">Hair O Graft.</span>{" "}
          All rights reserved.
        </p>
        <a
          className="font-extrabold text-[#7dd9ff] transition-colors duration-200 hover:text-[#f1323d]"
          href="#"
        >
          Privacy Policy
        </a>
      </div>
    </footer>
  );
}
