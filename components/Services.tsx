const services = [
  {
    title: "Development",
    description:
      "I build fast, secure and scalable websites using modern technologies like WordPress, Shopify and custom solutions",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
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
      <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
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
      <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
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
    <section className="w-full bg-[#0D0D0F] py-16 px-6 md:px-20">
      <div className="flex flex-col md:flex-row gap-10 md:gap-16 items-start">

        {/* Left — Title */}
        <div className="md:w-1/3 shrink-0">
          <p className="text-[#E67E22] font-poppins font-semibold text-sm md:text-base mb-2">
            Services
          </p>
          <h2 className="text-white text-4xl md:text-5xl font-bold font-poppins leading-tight">
            What I Offer
          </h2>
          <div className="mt-3 w-16 h-[3px] bg-[#E67E22] rounded-full" />
        </div>

        {/* Right — Cards */}
        <div className="flex flex-col sm:flex-row gap-4 w-full">
          {services.map((service) => (
            <div
              key={service.title}
              className="flex-1 bg-[#1C1C1C] border border-gray-800 rounded-xl p-6 flex flex-col gap-6 hover:border-[#E67E22] transition-colors duration-200"
            >
              {/* Icon circle */}
              <div className="w-14 h-14 rounded-full border-2 border-[#E67E22] flex items-center justify-center text-[#E67E22] shrink-0">
                {service.icon}
              </div>

              {/* Text */}
              <div className="flex flex-col gap-3">
                <h3 className="text-white font-poppins font-bold text-xl">
                  {service.title}
                </h3>
                <p className="text-gray-400 font-poppins text-sm leading-relaxed">
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