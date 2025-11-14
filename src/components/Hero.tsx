
import { HERO_CONTENT } from "../constants";
import profilePic from "../assets/pratik.jpg";
import { motion } from "framer-motion";
import { FileText } from "lucide-react";
import resume from "../assets/projects/resume.pdf";
import { useState } from "react";

// Type for motion variants
interface VariantProps {
  hidden: {
    x: number;
    opacity: number;
  };
  visible: {
    x: number;
    opacity: number;
    transition: {
      duration: number;
      delay: number;
    };
  };
  [key: string]: any;
}

// Typed variants function
const container = (delay: number): VariantProps => ({
  hidden: { x: -100, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.5, delay },
  },
});

const Hero: React.FC = () => {
  const [showPreview, setShowPreview] = useState<boolean>(false);

  const togglePreview = () => {
    setShowPreview((prev) => !prev);
  };

  return (
    <div className="border-b border-neutral-900 pb-4 lg:mb-35">
      <div className="flex flex-wrap items-center justify-center lg:justify-between">
        {/* Left Section */}
        <div className="w-full lg:w-1/2 flex flex-col items-center lg:items-start px-6 sm:px-10 text-center lg:text-left">
          <motion.h1
            variants={container(0)}
            initial="hidden"
            animate="visible"
            className="pb-6 text-4xl sm:text-5xl font-thin tracking-tight lg:mt-16 lg:text-7xl"
          >
            Pratik Kumar Singh
          </motion.h1>

          <motion.span
            variants={container(0.5)}
            initial="hidden"
            animate="visible"
            className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-2xl sm:text-3xl tracking-tight text-transparent"
          >
            Full-Stack Web Developer
          </motion.span>

          <motion.p
            variants={container(1)}
            initial="hidden"
            animate="visible"
            className="my-4 max-w-xl py-4 text-base sm:text-lg font-light tracking-wide leading-relaxed bg-gradient-to-r from-gray-400 via-gray-500 to-gray-600 bg-clip-text text-transparent"
          >
            {HERO_CONTENT}
          </motion.p>

          {/* Resume Button */}
          <motion.button
            variants={container(1.5)}
            initial="hidden"
            animate="visible"
            onClick={togglePreview}
            className="mt-6 sm:mt-2 rounded-full border border-neutral-700 px-6 sm:px-8 py-2 sm:py-3 text-sm sm:text-base font-medium transition-colors hover:bg-neutral-800 flex items-center gap-2 relative overflow-hidden group"
          >
            <span className="absolute inset-0 bg-gradient-to-r from-pink-400/20 via-purple-400/20 to-blue-400/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
            <span className="absolute inset-0 -z-10 animate-pulse bg-gradient-to-r from-pink-400/10 via-purple-400/10 to-blue-400/10 group-hover:opacity-100"></span>
            <FileText size={18} />
            <span>My Resume</span>
          </motion.button>
        </div>

        {/* Right Section - Image */}
        <div className="w-full lg:w-1/2 flex justify-center lg:justify-end p-4 sm:p-8 mt-6 sm:mt-0">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 1 }}
            className="relative p-2 rounded-2xl bg-neutral-900 shadow-lg shadow-purple-500/30 overflow-hidden"
          >
            <div className="absolute inset-0 -z-10 animate-pulse bg-gradient-to-r from-pink-400/10 via-purple-400/10 to-blue-400/10 rounded-2xl"></div>

            <motion.img
              initial={{ scale: 0.95 }}
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
              className="rounded-xl w-full max-w-[280px] sm:max-w-[350px] lg:max-w-[380px] h-auto"
              src={profilePic as string}
              alt="Pratik Kumar Singh"
            />
          </motion.div>
        </div>
      </div>

      {/* Resume Preview Modal */}
      {showPreview && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4 sm:p-6"
        >
          <div className="relative max-h-[80vh] w-full max-w-4xl overflow-auto rounded-lg bg-neutral-900 p-6">
            <button
              onClick={togglePreview}
              className="absolute right-4 top-4 rounded-full p-1 hover:bg-neutral-800"
            >
              ✕
            </button>

            <h2 className="mb-4 text-xl font-medium">Resume Preview</h2>

            <div className="aspect-[8.5/11] w-full bg-white">
              <embed
                src={resume as string}
                type="application/pdf"
                className="h-full w-full"
                title="Resume Preview"
              />
            </div>

            <div className="mt-4 flex flex-col sm:flex-row justify-between gap-3">
              <button
                onClick={togglePreview}
                className="rounded-full border border-neutral-700 px-4 py-2 text-sm hover:bg-neutral-800"
              >
                Close
              </button>

              <a
                href={resume as string}
                download="Pratik_Kumar_Singh_Resume.pdf"
                className="rounded-full bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 px-4 py-2 text-sm text-white"
              >
                Download
              </a>
            </div>
          </div>
        </motion.div>
      )}
    </div>
  );
};

export default Hero;
