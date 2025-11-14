
import { FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Footer: React.FC = () => {
  return (
    <footer className="border-t border-neutral-900 py-6 flex flex-col md:flex-row items-center justify-between px-6">
      {/* Left Side - Copyright */}
      <div className="flex items-center">
        <p className="text-sm text-neutral-400">
          © 2025 Pratik Singh. All rights reserved.
        </p>
      </div>

      {/* Right Side - Social Links */}
      <div className="flex items-center space-x-4 text-neutral-400">
        <a
          href="https://www.linkedin.com/in/pratik-singh-53b297254/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-purple-500 transition-colors duration-300"
        >
          <FaLinkedin size={24} />
        </a>

        <a
          href="https://github.com/pratiks05"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-purple-500 transition-colors duration-300"
        >
          <FaGithub size={24} />
        </a>

        <a
          href="https://www.instagram.com/_impratiksingh05_/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-purple-500 transition-colors duration-300"
        >
          <FaInstagram size={24} />
        </a>

        <a
          href="https://x.com/pratikks555"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-purple-500 transition-colors duration-300"
        >
          <FaXTwitter size={24} />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
