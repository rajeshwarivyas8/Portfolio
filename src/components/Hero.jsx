import React from "react";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

const Hero = () => {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center relative px-6 py-20 animated-bg">


      

{/* Social Left Bar */}

<div className="fixed left-8 bottom-0 hidden md:flex flex-col items-center gap-5 z-50">

<a 
href="https://wa.me/917770975743"
target="_blank"
rel="noopener noreferrer"
className="text-green-500 hover:scale-125 hover:drop-shadow-[0_0_8px_#22c55e] transition duration-300"
>
<FaWhatsapp size={26}/>
</a>

<a 
href="https://linkedin.com/in/YOUR_LINK"
target="_blank"
rel="noopener noreferrer"
className="text-blue-500 hover:scale-125 hover:drop-shadow-[0_0_8px_#3b82f6] transition duration-300"
>
<FaLinkedin size={26}/>
</a>

<a 
href="https://github.com/YOUR_LINK"
target="_blank"
rel="noopener noreferrer"
className="text-white hover:text-cyan-400 hover:scale-125 hover:drop-shadow-[0_0_8px_cyan] transition duration-300"
>
<FaGithub size={26}/>
</a>

<a 
href="mailto:rajeshwarivyas317@gmail.com"
className="text-red-400 hover:scale-125 hover:drop-shadow-[0_0_8px_#f87171] transition duration-300"
>
<MdEmail size={28}/>
</a>

{/* vertical line */}

<div className="w-[2px] h-24 bg-cyan-400 mt-2"></div>

</div>





      {/* Heading */}
      <h1 className="text-4xl sm:text-5xl font-bold text-center">
        <span className="text-cyan-400">Hello 👋 I'm </span>
        <span className="text-white hover:text-cyan-400 transition-colors duration-300 cursor-pointer">
          Rajeshwari Vyas
        </span>
      </h1>

      <h3 className="text-lg sm:text-xl text-center mt-2 text-white">
         Software Developer | AI & IoT Enthusiast
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
