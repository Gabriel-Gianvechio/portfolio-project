import React from 'react';
import { useTheme } from '../../context/ThemeContext';
import { Cloud, Server, Code, Database, BarChart, Terminal, LineChart } from 'lucide-react';

const Home = () => {
  const { isDarkTheme } = useTheme();

  // Configurando os ícones para representar as ferramentas até que sejam substituídos pelas logos reais
  const techIcons = [
    { name: 'Docker', icon: <Cloud size={36} /> },
    { name: 'Kubernetes', icon: <Server size={36} /> },
    { name: 'Jenkins', icon: <Code size={36} /> },
    { name: 'AWS', icon: <Database size={36} /> },
    { name: 'Grafana', icon: <BarChart size={36} /> },
    { name: 'Terraform', icon: <Terminal size={36} /> },
    { name: 'Prometheus', icon: <LineChart size={36} /> }
  ];

  return (
    <section 
      id="home"
      className={`w-full h-screen flex items-start justify-center pt-24
      ${isDarkTheme 
        ? 'bg-gradient-to-b from-black to-gray-900' 
        : 'bg-gradient-to-b from-white to-gray-200'}`}
    >
      <div className="max-w-[1024px] w-full mx-auto px-6 flex flex-col">
        {/* Título principal com tamanho maior e margem top adicional */}
        <h1 className={`${isDarkTheme ? 'text-white' : 'text-black'} text-6xl font-bold mb-8 mt-10`}>Gabriel Gianvechio</h1>
        
        {/* Card de apresentação */}
        <div className="w-full rounded-xl p-6
          bg-red-400 bg-opacity-20 backdrop-blur-md
          border border-gray-300 dark:border-gray-800">
          
          {/* Subtítulo */}
          <h2 className={`${isDarkTheme ? 'text-white' : 'text-black'} text-2xl font-semibold mb-4`}>
            Especialista em Cloud AWS e DevOps
          </h2>
          
          {/* Conteúdo com palavras-chave destacadas e tamanho de fonte reduzido */}
          <p className={`${isDarkTheme ? 'text-gray-300' : 'text-gray-500'} text-lg mt-5 mb-8`}>
            Transformo sua infraestrutura com soluções 
            <span className={isDarkTheme ? 'text-yellow-200' : 'text-red-400'}> Cloud AWS</span>, automatizo entregas com 
            <span className={isDarkTheme ? 'text-yellow-200' : 'text-red-400'}> Pipelines CI/CD</span> robustos e implanto sistemas de
            <span className={isDarkTheme ? 'text-yellow-200' : 'text-red-400'}> monitoramento </span>
            que garantem a performance e disponibilidade das suas aplicações. <span className='italic'>Reduza custos, aumente a segurança e escale seus serviços com eficiência.</span>
          </p>
          
          {/* Logos das tecnologias */}
          <div className="flex justify-between items-center flex-wrap">
            {techIcons.map((tech, index) => (
              <div key={index} className="flex flex-col items-center mb-4">
                <div className="w-16 h-16 rounded-full bg-black flex items-center justify-center mb-2 text-white">
                  {tech.icon}
                </div>
                <span className="text-sm text-gray-600 dark:text-gray-300">{tech.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;