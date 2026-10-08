"use client";

import { useState } from "react";

export default function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative md:hidden">
      {/* Hamburger Button */}
      <button
        type="button"
        onClick={() => setIsOpen((prev) => !prev)}
        aria-label="Toggle navigation"
        aria-expanded={isOpen}
        className="relative z-50 flex h-10 w-10 items-center justify-center"
      >
        <span className="sr-only">Menu</span>

        <div className="flex w-[36px] flex-col gap-[5px] rounded-[7px] border px-[6px] py-[9px]">
          <span
            className={`h-0.5 w-full bg-text transition-transform duration-300 ${
              isOpen ? "translate-y-1.5 rotate-45" : ""
            }`}
          />

          <span
            className={`h-0.5 w-full bg-text transition-opacity duration-300 ${
              isOpen ? "opacity-0" : ""
            }`}
          />

          <span
            className={`h-0.5 w-full bg-text transition-transform duration-300 ${
              isOpen ? "-translate-y-2 -rotate-45" : ""
            }`}
          />
        </div>
      </button>

      {/* Mobile Navigation */}
      <div
        className={`absolute right-0 top-[calc(100%+18px)] z-40 border-b border-line bg-bg px-6 transition-all duration-300 ${
          isOpen
            ? "visible translate-y-0 opacity-100"
            : "invisible -translate-y-4 opacity-0"
        }`}
      >
        <nav className="flex flex-col font-inter">
          <a
            href="#home"
            onClick={() => setIsOpen(false)}
            className="border-b border-line py-4 text-muted hover:text-accent"
          >
            Home
          </a>

          <a
            href="#about"
            onClick={() => setIsOpen(false)}
            className="border-b border-line py-4 text-muted hover:text-accent"
          >
            About
          </a>

          <a
            href="#work"
            onClick={() => setIsOpen(false)}
            className="border-b border-line py-4 text-muted hover:text-accent"
          >
            Work
          </a>

          <a
            href="#contact"
            onClick={() => setIsOpen(false)}
            className="py-4 text-muted hover:text-accent"
          >
            Contact
          </a>
        </nav>
      </div>
    </div>
  );
}