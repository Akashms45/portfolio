import React from "react";
import Sections from "./sections";
import { FiSun, FiMoon } from "react-icons/fi";
import { useMobile } from "../../hooks/useMobile";
import { info } from "../../data/info";

export const Navbar = () => {
  const isMobile = useMobile(); // detect small screens

  const [dark, setDark] = React.useState(false);

  const toggleTheme = () => {
    setDark(!dark);
    document.documentElement.classList.toggle("dark");
  };
  return (
    <nav className="ml-12 mr-12 px-8 py-4">
      <div className="flex items-center justify-between">
        {/* LEFT: logo + name inline */}
        <div className="flex items-center gap-3">
          {isMobile && (
            <img
              src={info.image}
              alt="logo"
              className="w-20 h-20 rounded-full object-cover"
            />
          )}

          <h1 className="text-4xl font-bold tracking-wide lobster">Akash</h1>
        </div>

        {/* RIGHT */}
        <div className="flex items-center gap-8">
          {!isMobile && <Sections />}

          <button
            onClick={toggleTheme}
            className="text-3xl hover:scale-110 transition"
          >
            {dark ? <FiSun /> : <FiMoon />}
          </button>
        </div>
      </div>
    </nav>
  );
};
