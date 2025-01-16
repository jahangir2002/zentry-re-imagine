import { FaGithub, FaGlobe } from "react-icons/fa";
import { Tooltip } from 'react-tippy';
import 'react-tippy/dist/tippy.css';

const socialLinks = [
  { href: "https://zentry.com/", icon: <FaGlobe />, tooltip: "Original website of Zentry" },
  { href: "https://github.com/jahangir2002/zentry-re-imagine", icon: <FaGithub />, tooltip: "Source Code" },
];

const Footer = () => {
  return (
    <footer className="w-screen bg-[#5542ff] py-4 text-black">
      <div className="container mx-auto flex flex-col items-center justify-between gap-4 px-4 md:flex-row">
        <p className="text-center text-sm font-light md:text-left">
          ©Nova 2025. All rights reserved
        </p>

        <div className="flex justify-center gap-4 md:justify-start">
          {socialLinks.map((link, index) => (
            <Tooltip key={index} title={link.tooltip} position="bottom" trigger="mouseenter">
              <a
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-black transition-colors duration-500 ease-in-out hover:text-white"
              >
                {link.icon}
              </a>
            </Tooltip>
          ))}
        </div>

        <a
          href="#privacy-policy"
          className="text-center text-sm font-light hover:underline md:text-right"
        >
          Privacy Policy
        </a>
      </div>
    </footer>
  );
};

export default Footer;
