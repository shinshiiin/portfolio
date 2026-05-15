"use client";

import { useEffect, useRef } from "react";

const skills = [
  { name: "Shopify", pct: 92, label: "E-Commerce" },
  { name: "WordPress", pct: 85, label: "CMS & Theming" },
  { name: "Performance", pct: 88, label: "Core Web Vitals" },
  { name: "Custom Dev", pct: 78, label: "React / Next.js" },
];

const stats = [
  { num: "2+", label: "Years Active" },
  { num: "5+", label: "Projects" },
  { num: "100%", label: "Satisfaction" },
];

const services = [
  {
    label: "WordPress",
    desc: "Custom themes & plugins",
    icon: (
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#e84545" strokeWidth="1.8">
        <rect x="2" y="3" width="20" height="14" rx="2" />
        <line x1="8" y1="21" x2="16" y2="21" />
        <line x1="12" y1="17" x2="12" y2="21" />
      </svg>
    ),
  },
  {
    label: "Shopify",
    desc: "E-commerce stores",
    icon: (
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#e84545" strokeWidth="1.8">
        <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z" />
        <line x1="3" y1="6" x2="21" y2="6" />
        <path d="M16 10a4 4 0 0 1-8 0" />
      </svg>
    ),
  },
  {
    label: "Performance",
    desc: "Core Web Vitals & speed",
    icon: (
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#e84545" strokeWidth="1.8">
        <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
      </svg>
    ),
  },
];

export default function About() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const bars = sectionRef.current?.querySelectorAll<HTMLElement>("[data-width]");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target
              .querySelectorAll<HTMLElement>(".reveal")
              .forEach((el, i) => {
                setTimeout(() => el.classList.remove("opacity-0", "translate-y-5"), i * 75);
              });
            bars?.forEach((bar, i) => {
              setTimeout(() => {
                bar.style.width = bar.dataset.width + "%";
              }, 700 + i * 130);
            });
          }
        });
      },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="w-full bg-[#1a1a2e] text-[#eaeaea] font-sans px-6 md:px-20 py-20 overflow-hidden"
    >
      {/* Section label */}
      <div className="reveal opacity-0 translate-y-5 transition-all duration-700 flex items-center gap-3 mb-14">
        <div className="w-10 h-0.5 bg-[#e84545]" />
        <span className="text-[11px] tracking-[0.22em] uppercase text-white/40 font-normal">
          About me
        </span>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-[1fr_1.5fr] gap-12 md:gap-20 items-start">

        {/* ── LEFT ── */}
        <div className="flex flex-col gap-7">

          {/* Heading */}
          <div className="reveal opacity-0 translate-y-5 transition-all duration-700">
            <h2 className="text-6xl md:text-7xl font-extrabold leading-none tracking-tight text-[#eaeaea]">
              Who<br />
              Am <span className="text-[#e84545]">I.</span>
            </h2>
          </div>

          {/* Portrait */}
          <div className="reveal opacity-0 translate-y-5 transition-all duration-700 relative w-full max-w-[280px] aspect-[3/4]">
            <div className="absolute inset-0 bg-[#0f0f23] border border-[#e84545]/25 rounded-sm flex flex-col items-center justify-center gap-2 text-white/20">
              {/* Replace with: <Image src="/your-photo.jpg" fill alt="Me" className="object-cover rounded-sm" /> */}
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2">
                <circle cx="12" cy="8" r="4" /><path d="M4 20c0-4 3.6-7 8-7s8 3 8 7" />
              </svg>
              <span className="text-[10px] tracking-[0.14em] uppercase">Your Photo</span>
            </div>
            {/* Corner brackets */}
            <span className="absolute top-[-8px] left-[-8px] w-8 h-8 border-t-2 border-l-2 border-[#e84545]" />
            <span className="absolute bottom-[-8px] right-[-8px] w-8 h-8 border-b-2 border-r-2 border-[#e84545]" />
          </div>

          {/* Stats */}
          <div className="reveal opacity-0 translate-y-5 transition-all duration-700 grid grid-cols-3 gap-3">
            {stats.map(({ num, label }) => (
              <div
                key={label}
                className="bg-[#0f0f23] border border-[#e84545]/20 rounded-sm p-4 text-center"
              >
                <p className="text-2xl md:text-3xl font-extrabold leading-none mb-1 text-[#eaeaea]">
                  {num.replace(/[+%]/, "")}
                  <span className="text-[#e84545]">{num.match(/[+%]/)?.[0]}</span>
                </p>
                <p className="text-[10px] tracking-widest uppercase text-white/40">{label}</p>
              </div>
            ))}
          </div>
        </div>

        {/* ── RIGHT ── */}
        <div className="flex flex-col gap-9">

          {/* Tag + Bio */}
          <div className="flex flex-col gap-4">
            <span className="reveal opacity-0 translate-y-5 transition-all duration-700 inline-block w-fit px-3 py-1 bg-[#e84545]/10 border border-[#e84545]/30 text-[#e84545] text-[10px] font-semibold tracking-[0.16em] uppercase rounded-sm">
              Web Developer
            </span>
            <p className="reveal opacity-0 translate-y-5 transition-all duration-700 text-sm leading-relaxed font-light text-white/70">
              I build{" "}
              <strong className="text-white font-semibold">fast, scalable, and user-friendly</strong>{" "}
              websites that help businesses grow their online presence. I specialize in{" "}
              <strong className="text-white font-semibold">WordPress</strong> and{" "}
              <strong className="text-white font-semibold">Shopify</strong> — from theme
              customization to full custom builds.
            </p>
            <p className="reveal opacity-0 translate-y-5 transition-all duration-700 text-sm leading-relaxed font-light text-white/50">
              With a strong focus on{" "}
              <strong className="text-white font-semibold">performance optimization</strong> and
              Core Web Vitals, I ensure every site I deliver loads fast, ranks well, and converts
              visitors into customers — across all devices.
            </p>
          </div>

          {/* Service cards */}
          <div className="reveal opacity-0 translate-y-5 transition-all duration-700 grid grid-cols-3 gap-3">
            {services.map(({ label, desc, icon }) => (
              <div
                key={label}
                className="bg-[#0f0f23] border border-white/[0.08] rounded-sm p-4 flex flex-col gap-2"
              >
                <div className="w-7 h-7 rounded-full bg-[#e84545]/15 flex items-center justify-center">
                  {icon}
                </div>
                <p className="text-[11px] font-semibold text-[#eaeaea] tracking-wide">{label}</p>
                <p className="text-[10px] text-white/35 leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>

          {/* Skills */}
          <div>
            <p className="reveal opacity-0 translate-y-5 transition-all duration-700 text-[10px] tracking-[0.22em] uppercase text-white/35 font-normal mb-4">
              Core skills
            </p>
            {skills.map(({ name, pct, label }) => (
              <div
                key={name}
                className="reveal opacity-0 translate-y-5 transition-all duration-700 flex items-center gap-4 py-2.5 border-b border-white/[0.06]"
              >
                <div className="w-[108px] shrink-0">
                  <p className="text-[12px] font-semibold text-[#eaeaea] mb-0.5">{name}</p>
                  <p className="text-[10px] text-white/35">{label}</p>
                </div>
                <div className="relative flex-1 h-0.5 bg-white/10 rounded-full">
                  <div
                    className="absolute inset-y-0 left-0 w-0 bg-[#e84545] rounded-full transition-[width] duration-[1100ms] ease-[cubic-bezier(0.16,1,0.3,1)]"
                    data-width={pct}
                  />
                </div>
                <span className="text-[11px] font-semibold text-[#e84545] w-8 text-right shrink-0">
                  {pct}%
                </span>
              </div>
            ))}
          </div>

          {/* Availability + CTAs */}
          <div className="reveal opacity-0 translate-y-5 transition-all duration-700 flex flex-col gap-4">
            <div className="flex items-center gap-2">
              <span className="w-[7px] h-[7px] rounded-full bg-[#4caf82] shadow-[0_0_0_3px_rgba(76,175,130,0.18)] shrink-0" />
              <span className="text-[11px] text-white/45 tracking-widest uppercase">
                Available for new projects
              </span>
            </div>
            <div className="flex gap-3 flex-wrap">
              <button className="inline-flex items-center gap-2 px-6 py-3 bg-[#e84545] hover:bg-[#cf3333] text-white text-[12px] font-semibold tracking-[0.08em] uppercase rounded-sm transition-colors duration-200">
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
                  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                  <polyline points="7 10 12 15 17 10" />
                  <line x1="12" y1="15" x2="12" y2="3" />
                </svg>
                Download CV
              </button>
              <button className="inline-flex items-center gap-2 px-6 py-3 bg-transparent hover:bg-white/5 text-[#eaeaea] text-[12px] font-semibold tracking-[0.08em] uppercase border border-white/20 hover:border-white/50 rounded-sm transition-all duration-200">
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                  <polyline points="22,6 12,13 2,6" />
                </svg>
                Contact Me
              </button>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}