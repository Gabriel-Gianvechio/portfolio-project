import React from 'react';
import { useTheme } from '../../context/ThemeContext';
import { Sun, Moon } from 'lucide-react';

const ThemeToggle = () => {
  const { isDarkTheme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="transition-transform hover:scale-105 p-1"
      aria-label={isDarkTheme ? "Alternar para modo claro" : "Alternar para modo escuro"}
    >
      {isDarkTheme ? (
        <Sun size={28} className="text-gray-100" />
      ) : (
        <Moon size={28} className="text-gray-900" />
      )}
    </button>
  );
};

export default ThemeToggle;