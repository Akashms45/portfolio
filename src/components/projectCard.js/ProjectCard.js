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
        relative w-full
        rounded-2xl overflow-hidden
        shadow-lg
        mb-8
      "
    >
      {/* IMAGE */}
      <img
        src={image}
        alt={title}
        className="
          w-full h-56
          object-cover
        "
      />

      {/* OVERLAY */}
      <div className="absolute inset-0 bg-black/70" />

      {/* CONTENT */}
      <div className="absolute inset-0 p-5 flex flex-col justify-between text-white">
        {/* TOP TEXT */}
        <div className="space-y-2">
          <h3 className="text-lg font-semibold leading-tight">{title}</h3>

          <p className="text-xs leading-relaxed opacity-90">{description}</p>
        </div>

        {/* TECH */}
        <div className="flex flex-wrap gap-2 mt-3">
          {tech.map((item, index) => (
            <span
              key={index}
              className="
                text-[10px]
                px-2 py-1
                rounded-full
                bg-white/20
                backdrop-blur-sm
              "
            >
              {item}
            </span>
          ))}
        </div>

        {/* LINKS */}
        <div className="flex gap-6 mt-4">
          {githubLink && (
            <a
              href={githubLink}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub repository"
            >
              <FiGithub size={20} className="active:scale-90 transition" />
            </a>
          )}

          {liveLink && (
            <a
              href={liveLink}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Live project"
            >
              <FiExternalLink
                size={20}
                className="active:scale-90 transition"
              />
            </a>
          )}
        </div>
      </div>
    </div>
  );
};
