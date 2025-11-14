
import { RiReactjsLine, RiNodejsLine } from "react-icons/ri";
import {
  SiTailwindcss,
  SiFlask,
  SiJavascript,
  SiSqlite,
  SiSupabase,
  SiExpress,
  SiMongodb,
  SiHtml5,
  SiCss3,
  SiPandas,
  SiNumpy,
  SiPython,
} from "react-icons/si";
import { FaBootstrap } from "react-icons/fa";
import { motion, Variants } from "framer-motion";

// Type for icon variants generator
const iconVariants = (duration: number): Variants => ({
  initial: { y: -5 },
  animate: {
    y: [5, -5],
    transition: {
      duration,
      ease: "linear",
      repeat: Infinity,
      repeatType: "reverse",
    },
  },
});

// Type for each tech stack item
interface TechItem {
  icon: React.ComponentType<{ className?: string }>;
  name: string;
  color: string;
}

const Technologies: React.FC = () => {
  const techStacks: TechItem[] = [
    { icon: RiReactjsLine, name: "React", color: "text-cyan-400" },
    { icon: SiTailwindcss, name: "Tailwind", color: "text-cyan-400" },
    { icon: SiFlask, name: "Flask", color: "text-white" },
    { icon: SiJavascript, name: "JavaScript", color: "text-yellow-500" },
    { icon: SiSqlite, name: "SQLite", color: "text-sky-700" },
    { icon: FaBootstrap, name: "Bootstrap", color: "text-violet-600" },
    { icon: SiSupabase, name: "Supabase", color: "text-green-500" },
    { icon: RiNodejsLine, name: "Node.js", color: "text-green-600" },
    { icon: SiExpress, name: "Express.js", color: "text-gray-400" },
    { icon: SiMongodb, name: "MongoDB", color: "text-green-500" },
    { icon: SiHtml5, name: "HTML", color: "text-orange-500" },
    { icon: SiCss3, name: "CSS", color: "text-blue-500" },
    { icon: SiPandas, name: "Pandas", color: "text-blue-600" },
    { icon: SiNumpy, name: "NumPy", color: "text-blue-400" },
    { icon: SiPython, name: "Python", color: "text-yellow-300" },
  ];

  return (
    <div className="border-b border-neutral-800 pb-12">
      <motion.h1
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 1.5 }}
        className="my-10 text-center text-3xl font-bold"
      >
        Technologies
      </motion.h1>

      <motion.div
        whileInView={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: -100 }}
        transition={{ duration: 1.5 }}
        className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 max-w-5xl mx-auto px-2"
      >
        {techStacks.map((tech, index) => (
          <motion.div
            key={index}
            variants={iconVariants((index % 5) + 2)}
            initial="initial"
            animate="animate"
            className="flex flex-col items-center justify-center"
          >
            <div className="rounded-lg border-2 border-neutral-800 p-2 bg-neutral-900">
              <tech.icon className={`text-4xl ${tech.color}`} />
            </div>
            <span className="mt-1 text-xs font-medium text-gray-300">
              {tech.name}
            </span>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default Technologies;
