"use client";

import { useEffect, useRef } from "react";

const skills = [
  { name: "Shopify", label: "E-Commerce", pct: 92 },
  { name: "WordPress", label: "CMS & Theming", pct: 88 },
  { name: "Performance", label: "Core Web Vitals", pct: 85 },
  { name: "Next.js", label: "Custom Dev", pct: 78 },
];

export default function Skills() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const bars = section.querySelectorAll<HTMLElement>("[data-width]");
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;

        bars.forEach((bar, index) => {
          window.setTimeout(() => {
            bar.style.width = `${bar.dataset.width}%`;
          }, index * 130);
        });
        observer.unobserve(entry.target);
      },
      { threshold: 0.15 },
    );

    observer.observe(section);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="skills"
      ref={sectionRef}
      className="flex flex-col gap-10 bg-surface py-12 px-6 md:flex-row md:gap-16 md:py-18 md:px-12 border-b border-line"
    >
      {/* Left */}
      <div className="flex-1">
        <p className="w-fit py-[6px] px-3 rounded-[6px] font-bold text-accent bg-accent-soft border border-accent text-xs mb-2">
          Web Developer
        </p>

        <h2 className="text-text text-3xl md:text-[34px] font-bold">
          Who I am
        </h2>

        <div className="mt-3 w-11 h-[3px] bg-accent rounded-full" />

        <div className="mt-3 text-muted text-sm">
          I build{" "}
          <span className="font-bold text-text">
            fast, scalable, user-friendly
          </span>{" "}
          websites that help businesses grow their online presence —
          specializing in <span className="font-bold text-text">WordPress</span>{" "}
          and <span className="font-bold text-text">Shopify</span>, from theme
          customization to full custom builds.
        </div>

        <div className="mt-7 text-muted text-sm">
          Every site I ship is checked against{" "}
          <span className="font-bold text-text">Core Web Vitals</span> before it
          goes live, so it loads fast, ranks well, and holds up on every device.
        </div>

        <div className="flex gap-3 md:gap-4 mt-5">
          <a
            href="/Pulido_Sheene_Michael_CV.pdf"
            download
            className="inline-flex items-center justify-center gap-2 rounded-[7px] bg-accent px-[22px] py-[13px] text-[13px] font-bold text-black transition-all duration-300 hover:-translate-y-1 hover:brightness-110 hover:shadow-[0_6px_20px_rgba(255,77,46,0.25)] active:translate-y-0 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent"
          >
            Download CV
          </a>

          <a
            href="#contact"
            className="inline-flex items-center justify-center rounded-[7px] border border-line px-[22px] py-[13px] text-[13px] font-bold text-text transition-all duration-300 hover:-translate-y-1 hover:border-accent hover:bg-accent/10 hover:text-accent active:translate-y-0 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent"
          >
            Contact Me
          </a>
        </div>
      </div>

      {/* Right */}
      <div className="flex-1">
        <p className="text-muted text-[11px] font-medium mb-4">CORE SKILLS</p>

        <div className="flex flex-col">
          {skills.map(({ name, label, pct }, index) => (
            <div
              key={name}
              className={`${index === 0 ? "pb-4" : "py-4"} border-b border-line`}
            >
              <div className="flex items-center justify-between mb-2">
                <div>
                  <p className="text-text text-xs font-bold">{name}</p>
                  <p className="text-muted text-[10px]">{label}</p>
                </div>

                <span className="text-accent text-[11px]">{pct}%</span>
              </div>

              <div className="w-full h-[3px] bg-line rounded-full">
                <div
                  className="h-full w-0 bg-accent rounded-full transition-[width] duration-[1100ms] ease-[cubic-bezier(0.16,1,0.3,1)]"
                  data-width={pct}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}