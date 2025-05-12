// src/components/Skills.jsx
import { motion } from "framer-motion";
import { Code, Database, Figma, GitBranch, MonitorSmartphone } from "lucide-react";

const skills = [
  { name: "HTML", icon: <Code size={36} /> },
  { name: "CSS", icon: <MonitorSmartphone size={36} /> },
  { name: "JavaScript", icon: <Code size={36} /> },
  { name: "React", icon: <MonitorSmartphone size={36} /> },
  { name: "Firebase", icon: <Database size={36} /> },
  { name: "Git & GitHub", icon: <GitBranch size={36} /> },
  { name: "UI/UX (Figma)", icon: <Figma size={36} /> },
];

const Skills = () => {
  return (
    <section id="skills" className="py-20 px-4 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-8 text-gray-800 dark:text-white">
          My <span className="text-blue-600">Skills</span>
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg flex flex-col items-center space-y-3"
            >
              <div className="text-blue-600">{skill.icon}</div>
              <p className="font-semibold text-gray-700 dark:text-gray-200">{skill.name}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
