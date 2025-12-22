import { TbArrowBadgeRight } from "react-icons/tb";
import { info } from "../../data/info";
import { useNavigate } from "react-router-dom";
import { FiGithub, FiLinkedin } from "react-icons/fi";

export const Home = () => {
  const navigate = useNavigate();

  return (
    <>
      <div
        className="
    grid 
    grid-cols-1
    md:grid-cols-2
    items-center
    justify-center
    max-w-6xl mx-auto          
    min-h-[calc(100vh-200px)]           
    px-4
    
  "
      >
        <div className="space-y-4 text-center md:text-left">
          <h1 className="text-4xl md:text-4xl font-bold">
            Hi, I'm {info.name} 👋
          </h1>

          <p className="text-xl md:text-xl font-semibold text-violet-800 dark:text-yellow-400">
            {info.role}
          </p>

          <p className="text-sm text-gray-600 dark:text-gray-300 max-w-md mx-auto md:mx-0">
            {info.description}
          </p>

          <button
            onClick={() => navigate("/contact")}
            className="
        mt-4 flex items-center gap-2 mx-auto md:mx-0
        px-5 py-2 
        bg-violet-800 text-white rounded-lg 
        hover:bg-violet-700 transition
        dark:bg-yellow-500 dark:hover:bg-yellow-600
      "
          >
            Contact Me
            <TbArrowBadgeRight size={20} />
          </button>
        </div>

        <div className="relative">
          <img
            src={info.image}
            alt="profile"
            className="block dark:hidden object-cover w-full h-full rounded-2xl transition-opacity duration-500"
          />

          <img
            src={info.darkimage}
            alt="profile dark"
            className="hidden dark:block object-cover w-full h-full  rounded-2xl transition-opacity duration-500"
          />
        </div>
      </div>
      <div className="flex gap-5 text-3xl items-center justify-center ">
        <a
          href={info.github}
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-violet-800 transition duration-200"
        >
          <FiGithub />
        </a>

        <a
          href={info.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-violet-800 transition duration-200"
        >
          <FiLinkedin />
        </a>
      </div>
    </>
  );
};
