const faqs = [
  {
    question: "What hair problems do you treat?",
    answer: [
      "Hair Fall",
      "Hair Thinning",
      "Baldness",
      "Receding Hairline",
      "Dandruff",
      "Scalp Infections",
      "Weak Hair Growth",
    ],
  },
  {
    question: "Is PRP treatment painful?",
    answer:
      "PRP is a minimally invasive procedure. Most patients experience only mild discomfort, and the treatment is completed comfortably under expert care.",
  },
  {
    question: "How many sessions are required?",
    answer:
      "The number of sessions depends on your hair condition. Our specialist will recommend a customized treatment plan after your consultation.",
  },
  {
    question: "Is GFC better than PRP?",
    answer:
      "Both treatments are effective. The best option depends on your stage of hair loss, scalp condition, and treatment goals.",
  },
  {
    question: "When will I see results?",
    answer:
      "Many patients notice reduced hair fall within a few weeks, while visible hair growth typically becomes more noticeable over the following months. Individual results vary.",
  },
  {
    question: "Do you provide hair transplant services?",
    answer:
      "Yes. We offer advanced hair transplant procedures for suitable candidates after a detailed consultation.",
  },
];

function PlusIcon() {
  return (
    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#f1323d] text-lg font-bold leading-none text-white shadow-[0_10px_24px_rgb(241_50_61_/_28%)]">
      +
    </span>
  );
}

export default function FaqSection() {
  return (
    <section
      className="relative scroll-mt-28 overflow-hidden bg-[#070b16] px-5 py-8 text-white sm:px-8 lg:px-10 lg:py-20"
      id="faq"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_14%_20%,rgb(53_79_159_/_32%),transparent_28%),radial-gradient(circle_at_86%_14%,rgb(241_50_61_/_22%),transparent_24%),linear-gradient(135deg,rgb(255_255_255_/_7%)_0_1px,transparent_1px_14px)]" />
      <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-[#070b16] to-transparent" />

      <div className="relative mx-auto max-w-[1120px]">
        <div className="mx-auto max-w-[720px] text-center">
          <span className="animate-slip-up inline-flex rounded-full border border-white/15 bg-white/8 px-5 py-2 text-[13px] font-bold uppercase tracking-[0.18em] text-[#7dd9ff]">
            FAQ
          </span>
          <h2 className="animate-slip-up animation-delay-100 mt-5 max-sm:mt-1 text-[32px] font-extrabold leading-tight text-white sm:text-[42px] lg:text-[48px]">
            Frequently Asked Questions
          </h2>
        </div>

        <div className="mt-12 max-sm:mt-6 grid gap-5 max-sm:gap-2 lg:grid-cols-2">
          {faqs.map((faq, index) => (
            <details
              className="animate-slip-up group rounded-[8px] border border-white/10 bg-white/[0.06] p-5 shadow-[0_22px_50px_rgb(0_0_0_/_24%)] backdrop-blur-md open:border-[#7dd9ff]/45 open:bg-white/[0.09]"
              style={{ animationDelay: `${180 + index * 90}ms` }}
              key={faq.question}
            >
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-left marker:hidden">
                <h3 className="text-[17px] font-extrabold leading-snug text-white">
                  {faq.question}
                </h3>
                <PlusIcon />
              </summary>

              {Array.isArray(faq.answer) ? (
                <ul className="mt-5 grid gap-3 text-[15px] font-medium leading-6 text-white/78 sm:grid-cols-2">
                  {faq.answer.map((item) => (
                    <li className="flex items-center gap-3" key={item}>
                      <span className="h-2 w-2 shrink-0 rounded-full bg-[#7dd9ff]" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              ) : (
                <p className="mt-5 text-[15px] font-medium leading-7 text-white/75">
                  {faq.answer}
                </p>
              )}
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
