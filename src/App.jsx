import Nav from "./components/Nav.jsx";
import Hero from "./components/Hero.jsx";
import About from "./components/About.jsx";
import Experience from "./components/Experience.jsx";
import Projects from "./components/Projects.jsx";
import Skills from "./components/Skills.jsx";
import Education from "./components/Education.jsx";
import Beyond from "./components/Beyond.jsx";
import Contact from "./components/Contact.jsx";
import Footer from "./components/Footer.jsx";
import { TrailDivider } from "./components/ContourLine.jsx";

export default function App() {
  return (
    <div className="min-h-screen bg-ink text-parchment">
      <Nav />
      <main>
        <Hero />
        <About />
        <Experience />
        <TrailDivider />
        <Projects />
        <Skills />
        <Education />
        <Beyond />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
