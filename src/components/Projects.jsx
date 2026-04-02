import React from "react";

const Projects = () => {
  return (
    <section id="projects" className="py-24 px-6 bg-black text-white">
      <div className="max-w-6xl mx-auto">

        {/* Heading */}
        <div className="text-center mb-16">

          <h2 className="text-sm font-semibold tracking-widest text-cyan-400 uppercase">
            Portfolio
          </h2>

          <h3 className="text-3xl md:text-4xl font-bold mt-2">
            Featured <span className="text-cyan-400">Projects</span>
          </h3>

          <div className="w-20 h-1 bg-cyan-400 mx-auto mt-4 rounded-full"></div>

        </div>

        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-3">

          {/* Project 1 */}
          <div className="bg-black/80 border border-cyan-400 p-6 rounded-xl shadow hover:shadow-cyan-500/20 hover:shadow-xl transition duration-300">

            <h3 className="text-xl font-semibold mb-3 text-cyan-400">
              AI Resume Builder
            </h3>

            <p className="text-gray-300 mb-4 text-sm">
              Built a full-stack AI Resume Builder using React.js,
              Node.js, Javascript, and MongoDB with secure user
              authentication and resume management features.
            </p>

            <p className="text-gray-400 mb-4 text-sm">
              Implemented dynamic resume creation with live preview,
              shareable links, multiple templates, and image upload
              with background removal.
            </p>

            <div className="flex flex-wrap gap-2 mb-4">

              <span className="bg-white/10 px-3 py-1 rounded text-sm">
                React.js
              </span>

              <span className="bg-white/10 px-3 py-1 rounded text-sm">
                Node.js
              </span>

              <span className="bg-white/10 px-3 py-1 rounded text-sm">
                MongoDB
              </span>

              <span className="bg-white/10 px-3 py-1 rounded text-sm">
                ChatGPT API
              </span>

            </div>

            <div className="flex gap-4">

              <a href="https://github.com/rajeshwarivyas8/resume-frontend" className="text-cyan-400 hover:underline">
                Code
              </a>

              <a href="https://resumevita.vercel.app/" className="text-cyan-400 hover:underline">
                Live
              </a>

            </div>

          </div>

          {/* Project 2 */}
          <div className="bg-black/80 border border-cyan-400 p-6 rounded-xl shadow hover:shadow-cyan-500/20 hover:shadow-xl transition duration-300">

            <h3 className="text-xl font-semibold mb-3 text-cyan-400">
              Personal Portfolio Website
            </h3>

            <p className="text-gray-300 mb-4 text-sm">
              Built a responsive personal portfolio using React.js
              showcasing projects, skills, and professional details.
            </p>

            <p className="text-gray-400 mb-4 text-sm">
              Implemented reusable React components and deployed
              using GitHub and Vercel.
            </p>

            <div className="flex flex-wrap gap-2 mb-4">

              <span className="bg-white/10 px-3 py-1 rounded text-sm">
                React.js
              </span>

              <span className="bg-white/10 px-3 py-1 rounded text-sm">
                JavaScript
              </span>

              <span className="bg-white/10 px-3 py-1 rounded text-sm">
                CSS
              </span>

            </div>

            <div className="flex gap-4">

              <a href="https://github.com/rajeshwarivyas8/Portfolio" className="text-cyan-400 hover:underline">
                Code
              </a>

              <a href="https://rajeshwari-portfolio-vyas.vercel.app/" className="text-cyan-400 hover:underline">
                Live
              </a>

            </div>

          </div>

          {/* Project 3 */}
          <div className="bg-black/80 border border-cyan-400 p-6 rounded-xl shadow hover:shadow-cyan-500/20 hover:shadow-xl transition duration-300">

            <h3 className="text-xl font-semibold mb-3 text-cyan-400">
              Book Inventory Management App
            </h3>

            <p className="text-gray-300 mb-4 text-sm">
              Developed a responsive Book Inventory Management web
              application using React, HTML, CSS, and JavaScript.
            </p>

            <p className="text-gray-400 mb-4 text-sm">
              Managed application state using React Hooks like
              useState and useEffect.
            </p>

            <div className="flex flex-wrap gap-2 mb-4">

              <span className="bg-white/10 px-3 py-1 rounded text-sm">
                React
              </span>

              <span className="bg-white/10 px-3 py-1 rounded text-sm">
                Firebase
              </span>

              <span className="bg-white/10 px-3 py-1 rounded text-sm">
                JavaScript
              </span>

            </div>

            <div className="flex gap-4">

              <a href="https://github.com/rajeshwarivyas8/Book-inventory-Management-System" className="text-cyan-400 hover:underline">
                Code
              </a>

              <a href="https://book-inventory-management-system-pearl.vercel.app/" className="text-cyan-400 hover:underline">
                Live
              </a>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

export default Projects;
