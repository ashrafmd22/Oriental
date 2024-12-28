export interface Client {
  name: string;
  logo: string;
  width?: string; // Custom width for specific logos if needed
}

export const clients: Client[] = [
  {
    name: 'Aakash Institute',
    logo: '/assets/Clients/1.jpeg'
  },
  {
    name: 'Physics Wallah',
    logo: '/assets/Clients/2.jpeg'
  }, {
    name: 'Ultratech Cement',
    logo: '/assets/Clients/3.jpeg'
  },
  {
    name: 'Tata Steel',
    logo: '/assets/Clients/4.jpeg'
  }, {
    name: 'TCS',
    logo: '/assets/Clients/5.jpeg'
  },
  {
    name: 'ITC Limited',
    logo: '/assets/Clients/6.jpeg'
  },
  {
    name: 'Hindustan Unilever',
    logo: '/assets/Clients/7.jpeg'
  }
];