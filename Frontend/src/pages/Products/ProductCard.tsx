import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Product } from '../../types/product';
import { trackEvent } from '../../utils/analytics';
import { addToGiftBox, isInGiftBox, removeFromGiftBox } from '../../utils/giftBox';

interface ProductCardProps {
  product: Product;
  category: string;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product, category }) => {
  const navigate = useNavigate();
  const targetCategory = category.toLowerCase() === 'all' ? 'all' : category.toLowerCase();
  const [isShortlisted, setIsShortlisted] = useState(false);

  useEffect(() => {
    const sync = () => setIsShortlisted(isInGiftBox(product.id));
    sync();
    window.addEventListener('giftbox-updated', sync);
    return () => window.removeEventListener('giftbox-updated', sync);
  }, [product.id]);

  return (
    <div className="bg-white rounded-2xl shadow-sm border border-slate-100 hover:shadow-xl transition-all duration-300 flex flex-col h-full overflow-hidden">
      {/* Image Container */}
      <div className="relative w-full pt-[100%]"> {/* Creates a square aspect ratio */}
        <div className="absolute inset-0 overflow-hidden group">
          <img loading="lazy" decoding="async"
            src={product.images[0]}
            alt={product.name}
            className="w-full h-full object-contain p-4 bg-slate-50 transition-transform duration-300 group-hover:scale-105"
            style={{
              aspectRatio: '1/1',
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          <span className="absolute top-3 left-3 rounded-full bg-white/90 px-3 py-1 text-[11px] font-semibold text-slate-700 shadow">
            {product.category}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="p-4 sm:p-5 flex flex-col flex-grow">
        <h3 className="text-sm sm:text-base font-semibold text-slate-800 mb-2 line-clamp-2 min-h-[2.5rem]">
          {product.name}
        </h3>

        <div className="mt-auto">
          <div className="flex flex-col gap-2 mb-3">
            <div className="flex items-center gap-2">
              <span className="px-2 py-1 bg-slate-100 text-slate-800 text-xs font-medium rounded">
                Code: {product.code}
              </span>
            </div>
            <div className="flex flex-wrap gap-1">
              {product.features.slice(0, 2).map((feature, index) => (
                <span key={index} className="px-2 py-1 bg-green-50 text-green-700 text-xs rounded">
                  {feature}
                </span>
              ))}
            </div>
          </div>

          <button
            onClick={() => {
              trackEvent('product_card_click', {
                product_id: product.id,
                category: targetCategory,
                product_code: product.code,
              });
              navigate(`/products/${targetCategory}/${product.id}`);
            }}
            className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 
                     text-white px-4 py-2.5 rounded-xl text-sm font-semibold shadow-md 
                     transform transition-all duration-300 hover:-translate-y-0.5"
          >
            View Details & Enquire
          </button>
          <button
            onClick={() => {
              if (isShortlisted) {
                removeFromGiftBox(product.id);
              } else {
                addToGiftBox(product.id);
              }
            }}
            className={`mt-2 w-full border px-4 py-2 rounded-xl text-sm font-semibold transition ${
              isShortlisted
                ? 'border-emerald-200 bg-emerald-50 text-emerald-700'
                : 'border-slate-300 text-slate-700 hover:bg-slate-100'
            }`}
          >
            {isShortlisted ? 'Added To Gift Box' : 'Add To Gift Box'}
          </button>
          {isShortlisted && (
            <Link
              to="/gift-box"
              className="mt-2 inline-flex w-full justify-center rounded-lg text-xs font-semibold text-indigo-700 hover:text-indigo-800"
            >
              Go To Gift Box
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};