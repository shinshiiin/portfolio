const services = [
  {
    title: "Development",
    description:
      "I build fast, secure and scalable websites using modern technologies like WordPress, Shopify and custom solutions",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="16 18 22 12 16 6" />
        <polyline points="8 6 2 12 8 18" />
      </svg>
    ),
  },
  {
    title: "Design",
    description:
      "I create clean, modern and user-friendly design that matches your brand and deliver a great user experience",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 19l7-7 3 3-7 7-3-3z" />
        <path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z" />
        <path d="M2 2l7.586 7.586" />
        <circle cx="11" cy="11" r="2" />
      </svg>
    ),
  },
  {
    title: "Speed Optimization",
    description:
      "Improving Core Web Vitals, loading speed, responsiveness, and overall user experience.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2v4" />
        <path d="m15.4 3.4-2 3.5" />
        <path d="M22 12h-4" />
        <path d="m20.6 8.6-3.5 2" />
        <path d="M12 12v6" />
        <circle cx="12" cy="12" r="10" />
        <path d="m9 15 3-3" />
      </svg>
    ),
  },
];

export default function Services() {
  return (
    <section className="bg-bg py-12 px-6 md:py-18 md:px-12 border-b border-line">
      <div className="flex flex-col gap-[22px] items-start">

        {/* Left — Title */}
        <div className="">
          <p className="text-accent text-xs md:text-base mb-2">
            Services
          </p>
          <h2 className="text-text text-3xl md:text-[34px] font-bold">
            What I Offer
          </h2>
          <div className="mt-3 w-11 h-[3px] bg-accent rounded-full" />
        </div>

        {/* Right — Cards */}
        <div className="flex flex-col sm:flex-row gap-4 w-full">
          {services.map((service) => (
            <div
              key={service.title}
              className="flex-1 bg-surface border border-line rounded-xl p-[22px] flex flex-col gap-4 hover:border-accent transition-colors duration-200"
            >
              {/* Icon circle */}
              <div className="w-10.5 h-10.5 bg-accent-soft rounded-full border-2 border-accent flex items-center justify-center text-accent shrink-0">
                {service.icon}
              </div>

              {/* Text */}
              <div className="flex flex-col gap-3">
                <h3 className="text-text font-bold text-[17px]">
                  {service.title}
                </h3>
                <p className="text-muted text-sm">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}