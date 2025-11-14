import { PROJECTS } from "../constants";
import { motion } from "framer-motion";

interface ProjectItem {
  title: string;
  description: string;
  image: string;
  link: string;
  technologies: string[];
}

const fadeUp = {
  hidden: { opacity: 0, y: 60 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.9, ease: "easeOut" },
  },
};

const Projects: React.FC = () => {
  return (
    <div className="border-b border-neutral-900 pb-10">
      <motion.h1
        initial={{ opacity: 0, y: -40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="my-20 text-center text-4xl font-extrabold"
      >
        Projects
      </motion.h1>

      <div className="flex flex-col gap-32">
        {(PROJECTS as ProjectItem[]).map((project, index) => (
          <motion.div
            key={index}
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.3 }}
            className={`flex flex-col lg:flex-row items-center gap-12`}
          >
            {/* LEFT IMAGE SECTION */}
            <motion.div
              className="flex-1 flex justify-center"
              initial={{ opacity: 0, x: -60 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.9, ease: "easeOut" }}
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-[450px] h-auto rounded-xl shadow-xl hover:scale-[1.02] 
                transition-all duration-500"
              />
            </motion.div>

            {/* RIGHT CONTENT SECTION */}
            <motion.div
              initial={{ opacity: 0, x: 60 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.9, ease: "easeOut" }}
              className="flex-1 lg:pr-10"
            >
              <h2 className="text-3xl font-bold text-purple-300 mb-4">
                {project.title}
              </h2>

              <p className="text-neutral-400 text-lg leading-relaxed mb-6">
                {project.description}
              </p>

              {/* BUTTONS */}
              <div className="flex gap-4 mb-6">
                <a
                  target="_blank"
                  href={project.link}
                  className="border border-purple-400 px-6 py-2 rounded-lg 
                  hover:bg-purple-500/20 transition text-purple-300 font-medium
                  flex items-center gap-2"
                >
                  🔗 Live Demo
                </a>
              </div>

              {/* TECHNOLOGIES */}
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1 rounded-full bg-neutral-900 text-purple-400 
                    text-sm border border-neutral-700"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
