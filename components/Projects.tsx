"use client";

import { useState } from "react";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

const categories = ["All", "WordPress", "Shopify", "Web Design", "Plugin", "Theme"];

const projects = [
  {
    name: "Selori Store",
    category: "Shopify",
    type: "Shopify Store",
    image: "/images/projects/selori.png",
    link: "#",
  },
  {
    name: "Nubyn Store",
    category: "Shopify",
    type: "Shopify Store",
    image: "/images/projects/nubyn.png",
    link: "#",
  },
  {
    name: "Liaison Store",
    category: "Shopify",
    type: "Shopify Store",
    image: "/images/projects/liaison.png",
    link: "#",
  },
  {
    name: "SuperiorMane",
    category: "Shopify",
    type: "Shopify Store",
    image: "/images/projects/superiormane.png",
    link: "#",
  },
  {
    name: "Ashoorilaw",
    category: "WordPress",
    type: "WordPress Website",
    image: "/images/projects/ashoorilaw.png",
    link: "#",
  },
  {
    name: "Triple Layer Security",
    category: "Plugin",
    type: "WordPress Plugin",
    image: "/images/projects/triplelayer.png",
    link: "#",
  },
  {
    name: "EON Studios",
    category: "Web Design",
    type: "Figma Landing Page",
    image: "/images/projects/eon.png",
    link: "#",
  },
];

export default function Projects() {
  const [active, setActive] = useState("All");

  const filtered =
    active === "All" ? projects : projects.filter((p) => p.category === active);

  return (
    <section className="w-full bg-[#0D0D0F] py-16 px-6 md:px-20">

      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6 mb-12">

        {/* Left — Title */}
        <div>
          <p className="text-[#E67E22] font-poppins font-semibold text-sm md:text-base mb-1">
            My Portfolio
          </p>
          <h2 className="text-white text-4xl md:text-5xl font-bold font-poppins">
            My Projects
          </h2>
          <div className="mt-3 w-16 h-[3px] bg-[#E67E22] rounded-full" />
        </div>

        {/* Right — Filter Buttons */}
        <div className="flex flex-wrap gap-2 md:gap-3 md:mt-4">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className={`px-4 md:px-5 py-2 rounded-lg text-sm font-poppins font-semibold transition-colors duration-200 ${
                active === cat
                  ? "bg-[#E67E22] text-black"
                  : "bg-transparent border border-gray-600 text-white hover:border-[#E67E22] hover:text-[#E67E22]"
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
      className="group rounded-xl overflow-hidden bg-[#1C1C1C] hover:ring-1 hover:ring-[#E67E22] transition-all duration-200"
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
          <p className="text-white font-poppins font-bold text-base">
            {project.name}
          </p>
          <p className="text-gray-400 font-poppins text-sm mt-0.5">
            {project.type}
          </p>
        </div>
        <ArrowUpRight className="text-white w-5 h-5 shrink-0 group-hover:text-[#E67E22] transition-colors duration-200" />
      </div>
    </a>
  );
}