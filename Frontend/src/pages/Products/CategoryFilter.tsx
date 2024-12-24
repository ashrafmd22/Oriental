import React from 'react';
import { useNavigate } from 'react-router-dom';

interface CategoryFilterProps {
  categories: string[];
  currentCategory: string;
}

export const CategoryFilter: React.FC<CategoryFilterProps> = ({ categories, currentCategory }) => {
  const navigate = useNavigate();

  return (
    <>
      {/* Category Filter Navigation */}
      <div className="bg-gray-100 py-8 mb-12 mt-8"> {/* Added margin-top and bottom */}
        <h2 className="text-2xl font-semibold text-gray-800 mb-4 text-center">Categories</h2>
        <div className="lg:flex justify-center gap-6 lg:gap-12">
          {/* Mobile Dropdown */}
          <div className="lg:hidden mb-4">
            <select
              value={currentCategory.toLowerCase()} // Normalize the category to match dropdown values
              onChange={(e) => navigate(`/products/${e.target.value}`)} // Navigate to the selected category
              className="w-full text-gray-700 py-2 px-4 bg-gray-200 border border-gray-300 rounded-lg shadow-sm"
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
                className={`text-lg font-semibold py-2 px-4 rounded-lg transition-all duration-200 
                  ${currentCategory.toLowerCase() === cat.toLowerCase()
                    ? 'bg-blue-600 text-white shadow-lg'
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
        {currentCategory === 'All' ? 'All Products' : currentCategory}
      </h2>
    </>
  );
};
