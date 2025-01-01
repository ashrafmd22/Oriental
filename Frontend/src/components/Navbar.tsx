import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Gift, Menu, X } from 'lucide-react';

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Home', path: '/' },
    { label: 'About Us', path: '/about' },
    { label: 'Products', path: '/products' },
    { label: 'Branded Collection', path: '/branded-collection' },
    { label: 'Contact Us', path: '/contact' },
  ];

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'shadow-lg' : ''
        } bg-white`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo Section */}
          <Link
            to="/"
            className="flex items-center select-none"
            style={{ WebkitTapHighlightColor: 'transparent' }}
          >
            <div className="relative flex items-center justify-center">
              <Gift
                strokeWidth={2}
                className="h-8 w-8 sm:h-10 sm:w-10 text-indigo-600 transition-transform hover:scale-110 duration-300"
              />
            </div>
            <div className="ml-3">
              <h1 className="text-lg sm:text-xl md:text-2xl font-black tracking-tight">
                <span className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-500 bg-clip-text text-transparent">
                  Oriental Enterprises
                </span>
              </h1>
              <p className="text-xs sm:text-sm text-gray-600 font-medium tracking-wide">
                Thoughtful Gifts, Exceptional Quality
              </p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navLinks.map(({ label, path }) => (
              <Link
                key={label}
                to={path}
                className="relative group text-gray-700 hover:text-indigo-600 font-medium transition-colors duration-300"
              >
                <span>{label}</span>
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-indigo-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
              </Link>
            ))}
            <a
              href="https://drive.google.com/file/d/1om2PXA6SUJCAnlGQ6vZg5TC-spYEGFkI/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-2.5 rounded-full bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-semibold hover:from-purple-600 hover:to-indigo-600 transform hover:scale-105 transition-all duration-300 shadow-md hover:shadow-lg text-sm"
            >
              View Catalogue
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 rounded-lg text-gray-600 hover:bg-gray-100 transition-colors duration-200 focus:outline-none"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        <div
          className={`lg:hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-96 opacity-100 visible' : 'max-h-0 opacity-0 invisible'
            }`}
        >
          <div className="py-4 space-y-4 px-2">
            {navLinks.map(({ label, path }) => (
              <Link
                key={label}
                to={path}
                onClick={() => setIsOpen(false)}
                className="block px-4 py-2 text-gray-700 hover:bg-indigo-50 hover:text-indigo-600 rounded-lg transition-colors duration-200"
              >
                {label}
              </Link>
            ))}
            <a
              href="https://drive.google.com/file/d/1om2PXA6SUJCAnlGQ6vZg5TC-spYEGFkI/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="block px-4 py-2 text-center rounded-lg bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-semibold hover:from-purple-600 hover:to-indigo-600 transition-all duration-300 shadow-md"
            >
              View Catalogue
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}