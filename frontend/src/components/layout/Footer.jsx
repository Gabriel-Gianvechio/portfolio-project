// Footer.js
import React from 'react';
import { useTheme } from '../../context/ThemeContext';
import { Linkedin, Github } from 'lucide-react';

const Footer = () => {
  const { isDarkTheme } = useTheme();

  return (
    <footer 
      className={`h-[7vh] w-full max-w-[1024px] mx-auto px-6
      flex items-center justify-between rounded-t-md
      bg-gray-500 bg-opacity-10 backdrop-blur-md
      ${isDarkTheme 
        ? 'text-gray-200' 
        : 'text-gray-700'
      }`}
    >
      {/* Crédito à esquerda */}
      <div className="text-md font-medium">
        Desenvolvido por Deviel
      </div>

      {/* Ícones de redes sociais à direita */}
      <div className="flex items-center space-x-4">
        <a 
          href="https://www.linkedin.com/in/gabriel-gianvechio-64a719177/" 
          target="_blank" 
          rel="noopener noreferrer"
          className="hover:scale-110 transition-transform"
          aria-label="LinkedIn"
        >
          <Linkedin size={36} />
        </a>
        <a 
          href="https://github.com/Gabriel-Gianvechio/" 
          target="_blank" 
          rel="noopener noreferrer"
          className="hover:scale-110 transition-transform"
          aria-label="GitHub"
        >
          <Github size={36} />
        </a>
      </div>
    </footer>
  );
};

export default Footer;