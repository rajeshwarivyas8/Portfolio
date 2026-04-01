export default function Navbar({ darkMode, setDarkMode }) {
  return (
    <nav className="px-10 py-4 shadow-lg fixed top-0 w-full z-50 
    bg-[#0b0f19]/90 backdrop-blur-md text-white border-b border-gray-800">

      <div className="flex justify-end items-center gap-10 font-medium">

        <a href="#home"
        className="hover:scale-110 transition duration-300 
        bg-clip-text text-transparent 
        bg-gradient-to-r from-purple-400 via-pink-500 to-orange-400">
          Home
        </a>

        <a href="#about"
        className="hover:scale-110 transition duration-300 
        bg-clip-text text-transparent 
        bg-gradient-to-r from-purple-400 via-pink-500 to-orange-400">
          About
        </a>

        <a href="#education"
        className="hover:scale-110 transition duration-300 
        bg-clip-text text-transparent 
        bg-gradient-to-r from-purple-400 via-pink-500 to-orange-400">
          Skills
        </a>

        <a href="#experience"
        className="hover:scale-110 transition duration-300 
        bg-clip-text text-transparent 
        bg-gradient-to-r from-purple-400 via-pink-500 to-orange-400">
          Experience
        </a>

        <a href="#projects"
        className="hover:scale-110 transition duration-300 
        bg-clip-text text-transparent 
        bg-gradient-to-r from-purple-400 via-pink-500 to-orange-400">
          Projects
        </a>

        <a href="#achievements"
        className="hover:scale-110 transition duration-300 
        bg-clip-text text-transparent 
        bg-gradient-to-r from-purple-400 via-pink-500 to-orange-400">
          Achievements
        </a>

        <a href="#contact"
        className="hover:scale-110 transition duration-300 
        bg-clip-text text-transparent 
        bg-gradient-to-r from-purple-400 via-pink-500 to-orange-400">
          Contact
        </a>

        <button
          onClick={() => setDarkMode(!darkMode)}
          className="px-5 py-2 rounded-lg 
          bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500 
          hover:scale-105 transition duration-300 text-white">
          {darkMode ? "Light" : "Dark"}
        </button>

      </div>
    </nav>
  )
}
