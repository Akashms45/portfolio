import Dashboard from "../assest/projectimages/Dashboard.png";
import NoteApp from "../assest/projectimages/NoteApp.png";
import Ecommerce from "../assest/projectimages/shoping.png";
import MovieExplorer from "../assest/projectimages/MovieApp.png";
import Portfolio from "../assest/projectimages/portfolio.png";

export const projects = [
  {
    id: 1,
    title: "Portfolio Website",
    description: "A responsive personal portfolio design.",
    tech: ["React", "Tailwind"],
    image: Portfolio,
    githubLink: "https://github.com/Akashms45/portfolio",
    liveLink: "https://akashms.netlify.app/",
  },
  {
    id: 2,
    title: "Notes App",
    description: "Add, Archive, Important, delete notes stored locally.",
    tech: ["React", "LocalStorage"],
    image: NoteApp,
    githubLink: "https://github.com/Akashms45/note_app",
    liveLink: "https://note-ifstdproject.netlify.app/",
  },
  {
    id: 3,
    title: "E-Commerce Store",
    description:
      "Shopping cart + product list + wish list functionality + category filter.",
    tech: ["React", "Context", "Tailwind"],
    image: Ecommerce,
    githubLink: "https://github.com/Akashms45/e-com_websit",
    liveLink: "https://e-comshoping.netlify.app/",
  },
  {
    id: 4,
    title: "Movie Explorer",
    description: "Movie search and details app using API integration.",
    tech: ["React", "TMDB API", "Tailwind"],
    image: MovieExplorer,
    githubLink: "https://github.com/Akashms45/movie-app",
    liveLink: "",
  },
  {
    id: 5,
    title: "Responsive Dashboard",
    description:
      "Admin dashboard UI with charts, sidebar, and responsive design.",
    tech: ["React", "Tailwind", "Charts.js"],
    image: Dashboard,
    githubLink: "https://github.com/Akashms45/dashboard",
    liveLink: "https://respdashboard.netlify.app/",
  },
];
