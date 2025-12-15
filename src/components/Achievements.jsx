export default function Achievements() {
  return (
    <section id="achievements" className="py-24 px-6 bg-white">
      <div className="max-w-6xl mx-auto">

        {/* ===== Heading (EXACT SAME AS EXPERIENCE) ===== */}
        <div className="text-center mb-16">
          <h2 className="text-sm font-semibold tracking-widest text-purple-600 uppercase">
            Achievements
          </h2>

          <h3 className="text-3xl md:text-4xl font-bold mt-2 text-black">
            Academic & <span className="text-orange-500">Competitive Highlights</span>
          </h3>

          <div className="w-20 h-1 bg-gradient-to-r from-purple-500 to-orange-400 mx-auto mt-4 rounded-full"></div>
        </div>

        {/* ===== Achievements Cards ===== */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">

          {/* 1 */}
          <a href="#" target="_blank" className="block">
            <div className="border border-gray-200 p-6 rounded-xl shadow hover:shadow-lg transition">
              <p className="font-semibold text-purple-600">
                🎓 McKinsey Forward Learning Trainee (2025)
              </p>
              <p className="text-black text-sm mt-2">
                Leadership & analytical excellence program
              </p>
            </div>
          </a>

          {/* 2 */}
          <a href="#" target="_blank" className="block">
            <div className="border border-gray-200 p-6 rounded-xl shadow hover:shadow-lg transition">
              <p className="font-semibold text-purple-600">
                🥇 Juspay Hiring Challenge 2025
              </p>
              <p className="text-black text-sm mt-2">
                Ranked in Top 4–5% nationwide
              </p>
            </div>
          </a>

          {/* 3 */}
          <a href="#" target="_blank" className="block">
            <div className="border border-gray-200 p-6 rounded-xl shadow hover:shadow-lg transition">
              <p className="font-semibold text-purple-600">
                🏆 Flipkart GRID 7.0
              </p>
              <p className="text-black text-sm mt-2">
                Top 5% selection from 60,000+ applicants
              </p>
            </div>
          </a>

          {/* 4 */}
          <a href="#" target="_blank" className="block">
            <div className="border border-gray-200 p-6 rounded-xl shadow hover:shadow-lg transition">
              <p className="font-semibold text-purple-600">
                🎯 Meesho “Scripted by Her” Hackathon (2025)
              </p>
              <p className="text-black text-sm mt-2">
                Nationwide selection
              </p>
            </div>
          </a>

          {/* 5 */}
          <a href="#" target="_blank" className="block">
            <div className="border border-gray-200 p-6 rounded-xl shadow hover:shadow-lg transition">
              <p className="font-semibold text-purple-600">
                ✨ Bhartiya Antariksh Hackathon 2025
              </p>
              <p className="text-black text-sm mt-2">
                National-level participation
              </p>
            </div>
          </a>

          {/* 6 */}
          <a href="#" target="_blank" className="block">
            <div className="border border-gray-200 p-6 rounded-xl shadow hover:shadow-lg transition">
              <p className="font-semibold text-purple-600">
                ✨ Adobe Hackathon 2025
              </p>
              <p className="text-black text-sm mt-2">
                Participated in national hackathon
              </p>
            </div>
          </a>

          {/* 7 */}
          <a href="#" target="_blank" className="block">
            <div className="border border-gray-200 p-6 rounded-xl shadow hover:shadow-lg transition">
              <p className="font-semibold text-purple-600">
                🎯 Smart India Hackathon 2023
              </p>
              <p className="text-black text-sm mt-2">
                Semi-Finalist
              </p>
            </div>
          </a>

          {/* 8 */}
          <a href="#" target="_blank" className="block">
            <div className="border border-gray-200 p-6 rounded-xl shadow hover:shadow-lg transition">
              <p className="font-semibold text-purple-600">
                🎓 E-CELL BoardRoom Event – IIT Indore (2025)
              </p>
              <p className="text-black text-sm mt-2">
                Shortlisted participant
              </p>
            </div>
          </a>

        </div>
      </div>
    </section>
  );
}
