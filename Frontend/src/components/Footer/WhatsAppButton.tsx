import { FaWhatsapp } from 'react-icons/fa';

export function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/+918810418134?text=Hello!%20I%20need%20assistance%20with%20your%20products."
      className="fixed bottom-20 right-4 xs:bottom-22 xs:right-6 sm:bottom-24 sm:right-8 bg-green-500 hover:bg-green-600 text-white rounded-full shadow-lg transition-all duration-300 hover:scale-110 z-50 group"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Contact on WhatsApp"
    >
      <div className="relative p-3 xs:p-3.5 sm:p-4">
        <FaWhatsapp className="w-6 h-6 xs:w-7 xs:h-7 sm:w-8 sm:h-8" />
        <span className="absolute -top-12 right-0 bg-black/75 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap">
          Chat with us!
        </span>
      </div>
    </a>
  );
}
