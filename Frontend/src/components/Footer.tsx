import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Instagram, Linkedin, Mail } from 'lucide-react';
import { FaWhatsapp } from 'react-icons/fa'; // Import WhatsApp icon from react-icons

export const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8">
        <div>
          <h3 className="text-lg font-semibold mb-4">About the Store</h3>
          <p className="text-gray-400 mb-4">
            Oriental Enterprises - Your trusted partner for premium corporate gifting solutions since 1990.
          </p>
          <address className="text-gray-400 not-italic">
            123 Business District<br />
            New Delhi, India 110001
          </address>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-4">Explore More</h3>
          <ul className="space-y-2">
            <li><Link to="/about" className="text-gray-400 hover:text-white">About Us</Link></li>
            <li><Link to="/products" className="text-gray-400 hover:text-white">All Products</Link></li>
            <li><Link to="/contact" className="text-gray-400 hover:text-white">Contact Us</Link></li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2">
            <li><Link to="/products/tshirts" className="text-gray-400 hover:text-white">T-shirts</Link></li>
            <li><Link to="/products/bags" className="text-gray-400 hover:text-white">Bags</Link></li>
            <li><Link to="/products/caps" className="text-gray-400 hover:text-white">Caps</Link></li>
            <li><Link to="/products/tracksuits" className="text-gray-400 hover:text-white">Track-suits</Link></li>
            <li><Link to="/products/raincoats" className="text-gray-400 hover:text-white">Raincoats</Link></li>
            <li><Link to="/products/accessories" className="text-gray-400 hover:text-white">Accessories</Link></li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-4">Important Links</h3>
          <ul className="space-y-2">
            <li><Link to="/privacy" className="text-gray-400 hover:text-white">Privacy Policy</Link></li>
            <li><Link to="/terms" className="text-gray-400 hover:text-white">Terms & Conditions</Link></li>
            <li><Link to="/refund" className="text-gray-400 hover:text-white">Refund & Cancellation</Link></li>
            <li><Link to="/warranty" className="text-gray-400 hover:text-white">Warranty Policy</Link></li>
          </ul>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 mt-8 pt-8 border-t border-gray-800">
        <div className="flex justify-between items-center">
          <p className="text-gray-400">© 2024 Oriental Enterprises. All rights reserved.</p>
          <div className="flex space-x-4">
            <a href="#" className="text-gray-400 hover:text-white"><Facebook size={20} /></a>
            <a href="#" className="text-gray-400 hover:text-white"><Instagram size={20} /></a>
            <a href="#" className="text-gray-400 hover:text-white"><Linkedin size={20} /></a>
            <a href="#" className="text-gray-400 hover:text-white"><Mail size={20} /></a>
          </div>
        </div>
      </div>

      {/* WhatsApp Float Button */}
      <a
        href="https://wa.me/+918810418134?text=Hello!%20I%20need%20assistance%20with%20your%20products."
        className="fixed bottom-24 right-6 bg-green-500 text-white p-4 rounded-full shadow-lg hover:bg-green-600 transition-colors duration-200 flex items-center justify-center z-50"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaWhatsapp size={28} className="text-[1.75rem] sm:text-[1.5rem] md:text-[1.25rem] lg:text-[1.75rem]" />
      </a>
    </footer>
  );
}
