import { About } from "../../pages/about/about";
import { Contact } from "../../pages/contact/contact";
import { Home } from "../../pages/home/home";
import { Projects } from "../../pages/projects/projects";
import { Skills } from "../../pages/skills/skills";

export const ScrollLayout = () => {
  return (
    <div className="overflow-y-auto">
      <Home />
      <About />
      <Skills />
      <Projects />
      <Contact />
    </div>
  );
};
