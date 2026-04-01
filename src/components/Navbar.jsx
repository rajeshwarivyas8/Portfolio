export default function Navbar() {
  return (
    <nav className="px-10 py-4 shadow-lg fixed top-0 w-full z-50 bg-black text-white">
      <div className="flex justify-between items-center">

        {/* Left: Logo / RV */}
        <div className="text-white font-bold text-xl hover:text-cyan-400 active:text-teal-400 transition-colors duration-300 cursor-pointer">
          RV
        </div>

        {/* Center: LinkedIn */}
        <div className="flex justify-center items-center gap-10 font-medium">
          <a
            href="https://www.linkedin.com/in/YOUR_LINKEDIN_ID"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-cyan-400 active:text-teal-400 transition-colors duration-300"
          >
            LinkedIn
          </a>
        </div>

        {/* Right: Navbar Links */}
        <div className="flex items-center gap-6 font-medium">
          <a href="#home" className="text-white hover:text-cyan-400 active:text-teal-400 transition-colors duration-300">
            Home
          </a>
          <a href="#about" className="text-white hover:text-cyan-400 active:text-teal-400 transition-colors duration-300">
            About
          </a>
          <a href="#education" className="text-white hover:text-cyan-400 active:text-teal-400 transition-colors duration-300">
            Skills
          </a>
          <a href="#experience" className="text-white hover:text-cyan-400 active:text-teal-400 transition-colors duration-300">
            Experience
          </a>
          <a href="#projects" className="text-white hover:text-cyan-400 active:text-teal-400 transition-colors duration-300">
            Projects
          </a>
          <a href="#achievements" className="text-white hover:text-cyan-400 active:text-teal-400 transition-colors duration-300">
            Achievements
          </a>
          <a href="#contact" className="text-white hover:text-cyan-400 active:text-teal-400 transition-colors duration-300">
            Contact
          </a>
        </div>

      </div>
    </nav>
  )
}
