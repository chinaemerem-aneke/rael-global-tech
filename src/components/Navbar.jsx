import React, { useState, useEffect } from 'react';
import logo from '../assets/logo.png'; 

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(prev => !prev);
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const textColor = scrolled ? 'text-rael-blue' : 'text-white';

  return (
    <header className={`fixed top-0 left-0 w-full z-50 transition-colors duration-300 ${scrolled ? 'bg-white shadow-md' : 'bg-transparent'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center h-20">
        {/* Logo & Brand */}
        <div className="flex items-center space-x-3">
          <img src={logo} alt="Rael Global Tech logo" className="h-8 w-8" />
          <span className={`text-xl font-semibold ${textColor}`}>Rael Global Tech</span>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8 items-center">
          <a href="#" className={`${textColor} py-2 transition`}>Home</a>
          <a href="#about-us" className={`${textColor} py-2 transition`}>About Us</a>
          <a href="#services" className={`${textColor} py-2 transition`}>Our Services</a>
          <a href="#contact-us" className="bg-rael-blue text-white py-2 px-4 rounded transition">Contact us</a>
        </nav>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden">
          <button onClick={toggleMenu} className="focus:outline-none">
            <svg className={`w-6 h-6 ${textColor}`} fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
              {menuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden flex flex-col items-center justify-center bg-rael-blue backdrop-blur-md px-4 py-4 space-y-3 text-white">
          <a href="#" className="block">Home</a>
          <a href="#about-us" className="block">About Us</a>
          <a href="#contact-us" className="block">Contact us</a>
          <a href="#services" className="block">Our Services</a>
        </div>
      )}
    </header>
  );
};

export default Navbar;
