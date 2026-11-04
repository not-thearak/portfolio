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
    title: 'Movie App ( In Progress )',
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
  //  {
  //   id: '04',
  //   title: 'Inventory API',
  //   category: 'C# / .NET Backend',
  //   year: '2026',
  //   img: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=800&auto=format&fit=crop',
  //   featured: false,
  //   description: 'A robust RESTful API built with C# and .NET Core to manage inventory for a mock e-commerce store. It handles product CRUD operations, user authentication, and order processing.',
  //   features: [
  //     'User authentication and role-based access control',
  //     'CRUD operations for products and categories',
  //     'Order management with status tracking',
  //     'Integration with a SQL Server database',
  //     'Swagger documentation for API endpoints'
  //   ],
  //   tech: ['C#', '.NET Core', 'SQL Server', 'Entity Framework', 'JWT Auth', 'Swagger'],
  //   links: { github: 'https://github.com/thearak/urbanic', live: 'https://urbanic-magazine.vercel.app' }
  // },
    // {
    // id: '04',
    // slug: 'inventory-management-api',
    // title: 'Inventory API',
    // category: 'C# / .NET Backend',
    // year: '2023',
    // client: 'Personal Project',
    // role: 'Backend Developer',
    // duration: '2 Months',
    // Use a screenshot of your Swagger UI, Postman, or VS Code here
    // img: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=800&auto=format&fit=crop', 
    // featured: false,
    // description: 'A robust RESTful API built with C# and .NET Core to manage inventory for a mock e-commerce store. It handles product CRUD operations, user authentication, and order processing.',
    // challenge: 'Handling concurrent updates to inventory levels without causing data inconsistencies or deadlocks in the database.',
    // solution: 'Implemented Entity Framework Core with optimistic concurrency control and utilized SQL Server transactions. Secured the API using JWT (JSON Web Tokens) for role-based access.',
    // gallery: [
      // Use screenshots of code, Swagger UI, or Database schema here
    //   'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?q=80&w=800&auto=format&fit=crop',
    //   'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=800&auto=format&fit=crop',
    //   'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?q=80&w=800&auto=format&fit=crop'
    // ],
    // tech: ['C#', '.NET Core', 'SQL Server', 'Entity Framework', 'JWT Auth', 'Swagger'],
    // links: 'https://github.com/yourusername/your-repo' 
  // }

];

export const getProjectById = (id) => projectsData.find((p) => p.id === id);
export const featuredProject = projectsData.find((p) => p.featured);
export const otherProjects = projectsData.filter((p) => !p.featured);

export default projectsData;
