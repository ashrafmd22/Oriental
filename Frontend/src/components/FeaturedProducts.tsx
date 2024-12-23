import React from 'react';
import { Link } from 'react-router-dom';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const categories = [
  { name: 'Custom Bags', image: 'https://m.media-amazon.com/images/I/81iDb4-nuoL._AC_UY1000_.jpg' },
  { name: 'Personalized Caps', image: 'https://www.iconicindia.com/cdn/shop/files/GMS24-9900223130_1.jpg?v=1707816435' },
  { name: 'Branded T-Shirts', image: 'https://printmytee.in/wp-content/uploads/2021/07/Product-Your-Design-Here-01-1.jpg' },
  { name: 'Engraved Jackets', image: 'https://d1pdzcnm6xgxlz.cloudfront.net/tops/8905875043669-18.jpg' },
  { name: 'Customized Raincoats', image: 'https://www.allextreme.in/media/catalog/product/2/2/22_1_1.jpg' },
  { name: 'Personalized Tracksuits', image: 'https://www.jiomart.com/images/product/original/rvteevwxry/yha-men-s-regular-fit-tracksuits-product-images-rvteevwxry-0-202403211820.jpg?im=Resize=(500,630)' },
  { name: 'Corporate Accessories', image: 'https://www.zestpics.com/cdn/shop/files/BangkokWallet.jpg?v=1696305619&width=1080' },
];

// Utility function to format URLs
const formatCategoryURL = (categoryName: string) => {
  // Map specific cases if needed
  const customMappings: Record<string, string> = {
    'Custom Bags': 'bags',
    'Personalized Caps': 'caps',
    'Branded T-Shirts': 'tshirts',
    'Engraved Jackets': 'jackets',
    'Customized Raincoats': 'raincoats',
    'Personalized Tracksuits': 'tracksuits',
    'Corporate Accessories': 'accessories',
  };

  return customMappings[categoryName] || categoryName.toLowerCase().replace(/\s+/g, '-');
};

const CustomPrevArrow = (props: any) => {
  const { onClick } = props;
  return (
    <button
      onClick={onClick}
      className="absolute left-0 z-10 bg-blue-500 text-white w-10 h-10 flex items-center justify-center rounded-full shadow-md hover:bg-blue-600 transition duration-200"
      style={{ top: '50%', transform: 'translateY(-50%)', left: '10px' }}
    >
      &#9664; {/* Left arrow */}
    </button>
  );
};

const CustomNextArrow = (props: any) => {
  const { onClick } = props;
  return (
    <button
      onClick={onClick}
      className="absolute right-0 z-10 bg-blue-500 text-white w-10 h-10 flex items-center justify-center rounded-full shadow-md hover:bg-blue-600 transition duration-200"
      style={{ top: '50%', transform: 'translateY(-50%)', right: '10px' }}
    >
      &#9654; {/* Right arrow */}
    </button>
  );
};

export function FeaturedProducts() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 2000,
    slidesToShow: 3,
    slidesToScroll: 1,
    prevArrow: <CustomPrevArrow />,
    nextArrow: <CustomNextArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <section className="py-16">
      <div className="max-w-7xl mx-auto px-4 relative">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-center mt-16 mb-16">
          <div className="inline-block bg-gradient-to-r from-blue-400 to-purple-400 text-white py-2 px-6 rounded-lg shadow-lg">
            Personalized Corporate Gifts
          </div>
        </h2>

        <Slider {...settings}>
          {categories.map((category, index) => (
            <div key={index} className="px-4">
              <div className="bg-white rounded-lg shadow-md overflow-hidden flex flex-col h-full">
                <div className="flex-grow">
                  <img
                    src={category.image}
                    alt={category.name}
                    className="w-full h-64 object-contain"
                  />
                </div>
                <div className="p-6 text-center flex-grow">
                  <h3 className="text-xl font-semibold mb-2">{category.name}</h3>
                  <Link
                    to={`/products/${formatCategoryURL(category.name)}`}
                    className="inline-block bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition duration-200"
                  >
                    View More
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
}
