import React from 'react';

interface ProductsHeaderProps {
  category: string;
  totalProducts: number;
  currentPage: number;
  productsPerPage: number;
}

export const ProductsHeader: React.FC<ProductsHeaderProps> = ({
  category,
  totalProducts,
  currentPage,
  productsPerPage,
}) => {
  const start = (currentPage - 1) * productsPerPage + 1;
  const end = Math.min(currentPage * productsPerPage, totalProducts);

  return (
    <div className="text-center mb-8">
      <p className="text-sm sm:text-base text-gray-600">
        Showing {start}–{end} of {totalProducts} results
      </p>
    </div>
  );
};