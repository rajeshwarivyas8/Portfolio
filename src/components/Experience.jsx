import { Briefcase } from "lucide-react"

export default function Experience() {
  return (
    <section
      id="experience"
      className="py-24 px-6 bg-gradient-to-b from-white via-purple-50/40 to-orange-50/30"
    >
      <div className="max-w-6xl mx-auto">

        {/* ===== Heading ===== */}
        <div className="text-center mb-16">
          <h2 className="text-sm font-semibold tracking-widest text-purple-600 uppercase">
            Work Experience
          </h2>

          <h3 className="text-3xl md:text-4xl font-bold mt-2 text-black">
            Professional <span className="text-orange-500">Experience</span>
          </h3>

          <div className="w-20 h-1 bg-gradient-to-r from-purple-500 to-orange-400 mx-auto mt-4 rounded-full"></div>
        </div>

        {/* ===== Experience Cards ===== */}
        <div className="space-y-10">

          {/* --- Prodigy Infotech --- */}
          <div className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-shadow p-8">
            <div className="flex flex-col sm:flex-row gap-5">

              <div className="p-3 h-fit rounded-xl bg-gradient-to-br from-purple-500 to-orange-400 text-white">
                <Briefcase size={22} />
              </div>

              <div>
                <h4 className="text-xl font-semibold text-purple-600">
                  Software Developer Intern
                </h4>

                <p className="text-sm text-black mt-1">
                  Prodigy Infotech • Present
                </p>

                <ul className="mt-4 list-disc pl-5 marker:text-orange-400 text-black space-y-2">
                  <li>
                    Engineered applications — Number Guessing Engine, Contact Manager,
                    and Sudoku Solver — using OOP, file handling, and backtracking,
                    achieving 40% faster execution.
                  </li>
                  <li>
                    Improved code reliability through clean coding practices,
                    input validation, and Git/GitHub workflows.
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* --- VaultOfCodes --- */}
          <div className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-shadow p-8">
            <div className="flex flex-col sm:flex-row gap-5">

              <div className="p-3 h-fit rounded-xl bg-gradient-to-br from-purple-500 to-orange-400 text-white">
                <Briefcase size={22} />
              </div>

              <div>
                <h4 className="text-xl font-semibold text-purple-600">
                  Frontend Developer Intern
                </h4>

                <p className="text-sm text-black mt-1">
                  VaultOfCodes • Aug 2025
                </p>

                <ul className="mt-4 list-disc pl-5 marker:text-orange-400 text-black space-y-2">
                  <li>
                    Integrated REST APIs and developed reusable UI components,
                    improving development efficiency by 30%.
                  </li>
                  <li>
                    Wrote clean, scalable, and maintainable frontend code
                    for long-term stability.
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* --- IBM SkillsBuild --- */}
          <div className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-shadow p-8">
            <div className="flex flex-col sm:flex-row gap-5">

              <div className="p-3 h-fit rounded-xl bg-gradient-to-br from-purple-500 to-orange-400 text-white">
                <Briefcase size={22} />
              </div>

              <div>
                <h4 className="text-xl font-semibold text-purple-600">
                  Artificial Intelligence Intern
                </h4>

                <p className="text-sm text-black mt-1">
                  IBM SkillsBuild • July – Aug 2024
                </p>

                <ul className="mt-4 list-disc pl-5 marker:text-orange-400 text-black space-y-2">
                  <li>
                    Worked on Python-based AI projects including chatbot development,
                    data preprocessing, and model training.
                  </li>
                  <li>
                    Strengthened skills in algorithms, problem-solving,
                    and AI-driven solution building.
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* --- IoT Internship --- */}
          <div className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-shadow p-8">
            <div className="flex flex-col sm:flex-row gap-5">

              <div className="p-3 h-fit rounded-xl bg-gradient-to-br from-purple-500 to-orange-400 text-white">
                <Briefcase size={22} />
              </div>

              <div>
                <h4 className="text-xl font-semibold text-purple-600">
                  IoT & Embedded Systems Intern (Onsite)
                </h4>

                <p className="text-sm text-black mt-1">
                  Samrat Ashok Technological Institute, Vidisha • May – June 2025
                </p>

                <ul className="mt-4 list-disc pl-5 marker:text-orange-400 text-black space-y-2">
                  <li>
                    Worked with Arduino IDE, embedded systems, MQTT, Blynk,
                    and ThingSpeak protocols.
                  </li>
                  <li>
                    Built 8+ real-time IoT projects including LED control,
                    visitor counter, sensor-based systems, and home automation.
                  </li>
                  <li>
                    Developed robotics projects such as line follower
                    and computer-controlled robots.
                  </li>
                </ul>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
