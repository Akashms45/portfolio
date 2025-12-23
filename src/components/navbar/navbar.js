import React from "react";
import Sections from "./sections";
import { FiSun, FiMoon } from "react-icons/fi";
import { useMobile } from "../../hooks/useMobile";
import { info } from "../../data/info";

export const Navbar = () => {
  const isMobile = useMobile();
  const [dark, setDark] = React.useState(false);

  const toggleTheme = () => {
    setDark(!dark);
    document.documentElement.classList.toggle("dark");
  };

  return (
    <nav className="px-4 md:px-12 py-4">
      <div className="flex items-center justify-between w-full">
        {/* LEFT: logo + name */}
        <div className="flex items-center gap-2 min-w-0">
          {isMobile && (
            <img
              src={info.image}
              alt="logo"
              className="
                w-10 h-10
                rounded-full object-cover
                flex-shrink-0
              "
            />
          )}

          <h1
            className="
              text-2xl md:text-4xl
              font-bold tracking-wide lobster
              truncate
            "
          >
            Akash
          </h1>
        </div>

        {/* RIGHT */}
        <div className="flex items-center gap-6 flex-shrink-0">
          {!isMobile && <Sections />}

          {isMobile && (
            <button
              onClick={toggleTheme}
              className="text-2xl hover:scale-110 transition"
            >
              {dark ? <FiSun /> : <FiMoon />}
            </button>
          )}
        </div>
      </div>
    </nav>
  );
};
