import { ProjectCard } from "../../components/projectCard.js/ProjectCard";
import { ProjectSlider } from "../../components/projectCard.js/projectSlidebar";
import { projects } from "../../data/projects";
import { useMobile } from "../../hooks/useMobile";

export const Projects = () => {
  const isMobile = useMobile(); // detect small screens

  return (
    <section className="max-w-6xl mx-auto px-4 sm:px-6 py-10 md:py-16 space-y-8 md:space-y-10">
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center text-primary dark:text-primaryDark">
        Projects
      </h2>

      {isMobile ? (
        <div className="flex flex-col gap-10">
          {projects.map((p) => (
            <ProjectCard key={p.id} {...p} />
          ))}
        </div>
      ) : (
        <ProjectSlider />
      )}
    </section>
  );
};
