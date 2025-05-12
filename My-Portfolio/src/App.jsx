import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/footer";

function App() {
  return (
    <div className="bg-white text-gray-800">
      <Navbar />
      <section id="Home"><Home /></section>
      <section id="About"><About /></section>
      <section id="Skills"><Skills /></section>
      <section id="Projects"><Projects /></section>
      <section id="Contact"><Contact /></section>
      <section id="footer"><Footer /></section>

    </div>
  );
}

export default App;
