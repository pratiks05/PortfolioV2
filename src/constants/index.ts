import project1 from "../assets/projects/pro-1.png";
import project4 from "../assets/projects/pro-4.png";
import project2 from "../assets/projects/pro-2.png";
import project3 from "../assets/projects/pro-3.png";


import achievement1 from "../assets/achievements/1.jpg";
import achievement2 from "../assets/achievements/2.jpg";
import achievement3 from "../assets/achievements/3.jpg";
import achievement4 from "../assets/achievements/4.jpg";
import achievement5 from "../assets/achievements/5.jpg";
import achievement6 from "../assets/achievements/6.jpg";


// Type definitions
export interface Experience {
  year: string;
  role: string;
  company: string;
  description: string;
  technologies: string[];
}

export interface Project {
  title: string;
  image: string;
  description: string;
  technologies: string[];
  link: string;
}

// Constants
export const HERO_CONTENT: string = `A passionate Full Stack Developer and final-year student who enjoys building end-to-end systems and uncovering how software really works.Driven by curiosity, creativity, and a constant urge to turn ideas into real, impactful products.`;
export const ABOUT_TEXT: string = `I'm a Full Stack Developer with a strong foundation in JavaScript, specializing in building scalable, user-centric applications using Next.js,React.js, Tailwind CSS, Flask, and Node.js. With experience across both frontend and backend systems, I enjoy designing clean architectures and solving real-world problems through efficient engineering. I've participated in 12+ hackathons, winning HackSpire-2024 and Rebase<01>, which strengthened my teamwork and problem-solving skills. Passionate about innovation, open-source, and tech communities, I'm always excited to collaborate on impactful projects.`;

export const EXPERIENCES: Experience[] = [
  {
    year: "July 2024 – August 2024",
    role: "Software Engineering Fellow",
    company: "HeadStarterAI",
    description: ``,
    technologies:[],
  },

  {
    year: "July 2025 – October 2025",
    role: "Software Development Intern",
    company: "D.Dolphin Designers Pvt. Ltd.",
    description: `Developed and optimized the frontend of their legal consultation platform using React.js & Tailwind, while supporting backend workflows with Django and PostgreSQL. Revamped their apparel website UI/UX and built a POC Voting App using Framer Motion and Context API, boosting performance by nearly 2.5×.`,
    technologies: [
      "React.js",
      "javascript",
      "Tailwind CSS",
      "Django",
      "PostgreSQL",
    ],
  },

  // ⭐ POSITIONS OF RESPONSIBILITY (added into experience)
  {
    year: "Oct 2024 – Oct 2025",
    role: "Outreach Lead & Core Team",
    company: "Google Developer Groups HITK",
    description: ``,
    technologies: [],
  },

  {
    year: "Oct 2024 – Present",
    role: "Community Lead",
    company: "NooBuild",
    description: ``,
    technologies: [],
  },
];

export const PROJECTS: Project[] = [
  {
    title: "ProPilot",
    image: project4,
    description:"ProPilot is a context-aware document engine that generates ATS-optimized resumes, cover letters, and professional emails tailored to specific job descriptions.With a unified Flask backend, React client, and a Chrome extension for in-context generation, ProPilot streamlines the entire job-application workflow end-to-end.",
    technologies: ["ReactJs", "Tailwind CSS", "JavaScript", "Flask", "SQLAlchemy", "Recharts", "Python", "GoogleAuth"],
    link: "",
  },
  {
    title: "CodeXpert",
    image: project2,
    description:
      "Full-stack web app enabling educators to assign unique AI-generated coding problems, track student performance, and deliver personalized feedback through adaptive questioning and real-time analytics.",
    technologies: ["React.js","TypeScript","TailwindCSS","AWS", "Flask","SQLite","Gemini AI","GoogleAuth","Recharts"],
    link: "https://github.com/navya-555/CodeXpert.git",
  },
  {
    title: "PrepAI",
    image: project3,
    description:
      "Algorithmic cheat-sheet generator that uses Google Gemini to craft custom learning material in real time.Developed an interactive React + TypeScript UI for seamless and fast study-content visualization.Accelerated backend throughput using Flask, LRU caching, and debounced search logic.",
    technologies: ["ReactJs", "Typescript", "Shadcn", "GeminiAI", "Redux"],
    link: "https://prepai-lovat.vercel.app/",
  },
  {
    title: "JobQuest",
    image: project1,
    description:
      "A full-stack job portal that streamlines the job search and hiring process, enabling seamless recruiter candidate interactions",
    technologies: ["ReactJs", "Javascript", "Supabase", "Clerk", "Nodejs","Express.js"],
    link: "https://job-quest-olive.vercel.app/",
  },
];

export const ACHIEVEMENTS = [
 
  {
    title: "Hack4Bengal",
    image: achievement4,
    date: "2024",
  },
    {
      title: "",
      image: achievement5,
      date: "2024",
    },

     {
    title: "Winner at HackSpire 2024",
    image: achievement3,
    date: "2024",
  },
  ];
