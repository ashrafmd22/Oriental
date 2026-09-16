export const brandGroups = [
  'Tech & Audio',
  'Bags & Travel',
  'Kitchen & Drinkware',
  'Pens & Stationery',
  'Apparel & Lifestyle',
  'Watches & Accessories',
  'Gourmet & Wellness',
  'Home & Decor',
] as const;

export type BrandGroup = (typeof brandGroups)[number];

export interface Brand {
  name: string;
  /** Logo file in /public/assets/Brands. Brands without a logo render as a styled name card. */
  imagePath?: string;
  category: string;
  group: BrandGroup;
}

export const brands: Brand[] = [
  // Tech & Audio
  { name: 'boAt', imagePath: '/assets/Brands/2.jpg', category: 'Audio Products', group: 'Tech & Audio' },
  { name: 'Noise', imagePath: '/assets/Brands/7.jpg', category: 'Smart Wearables', group: 'Tech & Audio' },
  { name: 'Pebble', imagePath: '/assets/Brands/9.jpg', category: 'Smart Wearables', group: 'Tech & Audio' },
  { name: 'Philips', imagePath: '/assets/Brands/16.jpg', category: 'Electronics & Grooming', group: 'Tech & Audio' },
  { name: 'Portronics', imagePath: '/assets/Brands/18.jpg', category: 'Digital Accessories', group: 'Tech & Audio' },
  { name: 'JBL', imagePath: '/assets/Brands/27.png', category: 'Speakers & Headphones', group: 'Tech & Audio' },
  { name: 'Sony', imagePath: '/assets/Brands/28.png', category: 'Audio & Electronics', group: 'Tech & Audio' },
  { name: 'Logitech', imagePath: '/assets/Brands/29.png', category: 'Office Tech', group: 'Tech & Audio' },
  { name: 'Ambrane', imagePath: '/assets/Brands/46.png', category: 'Power Banks & Chargers', group: 'Tech & Audio' },
  { name: 'Zebronics', imagePath: '/assets/Brands/47.png', category: 'Speakers & Accessories', group: 'Tech & Audio' },
  { name: 'Fire-Boltt', imagePath: '/assets/Brands/48.png', category: 'Smart Watches', group: 'Tech & Audio' },

  // Bags & Travel
  { name: 'American Tourister', imagePath: '/assets/Brands/13.jpg', category: 'Luggage & Backpacks', group: 'Bags & Travel' },
  { name: 'Safari', imagePath: '/assets/Brands/22.jpg', category: 'Travel Gear', group: 'Bags & Travel' },
  { name: 'Wildcraft', imagePath: '/assets/Brands/25.jpg', category: 'Outdoor Gear', group: 'Bags & Travel' },
  { name: 'Samsonite', imagePath: '/assets/Brands/30.png', category: 'Premium Luggage', group: 'Bags & Travel' },
  { name: 'Skybags', imagePath: '/assets/Brands/49.png', category: 'Backpacks', group: 'Bags & Travel' },
  { name: 'VIP', imagePath: '/assets/Brands/31.png', category: 'Luggage', group: 'Bags & Travel' },
  { name: 'Mokobara', imagePath: '/assets/Brands/32.png', category: 'Premium Travel', group: 'Bags & Travel' },
  { name: 'Targus', imagePath: '/assets/Brands/50.png', category: 'Laptop Bags', group: 'Bags & Travel' },

  // Kitchen & Drinkware
  { name: 'Borosil', imagePath: '/assets/Brands/15.jpg', category: 'Glassware & Bottles', group: 'Kitchen & Drinkware' },
  { name: 'Pigeon', imagePath: '/assets/Brands/17.jpg', category: 'Kitchen Appliances', group: 'Kitchen & Drinkware' },
  { name: 'Lifelong', imagePath: '/assets/Brands/11.jpg', category: 'Home Appliances', group: 'Kitchen & Drinkware' },
  { name: 'Milton', imagePath: '/assets/Brands/51.png', category: 'Bottles & Flasks', group: 'Kitchen & Drinkware' },
  { name: 'Cello', imagePath: '/assets/Brands/52.png', category: 'Bottles & Lunch Boxes', group: 'Kitchen & Drinkware' },
  { name: 'Prestige', imagePath: '/assets/Brands/33.png', category: 'Kitchen Appliances', group: 'Kitchen & Drinkware' },
  { name: 'Tupperware', imagePath: '/assets/Brands/53.png', category: 'Storage & Bottles', group: 'Kitchen & Drinkware' },
  { name: 'Morphy Richards', imagePath: '/assets/Brands/34.png', category: 'Premium Appliances', group: 'Kitchen & Drinkware' },

  // Pens & Stationery
  { name: 'Parker', imagePath: '/assets/Brands/8.jpg', category: 'Luxury Pens', group: 'Pens & Stationery' },
  { name: 'Moleskine', imagePath: '/assets/Brands/4.jpg', category: 'Premium Notebooks', group: 'Pens & Stationery' },
  { name: 'Kaco', imagePath: '/assets/Brands/3.jpg', category: 'Writing Instruments', group: 'Pens & Stationery' },
  { name: 'Cross', imagePath: '/assets/Brands/35.png', category: 'Premium Pens', group: 'Pens & Stationery' },
  { name: 'Sheaffer', imagePath: '/assets/Brands/54.png', category: 'Premium Pens', group: 'Pens & Stationery' },
  { name: 'Pierre Cardin', imagePath: '/assets/Brands/63.png', category: 'Pens & Gift Sets', group: 'Pens & Stationery' },
  { name: 'Lamy', imagePath: '/assets/Brands/36.png', category: 'Designer Pens', group: 'Pens & Stationery' },

  // Apparel & Lifestyle
  { name: 'Adidas', imagePath: '/assets/Brands/14.jpg', category: 'Sports & Lifestyle', group: 'Apparel & Lifestyle' },
  { name: 'Puma', imagePath: '/assets/Brands/19.jpg', category: 'Sports & Lifestyle', group: 'Apparel & Lifestyle' },
  { name: 'Tommy Hilfiger', imagePath: '/assets/Brands/20.jpg', category: 'Premium Fashion', group: 'Apparel & Lifestyle' },
  { name: 'Peter England', imagePath: '/assets/Brands/5.jpg', category: 'Formal Apparel', group: 'Apparel & Lifestyle' },
  { name: 'Nike', imagePath: '/assets/Brands/37.png', category: 'Sportswear', group: 'Apparel & Lifestyle' },
  { name: 'U.S. Polo Assn.', imagePath: '/assets/Brands/38.png', category: 'Polos & Casuals', group: 'Apparel & Lifestyle' },
  { name: 'Allen Solly', imagePath: '/assets/Brands/55.png', category: 'Corporate Apparel', group: 'Apparel & Lifestyle' },
  { name: 'Van Heusen', imagePath: '/assets/Brands/56.png', category: 'Corporate Apparel', group: 'Apparel & Lifestyle' },

  // Watches & Accessories
  { name: 'Gods', imagePath: '/assets/Brands/12.jpg', category: 'Fashion Accessories', group: 'Watches & Accessories' },
  { name: 'Titan', imagePath: '/assets/Brands/39.png', category: 'Watches', group: 'Watches & Accessories' },
  { name: 'Fossil', imagePath: '/assets/Brands/41.png', category: 'Watches & Leather', group: 'Watches & Accessories' },
  { name: 'Fastrack', imagePath: '/assets/Brands/40.png', category: 'Watches & Eyewear', group: 'Watches & Accessories' },
  { name: 'Hidesign', imagePath: '/assets/Brands/42.png', category: 'Leather Accessories', group: 'Watches & Accessories' },

  // Gourmet & Wellness
  { name: 'Sleepy Owl', imagePath: '/assets/Brands/21.jpg', category: 'Premium Coffee', group: 'Gourmet & Wellness' },
  { name: 'Vahdam Teas', imagePath: '/assets/Brands/24.jpg', category: 'Premium Teas', group: 'Gourmet & Wellness' },
  { name: '4700BC', imagePath: '/assets/Brands/23.jpg', category: 'Gourmet Popcorn', group: 'Gourmet & Wellness' },
  { name: 'Yoga Bar', imagePath: '/assets/Brands/26.jpg', category: 'Healthy Snacks', group: 'Gourmet & Wellness' },
  { name: 'Open Secret', imagePath: '/assets/Brands/10.jpg', category: 'Healthy Snacks', group: 'Gourmet & Wellness' },
  { name: 'Paper Boat', imagePath: '/assets/Brands/6.jpg', category: 'Beverages', group: 'Gourmet & Wellness' },
  { name: 'Happilo', imagePath: '/assets/Brands/57.png', category: 'Dry Fruits & Hampers', group: 'Gourmet & Wellness' },
  { name: 'Lindt', imagePath: '/assets/Brands/58.png', category: 'Premium Chocolates', group: 'Gourmet & Wellness' },
  { name: 'Ferrero Rocher', imagePath: '/assets/Brands/43.png', category: 'Chocolates', group: 'Gourmet & Wellness' },
  { name: 'Forest Essentials', imagePath: '/assets/Brands/44.png', category: 'Luxury Ayurveda', group: 'Gourmet & Wellness' },
  { name: 'Bombay Shaving Company', imagePath: '/assets/Brands/59.png', category: 'Grooming Kits', group: 'Gourmet & Wellness' },
  { name: 'The Man Company', imagePath: '/assets/Brands/60.png', category: 'Grooming Kits', group: 'Gourmet & Wellness' },

  // Home & Decor
  { name: 'Lavian', imagePath: '/assets/Brands/1.jpg', category: 'Premium Gifts', group: 'Home & Decor' },
  { name: 'Chumbak', imagePath: '/assets/Brands/61.avif', category: 'Quirky Decor & Gifts', group: 'Home & Decor' },
  { name: 'Bombay Dyeing', imagePath: '/assets/Brands/45.png', category: 'Home Linen', group: 'Home & Decor' },
  { name: 'Iris', imagePath: '/assets/Brands/62.png', category: 'Candles & Fragrance', group: 'Home & Decor' },
];
