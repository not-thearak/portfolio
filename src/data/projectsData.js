import project1 from '../assets/image.png';
import project2 from '../assets/computer-shop3.jpg';
import khfullhd from '../assets/khfullhd.jpg';

const projectsData = [
  {
    id: '01',
    title: 'Mini Phone Store',
    category: 'POS System Application',
    year: '2025',
    img: project1,
    featured: true,
    description: 'A comprehensive Point of Sale system designed for phone retail stores. Built with a focus on speed, inventory tracking, and real-time sales analytics to streamline daily store operations.',
   features: [
  'User Login',
  'Home Dashboard',
  'Product Listing',
  'Product Categories',
  'Shopping Cart',
  'Add Products to Cart',
  'Update Product Quantity',
  'Remove Products from Cart',
  'Order / Sale Management',
  'REST API Integration',
  'Local Storage'
],
    tech: ['Flutter', 'Dart', 'Laravel', 'MySQL', 'RESTful APIs'],
    links: {
      github: 'https://github.com/not-thearak/pos-mobile',
      apk: 'https://github.com/not-thearak/pos-mobile/releases/latest',
    },
    live: 'Download Apk',
  },
  {
    id: '02',
    title: 'Computer-Shop',
    category: 'E-commerce Website',
    year: '2024',
    img: project2,
    featured: false,
    description: 'An elegant e-commerce platform for a premium computer hardware brand. Showcases high-performance components with a focus on visual storytelling, smooth product browsing, and a seamless checkout experience.',
    features: [
      'User authentication and account management',
      'Crud operations for products and categories',
      'Dashboard for admin to manage orders and inventory',
    ],
    tech: ['HTML', 'CSS', 'Bootstrap', 'JavaScript', 'PHP', 'Laravel', 'MySQL'],
    links: { github: 'https://github.com/not-thearak/Computer-shop', live: 'https://computer-shop-demo.vercel.app' }
  },
  {
    id: '03',
    title: 'Movie App',
    category: 'Entertainment Application',
    year: '2026',
    img: khfullhd,
    featured: false,
    description: 'A dynamic movie application that provides users with the latest film releases, reviews, and personalized recommendations. Built to offer an immersive cinematic experience with a sleek interface and interactive features.',
    features: [
      'User authentication and profile management',
      'Home page with featured movies and trending lists',
      'Detailed movie pages with trailers, reviews, and ratings',
      'Movie search and filter functionality'
    ],
    tech: ['Flutter', 'Dart'],
    links: { github: 'https://github.com/thearak/urbanic', live: 'https://urbanic-magazine.vercel.app' }
  },

];

export const getProjectById = (id) => projectsData.find((p) => p.id === id);
export const featuredProject = projectsData.find((p) => p.featured);
export const otherProjects = projectsData.filter((p) => !p.featured);

export default projectsData;
