import { useEffect } from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
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
import Work from "./components/Work.jsx";
import NotFound from "./components/NotFound.jsx";
import { useDocumentMeta } from "./lib/meta.js";

/** Scrolls to the section named by the URL hash on every route/hash change. */
function ScrollToHash() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (hash) {
      const el = document.getElementById(hash.slice(1));
      if (el) {
        el.scrollIntoView({ behavior: reduced ? "auto" : "smooth" });
        return;
      }
    }
    window.scrollTo({ top: 0 });
  }, [pathname, hash]);

  return null;
}

function Home() {
  useDocumentMeta({ path: "/" });
  return (
    <>
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
    </>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-ink text-parchment">
        <ScrollToHash />
        <Nav />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/work/:slug" element={<Work />} />
            <Route path="/404" element={<NotFound />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}
