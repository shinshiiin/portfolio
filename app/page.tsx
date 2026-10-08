import About from "@/components/About";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Recent from "@/components/Recent";
import Tools from "@/components/Tools";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";

import Skills from "@/components/Skills";

export default function Home() {
  return (
    <main>
      <Hero />
      <Recent />
      <Services />
      <Tools />
      <Projects />
      <Skills />
      <Contact />
    </main>
  );
}
