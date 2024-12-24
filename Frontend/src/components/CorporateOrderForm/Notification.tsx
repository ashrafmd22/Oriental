import React from 'react';
import { FiX } from 'react-icons/fi';

interface NotificationProps {
  type: 'success' | 'error';
  message: string;
  onClose: () => void;
}

export function Notification({ type, message, onClose }: NotificationProps) {
  const bgColor = type === 'success' ? 'bg-green-500' : 'bg-red-500';

  return (
    <div className={`fixed bottom-3 right-3 sm:bottom-4 sm:right-4 ${bgColor} text-white p-3 sm:p-4 rounded-lg shadow-lg flex items-center justify-between w-[calc(100%-1.5rem)] sm:w-auto sm:min-w-[320px] z-50 transform transition-all duration-300 animate-slide-up`}>
      <span className="text-xs sm:text-sm font-medium pr-3 sm:pr-4">{message}</span>
      <button
        onClick={onClose}
        className="text-white hover:text-gray-200 transition-colors"
        aria-label="Close notification"
      >
        <FiX className="w-4 h-4 sm:w-5 sm:h-5" />
      </button>
    </div>
  );
}