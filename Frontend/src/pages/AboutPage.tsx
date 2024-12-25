import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { Award, Users, Clock, CheckCircle, Target, Heart } from 'lucide-react';
import Slider from 'react-infinite-logo-slider';
import 'swiper/css';
// Client Data
const clients = [
  {
    name: 'Paytm',
    logo: 'https://1000logos.net/wp-content/uploads/2021/03/Paytm_Logo.jpg',
    testimonial: 'Paytm has revolutionized digital payments and made them seamless for us.',
  },
  {
    name: 'DS Group',
    logo: 'https://addx.in/wp-content/uploads/2024/04/5.png',
    testimonial: 'Our experience with DS Group has been exceptional, and they are a valuable partner.',
  },
  {
    name: 'Star Sports',
    logo: 'https://addx.in/wp-content/uploads/2024/04/10.png',
    testimonial: 'Star Sports consistently delivers quality and has been a cornerstone in our branding.',
  },
  {
    name: 'FIITJEE',
    logo: 'https://addx.in/wp-content/uploads/2024/04/6.png',
    testimonial: 'The collaboration with FIITJEE has helped us achieve educational excellence.',
  },
  {
    name: 'Ultratech Cement',
    logo: 'https://upload.wikimedia.org/wikipedia/en/thumb/9/96/Ultratech_Cement_Logo.svg/1200px-Ultratech_Cement_Logo.svg.png',
    testimonial: 'Ultratech Cement has brought strength and durability to our construction projects.',
  },
  {
    name: 'Reliance',
    logo: 'https://rilstaticasset.akamaized.net/sites/default/files/2023-02/L.1.jpg',
    testimonial: 'Reliance has been a game-changer for us with its innovative solutions.',
  },
  {
    name: 'Tata Motors',
    logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQVfTSEgAJMQfItAPgWrbJQNQLL1Ad2i65PJg&s',
    testimonial: 'Tata Motors consistently delivers reliable vehicles that drive our business forward.',
  },
  {
    name: 'HDFC Bank',
    logo: 'https://e7.pngegg.com/pngimages/257/159/png-clipart-hdfc-logo-thumbnail-bank-logos-thumbnail.png',
    testimonial: 'HDFC Bank has provided us with unparalleled banking services and support.',
  },
  {
    name: 'Amazon',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1280px-Amazon_logo.svg.png',
    testimonial: 'Amazon’s e-commerce platform has helped us reach millions of customers worldwide.',
  },
  {
    name: 'Microsoft',
    logo: 'https://download.logo.wine/logo/Microsoft/Microsoft-Logo.wine.png',
    testimonial: 'Microsoft’s tools have boosted our productivity and streamlined operations.',
  },
];
interface CounterProps {
  target: number; // the target number to count up to
  duration: number; // duration for counting animation in milliseconds
}

const Counter: React.FC<CounterProps> = ({ target, duration }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const increment = target / (duration / 50); // Update every 50ms
    const timer = setInterval(() => {
      start += increment;
      if (start >= target) {
        clearInterval(timer);
        setCount(target);
      } else {
        setCount(Math.ceil(start));
      }
    }, 50);

    return () => clearInterval(timer);
  }, [target, duration]);

  return <span>{count}</span>;
};

export function AboutPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Helmet>
        <title>About Oriental Enterprises - Leading Corporate Gift Solutions Since 1990</title>
        <meta name="description" content="Discover Oriental Enterprises' 30+ years of excellence in corporate gifting. Premium quality, innovative solutions, and trusted by 1000+ clients across India." />
        <meta name="keywords" content="corporate gifts company, business gift solutions, premium corporate gifts, custom corporate merchandise, corporate gifting services india, promotional products company, corporate gift manufacturer, bulk corporate gifts" />

        {/* Schema.org structured data */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "Oriental Enterprises",
            "description": "Leading provider of premium corporate gifts and promotional items since 1990",
            "foundingDate": "1990",
            "url": "https://orientalenterprises.com",
            "areaServed": "India",
            "sameAs": [
              "https://www.facebook.com/orientalenterprises",
              "https://www.linkedin.com/company/oriental-enterprises",
              "https://twitter.com/oriental_ent"
            ]
          })}
        </script>

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content="About Oriental Enterprises - Leading Corporate Gift Solutions Since 1990" />
        <meta property="og:description" content="Discover Oriental Enterprises' 30+ years of excellence in corporate gifting. Premium quality, innovative solutions, and trusted by 1000+ clients across India." />
        <meta property="og:image" content="/images/about-hero.jpg" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="About Oriental Enterprises - Leading Corporate Gift Solutions Since 1990" />
        <meta name="twitter:description" content="Discover Oriental Enterprises' 30+ years of excellence in corporate gifting. Premium quality, innovative solutions, and trusted by 1000+ clients across India." />
        <meta name="twitter:image" content="/images/about-hero.jpg" />

        {/* Additional SEO Meta Tags */}
        <meta name="robots" content="index, follow" />
        <meta name="author" content="Oriental Enterprises" />
        <link rel="canonical" href="https://orientalenterprises.com/about" />
      </Helmet>
      <div className="pt-20">
        {/* Hero Section */}
        <section className="relative h-[400px] bg-gradient-to-r from-blue-700 to-blue-900 text-white">
          <div className="absolute inset-0 bg-black opacity-40"></div>
          <div className="relative h-full max-w-7xl mx-auto px-4 flex items-center justify-center text-center">
            <div className="z-10">
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-6 leading-tight tracking-wide">Our Story</h1>
              <p className="text-base sm:text-lg md:text-xl max-w-2xl mx-auto mb-8 opacity-90">
                Three decades of excellence in corporate gifting, building lasting relationships through quality and innovation.
              </p>
              <a
                href="#legacy"
                className="bg-blue-600 text-white px-6 py-3 rounded-lg font-medium text-lg hover:bg-blue-700 transition-colors duration-300"
              >
                Discover Our Journey
              </a>
            </div>
          </div>
        </section>

        {/* Legacy Section */}
        <section id="legacy" className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-800 mb-6">Our Legacy of Excellence</h2>
                <p className="text-base sm:text-lg md:text-xl text-gray-600 mb-4">
                  Since 1990, Oriental Enterprises has been revolutionizing the corporate gifting industry with innovative solutions and an unwavering commitment to quality. With decades of experience, we have established ourselves as a trusted name in providing premium gifts tailored to meet the diverse needs of businesses across the country.
                </p>
                <p className="text-base sm:text-lg md:text-xl text-gray-600 mb-6">
                  From our humble beginnings as a small family-run business, we have grown into one of India’s most respected suppliers of corporate gifts. Our mission has always been to deliver exceptional quality, creativity, and client-centric service, making us the preferred partner for over 1000+ esteemed clients.
                </p>
                <div className="grid grid-cols-2 gap-8 mt-8">
                  <div className="text-center">
                    <div className="text-4xl sm:text-5xl md:text-6xl font-bold text-blue-600">
                      <Counter target={30} duration={2000} />+
                    </div>
                    <div className="text-gray-600">Years of Experience</div>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl sm:text-5xl md:text-6xl font-bold text-blue-600">
                      <Counter target={1000} duration={2000} />+
                    </div>
                    <div className="text-gray-600">Happy Clients</div>
                  </div>
                  <div className="text-center mt-8">
                    <div className="text-4xl sm:text-5xl md:text-6xl font-bold text-blue-600">
                      <Counter target={500} duration={2000} />+
                    </div>
                    <div className="text-gray-600">Successful Projects</div>
                  </div>
                  <div className="text-center mt-8">
                    <div className="text-4xl sm:text-5xl md:text-6xl font-bold text-blue-600">
                      <Counter target={10} duration={2000} />+
                    </div>
                    <div className="text-gray-600">Industry Awards</div>
                  </div>
                </div>
              </div>
              <div className="grid grid-cols-1 gap-6">
                <img
                  src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80"
                  alt="Team"
                  className="w-full sm:w-full md:w-full lg:w-3/4 xl:w-2/3 h-auto rounded-xl shadow-xl transform transition duration-300 hover:scale-105"
                />
                <img
                  src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&q=80"
                  alt="Office"
                  className="w-full sm:w-full md:w-full lg:w-3/4 xl:w-2/3 h-auto rounded-xl shadow-xl transform transition duration-300 hover:scale-105"
                />
              </div>
            </div>
          </div>
        </section>


        {/* Core Values Section */}
        <section className="py-20 bg-gradient-to-r from-blue-50 to-blue-100">
          <div className="max-w-7xl mx-auto px-6">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-center text-gray-800 mb-12 tracking-tight">
              Our Core Values
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
              {[{
                title: 'Quality First',
                description: 'Premium materials and expert craftsmanship in every product.',
                icon: <CheckCircle className="w-16 h-16 text-blue-600 mx-auto mb-6" />
              }, {
                title: 'Innovation',
                description: 'Constantly evolving with market trends and client needs.',
                icon: <Target className="w-16 h-16 text-blue-600 mx-auto mb-6" />
              }, {
                title: 'Client Focus',
                description: 'Building lasting relationships through exceptional service.',
                icon: <Heart className="w-16 h-16 text-blue-600 mx-auto mb-6" />
              }].map((value, index) => (
                <div
                  key={index}
                  className="bg-white p-10 rounded-xl shadow-lg text-center transform transition duration-300 hover:scale-105 hover:shadow-2xl group"
                >
                  <div className="group-hover:animate-bounce">{value.icon}</div>
                  <h3 className="text-2xl sm:text-3xl font-semibold mb-4 group-hover:text-blue-600 transition duration-300">
                    {value.title}
                  </h3>
                  <p className="text-gray-600 group-hover:text-gray-800 transition duration-300">
                    {value.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-6">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-center text-gray-800 mb-12">
              What Our Clients Say
            </h2>
            <Slider
              width="250px"
              duration={60}
              pauseOnHover={true}
              blurBorders={false}
              blurBorderColor="#fff"
            >
              {clients.map((client, index) => (
                <Slider.Slide key={index}>
                  <div className="bg-white p-8 rounded-xl shadow-lg transform transition duration-300 hover:scale-105 min-h-[350px]">
                    <div className="flex justify-center">
                      <div className="w-24 h-24 rounded-full overflow-hidden border-2 border-gray-200">
                        <img
                          src={client.logo}
                          alt={client.name}
                          className="w-full h-full object-contain"
                        />
                      </div>
                    </div>
                    <p className="text-gray-600 italic mb-6 text-center">{client.testimonial}</p>
                    <h3 className="font-semibold text-center text-xl">{client.name}</h3>
                  </div>
                </Slider.Slide>
              ))}
            </Slider>
          </div>
        </section>
      </div>
    </>
  );
}
