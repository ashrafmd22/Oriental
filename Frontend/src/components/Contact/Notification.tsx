import React from 'react';
import { CheckCircle, XCircle, X } from 'lucide-react';

interface NotificationProps {
  message: string;
  type: 'success' | 'error';
  onClose: () => void;
}

export function Notification({ message, type, onClose }: NotificationProps) {
  const Icon = type === 'success' ? CheckCircle : XCircle;
  const bgColor = type === 'success' ? 'bg-green-500' : 'bg-red-500';

  return (
    <div className={`fixed bottom-3 right-3 sm:bottom-4 sm:right-4 ${bgColor} text-white p-3 sm:p-4 rounded-lg shadow-lg flex items-center max-w-[calc(100%-1.5rem)] sm:max-w-md animate-slide-up`}>
      <Icon className="w-5 h-5 sm:w-6 sm:h-6 mr-2 flex-shrink-0" />
      <p className="text-xs sm:text-sm font-medium mr-2 flex-1">{message}</p>
      <button
        onClick={onClose}
        className="text-white/80 hover:text-white transition-colors"
        aria-label="Close notification"
      >
        <X className="w-4 h-4 sm:w-5 sm:h-5" />
      </button>
    </div>
  );
}