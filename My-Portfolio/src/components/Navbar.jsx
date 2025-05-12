import { useState } from "react";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const links = ["Home", "About", "Skills", "Projects", "Contact"];

  return (
    <nav className="fixed w-full bg-black shadow z-50 px-10">
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        <h1 className="text-[1.8rem] font-bold text-blue-700">MyPortfolio</h1>
        <ul className="hidden md:flex space-x-6">
          {links.map(link => (
            <li key={link}>
              <a href={`#${link}`} className="text-gray-400  hover:text-blue-700 capitalize font-medium">
                {link}
              </a>
            </li>
          ))}
        </ul>
        <a href="#contact" className="hidden md:block px-6 py-2 bg-blue-800 text-white rounded-2xl  hover:text-black hover:bg-gray-400">Hire Me</a>
        <button className="md:hidden" onClick={() => setOpen(!open)}>
          {open ? <X /> : <Menu />}
        </button>
      </div>
      {open && (
        <div className="md:hidden px-4 pb-4">
          {links.map(link => (
            <a key={link} href={`#${link}`} className="block py-2">
              {link}
            </a>
          ))}
          <a href="#contact" className="block bg-blue-600 text-white text-center py-2 rounded-full mt-2">
            Hire Me
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;