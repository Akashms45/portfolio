import "./App.css";
import { Navbar } from "./components/navbar/navbar";
import { Routes, Route } from "react-router-dom";
import { Home } from "./pages/home/home";
import { Skills } from "./pages/skills/skills";
import { Projects } from "./pages/projects/projects";
import { About } from "./pages/about/about";
import { Contact } from "./pages/contact/contact";

function App() {
  return (
    <main className="grid place-items-center min-h-screen p-4 bg-white text-black dark:bg-gray-900 dark:text-white transition duration-200">
      <section className=" w-full h-full p-8 bg-violet-100 dark:bg-gray-800 border-violet-100 dark:border-gray-700 rounded-2xl border transition">
        <Navbar />
        <div className="">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>
      </section>
    </main>
  );
}

export default App;
