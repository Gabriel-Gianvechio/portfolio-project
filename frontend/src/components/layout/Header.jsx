// Header.js
import React from 'react';
import { useTheme } from '../../context/ThemeContext';
import ThemeToggle from '../ui/ThemeToggle';

const Header = ({ activeSection, onNavigate }) => {
  const { isDarkTheme } = useTheme();

  return (
    <header 
      className="h-[9vh] w-full max-w-[1024px] mx-auto px-6 fixed top-0 left-0 right-0 z-50
      flex items-center justify-between rounded-b-2xl
      bg-gray-400 bg-opacity-10 backdrop-blur-md
      text-gray-700"
    >
      {/* Espaço em branco para manter o layout balanceado */}
      <div className="w-10"></div>

      {/* Menu de navegação centralizado */}
      <div className="flex items-center space-x-4">
        <button 
          onClick={() => onNavigate('home')}
          className={`px-3 py-1 rounded-full text-xl transition-all duration-300 
          ${isDarkTheme 
            ? (activeSection === 'home' 
              ? 'bg-gray-200 text-gray-700' 
              : 'text-gray-200 hover:bg-gray-700 hover:text-gray-200 hover:scale-105')
            : (activeSection === 'home' 
              ? 'bg-gray-700 text-gray-200' 
              : 'text-gray-700 hover:bg-gray-200 hover:text-gray-700 hover:scale-105')
          }`}
        >
          Home
        </button>
        <button 
          onClick={() => onNavigate('about')}
          className={`px-3 py-1 rounded-full text-xl transition-all duration-300 
          ${isDarkTheme 
            ? (activeSection === 'about' 
              ? 'bg-gray-200 text-gray-700'
              : 'text-gray-200 hover:bg-gray-700 hover:text-gray-200 hover:scale-105')
            : (activeSection === 'about' 
              ? 'bg-gray-700 text-gray-200' 
              : 'text-gray-700 hover:bg-gray-200 hover:text-gray-700 hover:scale-105')
          }`}
        >
          About
        </button>
        <button 
          onClick={() => onNavigate('projects')}
          className={`px-3 py-1 rounded-full text-xl transition-all duration-300 
          ${isDarkTheme 
            ? (activeSection === 'projects' 
              ? 'bg-gray-200 text-gray-700'
              : 'text-gray-200 hover:bg-gray-700 hover:text-gray-200 hover:scale-105')
            : (activeSection === 'projects' 
              ? 'bg-gray-700 text-gray-200' 
              : 'text-gray-700 hover:bg-gray-200 hover:text-gray-700 hover:scale-105')
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