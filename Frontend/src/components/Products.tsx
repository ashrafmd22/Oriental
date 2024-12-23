import React from 'react';

const products = [
  {
    category: 'Bags',
    items: [
      {
        name: 'Executive Laptop Bag',
        image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&q=80',
        description: 'Premium leather laptop bag perfect for professionals'
      },
      {
        name: 'Canvas Backpack',
        image: 'https://images.unsplash.com/photo-1622560480605-d83c853bc5c3?auto=format&fit=crop&q=80',
        description: 'Durable canvas backpack with custom branding options'
      }
    ]
  },
  {
    category: 'Tshirts',
    items: [
      {
        name: 'Polo T-Shirts',
        image: 'https://images.unsplash.com/photo-1581655353564-df123a1eb820?auto=format&fit=crop&q=80',
        description: 'High-quality cotton polo shirts with embroidered logos'
      },
      {
        name: 'Premium Caps',
        image: 'https://images.unsplash.com/photo-1588850561407-ed78c282e89b?auto=format&fit=crop&q=80',
        description: 'Stylish caps with customizable designs'
      }
    ]
  }
];

export function Products() {
  return (
    <section id="products" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center text-gray-900 mb-16">Our Products</h2>
        {products.map((category) => (
          <div key={category.category} className="mb-16">
            <h3 className="text-2xl font-semibold mb-8">{category.category}</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {category.items.map((item) => (
                <div key={item.name} className="bg-white rounded-lg shadow-md overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-64 object-cover"
                  />
                  <div className="p-6">
                    <h4 className="text-xl font-semibold mb-2">{item.name}</h4>
                    <p className="text-gray-600">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}