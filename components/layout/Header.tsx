import MobileMenu from "./MobileMenu";
export default function Header() {
  return (
    <header className="relative flex items-center justify-between border-b border-line px-6 py-[18px] md:px-12 md:py-5">
      <a href="" className="text-xl font-bold">
        Sheene<span className="text-accent">.</span>
      </a>
      {/* Desktop Nav */}
      <nav className="hidden md:flex gap-[28px] text-sm">
        <a href="#hero" className="text-muted hover:text-accent">
          Home
        </a>

        <a href="#skills" className="text-muted hover:text-accent">
          About
        </a>

        <a href="#projects" className="text-muted hover:text-accent">
          Work
        </a>

        <a href="#contact" className="text-muted hover:text-accent">
          Contact
        </a>
      </nav>

      {/* Let's talk button */}
      <a href="#contact" className="hidden md:flex text-[#150900] bg-accent py-[9px] px-4 rounded-[7px] font-bold text-[13px]">
          Let's talk
        </a>
      <MobileMenu />
    </header>
  );
}
