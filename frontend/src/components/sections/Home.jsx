import React from 'react';
import { useTheme } from '../../context/ThemeContext';

const Home = () => {
  const { isDarkTheme } = useTheme();

  return (
    <section 
      id="home"
      className={`w-full h-screen flex items-center justify-center
      ${isDarkTheme 
        ? 'bg-gradient-to-b from-gray-900 to-gray-700 text-white' 
        : 'bg-gradient-to-b from-claude-beige to-white text-black'}`}
    >
      <div className="jersey-25-regular max-w-[1024px] w-full mx-auto px-6 flex flex-col">
        <p className="text-4xl max-w-2xl">
          APLICAÇÃO DESENVOLVIDA EM (ReactJS)
        </p>
        <p className="text-4xl max-w-2xl pt-4">
          RODANDO EM UM SERVIDOR (AWS)
        </p>
        <p className="text-4xl max-w-2xl pt-4">
          DENTRO DE UM CONTAINER (DOCKER)
        </p>
      </div>
    </section>
  );
};

export default Home;