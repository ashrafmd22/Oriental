import { useEffect, useMemo } from 'react';
import { Link, useParams, useLocation } from 'react-router-dom';
import { products } from '../../data/products';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { ProductDetails } from './ProductDetails';
import { trackEvent } from '../../utils/analytics';

export function ProductPage() {
  const { id } = useParams();
  const location = useLocation();
  const product = products.find(p => p.id === id);

  // Extract category from URL path
  const category = location.pathname.split('/')[2];
  // Format category for display (capitalize first letter, remove hyphens)
  const displayCategory = category
    ? category.charAt(0).toUpperCase() + category.slice(1)
    : 'Products';

  const relatedProducts = useMemo(() => {
    if (!product) {
      return [];
    }

    return products
      .filter((item) => item.id !== product.id && item.category === product.category)
      .slice(0, 4);
  }, [product]);

  useEffect(() => {
    window.scrollTo(0, 0);
    if (product) {
      trackEvent('product_view', {
        product_id: product.id,
        product_name: product.name,
        category: category || 'unknown',
      });
    }
  }, [product, category]);

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center px-4">
        <div className="text-center">
          <p className="text-xl text-slate-600">Product not found.</p>
          <Link to="/products" className="mt-4 inline-flex rounded-full bg-indigo-600 px-5 py-2 text-white font-semibold">
            Back to Products
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-gradient-to-b from-slate-50 to-white min-h-screen pt-20 sm:pt-24 pb-8 sm:pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-2xl shadow-lg overflow-hidden border border-slate-100">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 p-4 sm:p-6 lg:p-8">
            {/* Breadcrumb */}
            <div className="lg:col-span-2 flex flex-wrap items-center gap-x-2 gap-y-1 text-sm text-slate-500">
              <Link to="/" className="hover:text-indigo-600 transition-colors">Home</Link>
              <span>/</span>
              <Link to="/products" className="hover:text-indigo-600 transition-colors">Products</Link>
              <span>/</span>
              <Link to={`/products/${category}`} className="hover:text-indigo-600 transition-colors">{displayCategory}</Link>
              <span>/</span>
              <span className="text-slate-900">{product.name}</span>
            </div>

            <ImageGallery
              images={product.images}
              productName={product.name}
            />
            <ProductDetails
              name={product.name}
              description={product.description}
              features={product.features}
              code={product.code}
            />
          </div>
        </div>

        {relatedProducts.length > 0 && (
          <section className="mt-8 sm:mt-10">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900">Similar Products</h2>
              <Link
                to={`/products/${product.category.toLowerCase()}`}
                className="text-sm font-semibold text-indigo-600 hover:text-indigo-700"
              >
                View all
              </Link>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
              {relatedProducts.map((item) => (
                <Link
                  key={item.id}
                  to={`/products/${item.category.toLowerCase()}/${item.id}`}
                  className="rounded-xl border border-slate-200 bg-white p-3 shadow-sm transition hover:shadow-md"
                >
                  <div className="aspect-square overflow-hidden rounded-lg bg-slate-50">
                    <img loading="lazy" decoding="async"
                      src={item.images[0]}
                      alt={item.name}
                      className="h-full w-full object-contain p-2"
                    />
                  </div>
                  <p className="mt-3 line-clamp-2 text-sm font-semibold text-slate-800">{item.name}</p>
                  <p className="mt-1 text-xs text-slate-500">{item.code}</p>
                </Link>
              ))}
            </div>
          </section>
        )}
      </div>
    </div>
  );
}