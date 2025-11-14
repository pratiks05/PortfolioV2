import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

import {
  FaLinkedin,
  FaGithub,
  FaTwitter,
  FaEnvelope,
  FaBriefcase,
} from "react-icons/fa";

import { Dock, DockIcon } from "./ui/dock";

const Navbar = () => {
  const SOCIAL_LINKS = [
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/pratik-singh-53b297254/",
      icon: FaLinkedin,
    },
    {
      name: "GitHub",
      url: "https://github.com/pratiks05",
      icon: FaGithub,
    },
    {
      name: "X (Twitter)",
      url: "https://twitter.com/pratikks555",
      icon: FaTwitter,
    },
    {
      name: "Email",
      url: "mailto:pratikkumars623@gmail.com",
      icon: FaEnvelope,
    },
  ];

  return (
    <nav className="fixed top-4 right-4 z-[9999]">
      <TooltipProvider>
        <Dock direction="middle" className="scale-[0.85]">
          {SOCIAL_LINKS.map((item) => (
            <DockIcon key={item.name}>
              <Tooltip>
                <TooltipTrigger asChild>
                  <a
                    href={item.url}
                    aria-label={item.name}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="size-9 flex items-center justify-center rounded-full"
                  >
                    <item.icon className="text-lg" />
                  </a>
                </TooltipTrigger>
                <TooltipContent>
                  <p>{item.name}</p>
                </TooltipContent>
              </Tooltip>
            </DockIcon>
          ))}
        </Dock>
      </TooltipProvider>
    </nav>
  );
};

export default Navbar;
