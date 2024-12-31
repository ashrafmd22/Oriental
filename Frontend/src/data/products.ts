import { Product } from '../types/product';
import { v4 as uuidv4 } from 'uuid';

export const products: Product[] = [
  {
    "id": "ad1dc37d-6c37-4374-afc0-4dc60ebdece4",
    "name": "Executive Leather Laptop Bag",
    "category": "Bags",
    "price": "₹2,499",
    "code": "BAG-001",
    "description": "Premium leather laptop bag with multiple compartments, perfect for professionals.",
    "features": [
      "Genuine leather construction",
      "Padded laptop compartment (fits up to 15.6\")",
      "Multiple organizer pockets",
      "Adjustable shoulder strap",
      "Water-resistant"
    ],
    "images": [
      "/assets/Bags/1.jpg",
      "/assets/Bags/2.jpg",
      "/assets/Bags/3.jpg"
    ]
  },
  {
    "id": "2f461a58-848e-426a-85fe-002e3d474def",
    "name": "Leather Duffel Bag",
    "category": "Bags",
    "price": "₹4,199",
    "code": "BAG-003",
    "description": "Premium leather duffel bag, perfect for extended trips and gym use.",
    "features": [
      "Genuine leather construction",
      "Spacious interior with zipper compartments",
      "Comfortable leather handles",
      "Adjustable shoulder strap",
      "Rust-resistant zippers"
    ],
    "images": [
      "/assets/Bags/7.jpg",
      "/assets/Bags/8.jpg",
      "/assets/Bags/9.jpg"
    ]
  },
  {
    "id": "270a5f31-97d5-426a-87c1-e1f708c3a93a",
    "name": "Luxury Black Tote Bag",
    "category": "Bags",
    "price": "₹3,599",
    "code": "BAG-006",
    "description": "Sleek and elegant black tote bag for business or casual use.",
    "features": [
      "Premium leather material",
      "Spacious interior with multiple compartments",
      "Soft, padded handles",
      "Elegant black finish",
      "Gold hardware accents"
    ],
    "images": [
      "/assets/Bags/13.jpg",
      "/assets/Bags/14.jpg",
      "/assets/Bags/15.jpg"
    ]
  },
  {
    "id": "e5f7bf80-f16a-4abb-b78e-2383ccf823f1",
    "name": "Compact Sling Bag",
    "category": "Bags",
    "price": "₹899",
    "code": "BAG-008",
    "description": "Small yet stylish sling bag for carrying essentials on the go.",
    "features": [
      "Compact and lightweight",
      "Adjustable shoulder strap",
      "Ideal for carrying phones, wallets, and keys",
      "Multiple colors available",
      "Durable polyester material"
    ],
    "images": [
      "/assets/Bags/16.jpg",
      "/assets/Bags/17.jpg",
      "/assets/Bags/18.jpg"
    ]
  },
  {
    "id": "bc63fa59-6119-4fee-b6c2-dfdef47c9253",
    "name": "Smart Backpack with USB Charging Port",
    "category": "Bags",
    "price": "₹3,199",
    "code": "BAG-009",
    "description": "Smart backpack with built-in USB charging port and anti-theft features.",
    "features": [
      "USB charging port for convenience",
      "Water-resistant material",
      "Multiple secure compartments",
      "Anti-theft zippers",
      "Ergonomic design for comfort"
    ],
    "images": [
      "/assets/Bags/20.jpg",
      "/assets/Bags/19.jpg",
      "/assets/Bags/21.jpg"
    ]
  },
  {
    "id": "0420b760-8ada-49f5-8288-bed07dd14a23",
    "name": "Canvas Laptop Backpack",
    "category": "Bags",
    "price": "₹1,799",
    "code": "BAG-010",
    "description": "Stylish and functional canvas laptop backpack for daily use.",
    "features": [
      "Fits laptops up to 15.6\"",
      "Multiple compartments for organization",
      "Durable canvas material",
      "Padded straps for comfort",
      "Water-resistant base"
    ],
    "images": [
      "/assets/Bags/22.jpg",
      "/assets/Bags/23.jpg"]
  },
  {
    "id": "06483cee-470b-4b6d-9933-ce38979cbad3",
    "name": "Foldable Gym Bag",
    "category": "Bags",
    "price": "₹1,199",
    "code": "BAG-013",
    "description": "Compact gym bag that folds for easy storage when not in use.",
    "features": [
      "Foldable design for easy storage",
      "Water-resistant exterior",
      "Comfortable shoulder straps",
      "Main compartment with zipper closure",
      "Multiple colors available"
    ],
    "images": [
      "/assets/Bags/24.jpg",
      "/assets/Bags/25.jpg",
      "/assets/Bags/26.jpg"
    ]
  },
  {
    "id": "77cf95b0-dffd-4f2b-b3a7-4fd1b0bef3ae",
    "name": "Classic Canvas Tote",
    "category": "Bags",
    "price": "₹899",
    "code": "BAG-014",
    "description": "Casual, lightweight canvas tote bag for everyday use.",
    "features": [
      " This mini bag is an ideal companion for daily needs.",
      "Large main compartment",
      "Double handles for easy carry",
      "Eco-friendly design",
      "Multiple color options"
    ],
    "images": [
      "/assets/Bags/27.jpg",
      "/assets/Bags/28.jpg",
      "/assets/Bags/29.jpg"
    ]
  },
  {
    "id": "07d88414-5307-479e-9451-e62b7b2df77e",
    "name": "Chic Crossbody Bag",
    "category": "Bags",
    "price": "₹999",
    "code": "BAG-017",
    "description": "Fashionable crossbody bag for daily essentials.",
    "features": [
      "Compact design",
      "Adjustable crossbody strap",
      "Premium faux leather",
      "Secure zipper closure",
      "Multiple compartments"
    ],
    "images": [
      "/assets/Bags/30.jpg",
      "/assets/Bags/31.jpg",
      "/assets/Bags/32.jpg"
    ]
  },
  {
    "id": "fd608e50-71e9-48fa-9bc4-9c3c8d8f45ef",
    "name": "School Backpack",
    "category": "Bags",
    "price": "₹799",
    "code": "BAG-018",
    "description": "Fun and durable backpack for kids to carry school essentials.",
    "features": [
      "Lightweight design",
      "Multiple storage compartments",
      "Durable, water-resistant material",
      "Bright, colorful designs",
      "Padded straps for comfort"
    ],
    "images": [
      "/assets/Bags/33.jpg",
      "/assets/Bags/34.jpg"
    ]
  },
  {
    "id": "9e2c0071-bee1-4095-85f8-3669e0f082b2",
    "name": "HP Backpack",
    "category": "Bags",
    "price": "₹799",
    "code": "BAG-026",
    "description": "Durable and stylish backpack for laptops and daily use.",
    "features": [
      "Compact and travel-friendly design",
      "Durable, water-resistant material",
      "Multiple storage compartments",
      "Padded straps for comfort",
      "Fits most laptops up to 15.6 inches"
    ],
    "images": [
      "/assets/Bags/35.jpg",
      "/assets/Bags/36.jpg"
    ]
  },
  {
    "id": "0ead6345-5ea5-42dc-a5c5-ea1c4882d6a1",
    "name": "American Tourister Backpack",
    "category": "Bags",
    "price": "₹799",
    "code": "BAG-027",
    "description": "Spacious and durable backpack designed for professionals and students.",
    "features": [
      "Lightweight and durable with breathable mesh padding for comfort",
      "Ample storage with multiple compartments (32.5 x 47.5 x 20 cm)",
      "Weather-resistant material",
      "Dedicated 17-inch padded laptop compartment for secure gadget storage",
    ],
    "images": [
      "/assets/Bags/37.jpg",
      "/assets/Bags/38.jpg"
    ]
  },
  {
    "id": "24303775-6ed5-4cd0-9448-b7608051f9fb",
    "name": "Elite School Backpack",
    "category": "Bags",
    "price": "₹950",
    "code": "BAG-028",
    "description": "Stylish and ergonomic design, perfect for school and daily use.",
    "features": [
      "Soft padded straps for comfort",
      "Large main compartment with laptop sleeve",
      "Breathable mesh back panel",
      "Multiple front pockets for accessories"
    ],
    "images": ["/assets/Bags/39.jpg", "/assets/Bags/40.jpg"]
  },
  {
    "id": "f3023878-650a-4cc9-afcf-763c526bd850",
    "name": "Durable Stylish Backpack",
    "category": "Bags",
    "price": "₹699",
    "code": "BAG-029",
    "description": "A stylish and durable backpack with ample storage and comfortable straps.",
    "features": [
      "Durable fabric with water-resistant coating",
      "Multiple pockets for better organization",
      "Padded straps for comfortable wear",
      "Stylish design suitable for all occasions"
    ],
    "images": ["/assets/Bags/41.jpg", "/assets/Bags/42.jpg"]
  },
  {
    "id": "3df9d7d9-a3e7-414b-ae46-4db31153f7c0",
    "name": "Business Laptop Backpack",
    "category": "Bags",
    "price": "₹1,499",
    "code": "BAG-030",
    "description": "Designed for professionals, this laptop backpack combines style and functionality.",
    "features": [
      "Dedicated 15-inch laptop compartment with secure padding",
      "Breathable back panel for comfort during long hours",
      "Organized front pocket with compartments for pens, chargers, and more",
      "Elegant and modern design suitable for business trips"
    ],
    "images": ["/assets/Bags/43.jpg", "/assets/Bags/44.jpg"]
  },
  {
    "id": "612542fd-265c-4ac7-952c-bf7f42f19675",
    "name": "Safari Crew Overnighter Backpack",
    "category": "Bags",
    "price": "₹1,499",
    "code": "BAG-031",
    "description": "Designed for professionals, this laptop backpack combines style and functionality.",
    "features": [
      "Large suitcase compartment for clothes and essentials, plus a separate laptop compartment.",
      "Made of 100% polyester with water-resistant properties, ensuring durability and light weight.",
      "Heavy-duty compression straps and buckles to secure items, along with padded shoulder straps for comfort.",
      "Elegant and modern design suitable for business trips"
    ],
    "images": ["/assets/Bags/45.jpg",
      "/assets/Bags/46.jpg",
      "/assets/Bags/47.jpg",
      "/assets/Bags/48.jpg"]
  },
  {
    "id": "d8fe87f9-644e-4977-ab34-dfd52602d5aa",
    "name": "Ultimate Waterproof Backpack",
    "category": "Bags",
    "price": "₹1,199",
    "code": "BAG-032",
    "description": "The ultimate waterproof backpack for students and travelers with an active lifestyle.",
    "features": [
      "Waterproof design with sealed zippers",
      "Comfortable shoulder straps and back panel",
      "Large front pocket for quick access",
      "Durable material for long-lasting use"
    ],
    "images": ["/assets/Bags/49.jpg", "/assets/Bags/50.jpg"]
  },
  {
    "id": "6cde0736-75de-4ca7-8bea-ff188d1efec9",
    "name": "BIGBERRY Newage leatherite/faux Backpack",
    "category": "Bags",
    "price": "₹1,100",
    "code": "BAG-033",
    "description": "A trendy, waterproof backpack designed for young professionals and students.",
    "features": [
      "perfect backpack for any adventure! Stylish, durable & functional packs for travel, school, or hiking.",
      "Multiple internal organizers for gadgets",
      "Stylish and modern appearance",
      "Padded laptop compartment for extra protection"
    ],
    "images": ["/assets/Bags/51.jpg", "/assets/Bags/52.jpg", "/assets/Bags/53.jpg", "/assets/Bags/54.jpg"]
  },
  {
    "id": "68ce2f61-c8a7-45e9-b2c9-dd89d071f204",
    "name": "Slim Laptop Backpack",
    "category": "Bags",
    "price": "₹1,099",
    "code": "BAG-034",
    "description": "A slim, minimalist laptop backpack that offers sleek protection for your devices.",
    "features": [
      "Ultra-slim profile for easy portability",
      "Padded sleeve for 13-inch laptops",
      "Waterproof exterior material to keep your gear safe",
      "Ergonomic shoulder straps for all-day comfort"
    ],
    "images": ["/assets/Bags/55.jpg", "/assets/Bags/56.jpg"]
  },
  {
    "id": "d25c727e-1416-412e-9755-f7222e2cc681",
    "name": "Safari Hitech Backpack",
    "category": "Bags",
    "price": "₹699",
    "code": "BAG-035",
    "description": "A sleek and waterproof backpack designed for city explorers.",
    "features": [
      "Slim design with high storage capacity",
      "Waterproof material for all-weather durability",
      "Comfortable back padding and straps",
      "Stylish design with modern aesthetics"
    ],
    "images": ["/assets/Bags/57.jpg", "/assets/Bags/58.jpg"]
  },
  {
    "id": "ac75e788-8acd-4419-b453-db884f9907e1",
    "name": "Safari Seek Backpack",
    "category": "Bags",
    "price": "₹850",
    "code": "BAG-036",
    "description": "A sporty and waterproof backpack, perfect for active students.",
    "features": [
      "Side pockets for water bottles and accessories",
      "Waterproof material to keep items dry",
      "Multiple internal pockets for easy organization",
      "Comfortable, padded straps for all-day wear"
    ],
    "images": ["/assets/Bags/59.jpg", "/assets/Bags/60.jpg"]
  },
  {
    "id": "323438d2-46ff-4aea-a17b-d4b153d71441",
    "name": "Multi-Compartment Waterproof Stylish Backpack",
    "category": "Bags",
    "price": "₹550",
    "code": "BAG-037",
    "description": "A stylish and functional backpack with multiple compartments, ideal for travel or daily use, made from waterproof material.",
    "features": [
      "Multiple compartments for organized storage",
      "Waterproof design to protect your belongings",
      "Lightweight yet durable construction",
      "Breathable back panel for added comfort",
      "Adjustable padded shoulder straps for ease of use"
    ],
    "images": ["/assets/Bags/61.jpg", "/assets/Bags/62.jpg"]
  },
  {
    "id": "bc46008f-aa21-4ab9-a028-6f63d57b0889",
    "name": "Professional Laptop Backpack",
    "category": "Bags",
    "price": "₹1,799",
    "code": "BAG-038",
    "description": "A high-quality laptop backpack designed for professionals and tech enthusiasts.",
    "features": [
      "Waterproof fabric with padded sections to keep your devices safe",
      "Multiple compartments for organization",
      "Padded adjustable straps for comfort",
      "Modern design with business-friendly aesthetic"
    ],
    "images": ["/assets/Bags/63.jpg", "/assets/Bags/64.jpg"]
  },
  {
    "id": "f5f41f17-f4da-4579-8959-91e6ef8bff4d",
    "name": "Women's Designer Bag",
    "category": "Bags",
    "price": "₹4,499",
    "code": "BAG-022",
    "description": "Elegant designer handbag for fashion-forward women.",
    "features": [
      "High-end designer material",
      "Premium stitching",
      "Spacious interior with multiple pockets",
      "Fashionable and trendy"
    ],
    "images": [
      "/assets/Bags/65.jpg", "/assets/Bags/66.jpg", "/assets/Bags/67.jpg"
    ]
  },
  {
    "id": "2306e33f-1d20-4706-a831-162daf7bd10a",
    "name": "Baseball Cap",
    "category": "Caps",
    "price": "₹699",
    "code": "CAP-001",
    "description": "Classic baseball cap, perfect for casual wear and outdoor activities.",
    "features": [
      "Adjustable strap for a perfect fit",
      "Soft cotton material",
      "Breathable mesh for ventilation",
      "Unisex design",
      "Durable and comfortable"
    ],
    "images": [
      "/assets/Caps/1.jpg", "/assets/Caps/2.jpg",
    ]
  },
  {
    "id": "fb17c8d0-4b22-4827-835c-986077017175",
    "name": "Sporty Flex Cap",
    "category": "Caps",
    "price": "₹849",
    "code": "CAP-002",
    "description": "Ideal cap for sports enthusiasts and athletes.",
    "features": [
      "Quick-drying fabric",
      "Elastic stretch fit",
      "Lightweight and durable",
      "Perfect for outdoor activities",
      "UV protection"
    ],
    "images": [
      "/assets/Caps/3.jpg", "/assets/Caps/4.jpg",
    ]
  },
  {
    "id": "cbd94488-ef8d-4837-a6e3-e7793cedf4e3",
    "name": "Trucker Cap",
    "category": "Caps",
    "price": "₹749",
    "code": "CAP-003",
    "description": "Retro-inspired trucker cap with mesh back for better airflow.",
    "features": [
      "Mesh back for ventilation",
      "Adjustable snapback closure",
      "Stylish and durable",
      "Unisex design",
      "Comfortable for long wear"
    ],
    "images": [
      "/assets/Caps/5.jpg", "/assets/Caps/6.jpg",
    ]
  },
  {
    "id": "6356c35f-4e16-4d18-82b0-2147d0a4c6ba",
    "name": "Adventurer Hiking Cap",
    "category": "Caps",
    "price": "₹949",
    "code": "CAP-004",
    "description": "Perfect for outdoor lovers and hiking enthusiasts.",
    "features": [
      "Water-resistant fabric",
      "Breathable mesh panels",
      "Adjustable buckle closure",
      "Lightweight and compact",
      "UV protective"
    ],
    "images": [
      "/assets/Caps/7.jpg", "/assets/Caps/8.jpg",
    ]
  },
  {
    "id": "158ea24a-4c62-4de3-adc3-3b554d5067c2",
    "name": "Summer Breeze Cap",
    "category": "Caps",
    "price": "₹699",
    "code": "CAP-005",
    "description": "Cool and breathable cap for sunny days.",
    "features": [
      "Soft cotton fabric",
      "Light and airy",
      "Sweat-wicking technology",
      "Adjustable fit",
      "Perfect for the beach or pool"
    ],
    "images": [
      "/assets/Caps/9.jpg", "/assets/Caps/10.jpg",
    ]
  },
  {
    "id": "61f8de8c-b3d3-45ad-b597-c7e283039a8f",
    "name": "Champion Pro Cap",
    "category": "Caps",
    "price": "₹1,199",
    "code": "CAP-006",
    "description": "For those who aim to be number one, on and off the field.",
    "features": [
      "Premium moisture-wicking fabric",
      "Structured and sleek",
      "Adjustable Velcro strap",
      "Aerodynamic design",
      "Ideal for athletes"
    ],
    "images": [
      "/assets/Caps/12.jpg", "/assets/Caps/11.jpg",
    ]
  },
  {
    "id": "8ed80b90-6ccc-4597-883d-6c8f67ae00f6",
    "name": "Retro Vintage Cap",
    "category": "Caps",
    "price": "₹749",
    "code": "CAP-007",
    "description": "Inspired by the ocean, designed for comfort.",
    "features": [
      "Soft and breathable",
      "Waterproof fabric",
      "Unisex design",
      "Stylish wave pattern",
      "Perfect for beach days"
    ],
    "images": [
      "/assets/Caps/13.jpg", "/assets/Caps/14.jpg",
    ]
  },
  {
    "id": "f8d10ac6-d32d-4ac7-bf81-13f91884d88c",
    "name": "Classic Camo Cap",
    "category": "Caps",
    "price": "₹899",
    "code": "CAP-008",
    "description": "A sleek, cutting-edge design for the modern individual.",
    "features": [
      "High-tech fabric",
      "Reflective details for visibility",
      "Adjustable straps",
      "Unisex design",
      "Sporty and futuristic"
    ],
    "images": [
      "/assets/Caps/15.jpg", "/assets/Caps/16.jpg",
    ]
  },
  {
    "id": "02200f1f-8abb-46a7-b6c7-4a6ffc30078b",
    "name": "Rockstar Snapback Cap",
    "category": "Caps",
    "price": "₹799",
    "code": "CAP-010",
    "description": "Edgy, bold, and built for a rockstar look",
    "features": [
      "Recycled fabric",
      "Adjustable strap",
      "Eco-friendly production process",
      "Breathable and lightweight",
      "Green design"
    ],
    "images": [
      "/assets/Caps/17.jpg", "/assets/Caps/18.jpg",
    ]
  },
  {
    "id": "e125ab43-0e15-46a3-b01f-b27c0a12950f",
    "name": "Classic Zip-Up Jacket",
    "category": "Jackets",
    "price": "₹799",
    "code": "JKT-001",
    "description": "A simple zip-up jacket for everyday wear, perfect for layering.",
    "features": [
      "Lightweight fabric",
      "Front zip closure",
      "Soft and breathable material",
      "Two front pockets",
      "Casual design"
    ],
    "images": [
      "/assets/Jackets/1.jpg", "/assets/Jackets/2.jpg", "/assets/Jackets/3.jpg"]
  },
  {
    "id": "c99dd6ad-014c-418d-b95f-2de4b2fda508",
    "name": "Casual Bomber Jacket",
    "category": "Jackets",
    "price": "₹999",
    "code": "JKT-002",
    "description": "A comfortable bomber jacket with a relaxed fit, ideal for a casual day out.",
    "features": [
      "Bomber style with ribbed cuffs",
      "Zipper closure",
      "Soft and comfortable lining",
      "Great for layering over tees",
      "Available in various colors"
    ],
    "images": [
      "/assets/Jackets/4.jpg", "/assets/Jackets/5.jpg", "/assets/Jackets/6.jpg"
    ]

  },
  {
    "id": "39dc881a-c3fa-45a6-abc7-f0e1f1bd2582",
    "name": "Lightweight Windbreaker Jacket",
    "category": "Jackets",
    "price": "₹699",
    "code": "JKT-003",
    "description": "A lightweight jacket designed for breezy days, perfect for outdoor activities.",
    "features": [
      "Water-resistant material",
      "Adjustable hood",
      "Front zipper and pockets",
      "Lightweight and breathable",
      "Perfect for mild weather"
    ],
    "images": [
      "/assets/Jackets/7.jpg", "/assets/Jackets/8.jpg", "/assets/Jackets/9.jpg"
    ]
  },
  {
    "id": "c1b6c08d-20cf-4c09-8bc4-86e6c3589b65",
    "name": "Everyday Zip Jacket",
    "category": "Jackets",
    "price": "₹799",
    "code": "JKT-004",
    "description": "A versatile zip jacket for easy styling and everyday comfort.",
    "features": [
      "Front zipper closure",
      "Two side pockets",
      "Casual and simple design",
      "Soft cotton fabric",
      "Great for casual outings"
    ],
    "images": [
      "/assets/Jackets/10.jpg", "/assets/Jackets/11.jpg", "/assets/Jackets/12.jpg"
    ]
  },
  {
    "id": "56d7786d-6ed6-422e-b168-4f0a7279fd39",
    "name": "Comfort Fit Fleece Jacket",
    "category": "Jackets",
    "price": "₹899",
    "code": "JKT-005",
    "description": "A cozy fleece jacket for a comfortable and warm feel.",
    "features": [
      "Soft fleece lining",
      "Front zipper with a high collar",
      "Perfect for chilly weather",
      "Lightweight yet warm",
      "Two side pockets"
    ],
    "images": [
      "/assets/Jackets/13.jpg", "/assets/Jackets/14.jpg", "/assets/Jackets/15.jpg"
    ]
  },

  {
    "id": "ac5b3621-6e98-477a-b033-11004a95b459",
    "name": "Simple Casual Jacket",
    "category": "Jackets",
    "price": "₹799",
    "code": "JKT-007",
    "description": "An easy-to-wear casual jacket designed for daily comfort.",
    "features": [
      "Soft and breathable fabric",
      "Simple zip-up design",
      "Great for casual layering",
      "Perfect for spring or fall",
      "Available in multiple colors"
    ],
    "images": [
      "/assets/Jackets/18.jpg", "/assets/Jackets/19.jpg", "/assets/Jackets/20.jpg"
    ]
  },
  {
    "id": "92d03194-2542-442a-824f-4710018f27ae",
    "name": "Minimalist Hoodie Jacket",
    "category": "Jackets",
    "price": "₹999",
    "code": "JKT-008",
    "description": "A minimalist hoodie jacket with a simple design, ideal for everyday wear.",
    "features": [
      "Hooded design with drawstrings",
      "Lightweight cotton blend",
      "Comfortable and easy to wear",
      "Front zip closure",
      "Available in neutral tones"
    ],
    "images": [
      "/assets/Jackets/16.jpg", "/assets/Jackets/17.jpg"
    ]
  },
  {
    "id": "82686c17-c01c-4149-8b6d-fe12f36e5f55",
    "name": "Bamboo Mug",
    "category": "Drinkware",
    "price": "₹699",
    "code": "DM-001",
    "description": "Eco-friendly bamboo mug, perfect for enjoying hot or cold beverages.",
    "features": [
      "Made from natural bamboo",
      "Stainless steel interior for insulation",
      "Durable and sustainable design",
      "Ideal for tea, coffee, or water",
      "Lightweight and easy to carry"
    ],
    "images": [
      "/assets/Drinkware/1.jpg", "/assets/Drinkware/2.jpg"
    ]
  },
  {
    "id": "3a48974b-6d8a-4d19-83f7-ea770067edf0",
    "name": "Hot & Cold Flask (THANDA GARAM)",
    "category": "Drinkware",
    "price": "₹899",
    "code": "DM-002",
    "description": "Versatile 2-in-1 hot and cold flask with dual compartments for convenience.",
    "features": [
      "800ml capacity: Top 500ml, Bottom 300ml",
      "Keeps beverages hot or cold for hours",
      "Durable stainless steel construction",
      "Compact and lightweight (477g)",
      "Leak-proof design for travel"
    ],
    "images": [
      "/assets/Drinkware/3.jpg"
    ]
  },
  {
    "id": "8575fcd9-579f-4101-8d2e-6aeda933014f",
    "name": "Hot & Cold Sports Bottle – CLOUD",
    "category": "Drinkware",
    "price": "₹799",
    "code": "DM-003",
    "description": "Stylish hot and cold sports bottle with a sleek cloud design.",
    "features": [
      "Maintains temperature for up to 12 hours",
      "Durable and lightweight construction",
      "Secure screw-on lid",
      "Modern and elegant design",
      "Perfect for outdoor and indoor activities"
    ],
    "images": [
      "/assets/Drinkware/4.jpg", "/assets/Drinkware/5.jpg"
    ]
  },
  {
    "id": "2fd123b0-d092-475e-9375-0a5c80846416",
    "name": "Hot & Cold Sports Bottle – ULTRA COLOR",
    "category": "Drinkware",
    "price": "₹899",
    "code": "DM-004",
    "description": "Vibrant hot and cold sports bottle with colorful design options.",
    "features": [
      "Double-walled insulation for temperature retention",
      "500ml capacity",
      "Bright and eye-catching colors",
      "Leak-proof cap for spill-free use",
      "Ideal for active lifestyles"
    ],
    "images": [
      "/assets/Drinkware/6.jpg"
    ]
  },
  {
    "id": "c8f608fb-e82b-452d-9c5a-03fda6e25697",
    "name": "Stainless Steel – TRENDY",
    "category": "Drinkware",
    "price": "₹749",
    "code": "DM-005",
    "description": "Modern stainless steel bottle with a trendy design for everyday use.",
    "features": [
      "500ml capacity",
      "Sleek and lightweight design",
      "Durable stainless steel material",
      "Ideal for hot and cold beverages",
      "Compact and easy to carry"
    ],
    "images": [
      "/assets/Drinkware/7.jpg", "/assets/Drinkware/8.jpg"
    ]
  },
  {
    "id": "79e2e8f4-2eb3-4ba2-a9b1-9c9b9b71370d",
    "name": "Stainless Steel Hot & Cold Bottle – COLA 750",
    "category": "Drinkware",
    "price": "₹999",
    "code": "DM-006",
    "description": "750ml stainless steel hot and cold bottle with a sleek cola-style design.",
    "features": [
      "Double-walled insulation for temperature retention",
      "750ml capacity",
      "Rust-resistant stainless steel",
      "Stylish cola bottle shape",
      "Perfect for daily hydration"
    ],
    "images": [
      "/assets/Drinkware/10.jpg", "/assets/Drinkware/9.jpg"
    ]
  },
  {
    "id": "83af7882-633d-479c-a0b2-2f030842d73c",
    "name": "Stainless Steel Hot & Cold Bottle – GOTHIC",
    "category": "Drinkware",
    "price": "₹1,099",
    "code": "DM-007",
    "description": "Elegant stainless steel bottle with a gothic-inspired design.",
    "features": [
      "Double-walled insulation for up to 12 hours",
      "600ml capacity",
      "Unique and artistic design",
      "Leak-proof lid for portability",
      "Durable and stylish"
    ],
    "images": [
      "/assets/Drinkware/11.jpg", "/assets/Drinkware/12.jpg"
    ]
  },
  {
    "id": "4b8bd1df-628d-40a7-9d33-7fa5f3e718f2",
    "name": "Stainless Steel Sports Bottle – Magnum",
    "category": "Drinkware",
    "price": "₹849",
    "code": "DM-008",
    "description": "Sturdy stainless steel sports bottle with a premium finish.",
    "features": [
      "750ml capacity",
      "Wide mouth for easy filling",
      "Ergonomic design for easy grip",
      "Durable construction for daily use",
      "Rust-proof and easy to clean"
    ],
    "images": [
      "/assets/Drinkware/13.jpg"
    ]
  },
  {
    "id": "61ae8ab5-d701-400d-9d38-981bccc82b40",
    "name": "Stainless Steel Sports Bottle – Omega",
    "category": "Drinkware",
    "price": "₹899",
    "code": "DM-009",
    "description": "High-capacity stainless steel sports bottle, perfect for active individuals.",
    "features": [
      "1000ml capacity",
      "Leak-proof design",
      "Stylish and durable finish",
      "Comfortable grip for sports activities",
      "Keeps drinks hot or cold for hours"
    ],
    "images": [
      "/assets/Drinkware/14.jpg"
    ]
  },
  {
    "id": "2d467078-0fd9-47ed-9321-c5a1be3a92ee",
    "name": "Stainless Steel Travel Mug – TOBY",
    "category": "Drinkware",
    "price": "₹799",
    "code": "DM-010",
    "description": "Compact stainless steel travel mug, ideal for your favorite hot or cold drinks.",
    "features": [
      "Double-walled insulation",
      "350ml capacity",
      "Comfortable grip handle",
      "Compact design for easy travel",
      "Fits most car cup holders"
    ],
    "images": [
      "/assets/Drinkware/15.jpg", "/assets/Drinkware/16.jpg"
    ]
  },
  {
    "id": "928e21e6-6683-40ff-afdd-f882e4f963ed",
    "name": "Caran d’Ache Black Calfskin Leather A5",
    "category": "Diaries",
    "price": "₹1,599",
    "code": "DIA-001",
    "description": "Premium A5-sized diary with black calfskin leather cover for a professional touch.",
    "features": [
      "Soft and durable calfskin leather cover",
      "192 ruled pages on high-quality paper",
      "Compact A5 size for easy portability",
      "Elegant black design for formal use",
      "Perfect for daily journaling or note-taking"
    ],
    "images": [
      "/assets/Diaries/1.jpg", "/assets/Diaries/2.jpg"
    ]
  },
  {
    "id": "1b82fc24-780e-4b1e-a074-8c145a8260cc",
    "name": "Caran d’Ache Cashmere Leather A5",
    "category": "Diaries",
    "price": "₹1,799",
    "code": "DIA-002",
    "description": "Luxurious A5 diary with a soft cashmere leather cover for a refined feel.",
    "features": [
      "Elegant cashmere leather binding",
      "200 ruled pages with smooth writing texture",
      "Compact and lightweight for everyday use",
      "Sophisticated design suitable for gifts",
      "Durable and long-lasting build quality"
    ],
    "images": [
      "/assets/Diaries/3.jpg", "/assets/Diaries/4.jpg"

    ]
  },
  {
    "id": "019f057f-73ff-48a8-a2a3-3f7ff5075072",
    "name": "Caran d’Ache Grey Leather A5",
    "category": "Diaries",
    "price": "₹1,699",
    "code": "DIA-003",
    "description": "Sophisticated A5 diary with a minimalist grey leather cover.",
    "features": [
      "Premium grey leather finish",
      "192 lined pages for organized notes",
      "Soft-touch cover with modern aesthetics",
      "Ideal for professional and personal use",
      "Compact size, easy to carry"
    ],
    "images": [
      "/assets/Diaries/5.jpg", "/assets/Diaries/6.jpg"

    ]
  },
  {
    "id": "df6332ed-aa58-4682-8d3b-b4e0a503d3be",
    "name": "Caran d’Ache Red Leather A5",
    "category": "Diaries",
    "price": "₹1,899",
    "code": "DIA-004",
    "description": "Vibrant A5 diary with a striking red leather cover.",
    "features": [
      "Bold and stylish red leather cover",
      "High-quality paper for smooth writing",
      "Compact and travel-friendly A5 size",
      "Ideal for journaling or creative notes",
      "Durable and eye-catching design"
    ],
    "images": [
      "/assets/Diaries/7.jpg", "/assets/Diaries/8.jpg"

    ]
  },
  {
    "id": "85802c85-58f6-4045-827c-3835b54cc4ba",
    "name": "Caran d’Ache Turquoise Leather A5",
    "category": "Diaries",
    "price": "₹1,749",
    "code": "DIA-005",
    "description": "Unique A5 diary with a vibrant turquoise leather cover for a creative touch.",
    "features": [
      "Bright and appealing turquoise leather",
      "Smooth, high-quality paper with ruled lines",
      "Perfect for personal notes or as a gift",
      "Compact and portable design",
      "Durable binding for long-term use"
    ],
    "images": [
      "/assets/Diaries/9.jpg", "/assets/Diaries/10.jpg"

    ]
  },
  {
    "id": "2b7e465d-6fac-4096-a590-f92c179439a4",
    "name": "Caran d’Ache White Leather A5",
    "category": "Diaries",
    "price": "₹1,649",
    "code": "DIA-006",
    "description": "Elegant A5 diary with a pristine white leather cover for a clean and modern look.",
    "features": [
      "Soft white leather cover for a sophisticated feel",
      "192 ruled pages on premium quality paper",
      "Compact and travel-friendly A5 format",
      "Minimalist design for everyday use",
      "Perfect for journaling or planning"
    ],
    "images": [
      "/assets/Diaries/11.jpg", "/assets/Diaries/12.jpg"

    ]
  },

  {
    "id": "ba7bd4a8-f85a-4bff-b469-ed68f8c2ca83",
    "name": "Suede Diaries",
    "category": "Diaries",
    "price": "₹699",
    "code": "DIA-007",
    "description": "Crafted with vegan suede for a professional touch, this diary is ideal for executive gifting and daily productivity.",
    "features": [
      "192 ruled pages with 14 pages for monthly planner",
      "Case-bound cover in velvet-touch vegan suede",
      "Custom branding with engraving on cover or acrylic sheet",
      "Portable A5 size (220mm x 150mm)",
      "Ribbon bookmark with metal tag",
      "Available in six colors: Blue, Beige, Turquoise, Grey, Olive & Green"
    ],
    "images": [
      "/assets/Diaries/13.jpg", "/assets/Diaries/14.jpg", "/assets/Diaries/15.jpg"
    ]
  },
  {
    "id": "377e9dd2-dbaa-4786-8b3c-2d0821864421",
    "name": "Softbound Diaries",
    "category": "Diaries",
    "price": "₹599",
    "code": "DIA-008",
    "description": "A classic everyday diary, perfect for quick note-taking, corporate meetings, and executive gifting.",
    "features": [
      "192 ruled pages with 14 pages for monthly planner",
      "Flexible A5 size (220mm x 150mm)",
      "Custom branding with engraving on cover or IP sheet",
      "Available in three colors: Coffee, Tan, and Black"
    ],
    "images": [
      "/assets/Diaries/16.jpg", "/assets/Diaries/17.jpg", "/assets/Diaries/18.jpg"
    ]
  },
  {
    "id": "a5d26c76-bffe-447c-a4b5-c341085e83da",
    "name": "Matt Diaries",
    "category": "Diaries",
    "price": "₹799",
    "code": "DIA-008",
    "description": "Premium PU-covered diaries with a velvet touch, perfect for corporate gifting and daily productivity.",
    "features": [
      "Durable case-bound design with 192 ruled pages",
      "Portable A5 size (220mm x 150mm)",
      "Custom branding via UV printing",
      "Elegant ribbon bookmark with metal tag",
      "Available in blue, black, and stone-washed black"
    ],
    "images": [
      "/assets/Diaries/19.jpg", "/assets/Diaries/20.jpg", "/assets/Diaries/21.jpg"

    ]
  },
  {
    "id": "c7770fd0-f386-493e-a17e-c82aa6989b04",
    "name": "Office Orbit - Tan",
    "category": "Diaries",
    "price": "₹1,299",
    "code": "DIA-009",
    "description": "A premium diary set featuring a PU-bound tan diary, leatherette keychain, and metallic pen, perfect for executive gifting.",
    "features": [
      "200 pre-printed pages with customizable cover",
      "Includes a leatherette keychain and metallic pen",
      "Custom branding with UV printing or engraving",
      "Packaged in a sleek gift box"
    ],
    "images": [
      "/assets/Diaries/22.jpg", "/assets/Diaries/23.jpg"

    ]
  },
  {
    "id": "266a76a0-75e4-43c7-b613-8e57724569c7",
    "name": "Retrova Set - Black",
    "category": "Diaries",
    "price": "₹1,499",
    "code": "DIA-010",
    "description": "Stylish and functional black PU leather diary with a metallic pen, ideal for corporate events and gifting.",
    "features": [
      "A5 size diary with soft-touch cover and magnetic closure",
      "200 premium pages with custom branding options",
      "Includes a lightweight metallic pen",
      "Packaged in a sturdy black gift box"
    ],
    "images": [
      "/assets/Diaries/24.jpg"

    ]
  },
  {
    "id": "5647dcc1-0fe0-4795-9634-26ba7d95e887",
    "name": "Retrova Set - Tan",
    "category": "Diaries",
    "price": "₹1,499",
    "code": "DIA-011",
    "description": "Elegant tan PU leather diary with a metallic pen, perfect for client giveaways and festive gifts.",
    "features": [
      "Soft-touch tan cover with magnetic closure",
      "200 premium pages with customizable branding",
      "Includes a metallic pen with polished finish",
      "Packaged in a premium gift box"
    ],
    "images": [
      "/assets/Diaries/25.jpg", "/assets/Diaries/26.jpg", "/assets/Diaries/27.jpg"

    ]
  },
  {
    "id": "ffc9b15c-efd7-42e1-99d8-5a37888830cc",
    "name": "Camel Tan Leatherette Diaries",
    "category": "Diaries",
    "price": "₹849",
    "code": "DIA-012",
    "description": "Portable camel tan leatherette diary with eco-friendly paper, perfect for corporate gifting and productivity.",
    "features": [
      "178 pre-printed pages with 14 pages for calendars and notes",
      "Customizable engraving on the cover",
      "Portable size: 216mm x 145mm",
      "Eco-friendly paper for sustainable use"
    ],
    "images": [
      "/assets/Diaries/28.jpg", "/assets/Diaries/29.jpg", "/assets/Diaries/30.jpg"

    ]
  },
  {
    "id": "8e1bb70d-02bd-4b64-a549-85113638d13a",
    "name": "Retro Tan Diaries",
    "category": "Diaries",
    "price": "₹799",
    "code": "DIA-013",
    "description": "Retro tan diaries with a textured soft-touch finish and magnetic lock, perfect for professionals.",
    "features": [
      "Magnetic closure for secure use",
      "192 ruled pages with 14 planner pages",
      "Custom branding options",
      "Portable A5 size (220mm x 150mm)"
    ],
    "images": [
      "/assets/Diaries/31.jpg", "/assets/Diaries/32.jpg"

    ]
  },


  {
    "id": "ded9ff36-9d91-479c-9410-893882dabb6d",
    "name": "Essential Comfort T-Shirt",
    "category": "Tshirts",
    "price": "₹599",
    "code": "TSH-001",
    "description": "A timeless, versatile T-shirt perfect for any occasion.",
    "features": [
      "Soft, breathable cotton",
      "Relaxed fit",
      "Ideal for layering or wearing alone",
      "Available in multiple colors",
      "Perfect for casual or semi-formal looks"
    ],
    "images": [
      "/assets/Tshirts/1.jpg", "/assets/Tshirts/2.jpg", "/assets/Tshirts/3.jpg"
    ]
  },
  {
    "id": "0440291b-8d7b-4ede-a6f3-7b0ede25900d",
    "name": "Premium Daily Wear Tee",
    "category": "Tshirts",
    "price": "₹799",
    "code": "TSH-002",
    "description": "An everyday essential T-shirt for ultimate comfort and style.",
    "features": [
      "High-quality fabric",
      "Soft and smooth texture",
      "Classic design for all occasions",
      "Easy to mix and match",
      "Available in various sizes"
    ],
    "images": [
      "/assets/Tshirts/4.jpg", "/assets/Tshirts/5.jpg", "/assets/Tshirts/6.jpg"
    ]
  },
  {
    "id": "68f3d2f8-fb3f-46e3-bc71-b4f585c33df3",
    "name": "Urban Street Wear Tee",
    "category": "Tshirts",
    "price": "₹899",
    "code": "TSH-003",
    "description": "A trendy T-shirt for the modern urban explorer.",
    "features": [
      "Modern design",
      "Soft and comfortable",
      "Great for casual outings",
      "Breathable and lightweight",
      "Comes in a variety of colors"
    ],
    "images": [
      "/assets/Tshirts/7.jpg", "/assets/Tshirts/8.jpg", "/assets/Tshirts/9.jpg"
    ]
  },
  {
    "id": "902c8ed9-9664-4079-8498-3750bce726a5",
    "name": "Classic Everyday Tee",
    "category": "Tshirts",
    "price": "₹649",
    "code": "TSH-004",
    "description": "The perfect T-shirt for daily wear, combining comfort and style.",
    "features": [
      "Comfortable cotton fabric",
      "Available in a variety of fits",
      "Easy to care for and maintain",
      "Classic design",
      "Perfect for casual events"
    ],
    "images": [
      "/assets/Tshirts/10.jpg", "/assets/Tshirts/11.jpg", "/assets/Tshirts/12.jpg"
    ]
  },
  {
    "id": "14001443-6e4d-4c8c-b762-4be151a308d0",
    "name": "Trendy Casual Tee",
    "category": "Tshirts",
    "price": "₹699",
    "code": "TSH-005",
    "description": "A stylish T-shirt for those who want to stand out.",
    "features": [
      "Contemporary style",
      "Soft and comfortable material",
      "Breathable fabric",
      "Perfect for layering",
      "Available in multiple colors and sizes"
    ],
    "images": [
      "/assets/Tshirts/13.jpg", "/assets/Tshirts/14.jpg", "/assets/Tshirts/15.jpg"
    ]
  },
  {
    "id": "0450aab0-a5d3-42c0-91d5-aff59e018ff4",
    "name": "Sports Performance T-Shirt",
    "category": "Tshirts",
    "price": "₹899",
    "code": "TSH-006",
    "description": "Perfect for active individuals, combining performance and style.",
    "features": [
      "Moisture-wicking fabric",
      "Breathable and lightweight",
      "Great for exercise or casual wear",
      "Flexible fit",
      "Available in athletic cuts"
    ],
    "images": [
      "/assets/Tshirts/16.jpg", "/assets/Tshirts/17.jpg", "/assets/Tshirts/18.jpg"
    ]
  },
  {
    "id": "6b173455-c457-4d51-a02c-f3c6a935ba0a",
    "name": "Minimalist Casual T-Shirt",
    "category": "Tshirts",
    "price": "₹749",
    "code": "TSH-007",
    "description": "A minimalist T-shirt that goes with everything.",
    "features": [
      "Simple yet stylish",
      "Comfortable and soft",
      "Timeless design",
      "Perfect for layering",
      "Available in neutral colors"
    ],
    "images": [
      "/assets/Tshirts/19.jpg", "/assets/Tshirts/20.jpg"
    ]
  },
  {
    "id": "a02e3b44-4bec-4da1-9b8b-8739bb84cf70",
    "name": "Premium Comfort Fit Tee",
    "category": "Tshirts",
    "price": "₹999",
    "code": "TSH-008",
    "description": "Indulge in the premium comfort of this everyday essential T-shirt.",
    "features": [
      "Ultra-soft cotton",
      "Available in several colors",
      "Perfect for lounging or casual outings",
      "Comfortable fit",
      "Durable and long-lasting"
    ],
    "images": [
      "/assets/Tshirts/21.jpg", "/assets/Tshirts/22.jpg", "/assets/Tshirts/23.jpg"
    ]
  },
  {
    "id": "86921903-f20e-495e-a500-806fa21627fc",
    "name": "Fashion Forward T-Shirt",
    "category": "Tshirts",
    "price": "₹799",
    "code": "TSH-009",
    "description": "A fashion-forward design for those who love to stay trendy.",
    "features": [
      "Bold and unique design",
      "Soft and breathable fabric",
      "Perfect for casual styling",
      "Available in various designs and colors",
      "Comfortable and easy to wear"
    ],
    "images": [
      "/assets/Tshirts/24.jpg", "/assets/Tshirts/25.jpg", "/assets/Tshirts/26.jpg"
    ]
  },
  {
    "id": "40775fe7-d1bd-4e35-8b8a-7728ddcf858e",
    "name": "Casual Weekend Tee",
    "category": "Tshirts",
    "price": "₹649",
    "code": "TSH-010",
    "description": "A comfy T-shirt made for weekend relaxation.",
    "features": [
      "Relaxed fit",
      "Soft and cozy",
      "Breathable cotton fabric",
      "Perfect for lounging",
      "Great for pairing with shorts or jeans"
    ],
    "images": [
      "/assets/Tshirts/27.jpg", "/assets/Tshirts/28.jpg", "/assets/Tshirts/29.jpg"
    ]
  },
  {
    "id": "431dd428-7080-4f37-944a-167cf82835b8",
    "name": "Classic Crew Neck T-Shirt",
    "category": "Tshirts",
    "price": "₹599",
    "code": "TSH-011",
    "description": "A basic crew neck T-shirt for comfort and everyday wear.",
    "features": [
      "Soft cotton fabric",
      "Classic crew neck design",
      "Breathable and light",
      "Great for layering",
      "Available in multiple sizes and colors"
    ],
    "images": [
      "/assets/Tshirts/30.jpg", "/assets/Tshirts/31.jpg", "/assets/Tshirts/32.jpg"
    ]
  },
  {
    "id": "cac1cd12-9ccc-4241-bec3-4fa58e795328",
    "name": "Relaxed Fit T-Shirt",
    "category": "Tshirts",
    "price": "₹799",
    "code": "TSH-012",
    "description": "A relaxed fit T-shirt designed for ultimate comfort and casual style.",
    "features": [
      "Relaxed and loose fit",
      "Soft, high-quality cotton",
      "Perfect for everyday wear",
      "Easy to care for",
      "Available in various colors and sizes"
    ],
    "images": [
      "/assets/Tshirts/33.jpg", "/assets/Tshirts/34.jpg"]
  },
  {
    "id": "523e9087-9d72-47cb-bc50-155e987e488f",
    "name": "Comfy Loose Fit Tee",
    "category": "Tshirts",
    "price": "₹699",
    "code": "TSH-013",
    "description": "A loose-fitting tee that’s both comfortable and stylish.",
    "features": [
      "Loose and comfy fit",
      "Breathable cotton fabric",
      "Perfect for lounging or casual outings",
      "Lightweight and airy",
      "Variety of color options"
    ],
    "images": [
      "/assets/Tshirts/35.jpg", "/assets/Tshirts/36.jpg"]
  },
  {
    "id": "cc656933-f04e-4e9f-b31f-715d86bce0ff",
    "name": "Signature Fit T-Shirt",
    "category": "Tshirts",
    "price": "₹899",
    "code": "TSH-014",
    "description": "A signature fit T-shirt designed for a clean, sharp look.",
    "features": [
      "Signature slim fit",
      "Premium fabric",
      "Smooth and soft texture",
      "Perfect for a more polished casual look",
      "Available in a range of sizes"
    ],
    "images": ["/assets/Tshirts/37.jpg", "/assets/Tshirts/38.jpg"
    ]
  },

  {
    "id": "62fcb365-c16f-4cf8-85c5-1f008f07ad7e",
    "name": "Enchanted Wood Desk Calendar",
    "category": "Accessories",
    "price": "₹1,499",
    "code": "ACC-001",
    "description": "A high-quality wooden desktop organizer featuring a calendar and document organizer.",
    "features": [
      "Premium wooden build for a classic look",
      "Combination of calendar and document organizer",
      "Customizable with foil printing of logo and text",
      "Ideal for professional and personal use",
      "Durable and eco-friendly design"
    ],
    "images": [
      "/assets/Accessories/1.jpg", "/assets/Accessories/2.jpg"
    ]
  },
  {
    "id": "62505149-2654-4bef-8390-16260fc96b5d",
    "name": "Anchorite Desktop Organiser",
    "category": "Accessories",
    "price": "₹1,999",
    "code": "ACC-002",
    "description": "A good quality, multi-use desktop storage organizer with pen and visiting card holders and a clock.",
    "features": [
      "Compact and multi-functional design",
      "Integrated pen holder, clock, and visiting card organizer",
      "Customizable with foil printing of logo and text",
      "Handcrafted for superior quality",
      "Perfect for office and study desks"
    ],
    "images": [
      "/assets/Accessories/3.jpg", "/assets/Accessories/4.jpg"

    ]
  },
  {
    "id": "029791fb-78e7-4e48-9a2c-983b5f3af311",
    "name": "Paragon Desktop Organiser",
    "category": "Accessories",
    "price": "₹2,499",
    "code": "ACC-003",
    "description": "A premium desk organizer with a pen holder, functional clock, desk cube calendar, and visiting card slot.",
    "features": [
      "Multiple functions in one elegant design",
      "Premium wood with fine craftsmanship",
      "Includes a clock, calendar, and card organizer",
      "Customizable with foil printing of logo and text",
      "Suitable for corporate gifting"
    ],
    "images": [
      "/assets/Accessories/5.jpg", "/assets/Accessories/6.jpg"

    ]
  },
  {
    "id": "e85b34cb-1309-41af-b0bf-257eefe6298c",
    "name": "Log Desktop Organiser",
    "category": "Accessories",
    "price": "₹1,799",
    "code": "ACC-004",
    "description": "A good quality, multi-use desktop organizer featuring a pen holder, clock, and visiting card organizer.",
    "features": [
      "Streamlined design for desk organization",
      "Integrated clock and card slot",
      "Customizable with foil printing of logo and text",
      "Durable and stylish wooden finish",
      "Perfect for enhancing workspace aesthetics"
    ],
    "images": [
      "/assets/Accessories/7.jpg", "/assets/Accessories/8.jpg"

    ]
  },
  {
    "id": "d3041561-05fc-4829-b3c8-54279910ad4b",
    "name": "Santose Desktop Organiser",
    "category": "Accessories",
    "price": "₹1,849",
    "code": "ACC-005",
    "description": "A versatile desktop organizer featuring a pen holder, clock, and visiting card organizer.",
    "features": [
      "Compact and functional design",
      "Crafted from premium materials for durability",
      "Foil printing options for logo and text customization",
      "Great for professional or personal use",
      "Perfect for keeping desks neat and tidy"
    ],
    "images": [
      "/assets/Accessories/9.jpg", "/assets/Accessories/10.jpg"

    ]
  },
  {
    "id": "247310ee-f71a-45f4-9ac0-5ac2dc04cad8",
    "name": "Akasa Desktop Organiser",
    "category": "Accessories",
    "price": "₹2,099",
    "code": "ACC-006",
    "description": "An exquisite wooden desktop organizer handcrafted from the finest quality wood, featuring a pen holder and card organizer with a functional clock.",
    "features": [
      "High-quality wood craftsmanship",
      "Engraving options for logo and text customization",
      "Multi-functional with pen holder and clock",
      "Perfect for gifting and professional use",
      "Stylish and durable"
    ],
    "images": [
      "/assets/Accessories/11.jpg", "/assets/Accessories/12.jpg"

    ]
  },
  {
    "id": "afd0e7f0-c556-4aea-9608-4a0f2494b981",
    "name": "Ako Desktop Organiser",
    "category": "Accessories",
    "price": "₹1,699",
    "code": "ACC-007",
    "description": "A beautifully handcrafted wooden desktop organizer featuring a pen holder and card organizer.",
    "features": [
      "Minimalistic and elegant design",
      "Engraving options for logo and text",
      "Compact and lightweight for portability",
      "Perfect for workspaces or home offices",
      "Durable and eco-friendly material"
    ],
    "images": [
      "/assets/Accessories/13.jpg", "/assets/Accessories/14.jpg"

    ]
  },
]

