import { FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";

const Navbar: React.FC = () => {
  return (
    <nav className="mb-20 flex items-center justify-between py-6">
      <div className="flex flex-shrink-0 items-center">
        {/* Logo if needed */}
        {/* <img className="mx-2 w-10" src={logo} alt="logo" /> */}
      </div>

      <div className="m-8 flex items-center justify-center gap-4 text-2xl">
        <a
          href="https://www.linkedin.com/in/pratik-singh-53b297254/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedin size={30} />
        </a>

        <a
          href="https://github.com/pratiks05"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub size={30} />
        </a>

        <a
          href="https://www.instagram.com/_impratiksingh05_/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaInstagram size={30} />
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
