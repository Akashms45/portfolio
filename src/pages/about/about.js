import React from "react";
import { info } from "../../data/info";
import { FiDownload, FiInstagram } from "react-icons/fi";
import { GiReturnArrow } from "react-icons/gi";
import { useMobile } from "../../hooks/useMobile";

export const About = () => {
  const isMobile = useMobile(); // detect small screens

  return (
    <div
      className="
        grid gap-40
        grid-cols-1 md:grid-cols-2
        items-center justify-center
        max-w-6xl mx-auto
        min-h-[calc(100vh-200px)]
        px-4 py-10
      "
    >
      {isMobile && (
        <div className="relative">
          <img
            src={info.aboutpic}
            alt="profile"
            className="
    block dark:hidden 
    object-cover 
    w-80 h-60 mx-auto      /* only change */
    md:w-full md:h-full 
    rounded-2xl 
    transition-opacity duration-500
  "
          />

          <img
            src={info.aboutpicdark}
            alt="profile dark"
            className="
    hidden dark:block 
    object-cover 
    w-80 h-60 mx-auto      /* same change */
    md:w-full md:h-full 
    rounded-2xl 
    transition-opacity duration-500
  "
          />
        </div>
      )}

      {/* TEXT SECTION */}
      <div className="ml-auto text-center md:text-left space-y-8">
        {/* HEADING WITH UNDERLINE ANIMATION */}
        <h2 className="heading relative inline-block group text-primary dark:text-primaryDark">
          About Me
        </h2>

        {/* SUMMARY */}
        <p
          className="font-body 
    text-lg md:text-lg font-semibold
    text-gray-700 dark:text-gray-300/90
    max-w-md mx-auto md:mx-0
    leading-relaxed tracking-wide"
        >
          A recent MCA graduate stepping into frontend development. I enjoy
          building clean, responsive UI with React and learning better ways to
          make components reusable and interactive. Currently seeking
          opportunities to learn, collaborate, and contribute through real
          projects.
        </p>

        <div className="relative flex items-center gap-4">
          {/* handwritten small note above arrow */}
          <span
            className="
      font-hand text-xs text-gray-800 dark:text-gray-300
      absolute -top-3 md:-top-0 left-3
      mt-3
      rotate-[-18deg]          /* slight handwritten angle */
      
    "
          >
            my sketches here
          </span>

          {/* arrow pointing to right */}
          <GiReturnArrow
            className="
      text-gray-700 dark:text-gray-300 
      absolute  left-14 
      -rotate-12
      scale-x-[-1]      
      text-lg
    "
          />

          {/* Instagram icon */}
          <a
            href={info.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="
      ml-20 text-primary dark:text-primaryDark
      hover:scale-110 transition
    "
          >
            <FiInstagram size={26} />
          </a>
          <span className="font-medium text-gray-500 dark:text-gray-400">
            When I'm not coding, you'll find me sketching or lost in pen-art
            details. Yes, I sharpen pencils like they're weapons.
          </span>
        </div>

        {/* CV DOWNLOAD */}
        <a href="/AkashCV.pdf" download className="btn-primary">
          Download CV <FiDownload size={20} />
        </a>
      </div>
    </div>
  );
};
