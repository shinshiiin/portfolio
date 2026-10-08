"use client";

import { useState } from "react";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

const categories = ["All", "WordPress", "Shopify", "Web Design", "Plugin"];

const projects = [
  {
    name: "Selori Store",
    category: "Shopify",
    type: "Shopify Store",
    image: "/images/projects/selori.png",
    link: "https://tryselori.com/",
  },
  {
    name: "Nubyn Store",
    category: "Shopify",
    type: "Shopify Store",
    image: "/images/projects/nubyn.png",
    link: "https://nubynbeauty.com/",
  },
  {
    name: "Liaison Store",
    category: "Shopify",
    type: "Shopify Store",
    image: "/images/projects/liaison.png",
    link: "https://herliaison.com/",
  },
  {
    name: "SuperiorMane",
    category: "Shopify",
    type: "Shopify Store",
    image: "/images/projects/superiormane.png",
    link: "https://thesuperiormane.com/",
  },
  {
    name: "Ashoorilaw",
    category: "WordPress",
    type: "WordPress Website",
    image: "/images/projects/ashoorilaw.png",
    link: "https://www.ashoorilaw.com/",
  },
  {
    name: "Triple Layer Security",
    category: "Plugin",
    type: "WordPress Plugin",
    image: "/images/projects/triplelayer.png",
    link: "https://github.com/shinshiiin/3-layer-security.git",
  },
  {
    name: "EON Studios",
    category: "Web Design",
    type: "Figma Landing Page",
    image: "/images/projects/eon.png",
    link: "https://eon-studios-static.vercel.app/",
  },
];

export default function Projects() {
  const [active, setActive] = useState("All");

  const filtered =
    active === "All" ? projects : projects.filter((p) => p.category === active);

  return (
    <section id="projects" className="w-full py-12 px-6 md:py-18 md:px-12">

      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6 mb-12">

        {/* Left — Title */}
        <div>
          <p className="text-accent text-xs md:text-base mb-2">
            Portfolio
          </p>
          <h2 className="text-text text-3xl md:text-[34px] font-bold">
            Selected Projects
          </h2>
          <div className="mt-3 w-11 h-[3px] bg-accent rounded-full" />
        </div>

        {/* Right — Filter Buttons */}
        <div className="flex flex-wrap gap-2 md:gap-3 md:mt-4">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className={`px-4 md:px-5 py-2 rounded-lg text-xs transition-colors duration-200 ${
                active === cat
                  ? "bg-accent text-black"
                  : "bg-transparent border border-line text-text hover:border-accent hover:text-accent  "
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {filtered.map((project) => (
          <ProjectCard key={project.name} project={project} />
        ))}
      </div>
    </section>
  );
}

function ProjectCard({
  project,
}: {
  project: {
    name: string;
    type: string;
    image: string;
    link: string;
  };
}) {
  return (
    
    <a href={project.link}
      target="_blank"
      rel="noopener noreferrer"
      className="group rounded-xl overflow-hidden bg-surface hover:ring-1 hover:ring-accent transition-all duration-200"
    >
      {/* Screenshot */}
      <div className="relative w-full h-[200px] overflow-hidden">
        <Image
          src={project.image}
          alt={project.name}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
          className="object-cover object-top group-hover:scale-105 transition-transform duration-300"
        />
      </div>

      {/* Info */}
      <div className="flex items-center justify-between px-4 py-4">
        <div>
          <p className="text-text font-bold text-sm">
            {project.name}
          </p>
          <p className="text-muted text-xs mt-0.5">
            {project.type}
          </p>
        </div>
        <ArrowUpRight className="text-text w-5 h-5 shrink-0 group-hover:text-accent transition-colors duration-200" />
      </div>
    </a>
  );
}