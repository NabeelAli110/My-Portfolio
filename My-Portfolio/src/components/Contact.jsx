// src/components/Contact.jsx
import { motion } from "framer-motion";

const Contact = () => {
  return (
    <section id="contact" className="py-20 px-4 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-4xl mx-auto">
        <motion.h2
          className="text-4xl font-bold text-center mb-10 text-gray-800 dark:text-white"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-blue-600">Contact</span> Me
        </motion.h2>

        <motion.form
          className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-md space-y-6"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          onSubmit={(e) => {
            e.preventDefault();
            alert("Form Submitted ✅");
          }}
        >
          <div className="flex flex-col md:flex-row gap-6">
            <input
              type="text"
              placeholder="Your Name"
              required
              className="w-full p-3 rounded-md bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-white outline-none"
            />
            <input
              type="email"
              placeholder="Your Email"
              required
              className="w-full p-3 rounded-md bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-white outline-none"
            />
          </div>
          <textarea
            placeholder="Your Message"
            required
            rows={5}
            className="w-full p-3 rounded-md bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-white outline-none"
          ></textarea>
          <button
            type="submit"
            className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-full font-semibold"
          >
            Send Message
          </button>
        </motion.form>
      </div>
    </section>
  );
};

export default Contact;
