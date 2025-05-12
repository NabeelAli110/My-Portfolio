// src/components/About.jsx
import { motion } from "framer-motion";

const About = () => {
  return (
    <section id="about" className="py-30 px-10  bg-white dark:bg-gray-950">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12">
        
        {/* Image */}
        <motion.div
          className="w-full md:w-1/2"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <img
            src="https://images.ctfassets.net/tmcb0v2sc9iu/6HmcBkpzIA0oCRAiaoXYAo/5da0c394f03ea3349159534af2bff39c/Services-CV-Analysis-01.png" // make sure you place this in public/
            alt="Profile"
            className="w-full rounded-3xl shadow-lg object-cover"
          />
        </motion.div>

        {/* Text */}
        <motion.div
          className="w-full md:w-1/2 text-left"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl font-bold mb-6 text-gray-800 dark:text-white">
            About <span className="text-blue-600">Me</span>
          </h2>
          <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
            I’m a passionate <span className="font-semibold text-blue-600">Web Developer</span> focused on building
            modern, user-friendly websites and apps. I specialize in React, Firebase, and Tailwind CSS — with a love for performance and pixel perfection!
          </p>
          <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
            I enjoy turning complex problems into simple, beautiful, and intuitive designs. I’m always learning, and I love building cool digital stuff 🚀
          </p>
          <a
            href="#contact"
            className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-full transition"
          >
            Let’s Work Together
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
