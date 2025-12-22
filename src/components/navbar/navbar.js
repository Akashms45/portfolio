import React from "react";
import Sections from "./sections";

export const Navbar = () => {
  return (
    <nav className="ml-12 mr-12 flex items-center justify-between px-8 py-4">
      <h1 className="text-4xl font-bold tracking-wide lobster">Akash</h1>

      <Sections />
    </nav>
  );
};
