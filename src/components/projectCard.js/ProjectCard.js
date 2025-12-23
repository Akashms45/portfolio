import { FiGithub, FiExternalLink } from "react-icons/fi";

export const ProjectCard = ({
  title,
  description,
  tech,
  image,
  githubLink,
  liveLink,
}) => {
  return (
    <div
      className="
        relative rounded-2xl overflow-hidden shadow-lg
        group cursor-pointer transition-transform duration-300
        hover:scale-[1.02]
      "
    >
      {/* BACKGROUND IMAGE */}
      <img src={image} alt={title} className="w-full h-64 object-cover" />

      {/* DARK OVERLAY */}
      <div
        className="
          absolute inset-0 bg-black/70 
          opacity-100 group-hover:bg-black/80 
          transition duration-300
        "
      />

      {/* TEXT CONTENT */}
      <div className="absolute inset-0 p-6 flex flex-col justify-between text-white">
        <div>
          <h3 className="text-2xl font-bold mb-2">{title}</h3>
          <p className="text-sm opacity-80">{description}</p>
        </div>

        {/* TECH LIST */}
        <div className="flex gap-2 flex-wrap mt-3">
          {tech.map((item, index) => (
            <span
              key={index}
              className="
                text-xs px-2 py-1 rounded bg-white/20
                backdrop-blur-sm
              "
            >
              {item}
            </span>
          ))}
        </div>

        {/* LINKS */}
        <div className="flex gap-4 mt-4">
          {githubLink && (
            <a href={githubLink} target="_blank" rel="noopener noreferrer">
              <FiGithub
                size={22}
                className="hover:text-violet-700 dark:hover:text-yellow-300 transition"
              />
            </a>
          )}

          {liveLink && (
            <a href={liveLink} target="_blank" rel="noopener noreferrer">
              <FiExternalLink
                size={22}
                className="hover:text-violet-700 dark:hover:text-yellow-300 transition"
              />
            </a>
          )}
        </div>
      </div>
    </div>
  );
};
