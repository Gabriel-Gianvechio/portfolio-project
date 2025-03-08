// Home.js
import React from 'react';
import { useTheme } from '../../context/ThemeContext';

const Home = () => {
  const { isDarkTheme } = useTheme();

  return (
    <section 
      id="home"
      className={`w-full h-screen flex items-center justify-center
      ${isDarkTheme 
        ? 'bg-gradient-to-b from-[var(--dark-blue)] to-[var(--medium-blue)] text-[var(--avocado)]' 
        : 'bg-gradient-to-b from-[var(--light-green)] to-[var(--avocado)] text-[var(--dark-blue)]'}`}
    >
      <div className="jersey-25-regular max-w-[1024px] w-full mx-auto px-6 flex flex-col">
        <p className="text-4xl max-w-2xl">
          APLICAÇÃO DESENVOLVIDA EM (ReactJS)
        </p>
        <p className="text-4xl max-w-2xl pt-4">
          RODANDO EM UM SERVIDOR EC2 (AWS)
        </p>
        <p className="text-4xl max-w-2xl pt-4">
          DENTRO DE UM CONTAINER (DOCKER)
        </p>
        <p className="text-4xl max-w-2xl pt-4">
          OBSERVADA POR (PROMETHEUS)
        </p>
        <p className="text-4xl max-w-2xl pt-4">
          TRADUZIDA EM GRAFICOS POR (GRAFANA)
        </p>
      </div>
    </section>
  );
};

export default Home;