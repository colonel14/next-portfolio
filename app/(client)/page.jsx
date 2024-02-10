import About from "@/components/Home/About";
import Hero from "@/components/Home/Hero";
import Skills from "@/components/Home/Skills";
import Work from "@/components/Home/Work";
import Contact from "@/components/Contact";

import {
  getAllExpericences,
  getAllSkills,
  getPaginatedProjects,
} from "@/lib/client";

export default async function Home() {
  const works = (await getPaginatedProjects(4)) || [];
  const skills = (await getAllSkills()) || [];
  const experiences = (await getAllExpericences()) || [];

  return (
    <div>
      <Hero />
      <About />
      <Work works={works} />
      <Skills skills={skills} experiences={experiences} />
      <Contact />
    </div>
  );
}
