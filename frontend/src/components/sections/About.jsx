// About.js
import React from 'react';
import { useTheme } from '../../context/ThemeContext';

const About = () => {
  const { isDarkTheme } = useTheme();

  return (
    <section 
      id="about"
      className={`w-full h-screen flex items-center justify-center
        ${isDarkTheme 
          ? 'bg-gradient-to-b from-[var(--medium-blue)] to-[var(--dark-blue)] text-[var(--avocado)]' 
          : 'bg-gradient-to-b from-[var(--light-green)] to-[var(--avocado)] text-[var(--dark-blue)]'}`}
    >
      <div className="max-w-[1024px] w-full mx-auto px-6 flex flex-col items-center justify-center">
        <h2 className="text-4xl font-bold mb-6">Sobre</h2>
        <div className="max-w-2xl text-center">
          <p className="mb-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec nisl vitae urna tincidunt varius at vel magna. 
            Sed eget justo vel eros tincidunt eleifend.
          </p>
          <p>
            Suspendisse potenti. Praesent vel enim vel nunc dictum tristique. 
            Donec consectetur fringilla eros, at faucibus magna vehicula at.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;