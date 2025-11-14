
import { PROJECTS } from "../constants";
import { motion } from "framer-motion";

// Type for a single project
interface ProjectItem {
  title: string;
  description: string;
  image: string;
  link: string;
  technologies: string[];
}

const Projects: React.FC = () => {
  return (
    <div className="border-b border-neutral-900 pb-4">
      <motion.h1
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.5 }}
        className="my-20 text-center text-4xl font-extrabold"
      >
        Projects
      </motion.h1>

      <div>
        {(PROJECTS as ProjectItem[]).map((project, index) => (
          <div key={index} className="mb-8 flex flex-wrap lg:justify-center">
            
            {/* Left Section Image */}
            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: -100 }}
              transition={{ duration: 1 }}
              className="w-full lg:w-1/4 relative"
            >
              <div className="relative inline-block">
                <img
                  src={project.image as string}
                  width={200}
                  height={300}
                  alt={project.title}
                  className="mb-6 rounded shadow-lg hover:scale-105 transition-transform duration-300"
                />

                {/* Top-right Link Icon */}
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="absolute top-2 right-2 bg-neutral-900 hover:bg-neutral-800 p-1.5 rounded-full transition-colors duration-300"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="12"
                    height="12"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-purple-500"
                  >
                    <path d="M7 17L17 7M17 7H8M17 7V16" />
                  </svg>
                </a>
              </div>
            </motion.div>

            {/* Right Section Details */}
            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: 100 }}
              transition={{ duration: 1 }}
              className="w-full max-w-xl lg:w-3/4"
            >
              <h6 className="mb-2 font-bold text-lg text-purple-200">
                {project.title}
              </h6>

              <p className="mb-4 text-neutral-400 italic">
                {project.description}
              </p>

              <div className="grid grid-cols-3 gap-2 sm:grid-cols-3 md:flex md:flex-wrap">
                {project.technologies.map((tech, techIndex) => (
                  <span
                    key={techIndex}
                    className="mr-2 mb-2 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-900 hover:bg-purple-800 hover:text-white transition-colors duration-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
