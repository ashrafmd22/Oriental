import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom'; // useNavigate for React Router v6
import { CategoryFilter } from './CategoryFilter';
import { ProductsHeader } from './ProductsHeader';
import { ProductCard } from './ProductCard';
import { Pagination } from './Pagination';
import { products } from '../../data/products';

interface ProductsPageBaseProps {
  category: string;
}

export function ProductsPageBase({ category }: ProductsPageBaseProps) {
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 12;
  const navigate = useNavigate(); // Using useNavigate from React Router v6
  const location = useLocation();

  const categories = ['All', 'Bags', 'Caps', 'Drinkware', 'Diaries', 'Jackets', 'Tshirts', 'Accessories'];

  const filteredProducts = category === 'All'
    ? products
    : products.filter((product) => product.category.toLowerCase() === category.toLowerCase());

  const totalProducts = filteredProducts.length;

  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;

  const currentProducts = filteredProducts.slice(indexOfFirstProduct, indexOfLastProduct);

  useEffect(() => {
    // Read the page number from the URL (query param)
    const searchParams = new URLSearchParams(location.search);
    const page = searchParams.get('page');
    if (page) {
      setCurrentPage(Number(page));
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [location]);

  const handlePageChange = (direction: 'next' | 'prev') => {
    let newPage = currentPage;
    if (direction === 'next' && currentPage * productsPerPage < totalProducts) {
      newPage = currentPage + 1;
    } else if (direction === 'prev' && currentPage > 1) {
      newPage = currentPage - 1;
    }

    setCurrentPage(newPage);

    // Update the URL to reflect the new page
    navigate({
      pathname: location.pathname,
      search: `?category=${category}&page=${newPage}`, // Update the URL query params
    });
  };

  return (
    <div className="min-h-screen bg-gray-50 pt-16 sm:pt-20 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <CategoryFilter
          categories={categories}
          currentCategory={category}
        />

        <div className="mt-8">
          <ProductsHeader
            category={category}
            totalProducts={totalProducts}
            currentPage={currentPage}
            productsPerPage={productsPerPage}
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6">
            {currentProducts.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                category={category}
              />
            ))}
          </div>

          <Pagination
            currentPage={currentPage}
            totalProducts={totalProducts}
            productsPerPage={productsPerPage}
            onPageChange={handlePageChange}
          />
        </div>
      </div>
    </div>
  );
}
