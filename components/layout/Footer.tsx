const links = [
  { label: "Email", href: "mailto:pulidosheene18@gmail.com" },
  { label: "GitHub", href: "https://github.com/shinshiiin" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/sheene-pulido/" },
];

export default function Footer() {
  return (
    <footer className="flex flex-col gap-[14px] sm:flex-row items-center justify-between border-t border-line px-6 py-5 md:px-12">
      <a href="#home" className="text-xl font-bold text-text transition-colors hover:text-accent">
        Sheene<span className="text-accent">.</span>
      </a>

      <nav aria-label="Footer navigation" className="flex items-center gap-6 text-sm md:gap-8">
        {links.map(({ label, href }) => (
          <a
            key={label}
            href={href}
            target={href.startsWith("http") ? "_blank" : undefined}
            rel={href.startsWith("http") ? "noreferrer" : undefined}
            className="text-muted transition-colors hover:text-accent"
          >
            {label}
          </a>
        ))}
      </nav>
    </footer>
  );
}
