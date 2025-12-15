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
      className="py-24 px-6 bg-gradient-to-b from-gray-50 to-white"
    >
      <div className="max-w-6xl mx-auto">

        {/* Heading */}
        <h2 className="text-3xl font-bold mb-6 text-purple-600 text-center pointer-events-none">
  Technical Skills
</h2>


        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

          {/* Languages */}
          <SkillCard
            title="Languages"
            color="text-blue-600"
            icon={<FaJava size={24} />}
            skills={["Java", "C++", "Python", "SQL"]}
          />

          {/* Web */}
          <SkillCard
            title="Web Technologies"
            color="text-purple-600"
            icon={<FaReact size={24} />}
            skills={["React.js", "Node.js", "Express.js", "Tailwind CSS", "MongoDB"]}
          />

          {/* AI */}
          <SkillCard
            title="AI Tools"
            color="text-orange-500"
            icon={<MdOutlinePsychology size={24} />}
            skills={["OpenAI API", "ChatGPT", "Gemini"]}
          />

          {/* Dev Tools */}
          <SkillCard
            title="Dev Tools"
            color="text-green-600"
            icon={<FaGitAlt size={24} />}
            skills={["Git", "GitHub", "AWS", "Firebase", "Linux"]}
          />

          {/* Core CS */}
          <SkillCard
            title="Core CS"
            color="text-pink-600"
            icon={<MdDevices size={24} />}
            skills={["DSA", "OS", "DBMS", "OOPS", "System Design"]}
          />
        </div>
      </div>
    </section>
  )
}

/* Reusable Card */
function SkillCard({ title, color, icon, skills }) {
  return (
    <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm hover:shadow-md">

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
    bg-gray-100 text-gray-700
    hover:bg-purple-600 hover:text-white
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
