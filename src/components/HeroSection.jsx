import React from 'react';
import '../index.css';

const HeroSection = () => {
  return (
    <>
      <div className="relative flex flex-col items-center justify-center h-screen bg-[image:var(--bg-hero-image)] bg-cover bg-center">
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black opacity-50 z-0"></div>

        {/* Text content */}
        <div className="relative z-10 px-4 text-center text-white">
            <h1 className="text-3xl md:text-5xl font-bold mb-4">Welcome!</h1>
            <p className="text-sm md:text-lg mb-4">
                  Rael Global Tech is your trusted partner for constant, reliable electricity.
            </p>
            <p className="text-sm md:text-lg mb-6">
                  Reliable Solar Power that works. Even when the Grid Doesn’t.
            </p>
          <a
                  href="#contact-us"
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded">
                  Get Started
          </a>
        </div>
      </div>
    </>
  );
};

export default HeroSection;
