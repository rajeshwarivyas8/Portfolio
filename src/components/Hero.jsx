import { FaWhatsapp, FaLinkedin, FaGithub } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

export default function Hero() {
  return (

<section className="min-h-screen bg-black text-white flex items-center px-10 relative">

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
<FaLinkedin size={30}/>
</a>

<a 
href="https://github.com/YOUR_LINK"
target="_blank"
rel="noopener noreferrer"
className="text-white hover:text-cyan-400 hover:scale-125 hover:drop-shadow-[0_0_8px_cyan] transition duration-300"
>
<FaGithub size={30}/>
</a>

<a 
href="mailto:rajeshwarivyas317@gmail.com"
className="text-red-400 hover:scale-125 hover:drop-shadow-[0_0_8px_#f87171] transition duration-300"
>
<MdEmail size={30}/>
</a>

{/* vertical line */}

<div className="w-[2px] h-24 bg-cyan-400 mt-2"></div>

</div>


{/* Hero Text Content */}

<div className="md:ml-24 lg:ml-32">

{/* Heading */}
<h1 className="text-4xl sm:text-5xl font-bold text-center md:text-left">

<span className="text-cyan-400">
Hi 👋 I'm 
</span>

<span className="text-white hover:text-cyan-400 transition-colors duration-300 cursor-pointer ml-2">
Rajeshwari Vyas
</span>

</h1>


<h3 className="text-lg sm:text-xl mt-2 text-white text-center md:text-left">

MERN-Stack Software Developer | AI & IoT Enthusiast

</h3>


{/* Typing SVG */}

<p className="mt-4 flex justify-center md:justify-start">

<img
src="https://readme-typing-svg.herokuapp.com?color=36BCF7&center=true&vCenter=true&width=520&lines=Full-Stack+Development;AI+%26+IoT+Enthusiast;Building+Scalable+Software+Solutions"
alt="Typing effect"
/>

</p>

</div>


{/* Buttons */}

<div className="mt-8 flex gap-5">

<a
href="/resume.pdf"
className="bg-cyan-400 text-black px-8 py-3 rounded-full font-medium hover:bg-cyan-300 transition"
>

Download Resume

</a>

<a
href="#contact"
className="border border-cyan-400 text-cyan-400 px-8 py-3 rounded-full hover:bg-cyan-400 hover:text-black transition"
>

Hire Me

</a>

</div>

</div>

</section>

  );
}
