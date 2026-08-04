import Nav from "./components/Nav.jsx";
import Hero from "./components/Hero.jsx";
import About from "./components/About.jsx";
import Experience from "./components/Experience.jsx";
import GNRRobotics from "./components/GNRRobotics.jsx";
import Projects from "./components/Projects.jsx";
import Skills from "./components/Skills.jsx";
import Education from "./components/Education.jsx";
import Beyond from "./components/Beyond.jsx";
import Toastmasters from "./components/Toastmasters.jsx";
import Contact from "./components/Contact.jsx";
import Footer from "./components/Footer.jsx";

export default function App() {
  return (
    <div className="min-h-screen bg-ink text-parchment">
      <Nav />
      <main>
        <Hero />
        <About />
        <Experience />
        <GNRRobotics />
        <Projects />
        <Skills />
        <Education />
        <Toastmasters />
        <Beyond />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
