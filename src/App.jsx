import Navbar from './components/Navbar';
import CustomCursor from './components/CustomCursor';
import Hero from './sections/Hero';
import About from './sections/About';
import Projects from './sections/Projects';
import Skills from './sections/Skills';
import Contact from './sections/Contact';

import { ThemeProvider } from './context/ThemeContext';

function App() {

  return (
    <ThemeProvider>
      <main className="bg-gray-50 dark:bg-[#1a1a1a] min-h-screen text-gray-900 dark:text-white cursor-none relative transition-colors duration-300">
        <CustomCursor />

        <div className="relative z-0">
          <Navbar />
          <Hero />
          <About />
          <Projects />
          <Skills />
          <Contact />
        </div>
      </main>
    </ThemeProvider>
  );
}

export default App;
