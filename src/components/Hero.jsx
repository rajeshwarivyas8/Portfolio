import React from "react";
import RajeshwariPhoto from "../assets/tukk1.jpg"; // your photo path
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

const Hero = () => {
  return (
  <section className="min-h-screen bg-white flex flex-col justify-center items-center relative px-6 py-20">


      {/* Photo */}
      <div className="mb-10">
        <img
          src={RajeshwariPhoto}
          alt="Rajeshwari Vyas"
          className="w-48 h-48 sm:w-56 sm:h-56 rounded-full object-cover border-4 border-purple-500"
        />
      </div>

      {/* Text Content */}
      <div className="text-center space-y-6">
       <h1 className="text-4xl sm:text-5xl font-bold">
  <span className="text-black">Hi, I'm </span>
  <span className="bg-gradient-to-r from-purple-500 via-pink-500 to-orange-400 bg-clip-text text-transparent">
    Rajeshwari Vyas
  </span>
</h1>

        <p className="text-lg sm:text-xl text-black">
          Full-stack Developer • AI & IoT
        </p>
        <p className="text-md sm:text-lg text-white max-w-xl mx-auto">
          Building efficient, scalable, and AI-driven applications
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row justify-center gap-4 mt-4">
          <a
            href="/assets/Rajeshwari_Resume.pdf" // your resume path
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
        <div className="flex justify-center gap-6 mt-6 text-gray-700">
          <a
            href="https://github.com/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-purple-500 transition-colors text-2xl"
          >
            <FaGithub />
          </a>
          <a
            href="https://linkedin.com/in/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-purple-500 transition-colors text-2xl"
          >
            <FaLinkedin />
          </a>
          <a
            href="mailto:rajeshwarivyas317@gmail.com"
            className="hover:text-purple-500 transition-colors text-2xl"
          >
            <FaEnvelope />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
