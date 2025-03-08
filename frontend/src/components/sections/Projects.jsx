// Projects.js
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
          ? 'bg-gradient-to-b from-gray-800 to-[var(--dark-blue)] text-[var(--avocado)]' 
          : 'bg-gradient-to-b from-[var(--light-green)] to-[var(--avocado)] text-[var(--dark-blue)]'}`}
    >
      <div className="max-w-[1024px] w-full mx-auto px-6 flex flex-col items-center justify-center">
        <h2 className="text-4xl font-bold mb-8">Projetos</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
          {projects.map(project => (
            <div 
              key={project.id} 
              className={`p-6 rounded-lg shadow-md text-xl transition-transform hover:scale-105
              ${isDarkTheme 
                ? 'bg-gray-900 border border-gray-800' 
                : 'bg-[var(--light-green)] border border-[var(--avocado)]'}`}
            >
              <h3 className="text-2xl font-semibold mb-2">{project.title}</h3>
              <p>{project.description}</p>
              <button 
                className={`mt-4 px-4 py-2 rounded-full hover:bg-gray-700 hover:scale-105 text-sm transition-all duration-300 
                ${isDarkTheme 
                  ? 'bg-[var(--avocado)] text-[var(--dark-blue)] hover:bg-[var(--avocado)]/80' 
                  : 'bg-[var(--dark-blue)] text-[var(--avocado)] hover:bg-[var(--dark-blue)]/80'
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