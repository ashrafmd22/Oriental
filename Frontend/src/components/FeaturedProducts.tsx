import React from 'react';
import { Link } from 'react-router-dom';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { ShoppingBag, ChevronLeft, ChevronRight } from 'lucide-react';

const categories = [
  { name: 'Custom Bags', image: 'https://m.media-amazon.com/images/I/81iDb4-nuoL._AC_UY1000_.jpg' },
  { name: 'Personalized Caps', image: 'https://www.iconicindia.com/cdn/shop/files/GMS24-9900223130_1.jpg?v=1707816435' },
  { name: 'Branded T-Shirts', image: 'https://printmytee.in/wp-content/uploads/2021/07/Product-Your-Design-Here-01-1.jpg' },
  { name: 'Engraved Jackets', image: 'https://d1pdzcnm6xgxlz.cloudfront.net/tops/8905875043669-18.jpg' },
  { name: 'Customized Drinkware', image: 'https://www.allextreme.in/media/catalog/product/2/2/22_1_1.jpg' },
  { name: 'Personalized Diaries', image: 'https://www.jiomart.com/images/product/original/rvteevwxry/yha-men-s-regular-fit-Diaries-product-images-rvteevwxry-0-202403211820.jpg?im=Resize=(500,630)' },
  { name: 'Corporate Accessories', image: 'https://www.zestpics.com/cdn/shop/files/BangkokWallet.jpg?v=1696305619&width=1080' },
];

const formatCategoryURL = (categoryName: string) => {
  const customMappings: Record<string, string> = {
    'Custom Bags': 'bags',
    'Personalized Caps': 'caps',
    'Branded T-Shirts': 'tshirts',
    'Engraved Jackets': 'jackets',
    'Customized Drinkware': 'Drinkware',
    'Personalized Diaries': 'Diaries',
    'Corporate Accessories': 'accessories',
  };
  return customMappings[categoryName] || categoryName.toLowerCase().replace(/\s+/g, '-');
};

const CustomPrevArrow = (props: any) => {
  const { onClick } = props;
  return (
    <button
      onClick={onClick}
      className="absolute left-2 z-10 w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center rounded-full bg-white/80 backdrop-blur-sm shadow-lg hover:bg-white transition duration-200 group"
      style={{ top: '50%', transform: 'translateY(-50%)' }}
    >
      <ChevronLeft className="w-4 h-4 sm:w-6 sm:h-6 text-gray-600 group-hover:text-blue-600 transition-colors" />
    </button>
  );
};

const CustomNextArrow = (props: any) => {
  const { onClick } = props;
  return (
    <button
      onClick={onClick}
      className="absolute right-2 z-10 w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center rounded-full bg-white/80 backdrop-blur-sm shadow-lg hover:bg-white transition duration-200 group"
      style={{ top: '50%', transform: 'translateY(-50%)' }}
    >
      <ChevronRight className="w-4 h-4 sm:w-6 sm:h-6 text-gray-600 group-hover:text-blue-600 transition-colors" />
    </button>
  );
};

export function FeaturedProducts() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 3000,
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
          arrows: true,
          dots: true,
        },
      },
    ], appendDots: (dots: any) => (
      <div className="!bottom-[-2rem] sm:!bottom-[-3rem]">
        <ul className="flex justify-center gap-2"> {dots} </ul>
      </div>
    ),
    customPaging: () => (
      <div className="w-2 h-2 sm:w-3 sm:h-3 bg-blue-200 rounded-full transition-all duration-300" />
    ),
  };


  return (
    <section className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600 inline-block mb-4">
            Personalized Corporate Gifts
          </h2>
          <p className="text-gray-600 text-base sm:text-lg max-w-2xl mx-auto">
            Discover our exclusive collection of customizable corporate merchandise
          </p>
        </div>

        <div className="relative px-2 sm:px-8">
          <Slider {...settings} className="featured-slider">
            {categories.map((category, index) => (
              <div key={index} className="px-2 sm:px-3 py-2">
                <div className="bg-white rounded-2xl shadow-lg overflow-hidden h-full flex flex-col transform transition-all duration-300 hover:scale-[1.02] hover:shadow-xl">
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <img
                      src={category.image}
                      alt={category.name}
                      className="w-full h-full object-contain bg-gray-50 p-4"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>

                  <div className="p-4 sm:p-6 flex flex-col flex-grow">
                    <h3 className="text-lg sm:text-xl font-semibold text-gray-800 mb-4">
                      {category.name}
                    </h3>
                    <div className="mt-auto">
                      <Link
                        to={`/products/${formatCategoryURL(category.name)}`}
                        className="w-full inline-flex items-center justify-center gap-1.5 sm:gap-2 bg-gradient-to-r from-blue-600 to-blue-700 text-white px-4 sm:px-6 py-2.5 rounded-lg text-sm sm:text-base font-medium hover:from-blue-700 hover:to-blue-800 transition-all duration-200 shadow-md hover:shadow-lg"
                      >
                        <ShoppingBag className="w-4 h-4 sm:w-5 sm:h-5" />
                        <span>View Collection</span>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>

      <style >{`
        .featured-slider .slick-list {
          margin: 0 -0.5rem;
          padding: 1rem 0;
        }
        
        .featured-slider .slick-track {
          display: flex !important;
          gap: 0.5rem;
        }

        .featured-slider .slick-slide {
          height: inherit !important;
        }

        .featured-slider .slick-slide > div {
          height: 100%;
        }

        @media (min-width: 640px) {
          .featured-slider .slick-list {
            margin: 0 -1rem;
          }
          
          .featured-slider .slick-track {
            gap: 1rem;
          }
        }

        .featured-slider .slick-dots {
          position: relative;
          bottom: 0;
          margin-top: 1.5rem;
        }

        .featured-slider .slick-dots li {
          margin: 0;
          width: auto;
          height: auto;
        }

        .featured-slider .slick-dots li button {
          padding: 0;
        }

        .featured-slider .slick-dots li button:before {
          display: none;
        }.featured-slider .slick-list {
          margin: 0 -0.5rem;
          padding: 1rem 0;
        }
        
        .featured-slider .slick-track {
          display: flex !important;
          gap: 0.5rem;
        }

        .featured-slider .slick-slide {
          height: inherit !important;
        }

        .featured-slider .slick-slide > div {
          height: 100%;
        }

        @media (min-width: 640px) {
          .featured-slider .slick-list {
            margin: 0 -1rem;
          }
          
          .featured-slider .slick-track {
            gap: 1rem;
          }
        }

        .featured-slider .slick-dots {
          position: relative;
          bottom: 0;
          margin-top: 1.5rem;
        }

        .featured-slider .slick-dots li {
          margin: 0;
          width: auto;
          height: auto;
        }

        .featured-slider .slick-dots li.slick-active div {
          background-color: rgb(37 99 235); /* bg-blue-600 */
          transform: scale(1.2);
        }

        .featured-slider .slick-dots li button {
          padding: 0;
        }

        .featured-slider .slick-dots li button:before {
          display: none;
        }
      `}</style>
    </section>
  );
}