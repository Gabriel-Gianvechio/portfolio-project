import React from 'react';
import { useTheme } from '../../context/ThemeContext';
import ThemeToggle from '../ui/ThemeToggle';

const Header = ({ activeSection, onNavigate }) => {
  const { isDarkTheme } = useTheme();

  return (
    <header 
      className={`h-[7vh] w-full max-w-[1024px] mx-auto px-6 fixed top-0 left-0 right-0 z-50
      flex items-center justify-between rounded-b-md
      bg-gray-400 bg-opacity-10 backdrop-blur-md
      ${isDarkTheme 
        ? 'text-gray-400 border border-gray-800' 
        : 'text-gray-500 border border-gray-300'}`}
    >
      {/* Espaço em branco para manter o layout balanceado */}
      <div className="w-10"></div>

      {/* Menu de navegação centralizado */}
      <div className="flex items-center space-x-4">
        <button 
          onClick={() => onNavigate('home')}
          className={`px-3 py-1 rounded-full text-md transition-all duration-300 hover:scale-105
          ${activeSection === 'home' 
            ? (isDarkTheme ? 'font-bold text-white' : 'font-bold text-gray-800')
            : ''
          }`}
        >
          Home
        </button>
        <button 
          onClick={() => onNavigate('about')}
          className={`px-3 py-1 rounded-full text-md transition-all duration-300 hover:scale-105
          ${activeSection === 'about' 
            ? (isDarkTheme ? 'font-bold text-white' : 'font-bold text-gray-800')
            : ''
          }`}
        >
          About
        </button>
        <button 
          onClick={() => onNavigate('projects')}
          className={`px-3 py-1 rounded-full text-md transition-all duration-300 hover:scale-105
          ${activeSection === 'projects' 
            ? (isDarkTheme ? 'font-bold text-white' : 'font-bold text-gray-800')
            : ''
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