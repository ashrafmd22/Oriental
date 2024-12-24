import React from 'react';

interface PaginationProps {
  currentPage: number;
  totalProducts: number;
  productsPerPage: number;
  onPageChange: (direction: 'next' | 'prev') => void;
}

export const Pagination: React.FC<PaginationProps> = ({
  currentPage,
  totalProducts,
  productsPerPage,
  onPageChange,
}) => {
  return (
    <div className="flex justify-between items-center mt-8 bg-white py-3 px-4 sm:px-6 rounded-lg shadow-md">
      <button
        onClick={() => onPageChange('prev')}
        disabled={currentPage === 1}
        className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-all duration-200
          ${currentPage === 1
            ? 'text-gray-400 cursor-not-allowed'
            : 'text-blue-600 hover:bg-blue-50'
          }`}
      >
        <span>←</span>
        <span className="hidden sm:inline">Previous</span>
      </button>

      <span className="text-sm text-gray-600">
        Page {currentPage} of {Math.ceil(totalProducts / productsPerPage)}
      </span>

      <button
        onClick={() => onPageChange('next')}
        disabled={currentPage * productsPerPage >= totalProducts}
        className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-all duration-200
          ${currentPage * productsPerPage >= totalProducts
            ? 'text-gray-400 cursor-not-allowed'
            : 'text-blue-600 hover:bg-blue-50'
          }`}
      >
        <span className="hidden sm:inline">Next</span>
        <span>→</span>
      </button>
    </div>
  );
};