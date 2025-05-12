// src/components/Projects.jsx
import { motion } from "framer-motion";

const projects = [
  {
    title: "E-Commerce Website",
    image: "https://cdn.dribbble.com/userupload/30273388/file/original-70ed6e151bbaae908fc6ad05c6a72abe.png?resize=1600x1200",
    demoLink: "https://your-live-demo-link.com",
    codeLink: "https://github.com/your-repo",
  },
  {
    title: "MP3 Music App",
    image: "https://media.istockphoto.com/id/1458296390/vector/music-player-music-player-template-music-player-app-design-screen-vector-illustration.jpg?s=612x612&w=0&k=20&c=TsDGZp1OiHwjw63RVtY0hRmlwdYFnWBCjAm5c0-T_qc=",
    demoLink: "https://chatapp-demo.com",
    codeLink: "https://github.com/your-chat-app",
  },
  {
    title: "Portfolio Website",
    image: "https://static.vecteezy.com/system/resources/previews/023/023/575/non_2x/landscape-architecture-portfolio-template-vector.jpg",
    demoLink: "https://your-portfolio.com",
    codeLink: "https://github.com/your-portfolio",
  },
  {
    title: "Car Dealers Website",
    image: "https://colorlib.com/wp/wp-content/uploads/sites/2/5_best-car-dealer-websites.jpg",
    demoLink: "https://your-portfolio.com",
    codeLink: "https://github.com/your-portfolio",
  },
  {
    title: "Calculator",
    image: "https://help.apple.com/assets/67B3DCB5A84F39672F08EDCC/67B3DCB8E91C80D8D1033E8A/en_US/ab0ca8cb557985c7eadf756325f491b5.png",
    demoLink: "https://your-portfolio.com",
    codeLink: "https://github.com/your-portfolio",
  },
  {
    title: "Architecture Web",
    image: "https://s.tmimgcdn.com/scr/800x500/58300/archiarch-website-template_58314-0-original.jpg",
    demoLink: "https://your-portfolio.com",
    codeLink: "https://github.com/your-portfolio",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-20 px-4 bg-white dark:bg-gray-950">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-10 text-gray-800 dark:text-white">
          My <span className="text-blue-600">Projects</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="bg-gray-100 dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden"
              whileHover={{ scale: 1.05 }}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6 text-left">
                <h3 className="text-xl font-semibold mb-3 text-gray-800 dark:text-white">
                  {project.title}
                </h3>
                <div className="flex gap-4">
                  <a
                    href={project.demoLink}
                    target="_blank"
                    className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700"
                  >
                    Live Demo
                  </a>
                  <a
                    href={project.codeLink}
                    target="_blank"
                    className="bg-gray-700 text-white px-4 py-2 rounded-md hover:bg-gray-800"
                  >
                    Code
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
