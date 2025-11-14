import { EXPERIENCES } from "../constants";
import { motion } from "framer-motion";
import React from "react";

// Define the TypeScript type for each experience item
interface ExperienceItem {
  year: string;
  role: string;
  company: string;
  description: string;
  technologies: string[];
}

const Experience: React.FC = () => {
  return (
    <div className="border-b border-neutral-900 pb-4">
      <motion.h1
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.5 }}
        className="my-20 text-center text-4xl"
      >
        Experience
      </motion.h1>

      <div>
        {(EXPERIENCES as ExperienceItem[]).map((experience, index) => (
          <div key={index} className="mb-8 flex flex-wrap lg:justify-center">
            {/* Left: Year */}
            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: -100 }}
              transition={{ duration: 1 }}
              className="w-full lg:w-1/4"
            >
              <p className="mb-1 text-sm text-neutral-400">{experience.year}</p>
            </motion.div>

            {/* Right: Details */}
            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: 100 }}
              transition={{ duration: 1 }}
              className="w-full max-w-xl lg:w-3/4"
            >
              <h6 className="mb-2 font-extrabold">
                {experience.role} -{" "}
                <span className="mb-2 font-bold text-lg text-purple-200">
                  {experience.company}
                </span>
              </h6>

              <p className="mb-4 text-neutral-400">{experience.description}</p>

              <div className="grid grid-cols-3 gap-2 sm:grid-cols-3 md:flex md:flex-wrap">
                {experience.technologies.map((tech, techIndex) => (
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

export default Experience;
