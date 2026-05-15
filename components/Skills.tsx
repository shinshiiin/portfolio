import Image from "next/image";

const skills = [
  { name: "Shopify",        icon: "/images/skills/shopify.svg" },
  { name: "WordPress",      icon: "/images/skills/wordpress.svg" },
  { name: "PHP",            icon: "/images/skills/php.svg" },
  { name: "HTML",           icon: "/images/skills/html.svg" },
  { name: "CSS",            icon: "/images/skills/css.svg" },
  { name: "MySQL",          icon: "/images/skills/mysql.svg" },
  { name: "JavaScript",     icon: "/images/skills/javascript.svg" },
  { name: "Tailwind CSS",   icon: "/images/skills/tailwind.svg" },
  { name: "Liquid",         icon: "/images/skills/liquid.svg" },
  { name: "Figma",          icon: "/images/skills/figma.svg" },
  { name: "Elementor",      icon: "/images/skills/elementor.svg" },
  { name: "Beaver Builder", icon: "/images/skills/beaver_builder.svg" },
  { name: "VS Code",        icon: "/images/skills/vscode.svg" },
  { name: "Git & Github",   icon: "/images/skills/git.svg" },
];

export default function Skills() {
  return (
    <section className="w-full bg-[#0D0D0F] py-16">

      {/* <div className="w-full h-24 bg-gradient-to-b from-black to-[#111111]" /> */}

      <div className="px-6 md:px-20">
        <h2 className="text-white text-3xl md:text-4xl font-bold font-poppins text-center mb-12">
          My Skills
        </h2>

        <div className="flex flex-col items-center gap-10 w-full">
          <div className="flex justify-center gap-10 w-full">
            {skills.slice(0, 5).map((skill) => <SkillCard key={skill.name} skill={skill} />)}
          </div>
          <div className="flex justify-center gap-10 w-full">
            {skills.slice(5, 9).map((skill) => <SkillCard key={skill.name} skill={skill} />)}
          </div>
          <div className="flex justify-center gap-10 w-full">
            {skills.slice(9, 12).map((skill) => <SkillCard key={skill.name} skill={skill} />)}
          </div>
          <div className="flex justify-center gap-10 w-full">
            {skills.slice(12, 14).map((skill) => <SkillCard key={skill.name} skill={skill} />)}
          </div>
        </div>
      </div>
    </section>
  );
}

function SkillCard({ skill }: { skill: { name: string; icon: string } }) {
  return (
    <div className="flex-1 max-w-[230px] h-[190px] md:h-[210px] bg-[#14161A] border border-[#ffffff0f] rounded-xl flex flex-col items-center justify-center gap-4 hover:bg-[#252525] transition-colors duration-200 cursor-default">
      <div className="relative w-28 h-28">
        <Image
          src={skill.icon}
          alt={skill.name}
          fill
          sizes="56px"
          className="object-contain"
        />
      </div>
      <p className="text-white text-sm font-poppins font-medium text-center px-2">
        {skill.name}
      </p>
    </div>
  );
}