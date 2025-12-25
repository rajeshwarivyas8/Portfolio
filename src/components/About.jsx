import MyPhoto from "../assets/tukk1.jpg";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";

export default function About() {
  return (
    <section
      id="about"
      className="min-h-screen flex flex-col md:flex-row items-center justify-center py-20 px-6 bg-[#F9F9F9] text-black"
    >
      {/* Left: Education Box */}
      <div className="md:w-1/2 w-full flex justify-center mb-10 md:mb-0 md:justify-end md:pr-10">
        <div className="bg-white shadow-lg rounded-xl p-8 w-full max-w-md">
          <h2 className="text-2xl font-bold mb-4 text-purple-600">
            Education
          </h2>
          <div className="space-y-2">
            <p className="font-semibold text-lg">
              Samrat Ashok Technological Institute
            </p>
            <p>Bachelor of Technology in Internet of Things</p>
            <p>2022 – 2026 | Vidisha, M.P, India</p>
            <p className="font-medium">CGPA: 7.58 / 10.0</p>
          </div>
        </div>
      </div>

      {/* Right: About Me */}
      <div className="md:w-1/2 w-full px-4 text-center md:text-left">
        
        {/* ===== About Heading (SAME AS EXPERIENCE) ===== */}
        <div className="mb-8">
          <h2 className="text-sm font-semibold tracking-widest text-purple-600 uppercase">
            About
          </h2>

          <h3 className="text-3xl md:text-4xl font-bold mt-2 text-black">
            About <span className="text-orange-500">Me</span>
          </h3>

          <div className="w-20 h-1 bg-gradient-to-r from-purple-500 to-orange-400 mt-4 rounded-full mx-auto md:mx-0"></div>
        </div>

        {/* About Text */}
        <p className="mb-4 leading-relaxed">
          I am a passionate <span className="font-semibold text-purple-600">IoT enthusiast</span> with a strong
          interest in <span className="font-semibold text-orange-500">software development</span> and
          AI-driven solutions. I enjoy solving real-world problems using technology.
        </p>

        <p className="mb-4 leading-relaxed">
          During my B.Tech, I worked on multiple projects involving sensors, data analytics,
          dashboards, and IoT platforms, continuously upgrading my technical skill set.
        </p>

        <p className="mb-6 leading-relaxed">
          My goal is to contribute to innovative tech solutions in
          <span className="font-semibold text-purple-600"> AI, IoT,</span> and
          <span className="font-semibold text-orange-500"> Full-Stack Development</span>,
          while growing as a professional.
        </p>

        {/* Social Icons */}
        <div className="flex gap-6 justify-center md:justify-start mt-4">
          <a
            href="https://github.com/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="text-black hover:text-purple-600 text-3xl transition"
          >
            <FaGithub />
          </a>
          <a
            href="https://linkedin.com/in/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="text-black hover:text-purple-600 text-3xl transition"
          >
            <FaLinkedin />
          </a>
          <a
            href="mailto:youremail@example.com"
            className="text-black hover:text-purple-600 text-3xl transition"
          >
            <HiOutlineMail />
          </a>
        </div>
      </div>
    </section>
  );
}

