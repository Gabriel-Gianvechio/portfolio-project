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
        ? 'bg-gradient-to-b from-gray-800 to-[var(--dark-blue)] text-[var(--avocado)]' 
        : 'bg-gradient-to-b from-[var(--light-green)] to-[var(--avocado)] text-[var(--dark-blue)]'}`}
    >
      <div className="jersey-25-regular max-w-[1024px] w-full mx-auto px-6 flex flex-col">
        <p className="text-4xl max-w-2xl">
          Aplicação desenvolvida em (ReactJS)
        </p>
        <p className="text-4xl max-w-2xl pt-4">
          Rodando em um servidor EC2 (AWS)
        </p>
        <p className="text-4xl max-w-2xl pt-4">
          Dentro de um container (DOCKER)
        </p>
        <p className="text-4xl max-w-2xl pt-4">
          Observada por (PROMETHEUS)
        </p>
        <p className="text-4xl max-w-2xl pt-4">
          Traduzido em gráficos por (GRAFANA)
        </p>
      </div>
    </section>
  );
};

export default Home;