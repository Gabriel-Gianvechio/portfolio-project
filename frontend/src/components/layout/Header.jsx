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
      jersey-25-regular
      ${isDarkTheme 
        ? 'bg-[var(--dark-blue)] bg-opacity-50 backdrop-blur-sm border-[var(--medium-blue)] text-[var(--avocado)]' 
        : 'bg-[var(--light-green)] bg-opacity-50 backdrop-blur-sm border-[var(--light-blue)] text-[var(--dark-blue)]'
      }`}
    >
      {/* Espaço em branco para manter o layout balanceado */}
      <div className="w-10"></div>

      {/* Menu de navegação centralizado */}
      <div className="flex items-center space-x-4">
        <button 
          onClick={() => onNavigate('home')}
          className={`px-3 py-1 rounded-full text-xl transition-all duration-300 
          ${activeSection === 'home' 
            ? isDarkTheme 
              ? 'bg-[var(--avocado)] text-[var(--dark-blue)]' 
              : 'bg-[var(--dark-blue)] text-[var(--avocado)]'
            : isDarkTheme 
              ? 'text-[var(--avocado)] hover:bg-[var(--avocado)]/10 hover:scale-105' 
              : 'text-[var(--dark-blue)] hover:bg-[var(--dark-blue)]/10 hover:scale-105'
          }`}
        >
          Home
        </button>
        <button 
          onClick={() => onNavigate('about')}
          className={`px-3 py-1 rounded-full text-xl transition-all duration-300 
          ${activeSection === 'about' 
            ? isDarkTheme 
              ? 'bg-[var(--avocado)] text-[var(--dark-blue)]' 
              : 'bg-[var(--dark-blue)] text-[var(--avocado)]'
            : isDarkTheme 
              ? 'text-[var(--avocado)] hover:bg-[var(--avocado)]/10 hover:scale-105' 
              : 'text-[var(--dark-blue)] hover:bg-[var(--dark-blue)]/10 hover:scale-105'
          }`}
        >
          About
        </button>
        <button 
          onClick={() => onNavigate('projects')}
          className={`px-3 py-1 rounded-full text-xl transition-all duration-300 
          ${activeSection === 'projects' 
            ? isDarkTheme 
              ? 'bg-[var(--avocado)] text-[var(--dark-blue)]' 
              : 'bg-[var(--dark-blue)] text-[var(--avocado)]'
            : isDarkTheme 
              ? 'text-[var(--avocado)] hover:bg-[var(--avocado)]/10 hover:scale-105' 
              : 'text-[var(--dark-blue)] hover:bg-[var(--dark-blue)]/10 hover:scale-105'
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

