import React from "react";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

const Hero = () => {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center relative px-6 py-20 animated-bg">

      {/* Heading */}
      <h1 className="text-4xl sm:text-5xl font-bold text-center">
        <span className="text-cyan-400">Hi 👋 I'm </span>
        <span className="text-white hover:text-cyan-400 transition-colors duration-300 cursor-pointer">
          Rajeshwari Vyas
        </span>
      </h1>

      <h3 className="text-lg sm:text-xl text-center mt-2 text-white">
        MERN-Stack Software Developer | AI & IoT Enthusiast
      </h3>

      {/* Typing SVG */}
      <p className="mt-4">
        <img
          src="https://readme-typing-svg.herokuapp.com?color=36BCF7&center=true&vCenter=true&width=520&lines=Full-Stack+Development;AI+%26+IoT+Enthusiast;Building+Scalable+Software+Solutions"
          alt="Typing effect"
        />
      </p>

      {/* Buttons */}
      <div className="flex flex-col sm:flex-row justify-center gap-4 mt-6">
        <a
          href="/assets/Rajeshwari_Resume.pdf"
          download
          className="px-6 py-3 bg-gradient-to-r from-cyan-400 to-blue-500 hover:from-blue-500 hover:to-cyan-400 text-white font-semibold rounded-md transition-colors duration-300"
        >
          Download Resume
        </a>
        <a
          href="#contact"
          className="px-6 py-3 bg-gradient-to-r from-cyan-400 to-blue-500 hover:from-blue-500 hover:to-cyan-400 text-white font-semibold rounded-md transition-colors duration-300"
        >
          Hire Me
        </a>
      </div>

      {/* Social Icons */}
      <div className="flex justify-center gap-6 mt-6 text-white">
        <a
          href="https://github.com/rajeshwarivyas8"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-cyan-400 transition-colors text-2xl"
        >
          <FaGithub />
        </a>
        <a
          href="https://www.linkedin.com/in/rajeshwarivyas/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-cyan-400 transition-colors text-2xl"
        >
          <FaLinkedin />
        </a>
        <a
          href="mailto:rajeshwarivyas317@gmail.com"
          className="hover:text-cyan-400 transition-colors text-2xl"
        >
          <FaEnvelope />
        </a>
      </div>
    </section>
  );
};

export default Hero;
