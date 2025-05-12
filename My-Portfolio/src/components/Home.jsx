import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";

const Home = () => {
  return (
    <section
      className="min-h-screen flex items-center justify-center px-4 bg-cover bg-center relative"
      style={{ backgroundImage: "url('https://en.idei.club/uploads/posts/2023-06/1686775424_en-idei-club-p-portfolio-background-design-dizain-krasivo-4.jpg')" }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-transparent to-black/80
"></div>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center text-white z-10 flex flex-col items-center"
      >
        {/* ✅ Profile Image in Circle */}
        <img
          src="https://images.ctfassets.net/tmcb0v2sc9iu/6HmcBkpzIA0oCRAiaoXYAo/5da0c394f03ea3349159534af2bff39c/Services-CV-Analysis-01.png" // 👈 Replace with your image in /public folder
          alt="Profile"
          className="w-32 h-32 md:w-40 md:h-40 rounded-full object-cover border-4 border-blue-500 mb-6 shadow-lg"
        />

        {/* ✅ Heading */}
        <h1 className="text-4xl md:text-6xl font-bold mb-4 text-gray-400">
          Hi, I'm <span className="text-blue-700">Nabeel Magsi</span>
        </h1>

        {/* ✅ Typing Animation */}
        <TypeAnimation
          sequence={[
            "Front-End Developer",
            2000,
            "React Developer",
            2000,
            "Firebase Expert",
            2000,
            "UI Designer",
            2000,
          ]}
          wrapper="span"
          speed={50}
          className="text-lg md:text-xl block mb-6 text-red-900 font-extrabold"
          repeat={Infinity}
        />

        {/* ✅ Resume Button */}
        <a
          href="/resume.pdf"
          className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-full"
        >
          Download Resume
        </a>
      </motion.div>
    </section>
  );
};

export default Home;
