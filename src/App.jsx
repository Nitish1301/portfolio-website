import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import Navbar from './components/Navbar';
import CustomCursor from './components/CustomCursor';
import SystemBoot from './components/SystemBoot';
import Hero from './sections/Hero';
import About from './sections/About';
import Projects from './sections/Projects';
import Skills from './sections/Skills';
import Contact from './sections/Contact';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <main className="bg-[#1a1a1a] min-h-screen text-white cursor-none">
      <CustomCursor />
      <SystemBoot onComplete={() => setIsLoading(false)} />

      {!isLoading && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <Navbar />
          <Hero />
          <About />
          <Projects />
          <Skills />
          <Contact />
        </motion.div>
      )}
    </main>
  );
}

export default App;
