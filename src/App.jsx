import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Hero from './components/sections/Hero';
import About from './components/sections/About';
import Skills from './components/sections/Skills';
import Projects from './components/sections/Projects';
import Experience from './components/sections/Experience';
import Education from './components/sections/Education';
import Contact from './components/sections/Contact';
import { AnimatedBackground } from './components/animations/AnimatedBackground';
import { ParticleSystem } from './components/animations/ParticleSystem';

function App() {
  return (
    <div className="relative min-h-screen bg-black text-white overflow-hidden">
      <AnimatedBackground />
      <ParticleSystem count={30} />
      
      <div className="relative z-10">
        <Navbar />
        <main>
          <Hero />
          <About />
          <Skills />
          <Projects />
          <Experience />
          <Education />
          <Contact />
        </main>
        <Footer />
      </div>
    </div>
  );
}

export default App;
