import React, { useState, useEffect } from 'react';
import Header from './Header';
import Footer from './Footer';

const Layout = ({ children }) => {
  const [activeSection, setActiveSection] = useState('home');

  // Função para rolar até uma seção específica
  const handleNavigate = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      // Compensar a altura do header fixo (7vh)
      const headerHeight = window.innerHeight * 0.07;
      const sectionTop = section.getBoundingClientRect().top + window.pageYOffset - headerHeight;
      
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
      // Compensar a altura do header fixo
      const headerHeight = window.innerHeight * 0.07;
      const scrollPosition = window.scrollY + headerHeight + (window.innerHeight / 3);

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
    <div className="min-h-screen w-screen relative">
      <Header activeSection={activeSection} onNavigate={handleNavigate} />
      
      {/* Adicionar padding-top para compensar o header fixo */}
      <main className="relative pt-[7vh]">
        {children}
      </main>
      
      <div className="relative">
        <Footer />
      </div>
    </div>
  );
};

export default Layout;