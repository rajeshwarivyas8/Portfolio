import React from "react";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

const Hero = () => {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center relative px-6 py-20 bg-black">

      {/* Text Content */}
      <div className="text-center space-y-6">

        {/* Heading */}
        <h1 className="text-4xl sm:text-5xl font-bold">
          <span className="text-cyan-400">Hi, I'm </span>
          <span className="text-white hover:text-cyan-400 transition-colors duration-300 cursor-pointer">
            Rajeshwari Vyas
          </span>
        </h1>

        {/* Subtitle */}
        <p className="text-lg sm:text-xl text-white">
          Software Developer • AI & IoT
        </p>
        <p className="text-md sm:text-lg text-white max-w-xl mx-auto">
          Building efficient, scalable, and AI-driven applications
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row justify-center gap-4 mt-4">
          <a
            href="/assets/Rajeshwari_Resume.pdf"
            download
            className="px-6 py-3 bg-purple-500 hover:bg-purple-600 text-white font-semibold rounded-md transition-colors"
          >
            Download Resume
          </a>
          <a
            href="#contact"
            className="px-6 py-3 bg-orange-500 hover:bg-orange-600 text-white font-semibold rounded-md transition-colors"
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
      </div>
    </section>
  );
};

export default Hero;
