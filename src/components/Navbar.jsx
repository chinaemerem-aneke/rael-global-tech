"use client"

import { useState, useEffect } from "react"
import logo from "../assets/logo.png"

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  const toggleMenu = () => {
    setMenuOpen((prev) => !prev)
  }

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const textColor = scrolled ? "text-blue-600" : "text-white"

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled ? "bg-white shadow-lg py-3" : "bg-gradient-to-b from-black/50 to-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
        {/* Logo & Brand */}
        <div className="flex items-center space-x-3">
          <div className="relative h-10 w-10 flex items-center justify-center">
            <img
              src={logo || "/placeholder.svg"}
              alt="Rael Global Tech logo"
              className="h-full w-full object-contain"
              onError={(e) => {
                e.target.onerror = null
                e.target.parentNode.innerHTML = `<div class="h-10 w-10 rounded-full bg-blue-600 flex items-center justify-center text-white font-bold">R</div>`
              }}
            />
          </div>
          <span className={`text-xl font-bold ${textColor}`}>Rael Global Tech</span>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <a href="#" className={`${textColor} hover:text-blue-500 font-medium transition-colors`}>
            Home
          </a>
          <a href="#about-us" className={`${textColor} hover:text-blue-500 font-medium transition-colors`}>
            About Us
          </a>
          <a href="#services" className={`${textColor} hover:text-blue-500 font-medium transition-colors`}>
            Our Services
          </a>
          <a
            href="#contact-us"
            className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2.5 px-5 rounded-md transition-colors shadow-lg hover:shadow-blue-500/30"
          >
            Contact us
          </a>
        </nav>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden">
          <button onClick={toggleMenu} className="focus:outline-none">
            <svg
              className={`w-7 h-7 ${textColor}`}
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              viewBox="0 0 24 24"
            >
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
      <div
        className={`md:hidden absolute w-full bg-white shadow-lg transition-all duration-300 ease-in-out overflow-hidden ${
          menuOpen ? "max-h-64 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="flex flex-col items-center py-4 space-y-4">
          <a href="#" className="text-gray-800 hover:text-blue-600 font-medium">
            Home
          </a>
          <a href="#about-us" className="text-gray-800 hover:text-blue-600 font-medium">
            About Us
          </a>
          <a href="#services" className="text-gray-800 hover:text-blue-600 font-medium">
            Our Services
          </a>
          <a
            href="#contact-us"
            className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-6 rounded-md w-4/5 text-center"
          >
            Contact us
          </a>
        </div>
      </div>
    </header>
  )
}

export default Navbar
