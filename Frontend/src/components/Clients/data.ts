export interface Client {
  name: string;
  logo: string;
  width?: string; // Custom width for specific logos if needed
}

export const clients: Client[] = [
  { name: 'Paytm', logo: 'https://1000logos.net/wp-content/uploads/2021/03/Paytm_Logo.jpg' },
  { name: 'DS Group', logo: 'https://addx.in/wp-content/uploads/2024/04/5.png' },
  { name: 'Star Sports', logo: 'https://addx.in/wp-content/uploads/2024/04/10.png' },
  { name: 'FIITJEE', logo: 'https://addx.in/wp-content/uploads/2024/04/6.png', width: 'w-28' },
  { name: 'Ultratech Cement', logo: 'https://upload.wikimedia.org/wikipedia/en/thumb/9/96/Ultratech_Cement_Logo.svg/1200px-Ultratech_Cement_Logo.svg.png' },
  { name: 'Reliance', logo: 'https://rilstaticasset.akamaized.net/sites/default/files/2023-02/L.1.jpg' },
  { name: 'Tata Motors', logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQVfTSEgAJMQfItAPgWrbJQNQLL1Ad2i65PJg&s' },
  { name: 'HDFC Bank', logo: 'https://e7.pngegg.com/pngimages/257/159/png-clipart-hdfc-logo-thumbnail-bank-logos-thumbnail.png' },
  { name: 'Amazon', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1280px-Amazon_logo.svg.png', width: 'w-32' },
  { name: 'Microsoft', logo: 'https://download.logo.wine/logo/Microsoft/Microsoft-Logo.wine.png' }
];