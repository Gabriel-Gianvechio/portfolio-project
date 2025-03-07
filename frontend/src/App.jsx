// App.js
import React, { useState, useEffect } from 'react';
import { ThemeProvider } from './context/ThemeContext';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import Home from './components/sections/Home';
import About from './components/sections/About';
import Projects from './components/sections/Projects';

function App() {
  const [activeSection, setActiveSection] = useState('home');

  // Função para rolar até uma seção específica
  const handleNavigate = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      const sectionTop = section.offsetTop;
      
      window.scrollTo({
        top: sectionTop,
        behavior: 'smooth'
      });
      
      setActiveSection(sectionId);
    }
  };

  // Detectar qual seção está visível
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + (window.innerHeight / 3);

      // Verificar qual seção está visível na viewport
      const sectionIds = ['home', 'about', 'projects'];
      for (const id of sectionIds) {
        const section = document.getElementById(id);
        if (section) {
          const sectionTop = section.offsetTop;
          const sectionBottom = sectionTop + section.offsetHeight;
          
          if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
            setActiveSection(id);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    
    // Chamar uma vez no carregamento inicial
    handleScroll();
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <ThemeProvider>
      <div className="relative">
        <Header activeSection={activeSection} onNavigate={handleNavigate} />
        
        <main>
          <section id="home" className="h-screen w-full">
            <Home />
          </section>
          <section id="about" className="h-screen w-full">
            <About />
          </section>
          <section id="projects" className="h-screen w-full relative">
            <Projects />
            <div className="absolute bottom-0 left-0 right-0">
              <Footer />
            </div>
          </section>
        </main>
      </div>
    </ThemeProvider>
  );
}

export default App;