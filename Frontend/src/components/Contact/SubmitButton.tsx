import React from 'react';
import { LoadingSpinner } from './LoadingSpinner';

interface SubmitButtonProps {
  isLoading: boolean;
}

export function SubmitButton({ isLoading }: SubmitButtonProps) {
  return (
    <button
      type="submit"
      disabled={isLoading}
      className="w-full bg-gradient-to-r from-blue-600 to-blue-500 text-white py-3 px-4 rounded-lg font-semibold hover:from-blue-700 hover:to-blue-600 transition duration-300 transform hover:-translate-y-0.5 text-sm sm:text-base disabled:opacity-70 disabled:cursor-not-allowed disabled:transform-none flex items-center justify-center"
    >
      {isLoading ? (
        <>
          <LoadingSpinner />
          <span className="ml-2">Sending...</span>
        </>
      ) : (
        'Send Message'
      )}
    </button>
  );
}