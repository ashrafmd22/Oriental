import React from 'react';
import Slider from 'react-infinite-logo-slider';

// Define the client logos (as you did before)
const clients = [
  { name: 'Paytm', logo: 'https://1000logos.net/wp-content/uploads/2021/03/Paytm_Logo.jpg' },
  { name: 'DS Group', logo: 'https://addx.in/wp-content/uploads/2024/04/5.png' },
  { name: 'Star Sports', logo: 'https://addx.in/wp-content/uploads/2024/04/10.png' },
  { name: 'FIITJEE', logo: 'https://addx.in/wp-content/uploads/2024/04/6.png' },
  { name: 'Ultratech Cement', logo: 'https://upload.wikimedia.org/wikipedia/en/thumb/9/96/Ultratech_Cement_Logo.svg/1200px-Ultratech_Cement_Logo.svg.png' },
  { name: 'Reliance', logo: 'https://rilstaticasset.akamaized.net/sites/default/files/2023-02/L.1.jpg' },
  { name: 'Tata Motors', logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQVfTSEgAJMQfItAPgWrbJQNQLL1Ad2i65PJg&s' },
  { name: 'HDFC Bank', logo: 'https://e7.pngegg.com/pngimages/257/159/png-clipart-hdfc-logo-thumbnail-bank-logos-thumbnail.png' },
  { name: 'Amazon', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1280px-Amazon_logo.svg.png' },
  { name: 'Microsoft', logo: 'https://download.logo.wine/logo/Microsoft/Microsoft-Logo.wine.png' }
];

export function ClientLogos() {
  return (
    <section className="py-16 bg-gradient-to-r from-white to-white">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl font-extrabold text-center text-blue-800 mb-12">Trusted by Leading Brands</h2>

        {/* Infinite Logo Slider */}
        <Slider
          width="250px" // Control the width of each logo in the slider
          duration={40} // Duration of the slide movement
          pauseOnHover={true} // Pause on hover
          blurBorders={false} // Disable blur effect on borders
          blurBorderColor={'#fff'} // Set the blur color if blurBorders is enabled
        >
          {/* Render all client logos dynamically using the Slider */}
          {clients.map((client, index) => (
            <Slider.Slide key={index}>
              <img
                src={client.logo}
                alt={client.name}
                className="w-36" // Adjust the width of the logo
              />
            </Slider.Slide>
          ))}
        </Slider>
      </div>
    </section>
  );
}
