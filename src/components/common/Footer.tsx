import { FaTwitter, FaGithub, FaLinkedin } from "react-icons/fa"; // Importing icons

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-6 mt-12">
      <div className="max-w-screen-xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between">
        <div className="text-center md:text-left">
          <p className="text-sm opacity-70">
            &copy; {new Date().getFullYear()} My Brand. All rights reserved.
          </p>
        </div>

        <div className="flex gap-6 mt-4 md:mt-0 justify-center md:justify-start">
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-green-600 transition-colors duration-300"
          >
            <FaTwitter size={24} />
          </a>
          <a
            href="https://github.com/tanvirhossain808"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-green-600 transition-colors duration-300"
          >
            <FaGithub size={24} />
          </a>
          <a
            href="https://linkedin.com/in/tanvirhossain808"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-green-600 transition-colors duration-300"
          >
            <FaLinkedin size={24} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
