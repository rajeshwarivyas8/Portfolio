import React from "react";

const Projects = () => {
  return (
    <section id="projects" className="py-24 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        {/* ===== Heading ===== */}
        <div className="text-center mb-16">
          <h2 className="text-sm font-semibold tracking-widest text-purple-600 uppercase">
            Portfolio
          </h2>

          <h3 className="text-3xl md:text-4xl font-bold mt-2 text-black">
            Featured <span className="text-orange-500">Projects</span>
          </h3>

          <div className="w-20 h-1 bg-gradient-to-r from-purple-500 to-orange-400 mx-auto mt-4 rounded-full"></div>
        </div>

        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-3">
          {/* Project 1 */}
          <div className="border border-gray-200 p-6 rounded-xl shadow hover:shadow-lg transition-shadow duration-300">
            <h3 className="text-xl font-semibold mb-2 text-purple-500 cursor-pointer">
              Blog Application
            </h3>
            <p className="text-black mb-4">
              Full-featured blog platform with CRUD functionality, user authentication, blog ratings, and real-time Firestore updates with responsive design.
            </p>
            <div className="flex flex-wrap gap-2 mb-4">
              <span className="bg-gray-100 text-black px-2 py-1 rounded">React.js</span>
              <span className="bg-gray-100 text-black px-2 py-1 rounded">Firebase</span>
              <span className="bg-gray-100 text-black px-2 py-1 rounded">Tailwind CSS</span>
              <span className="bg-gray-100 text-black px-2 py-1 rounded">CRUD</span>
              <span className="bg-gray-100 text-black px-2 py-1 rounded">User Auth</span>
              <span className="bg-gray-100 text-black px-2 py-1 rounded">Blog ratings</span>
            </div>
            <div className="flex gap-4">
              <a href="#" className="text-orange-500 hover:underline flex items-center gap-1">
                <i className="fab fa-github"></i> Code
              </a>
              <a href="#" className="text-orange-500 hover:underline flex items-center gap-1">
                <i className="fas fa-external-link-alt"></i> Live
              </a>
            </div>
          </div>

          {/* Project 2 */}
          <div className="border border-gray-200 p-6 rounded-xl shadow hover:shadow-lg transition-shadow duration-300">
            <h3 className="text-xl font-semibold mb-2 text-purple-500 cursor-pointer">
              Realtime Chat Application
            </h3>
            <p className="text-black mb-4">
              Feature-rich chat app supporting 1:1 and group conversations with 30% reduced message latency and optimized React components.
            </p>
            <div className="flex flex-wrap gap-2 mb-4">
              <span className="bg-gray-100 text-black px-2 py-1 rounded">MongoDB</span>
              <span className="bg-gray-100 text-black px-2 py-1 rounded">Express.js</span>
              <span className="bg-gray-100 text-black px-2 py-1 rounded">React.js</span>
              <span className="bg-gray-100 text-black px-2 py-1 rounded">Node.js</span>
              <span className="bg-gray-100 text-black px-2 py-1 rounded">Socket.io</span>
            </div>
            <div className="flex gap-4">
              <a href="#" className="text-orange-500 hover:underline flex items-center gap-1">
                <i className="fab fa-github"></i> Code
              </a>
              <a href="#" className="text-orange-500 hover:underline flex items-center gap-1">
                <i className="fas fa-external-link-alt"></i> Live
              </a>
            </div>
          </div>

          {/* Project 3 */}
          <div className="border border-gray-200 p-6 rounded-xl shadow hover:shadow-lg transition-shadow duration-300">
            <h3 className="text-xl font-semibold mb-2 text-purple-500 cursor-pointer">
              To-Do Application
            </h3>
            <p className="text-black mb-4">
              Clean and maintainable task management app with full CRUD operations, local storage persistence for offline access, and responsive design.
            </p>
            <div className="flex flex-wrap gap-2 mb-4">
              <span className="bg-gray-100 text-black px-2 py-1 rounded">HTML</span>
              <span className="bg-gray-100 text-black px-2 py-1 rounded">CSS</span>
              <span className="bg-gray-100 text-black px-2 py-1 rounded">JavaScript</span>
              <span className="bg-gray-100 text-black px-2 py-1 rounded">CRUD</span>
              <span className="bg-gray-100 text-black px-2 py-1 rounded">Local Storage</span>
            </div>
            <div className="flex gap-4">
              <a href="#" className="text-orange-500 hover:underline flex items-center gap-1">
                <i className="fab fa-github"></i> Code
              </a>
              <a href="#" className="text-orange-500 hover:underline flex items-center gap-1">
                <i className="fas fa-external-link-alt"></i> Live
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;

