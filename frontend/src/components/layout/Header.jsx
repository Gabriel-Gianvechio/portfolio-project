// Header.js
import React from 'react';
import { useTheme } from '../../context/ThemeContext';
import ThemeToggle from '../ui/ThemeToggle';

const Header = ({ activeSection, onNavigate }) => {
  const { isDarkTheme } = useTheme();

  return (
    <header 
      className={`h-[9vh] w-full max-w-[1024px] mx-auto px-6 fixed top-0 left-0 right-0 z-50
      flex items-center justify-between rounded-b-lg border-b border-l border-r
      ${isDarkTheme 
        ? 'bg-black bg-opacity-70 backdrop-blur-sm border-gray-700' 
        : 'bg-white bg-opacity-70 backdrop-blur-sm border-gray-200'
      }`}
    >
      {/* Espaço em branco para manter o layout balanceado */}
      <div className="w-10"></div>

      {/* Menu de navegação centralizado */}
      <div className="flex items-center space-x-4">
        <button 
          onClick={() => onNavigate('home')}
          className={`px-3 py-1 rounded-full border text-sm transition-all duration-300 
          ${activeSection === 'home' 
            ? isDarkTheme 
              ? 'bg-white text-gray-800' 
              : 'bg-gray-800 text-white'
            : isDarkTheme 
              ? 'text-white border-white hover:bg-white/10 hover:scale-105' 
              : 'text-gray-800 border-gray-800 hover:bg-gray-800/10 hover:scale-105'
          }`}
        >
          Home
        </button>
        <button 
          onClick={() => onNavigate('about')}
          className={`px-3 py-1 rounded-full border text-sm transition-all duration-300 
          ${activeSection === 'about' 
            ? isDarkTheme 
              ? 'bg-white text-gray-800' 
              : 'bg-gray-800 text-white'
            : isDarkTheme 
              ? 'text-white border-white hover:bg-white/10 hover:scale-105' 
              : 'text-gray-800 border-gray-800 hover:bg-gray-800/10 hover:scale-105'
          }`}
        >
          About
        </button>
        <button 
          onClick={() => onNavigate('projects')}
          className={`px-3 py-1 rounded-full border text-sm transition-all duration-300 
          ${activeSection === 'projects' 
            ? isDarkTheme 
              ? 'bg-white text-gray-800' 
              : 'bg-gray-800 text-white'
            : isDarkTheme 
              ? 'text-white border-white hover:bg-white/10 hover:scale-105' 
              : 'text-gray-800 border-gray-800 hover:bg-gray-800/10 hover:scale-105'
          }`}
        >
          Projects
        </button>
      </div>
      
      {/* Botão de tema à direita */}
      <div>
        <ThemeToggle />
      </div>
    </header>
  );
};

export default Header;