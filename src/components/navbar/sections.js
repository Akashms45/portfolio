import { useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";
import { FiMoon, FiSun } from "react-icons/fi";
import { useMobile } from "../../hooks/useMobile";

export const Sections = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const isMobile = useMobile();
  const [dark, setDark] = useState(false);

  const menuRoute = [
    { id: 1, title: "Home", path: "/" },
    { id: 2, title: "About", path: "/about" },
    { id: 3, title: "Skills", path: "/skills" },
    { id: 4, title: "Projects", path: "/projects" },
    { id: 5, title: "Contact Me", path: "/contact" },
  ];

  const toggleTheme = () => {
    document.documentElement.classList.toggle("dark");
    setDark(!dark);
  };

  const handleNav = (path) => {
    if (isMobile) {
      const id = path === "/" ? "home" : path.replace("/", "");
      document.getElementById(id)?.scrollIntoView({
        behavior: "smooth",
      });
    } else {
      navigate(path);
    }
  };

  return (
    <div className="flex gap-6 items-center">
      {menuRoute.map((menu) => (
        <button
          key={menu.id}
          onClick={() => handleNav(menu.path)}
          className={`transition font-bold text-lg hover:text-violet-900 dark:hover:text-yellow-400  
            ${
              location.pathname === menu.path
                ? "text-violet-900 dark:text-yellow-400 font-bold"
                : ""
            }`}
        >
          {menu.title}
        </button>
      ))}

      {/* Theme toggle */}
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
