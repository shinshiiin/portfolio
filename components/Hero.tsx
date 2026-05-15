"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

export default function Hero() {
  const texts = [
    "WP Theme Development",
    "WP Plugin Development",
    "Shopify Development",
    "Custom Liquid",
  ];

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
      }, 1500);
      return () => clearTimeout(timeout);
    }
  }, [charIndex, index]);

  return (
    <section className="relative min-h-screen md:h-screen w-full flex flex-col md:flex-row items-center bg-black text-white overflow-hidden px-6 md:px-12 lg:px-20">

      {/* LEFT SIDE */}
      <div className="relative z-10 w-full md:w-1/2 space-y-4 md:space-y-5 mt-16 md:mt-0 text-center lg:text-left">

        {/* Hi line with orange dash */}
        <p className="text-lg md:text-2xl flex items-center gap-3 font-poppins md:flex-row flex-col-reverse justify-center md:justify-start">
          <span className="inline-block w-8 h-[3px] bg-[#E67E22] rounded-full" />
          Hi, I am Sheene.
        </p>

        {/* Typing headline */}
        <h1 className="font-poppins text-4xl sm:text-5xl md:text-5xl lg:text-6xl font-bold min-h-[100px] md:min-h-[140px]">
          I know
          <br />
          <span className="text-[#E67E22]">{displayedText}</span>
          <span className="text-[#FFFFFF] animate-pulse">|</span>
        </h1>

        {/* Subtext */}
        <p className="text-gray-400 text-sm md:text-base font-poppins max-w-sm md:max-w-lg">
          I build high-performing, responsive and user-friendly websites that help businesses grow.
        </p>

        {/* CTA Buttons */}
        <div className="flex gap-3 md:gap-4 pt-2 justify-center md:justify-start">
          <button className="px-4 md:px-6 py-2.5 md:py-3 bg-[#E67E22] text-black font-poppins rounded-lg text-xs md:text-sm font-bold uppercase tracking-widest hover:bg-orange-400 transition-colors duration-200">
            Show Profile
          </button>
          <button className="px-4 md:px-6 py-2.5 md:py-3 rounded-lg border border-white text-white text-xs md:text-sm font-bold uppercase tracking-widest hover:bg-white hover:text-black transition-colors duration-200">
            Know More
          </button>
        </div>
      </div>

      {/* RIGHT SIDE — Hero image */}
      <div className="relative w-full md:w-1/2 flex-1 md:h-full flex items-center justify-center">
        <Image
          src="/images/Hero.webp"
          alt="Hero Image"
          fill
          sizes="60vw"
          className="object-contain object-right"
          priority
        />
      </div>

      <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-b from-transparent to-[#0D0D0F] z-20" />
    </section>
  );
}