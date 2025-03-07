import React, { createContext, useState, useContext, useEffect } from 'react';

// Criação do contexto de tema
const ThemeContext = createContext({
  isDarkTheme: false,
  toggleTheme: () => {},
});

// Provedor de tema
export const ThemeProvider = ({ children }) => {
  // Recuperar tema salvo no localStorage ou usar false como padrão
  const [isDarkTheme, setIsDarkTheme] = useState(() => {
    const savedTheme = localStorage.getItem('theme');
    return savedTheme ? JSON.parse(savedTheme) : false;
  });

  // Função para alternar tema
  const toggleTheme = () => {
    setIsDarkTheme(prevTheme => {
      const newTheme = !prevTheme;
      // Salvar novo tema no localStorage
      localStorage.setItem('theme', JSON.stringify(newTheme));
      return newTheme;
    });
  };

  // Aplicar classe 'dark' no html quando o tema mudar
  useEffect(() => {
    if (isDarkTheme) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDarkTheme]);

  // Valores do contexto
  const value = {
    isDarkTheme,
    toggleTheme
  };

  return (
    <ThemeContext.Provider value={value}>
      {children}
    </ThemeContext.Provider>
  );
};

// Hook personalizado para usar o tema
export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};