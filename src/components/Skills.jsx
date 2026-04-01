import {
  FaJava,
  FaPython,
  FaReact,
  FaNodeJs,
  FaAws,
  FaGitAlt,
} from "react-icons/fa"
import { SiCplusplus, SiMongodb, SiTailwindcss, SiMysql } from "react-icons/si"
import { MdDevices, MdOutlinePsychology } from "react-icons/md"

export default function Skills() {
  return (
    <section
      id="skills"
      className="py-24 px-6 bg-black text-white"
    >
      <div className="max-w-6xl mx-auto">

        {/* Heading */}
        <h2 className="text-3xl font-bold mb-6 text-cyan-400 text-center pointer-events-none">
          Technical Skills
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

          {/* Languages */}
          <SkillCard
            title="Languages"
            color="text-cyan-400"
            icon={<FaJava size={24} />}
            skills={["Java", "C++", "Python", "SQL"]}
          />

          {/* Web */}
          <SkillCard
            title="Web Technologies"
            color="text-cyan-400"
            icon={<FaReact size={24} />}
            skills={["React.js", "Node.js", "Express.js", "Tailwind CSS", "MongoDB"]}
          />

          {/* AI */}
          <SkillCard
            title="AI Tools"
            color="text-cyan-400"
            icon={<MdOutlinePsychology size={24} />}
            skills={["OpenAI API", "ChatGPT", "Gemini"]}
          />

          {/* Dev Tools */}
          <SkillCard
            title="Dev Tools"
            color="text-cyan-400"
            icon={<FaGitAlt size={24} />}
            skills={["Git", "GitHub", "AWS", "Firebase", "Linux"]}
          />

          {/* Core CS */}
          <SkillCard
            title="Core CS"
            color="text-cyan-400"
            icon={<MdDevices size={24} />}
            skills={["DSA", "OS", "DBMS", "OOPS", "Computer Network"]}
          />
        </div>
      </div>
    </section>
  )
}

/* Reusable Card */
function SkillCard({ title, color, icon, skills }) {
  return (
    <div className="bg-black/80 border border-cyan-400 rounded-2xl p-6 shadow-sm hover:shadow-md transition duration-300">

      <div className={`flex items-center gap-3 mb-4 ${color}`}>
        {icon}
        <h3 className="text-xl font-semibold">{title}</h3>
      </div>

      <div className="flex flex-wrap gap-3">
        {skills.map((skill, i) => (
          <span
            key={i}
            className="
              px-4 py-1 text-sm font-semibold
              rounded-full
              bg-white/10 text-white
              hover:bg-cyan-400 hover:text-black
              transition duration-300 cursor-pointer
            "
          >
            {skill}
          </span>
        ))}
      </div>
    </div>
  )
}
