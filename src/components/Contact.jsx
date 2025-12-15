export default function Contact() {
  return (
    <section
      id="contact"
      className="py-24 px-6 bg-gradient-to-b from-white to-purple-50 relative overflow-hidden"
    >
      {/* Background blobs */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-100/50 rounded-full blur-3xl"></div>
        <div className="absolute top-0 right-0 w-72 h-72 bg-orange-100/50 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-4xl mx-auto">
        {/* ===== Heading ===== */}
        <div className="text-center mb-12">
          <span className="text-purple-600 font-medium tracking-wide text-sm uppercase">
            Get in Touch
          </span>

          <h2 className="text-4xl md:text-5xl font-bold text-black mt-3 mb-4">
            Let's Connect! 🚀
          </h2>

          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            I'm always excited to discuss new opportunities, collaborations, or
            just have a friendly chat about tech!
          </p>
        </div>

        {/* ===== Card ===== */}
        <div className="bg-white rounded-3xl p-8 md:p-12 shadow-xl border border-gray-100">
          <div className="grid md:grid-cols-2 gap-10">
            {/* ===== Contact Info ===== */}
            <div>
              <h3 className="text-2xl font-bold text-black mb-6 flex items-center gap-2">
                Contact Info
              </h3>

              <div className="space-y-6">
                {/* Email */}
                <a
                  href="mailto:rajeshwarivyas317@gmail.com"
                  className="flex items-center gap-4 p-4 rounded-xl bg-purple-50 hover:bg-purple-100 transition-colors group"
                >
                  <div className="p-3 rounded-lg bg-gradient-to-br from-purple-500 to-purple-600 text-white shadow-lg">
                    ✉️
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Email</p>
                    <p className="font-medium text-black group-hover:text-purple-600 transition-colors">
                      rajeshwarivyas317@gmail.com
                    </p>
                  </div>
                </a>

                {/* WhatsApp */}
                <a
                  href="https://wa.me/917770975743"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 rounded-xl bg-green-50 hover:bg-green-100 transition-colors group"
                >
                  <div className="p-3 rounded-lg bg-gradient-to-br from-green-500 to-green-600 text-white shadow-lg">
                    💬
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">WhatsApp</p>
                    <p className="font-medium text-black group-hover:text-green-600 transition-colors">
                      +91 7770975743
                    </p>
                  </div>
                </a>

                {/* Location */}
                <div className="flex items-center gap-4 p-4 rounded-xl bg-orange-50">
                  <div className="p-3 rounded-lg bg-gradient-to-br from-orange-400 to-orange-500 text-white shadow-lg">
                    📍
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Location</p>
                    <p className="font-medium text-black">
                      ITARSI, M.P, India
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* ===== Social Links ===== */}
            <div>
              <h3 className="text-2xl font-bold text-black mb-6">
                Social Links
              </h3>

              <div className="space-y-4">
                <a
                  href="https://github.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 rounded-xl bg-gray-50 hover:bg-gray-100 transition-all group"
                >
                  🐙
                  <span className="font-medium text-black">GitHub</span>
                </a>

                <a
                  href="https://linkedin.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 rounded-xl bg-gray-50 hover:bg-gray-100 transition-all group"
                >
                  💼
                  <span className="font-medium text-black">LinkedIn</span>
                </a>

                <a
                  href="mailto:rajeshwarivyas317@gmail.com"
                  className="flex items-center gap-4 p-4 rounded-xl bg-gray-50 hover:bg-gray-100 transition-all group"
                >
                  ✉️
                  <span className="font-medium text-black">Email</span>
                </a>
              </div>
            </div>
          </div>

          {/* ===== CTA ===== */}
          <div className="mt-10 pt-8 border-t border-gray-100 text-center">
            <a
              href="mailto:rajeshwarivyas317@gmail.com"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-600 to-orange-500 hover:from-purple-700 hover:to-orange-600 text-white px-10 py-4 rounded-full shadow-lg transition-all"
            >
              ✉️ Send me an Email
            </a>
          </div>
        </div>

        {/* Footer */}
        <p className="text-center text-gray-500 mt-12">
          © 2025 Rajeshwari Vyas. Built with passion and React.
        </p>
      </div>
    </section>
  );
}
