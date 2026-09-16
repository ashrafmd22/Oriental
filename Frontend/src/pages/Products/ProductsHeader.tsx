import React from 'react';

interface ProductsHeaderProps {
  totalProducts: number;
  currentPage: number;
  productsPerPage: number;
}

export const ProductsHeader: React.FC<ProductsHeaderProps> = ({
  totalProducts,
  currentPage,
  productsPerPage,
}) => {
  const start = (currentPage - 1) * productsPerPage + 1;
  const end = Math.min(currentPage * productsPerPage, totalProducts);

  return (
    <div className="text-center mb-8">
      <p className="text-sm sm:text-base text-slate-600">
        Showing {start}–{end} of {totalProducts} results
      </p>
      <p className="mt-2 text-xs sm:text-sm font-medium text-indigo-700">
        These are featured categories. We also source many more corporate gifting items on request.
      </p>
    </div>
  );
};