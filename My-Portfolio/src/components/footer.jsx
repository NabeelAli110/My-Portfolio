// src/components/Footer.jsx
import { hr } from "framer-motion/client";
import { Github, Linkedin, Mail } from "lucide-react";

const Footer = () => {
  return (
    
    <footer className="bg-gray-100 dark:bg-gray-900 text-gray-700 dark:text-gray-300 py-10">
      <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-6">
        {/* Logo or Name */}
        <div className="text-xl font-bold text-gray-800 dark:text-white">
          DeepDev 🚀
        </div>

        {/* Social Links */}
        <div className="flex gap-6">
          <a
            href="https://github.com/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-600 transition"
          >
            <Github />
          </a>
          <a
            href="https://linkedin.com/in/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-600 transition"
          >
            <Linkedin />
          </a>
          <a
            href="mailto:your@email.com"
            className="hover:text-blue-600 transition"
          >
            <Mail />
          </a>
        </div>

        {/* Copyright */}
        <div className="text-sm text-center md:text-right">
          &copy; {new Date().getFullYear()} DeepDev. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
