export default function Contact() {
  return (
    <section
      id="contact"
      className="py-24 px-6 bg-black text-white relative overflow-hidden"
    >

      {/* Background glow */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl"></div>
        <div className="absolute top-0 right-0 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-4xl mx-auto">

        {/* Heading */}
        <div className="text-center mb-12">

          <span className="text-cyan-400 font-medium tracking-wide text-sm uppercase">
            Get in Touch
          </span>

          <h2 className="text-4xl md:text-5xl font-bold mt-3 mb-4">
            Let's <span className="text-cyan-400">Connect</span> 🚀
          </h2>

          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            I'm always excited to discuss new opportunities,
            collaborations, or just have a friendly chat about tech!
          </p>

        </div>

        {/* Card */}
        <div className="bg-black/80 rounded-3xl p-8 md:p-12 shadow-xl border border-cyan-400">

          <div className="grid md:grid-cols-2 gap-10">

            {/* Contact Info */}
            <div>

              <h3 className="text-2xl font-bold mb-6">
                Contact Info
              </h3>

              <div className="space-y-6">

                {/* Email */}
                <a
                  href="mailto:rajeshwarivyas317@gmail.com"
                  className="flex items-center gap-4 p-4 rounded-xl bg-white/5 hover:bg-cyan-400/10 transition group"
                >

                  <div className="p-3 rounded-lg bg-cyan-400 text-black shadow-lg">
                    ✉️
                  </div>

                  <div>
                    <p className="text-sm text-gray-400">
                      Email
                    </p>

                    <p className="font-medium group-hover:text-cyan-400 transition">
                      rajeshwarivyas317@gmail.com
                    </p>
                  </div>

                </a>

                {/* WhatsApp */}
                <a
                  href="https://wa.me/917770975743"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 rounded-xl bg-white/5 hover:bg-cyan-400/10 transition group"
                >

                  <div className="p-3 rounded-lg bg-cyan-400 text-black shadow-lg">
                    💬
                  </div>

                  <div>
                    <p className="text-sm text-gray-400">
                      WhatsApp
                    </p>

                    <p className="font-medium group-hover:text-cyan-400 transition">
                      +91 7770975743
                    </p>
                  </div>

                </a>

                {/* Location */}
                <div className="flex items-center gap-4 p-4 rounded-xl bg-white/5">

                  <div className="p-3 rounded-lg bg-cyan-400 text-black shadow-lg">
                    📍
                  </div>

                  <div>

                    <p className="text-sm text-gray-400">
                      Location
                    </p>

                    <p className="font-medium">
                      ITARSI, M.P, India
                    </p>

                  </div>

                </div>

              </div>

            </div>

            {/* Social Links */}
            <div>

              <h3 className="text-2xl font-bold mb-6">
                Social Links
              </h3>

              <div className="space-y-4">

                <a
                  href="https://github.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 rounded-xl bg-white/5 hover:bg-cyan-400/10 transition group"
                >
                  🐙
                  <span className="font-medium group-hover:text-cyan-400 transition">
                    GitHub
                  </span>
                </a>

                <a
                  href="https://linkedin.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 rounded-xl bg-white/5 hover:bg-cyan-400/10 transition group"
                >
                  💼
                  <span className="font-medium group-hover:text-cyan-400 transition">
                    LinkedIn
                  </span>
                </a>

                <a
                  href="mailto:rajeshwarivyas317@gmail.com"
                  className="flex items-center gap-4 p-4 rounded-xl bg-white/5 hover:bg-cyan-400/10 transition group"
                >
                  ✉️
                  <span className="font-medium group-hover:text-cyan-400 transition">
                    Email
                  </span>
                </a>

              </div>

            </div>

          </div>

          {/* CTA */}
          <div className="mt-10 pt-8 border-t border-cyan-400/30 text-center">

            <a
              href="mailto:rajeshwarivyas317@gmail.com"
              className="inline-flex items-center gap-2 bg-cyan-400 hover:bg-cyan-300 text-black px-10 py-4 rounded-full shadow-lg transition"
            >
              ✉️ Send me an Email
            </a>

          </div>

        </div>

        {/* Footer */}
        <p className="text-center text-gray-500 mt-12">
          © 2025 Rajeshwari Vyas. Built with React ⚛️
        </p>

      </div>

    </section>
  );
}
