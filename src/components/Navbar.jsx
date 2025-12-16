export default function Navbar({ darkMode, setDarkMode }) {
  return (
    <nav className="px-6 py-4 shadow-md fixed top-0 w-full z-50 bg-white text-black">
      <div className="flex justify-center items-center gap-8 font-semibold">
        <a
          href="#home"
          className="bg-clip-text text-transparent bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500 hover:from-orange-500 hover:via-pink-500 hover:to-purple-500 transition-colors font-semibold"
        >
          Home
        </a>
        <a
          href="#about"
          className="bg-clip-text text-transparent bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500 hover:from-orange-500 hover:via-pink-500 hover:to-purple-500 transition-colors font-semibold"
        >
          About
        </a>
        <a
          href="#education"
          className="bg-clip-text text-transparent bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500 hover:from-orange-500 hover:via-pink-500 hover:to-purple-500 transition-colors font-semibold"
        >
          
          Skills
        </a>
        <a
          href="#experience"
          className="bg-clip-text text-transparent bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500 hover:from-orange-500 hover:via-pink-500 hover:to-purple-500 transition-colors font-semibold"
        >
          Experience
        </a>
        <a
          href="#projects"
          className="bg-clip-text text-transparent bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500 hover:from-orange-500 hover:via-pink-500 hover:to-purple-500 transition-colors font-semibold"
        >
          Projects
        </a>
        <a
          href="#achievements"
          className="bg-clip-text text-transparent bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500 hover:from-orange-500 hover:via-pink-500 hover:to-purple-500 transition-colors font-semibold"
        >
          Achievements
        </a>
        <a
          href="#contact"
          className="bg-clip-text text-transparent bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500 hover:from-orange-500 hover:via-pink-500 hover:to-purple-500 transition-colors font-semibold"
        >
          Contact
        </a>

        {/* Toggle Button */}
        <button
          onClick={() => setDarkMode(!darkMode)}
          className="px-6 py-3 bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500 hover:from-orange-500 hover:via-pink-500 hover:to-purple-500 text-white font-semibold rounded-md transition-colors ml-6"
        >
          {darkMode ? "Light Mode" : "Dark Mode"}
        </button>
      </div>
    </nav>
  )
}
