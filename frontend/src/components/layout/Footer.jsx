import React from 'react';
import { useTheme } from '../../context/ThemeContext';
import { Linkedin, Github } from 'lucide-react';

const Footer = () => {
  const { isDarkTheme } = useTheme();

  return (
    <footer 
      className={`h-[9vh] w-full max-w-[1024px] mx-auto px-6
      flex items-center justify-between rounded-t-lg border-t border-l border-r
      ${isDarkTheme 
        ? 'bg-black bg-opacity-50 border-gray-700 text-white' 
        : 'bg-white bg-opacity-50 border-gray-200 text-gray-800'
      }`}
    >
      {/* Crédito à esquerda */}
      <div className="text-lg font-medium">
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