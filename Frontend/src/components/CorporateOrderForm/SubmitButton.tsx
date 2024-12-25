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
      className="w-full mt-6 sm:mt-8 px-6 py-3 sm:py-4 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white rounded-lg font-medium text-sm sm:text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-200 disabled:opacity-70 disabled:cursor-not-allowed disabled:transform-none flex items-center justify-center"
    >
      {isLoading ? (
        <>
          <LoadingSpinner />
          <span className="ml-2">Submitting...</span>
        </>
      ) : (
        'Submit Inquiry'
      )}
    </button>
  );
}