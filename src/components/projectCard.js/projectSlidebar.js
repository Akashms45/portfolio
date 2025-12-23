import { useState } from "react";
import { projects } from "../../data/projects";
import {
  FiGithub,
  FiExternalLink,
  FiChevronLeft,
  FiChevronRight,
} from "react-icons/fi";

export const ProjectSlider = () => {
  const [index, setIndex] = useState(0);
  const project = projects[index];

  const prev = () =>
    setIndex((i) => (i - 1 + projects.length) % projects.length);
  const next = () => setIndex((i) => (i + 1) % projects.length);

  return (
    <div className="flex flex-col items-center gap-8">
      {/* Slider content */}
      <div className="relative flex items-center w-full max-w-8xl mx-auto">
        {/* LEFT ARROW */}
        <button
          onClick={prev}
          className="absolute -left-16 dark:-left-16 text-7xl text-primary dark:text-primaryDark transition"
        >
          <FiChevronLeft />
        </button>

        {/* CARD CONTAINER */}
        <div
          className="
    flex flex-col md:flex-row items-center justify-center
    gap-16 p-6 w-full max-w-5xl mx-auto
  "
        >
          {/* IMAGE */}
          <img
            src={project.image}
            alt={project.title}
            className="
    w-full md:w-[60%]
    max-w-[560px]
    h-auto 
    object-contain rounded-xl shadow
  "
          />

          {/* TEXT */}
          <div className="flex flex-col gap-4 md:w-[45%]">
            <h3 className="text-3xl font-semibold">{project.title}</h3>

            <p className="opacity-80">{project.description}</p>

            {/* TECH LIST */}
            <div className="flex gap-2 flex-wrap">
              {project.tech.map((t, i) => (
                <span
                  key={i}
                  className="bg-primary/20 dark:bg-primaryDark/20 text-primary dark:text-primaryDark px-3 py-1 rounded-full text-sm"
                >
                  {t}
                </span>
              ))}
            </div>

            {/* ICON LINKS */}
            <div className="flex gap-6 text-3xl mt-4">
              {project.githubLink && (
                <a
                  href={project.githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-primary dark:hover:text-primaryDark transition"
                >
                  <FiGithub />
                </a>
              )}

              {project.liveLink && (
                <a
                  href={project.liveLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-primary dark:hover:text-primaryDark transition"
                >
                  <FiExternalLink />
                </a>
              )}
            </div>
          </div>
        </div>

        {/* RIGHT ARROW */}
        <button
          onClick={next}
          className="absolute -right-16 md:-right-16 text-7xl text-primary dark:text-primaryDark transition"
        >
          <FiChevronRight />
        </button>
      </div>

      {/* DOT INDICATORS */}
      <div className="flex gap-3 mt-14">
        {projects.map((_, i) => (
          <button
            key={i}
            onClick={() => setIndex(i)}
            className={`
              h-3 w-3 rounded-full transition
              ${
                i === index
                  ? "bg-primary dark:bg-primaryDark"
                  : "bg-gray-400/50"
              }
            `}
          />
        ))}
      </div>
    </div>
  );
};
