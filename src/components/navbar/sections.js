import { Link, useLocation } from "react-router-dom";
import { useState } from "react";
import { FiMoon, FiSun } from "react-icons/fi";

export const Sections = () => {
  const location = useLocation();
  const [dark, setDark] = useState(false);

  const menuRoute = [
    { id: 1, title: "Home", path: "/" },
    { id: 2, title: "About", path: "/about" },
    { id: 3, title: "Skills", path: "/skills" },
    { id: 4, title: "Projects", path: "/projects" },
    { id: 6, title: "Contact Me", path: "/contact" },
  ];

  const toggleTheme = () => {
    document.documentElement.classList.toggle("dark");
    setDark(!dark);
  };

  return (
    <div className="flex gap-6 items-center">
      {menuRoute.map((menu) => (
        <Link
          key={menu.id}
          to={menu.path}
          className={`transition font-bold text-lg hover:text-violet-900 dark:hover:text-yellow-400  
            ${
              location.pathname === menu.path
                ? "text-violet-900 dark:text-yellow-400 font-bold"
                : ""
            }`}
        >
          {menu.title}
        </Link>
      ))}

      {/* toggle button */}
      <button
        className="p-2 text-lg rounded-md font-bold hover:bg-gray-200 dark:hover:bg-gray-700 transition"
        onClick={toggleTheme}
      >
        {dark ? <FiSun /> : <FiMoon />}
      </button>
    </div>
  );
};

export default Sections;
