import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { products } from '../data/products';

export function ProductsPageBase({ category }: { category: string }) {
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 12;

  const categories = ['All', 'Bags', 'Caps', 'Raincoats', 'Tracksuits', 'Jackets', 'Tshirts', 'Accessories'];

  const filteredProducts = category === 'All'
    ? products
    : products.filter((product) => product.category.toLowerCase() === category.toLowerCase());

  const totalProducts = filteredProducts.length;
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = filteredProducts.slice(indexOfFirstProduct, indexOfLastProduct);

  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [currentPage]);

  const handlePageChange = (direction: 'next' | 'prev') => {
    if (direction === 'next' && currentPage * productsPerPage < totalProducts) {
      setCurrentPage(currentPage + 1);
    } else if (direction === 'prev' && currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <div className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-2 sm:px-5 lg:px-6">

        {/* Category Filter Navigation */}
        <div className="bg-gray-100 py-8 mb-12 mt-8"> {/* Added margin-top to separate from header */}
          <h2 className="text-2xl font-semibold text-gray-800 mb-4 text-center">Categories</h2>
          <div className="lg:flex justify-center gap-6 lg:gap-12">
            {/* Mobile Dropdown */}
            <div className="lg:hidden mb-4">
              <select
                value={category.toLowerCase()} // Normalize the category to match the dropdown values
                onChange={(e) => navigate(`/products/${e.target.value}`)} // Navigate to the selected category
                className="w-full text-gray-700 py-2 px-4 bg-gray-200 border border-gray-300 rounded-lg"
              >
                {categories.map((cat) => (
                  <option key={cat} value={cat.toLowerCase()}>
                    {cat}
                  </option>
                ))}
              </select>
            </div>
            {/* Desktop Buttons */}
            <div className="hidden lg:flex gap-6">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => navigate(`/products/${cat.toLowerCase()}`)}
                  className={`text-lg font-semibold py-2 px-4 rounded-lg ${category.toLowerCase() === cat.toLowerCase()
                    ? 'bg-blue-600 text-white'
                    : 'bg-gray-200 text-gray-700 hover:bg-blue-200'
                    }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Dynamic Page Header */}
        <h2 className="text-4xl font-extrabold text-gray-800 text-center mb-12 bg-blue-50 py-6">
          {category === 'All' ? 'All Products' : category}
        </h2>

        {/* Products Grid */}
        <p className="text-center text-lg text-gray-700 mb-6">
          Showing {indexOfFirstProduct + 1}–{Math.min(indexOfLastProduct, totalProducts)} of {totalProducts} results
        </p>
        <div className="bg-gradient-to-br from-gray-100 to-gray-300 p-6 rounded-lg shadow-lg">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {currentProducts.map((product) => (
              <div
                key={product.id}
                className="bg-white rounded-xl shadow-md hover:shadow-lg transform hover:scale-105 transition-all duration-300 flex flex-col items-center p-6"
              >
                {/* Image Container */}
                <div className="relative w-full aspect-square mb-2 rounded-lg overflow-hidden border border-gray-200 hover:border-blue-500 p-2">
                  <img
                    src={product.images[0]}
                    alt={product.name}
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                  />
                </div>

                {/* Product Info */}
                <div className="flex flex-col items-center">
                  <h3
                    className="text-center text-base font-semibold text-gray-800"
                    style={{ minHeight: '2.5rem' }}
                  >
                    {product.name}
                  </h3>
                  <p className="text-lg font-bold text-blue-600 mt-2">{product.price}</p>
                </div>

                {/* Button */}
                <button
                  onClick={() => navigate(`/products/${category}/${product.id}`)}
                  className="mt-4 bg-gradient-to-r from-blue-500 to-blue-700 hover:from-blue-700 hover:to-blue-900 text-white px-6 py-2 rounded-lg text-sm shadow-md transform hover:translate-y-1 transition-all duration-300"
                  style={{ alignSelf: 'stretch', textAlign: 'center' }}
                >
                  View Product
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Pagination */}
        <div className="flex justify-between items-center mt-12 bg-gradient-to-r from-gray-100 to-gray-300 py-4 px-6 rounded-lg shadow-md">
          <button
            onClick={() => handlePageChange('prev')}
            disabled={currentPage === 1}
            className="text-blue-600 hover:text-blue-800 disabled:text-gray-400 font-medium transition-all"
          >
            &lt; Previous
          </button>
          <button
            onClick={() => handlePageChange('next')}
            disabled={currentPage * productsPerPage >= totalProducts}
            className="text-blue-600 hover:text-blue-800 disabled:text-gray-400 font-medium transition-all"
          >
            Next &gt;
          </button>
        </div>

      </div>
    </div>
  );
}
