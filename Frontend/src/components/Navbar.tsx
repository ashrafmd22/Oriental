import React, { useState } from 'react';
import { Gift, Menu, X } from 'lucide-react'; // Importing icons
import { Link } from 'react-router-dom';

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false); // State to toggle the mobile menu

  // Function to scroll to the top
  const handleLinkClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' }); // Smooth scroll to the top
    setIsOpen(false); // Close the mobile menu if open
  };

  return (
    <nav className="bg-white shadow-lg fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <div className="flex justify-between h-20 items-center">
          {/* Logo */}
          <Link
            to="/"
            onClick={handleLinkClick}
            className="flex items-center text-gray-800 group"
          >
            <Gift className="h-10 w-10 text-blue-600 group-hover:animate-spin-slow transition-transform duration-500" />
            <div className="ml-3">
              {/* Company Name with Gradient */}
              <span className="text-3xl sm:text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 group-hover:underline group-hover:underline-offset-4">
                Oriental Enterprises
              </span>
              {/* Slogan */}
              <div className="text-md sm:text-lg font-semibold text-gray-600 mt-1">
                Thoughtful Gifts, Exceptional Quality
              </div>
            </div>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-10">
            <Link
              to="/"
              className="relative text-gray-600 font-medium text-lg hover:text-blue-600 transition-all duration-300 hover:text-2xl"
              onClick={handleLinkClick}
            >
              Home
              <span className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-blue-600 transition-all duration-300 transform -translate-x-1/2 hover:w-full"></span>
            </Link>
            <Link
              to="/about"
              className="relative text-gray-600 font-medium text-lg hover:text-blue-600 transition-all duration-300 hover:text-2xl"
              onClick={handleLinkClick}
            >
              About Us
              <span className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-blue-600 transition-all duration-300 transform -translate-x-1/2 hover:w-full"></span>
            </Link>
            <Link
              to="/products"
              className="relative text-gray-600 font-medium text-lg hover:text-blue-600 transition-all duration-300 hover:text-2xl"
              onClick={handleLinkClick}
            >
              All Products
              <span className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-blue-600 transition-all duration-300 transform -translate-x-1/2 hover:w-full"></span>
            </Link>
            <Link
              to="/contact"
              className="relative text-gray-600 font-medium text-lg hover:text-blue-600 transition-all duration-300 hover:text-2xl"
              onClick={handleLinkClick}
            >
              Contact Us
              <span className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-blue-600 transition-all duration-300 transform -translate-x-1/2 hover:w-full"></span>
            </Link>

            {/* Catalogue Button */}
            <a
              href="https://drive.google.com/file/d/your-file-id/view" // Replace with your actual Drive file link
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-2 rounded-lg font-bold text-lg shadow-md hover:from-purple-600 hover:to-blue-600 transition-all duration-300"
            >
              Catalogue
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-600 hover:text-blue-600 focus:outline-none"
            >
              {isOpen ? <X className="h-8 w-8" /> : <Menu className="h-8 w-8" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden">
            <div className="flex flex-col space-y-4 mt-4 pb-4 border-t border-gray-200">
              <Link
                to="/"
                className="text-gray-600 font-medium text-lg hover:text-blue-600 transition-colors duration-200 hover:text-xl"
                onClick={handleLinkClick}
              >
                Home
              </Link>
              <Link
                to="/about"
                className="text-gray-600 font-medium text-lg hover:text-blue-600 transition-colors duration-200 hover:text-xl"
                onClick={handleLinkClick}
              >
                About Us
              </Link>
              <Link
                to="/products"
                className="text-gray-600 font-medium text-lg hover:text-blue-600 transition-colors duration-200 hover:text-xl"
                onClick={handleLinkClick}
              >
                All Products
              </Link>
              <Link
                to="/contact"
                className="text-gray-600 font-medium text-lg hover:text-blue-600 transition-colors duration-200 hover:text-xl"
                onClick={handleLinkClick}
              >
                Contact Us
              </Link>
              {/* Catalogue Button in Mobile */}
              <a
                href="https://drive.google.com/file/d/your-file-id/view" // Replace with your actual Drive file link
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gradient-to-r from-blue-600 to-purple-600 text-white text-center px-6 py-2 rounded-lg font-bold text-lg shadow-md hover:from-purple-600 hover:to-blue-600 transition-all duration-300"
              >
                Catalogue
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
