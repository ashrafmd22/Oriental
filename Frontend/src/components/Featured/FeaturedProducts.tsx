import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { CategoryCard } from './CategoryCard';
import { PrevArrow, NextArrow } from './SliderArrows';
import { categories } from './CategoryData';

export function FeaturedProducts() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 3000,
    slidesToShow: 3,
    slidesToScroll: 1,
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        }
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
        }
      }
    ],
    appendDots: (dots: any) => (
      <div>
        <ul className="flex justify-center gap-2 mt-6"> {dots} </ul>
      </div>
    ),
    customPaging: () => (
      <div className="w-2 h-2 bg-indigo-200 rounded-full transition-all duration-300 hover:bg-indigo-400" />
    ),
  };

  return (
    <section className="py-10 sm:py-14 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="text-center mb-6 sm:mb-10">
        <h2 className="text-2xl sm:text-4xl font-black text-slate-900 mb-3">
          Personalized Corporate Gifts
        </h2>
        <p className="text-sm sm:text-base text-slate-600">
          Discover our exclusive collection of customizable corporate merchandise
        </p>
      </div>

      <div className="relative px-4">
        <Slider {...settings}>
          {categories.map((category, index) => (
            <div key={index} className="px-2">
              <CategoryCard {...category} />
            </div>
          ))}
        </Slider>
      </div>

      <style>{`
        .slick-list { margin: 0 -8px; }
        .slick-slide > div { height: 100%; }
        .slick-dots li.slick-active div { background-color: #2563eb; }
      `}</style>
    </section>
  );
}