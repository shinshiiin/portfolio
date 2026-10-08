"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

export default function Hero() {
  const texts = ["WP Theme", "WP Plugin", "Shopify"];

  const [index, setIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState("");
  const [charIndex, setCharIndex] = useState(0);

  useEffect(() => {
    if (charIndex < texts[index].length) {
      const timeout = setTimeout(() => {
        setDisplayedText((prev) => prev + texts[index][charIndex]);
        setCharIndex(charIndex + 1);
      }, 40);
      return () => clearTimeout(timeout);
    } else {
      const timeout = setTimeout(() => {
        setDisplayedText("");
        setCharIndex(0);
        setIndex((prev) => (prev + 1) % texts.length);
      }, 5000);
      return () => clearTimeout(timeout);
    }
  }, [charIndex, index]);

  return (
    <section id="hero" className="flex flex-col gap-[10px] md:flex-row items-center bg-bg px-6 pt-14 md:px-12 md:py-18 border-b border-line">
      {/* LEFT SIDE */}
      <div className="flex flex-col md:w-1/2 gap-[18px] text-text pb-[10px]">
        {/* Hi line with orange dash */}
        <p className="text-sm text-muted flex items-center gap-[10px]">
          <span className="inline-block w-[22px] h-0.5 bg-accent rounded-full" />
          Hi, I'm Sheene.
        </p>

        {/* Typing headline */}
        <h1 className="text-4xl md:text-[56px] font-bold">
          I know
          <br />
          <span className="text-accent">{displayedText}</span>
          <span className="cursor-blink [animation-duration:0.6s]">|</span>
          <br />
          <span className="text-accent">Development</span>
        </h1>

        {/* Shipping */}
        <div className="text-muted text-sm max-w-sm md:max-w-lg">
          Right now shipping:
          <ul className="text-text list-disc list-inside pl-4">
            <br />
            <li>WordPress themes</li>
            <li>WordPress plugins</li>
            <li>Shopify stores</li>
            <li>Custom liquid sections</li>
            <li>Next.js builds</li>
          </ul>
        </div>

        {/* Subtext */}
        <p className="text-muted text-sm max-w-sm md:max-w-lg pt-10">
          WordPress theming, Shopify builds, and custom Next.js sites —
          engineered for speed, security, and revenue, not just good looks.
        </p>

        {/* CTA Buttons */}
        <div className="flex gap-3 md:gap-4 pt-2">
          <button className="flex items-center gap-2 px-[22px] py-[13px] rounded-[7px] bg-accent text-black font-bold text-[13px]">
            View my work
            <svg
              aria-hidden="true"
              width="13"
              height="13"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.4"
            >
              <path d="M7 17L17 7"></path>
              <path d="M7 7h10v10"></path>
            </svg>
          </button>
          <button className="px-[22px] py-[13px] rounded-[7px] border border-line text-text text-[13px] font-bold">
            Start a project
          </button>
        </div>
      </div>

      {/* RIGHT SIDE — Hero image */}
      <div
        className="relative w-full md:w-1/2 h-[420px] md:flex-1 md:h-[500px] border-b border-line
      bg-[radial-gradient(circle,rgba(255,90,54,0.35)_25%,rgba(255,90,54,0.12)_48%,rgba(153,153,153,0)_66%)]"
      >
        <Image
          src="/images/Hero.webp"
          alt="Hero Image"
          fill
          sizes="(max-width: 768px) 100vw, 50vw"
          className="object-contain"
          priority
        />
      </div>
    </section>
  );
}
