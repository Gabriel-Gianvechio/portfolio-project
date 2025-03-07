import React from 'react';
import { useTheme } from '../../context/ThemeContext';

const Projects = () => {
  const { isDarkTheme } = useTheme();

  // Dados dos projetos
  const projects = [
    {
      id: 1,
      title: 'Projeto 1',
      description: 'Descrição breve do projeto 1.',
    },
    {
      id: 2,
      title: 'Projeto 2',
      description: 'Descrição breve do projeto 2.',
    },
    {
      id: 3,
      title: 'Projeto 3',
      description: 'Descrição breve do projeto 3.',
    },
  ];

  return (
    <section 
      id="projects"
      className={`w-full h-screen flex items-center justify-center
      ${isDarkTheme 
        ? 'bg-gradient-to-b from-gray-700 to-gray-800 text-white' 
        : 'bg-gradient-to-b from-claude-beige to-white text-black'}`}
    >
      <div className="max-w-[1024px] w-full mx-auto px-6 flex flex-col items-center justify-center">
        <h2 className="text-4xl font-bold mb-8">Projetos</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full">
          {projects.map(project => (
            <div 
              key={project.id} 
              className={`p-6 rounded-lg shadow-md transition-transform hover:scale-105
              ${isDarkTheme 
                ? 'bg-gray-800 border border-gray-700' 
                : 'bg-white border border-gray-200'}`}
            >
              <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
              <p>{project.description}</p>
              <button 
                className={`mt-4 px-4 py-2 rounded-full text-sm transition-all duration-300 
                ${isDarkTheme 
                  ? 'bg-white text-gray-800 hover:bg-white/80' 
                  : 'bg-gray-800 text-white hover:bg-gray-800/80'
                }`}
              >
                Ver mais
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;