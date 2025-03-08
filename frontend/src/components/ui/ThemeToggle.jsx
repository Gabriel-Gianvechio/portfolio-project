import React from 'react';
import { Moon, Sun } from 'lucide-react';
import { useTheme } from '../../context/ThemeContext';

const ThemeToggle = () => {
  const { isDarkTheme, toggleTheme } = useTheme();

  return (
    <button 
      onClick={toggleTheme} 
      className="p-2 rounded-full hover:bg-gray-200 transition-colors"
      aria-label={isDarkTheme ? "Switch to light theme" : "Switch to dark theme"}
    >
      {isDarkTheme ? (
        <Sun size={36} className="text-white" />
      ) : (
        <Moon size={36} className="text-gray-800" />
      )}
    </button>
  );
};

export default ThemeToggle;