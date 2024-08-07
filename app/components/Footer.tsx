import Link from "next/link";
import { FaTwitter, FaFacebook, FaInstagram, FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="text-gray-900 py-2 border-t border-gray-400 pt-8">
      <div className="flex justify-center space-x-4">
        <a
          href="#"
          className="text-gray-400 hover:text-black transition duration-300"
        >
          <FaTwitter className="text-xl" />
        </a>
        <a
          href="#"
          className="text-gray-400 hover:text-black transition duration-300"
        >
          <FaFacebook className="text-xl" />
        </a>
        <a
          href="#"
          className="text-gray-400 hover:text-black transition duration-300"
        >
          <FaInstagram className="text-xl" />
        </a>
        <a
          href="#"
          className="text-gray-400 hover:text-black transition duration-300"
        >
          <FaGithub className="text-xl" />
        </a>
      </div>

      <div className="mt-4 pt-2 text-center text-sm text-gray-400">
        <p>©2024 LinkTree | All rights reserved</p>
      </div>
    </footer>
  );
};

export default Footer;
