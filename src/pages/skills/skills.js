import { useState } from "react";
import { info } from "../../data/info";
import { GiServerRack } from "react-icons/gi";
import { LuBraces } from "react-icons/lu";
import {
  SiReact,
  SiJavascript,
  SiTypescript,
  SiRedux,
  SiTailwindcss,
  SiMysql,
  SiPython,
  SiC,
  SiNodedotjs,
} from "react-icons/si";
import {
  FiChevronDown,
  FiGitBranch,
  FiMessageCircle,
  FiCode,
  FiLock,
} from "react-icons/fi";
import { FaJava, FaCode } from "react-icons/fa";

export const Skills = () => {
  const [openFrontend, setOpenFrontend] = useState(false);
  const [openBackend, setOpenBackend] = useState(false);
  const [openProgramming, setOpenProgramming] = useState(false);

  const { frontend, backendLearning, programming, otherSkills } = info.skills;

  const iconMap = {
    react: <SiReact color="#61DAFB" />,
    js: <SiJavascript color="#F7DF1E" />,
    ts: <SiTypescript color="#3178C6" />,
    redux: <SiRedux color="#764ABC" />,
    tailwind: <SiTailwindcss color="#38BDF8" />,
    mysql: <SiMysql color="#00618A" />,
    python: <SiPython color="#306998" />,
    c: <SiC color="#283593" />,
    java: <FaJava color="#EC2025" />,
    node: <SiNodedotjs color="#68A063" />,
    api: <FiLock color="#C084FC" />,
    git: <FiGitBranch color="#F05033" />,
    vscode: <FiCode color="#007ACC" />,
    prompt: <FiMessageCircle color="#9333EA" />,
  };

  return (
    <section className="max-w-5xl mx-auto px-6 py-16 space-y-12">
      <h2 className="text-4xl font-bold text-center text-primary dark:text-primaryDark">
        Skills
      </h2>

      {/* FRONTEND + BACKEND */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* FRONTEND */}
        <div className="pb-6">
          <button
            onClick={() => setOpenFrontend(!openFrontend)}
            className="flex justify-between items-center w-full text-xl font-semibold tracking-wide py-2 hover:text-primary dark:hover:text-primaryDark transition"
          >
            <span className="flex items-center gap-3">
              <span className="text-2xl font-bold text-primary dark:text-primaryDark">
                <LuBraces />
              </span>
              Frontend Development
            </span>

            <FiChevronDown
              className={`transition-transform duration-200 ${
                openFrontend ? "rotate-180" : ""
              } hover:scale-110`}
            />
          </button>

          <div
            className={`overflow-hidden transition-all duration-500 ${
              openFrontend
                ? "max-h-[650px] opacity-100 mt-6"
                : "max-h-0 opacity-50"
            }`}
          >
            <div className="space-y-6">
              {frontend.map((skill, i) => (
                <div key={i}>
                  <div className="flex justify-between text-sm font-medium mb-1">
                    <span className="flex items-center gap-2">
                      {iconMap[skill.icon]} {skill.name}
                    </span>
                    <span>{skill.level}%</span>
                  </div>
                  <div className="w-full bg-gray-300 dark:bg-gray-700 rounded-lg overflow-hidden">
                    <div
                      className="bg-primary dark:bg-primaryDark h-2 rounded-lg transition-all duration-700"
                      style={{ width: `${skill.level}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* BACKEND */}
        <div className="pb-6">
          <button
            onClick={() => setOpenBackend(!openBackend)}
            className="flex justify-between items-center w-full text-xl font-semibold tracking-wide py-2 hover:text-primary dark:hover:text-primaryDark transition"
          >
            <span className="flex items-center gap-3">
              <span className="text-2xl font-bold text-primary dark:text-primaryDark">
                <GiServerRack />
              </span>
              Backend & APIs
            </span>

            <FiChevronDown
              className={`transition-transform duration-200 ${
                openBackend ? "rotate-180" : ""
              } hover:scale-110`}
            />
          </button>

          <div
            className={`overflow-hidden transition-all duration-500 ${
              openBackend
                ? "max-h-[350px] opacity-100 mt-6"
                : "max-h-0 opacity-50"
            }`}
          >
            <div className="space-y-4">
              {backendLearning.map((item, i) => (
                <div
                  key={i}
                  className="flex items-center gap-3 text-gray-800 dark:text-gray-300"
                >
                  <span>{iconMap[item.icon]}</span>
                  <span>{item.name}</span>

                  <span className="flex gap-1 text-primary dark:text-primaryDark ml-2">
                    <span className="animate-bounce delay-75">•</span>
                    <span className="animate-bounce delay-150">•</span>
                    <span className="animate-bounce delay-300">•</span>
                  </span>

                  <span className="text-sm opacity-60 ml-1">learning...</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* PROGRAMMING */}
      <div className="pb-6">
        <button
          onClick={() => setOpenProgramming(!openProgramming)}
          className="flex justify-between items-center w-full text-xl font-semibold tracking-wide py-2 hover:text-primary dark:hover:text-primaryDark transition"
        >
          <span className="flex items-center gap-3">
            <FaCode className="text-primary dark:text-primaryDark" />
            Programming Languages
          </span>

          <FiChevronDown
            className={`transition-transform duration-200 ${
              openProgramming ? "rotate-180" : ""
            } hover:scale-110`}
          />
        </button>

        <div
          className={`overflow-hidden transition-all duration-500 ${
            openProgramming
              ? "max-h-[600px] opacity-100 mt-6"
              : "max-h-0 opacity-50"
          }`}
        >
          <div className="space-y-6">
            {programming.map((skill, i) => (
              <div key={i}>
                <div className="flex justify-between text-sm font-medium mb-1">
                  <span className="flex items-center gap-2">
                    {iconMap[skill.icon]} {skill.name}
                  </span>
                  <span>{skill.level}%</span>
                </div>

                <div className="w-full bg-gray-300 dark:bg-gray-700 rounded-lg overflow-hidden">
                  <div
                    className="bg-primary dark:bg-primaryDark h-2 rounded-lg transition-all duration-700"
                    style={{ width: `${skill.level}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* OTHER SKILLS */}
      <div>
        <h3 className="text-xl font-semibold mb-4">Other Skills</h3>

        <ul className="flex flex-wrap gap-6 text-xl">
          {otherSkills.map((skill, i) => (
            <li
              key={i}
              className="flex items-center gap-2 cursor-pointer bg-gray-100 dark:bg-gray-700 px-3 py-1 rounded-xl shadow hover:shadow-md transition"
            >
              {iconMap[skill.icon]}
              <span className="text-base font-medium">{skill.name}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};
