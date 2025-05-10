import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  starbucks,
} from '../assets'

import asset from '../assets/Projects/Asset-flow.png'
import food from '../assets/Projects/Food-picky.png'
import pet from '../assets/Projects/pet-adoption.png'
import job from '../assets/Projects/Job-Linker.png'
import tourist from '../assets/Projects/Tourist.png'
import Ecom from '../assets/Projects/e-com.png'
import Mongoose from '../assets/skill-icon/mongoose.png'
import Express from '../assets/skill-icon/express.png'
import spi_club_log from '../assets/spi_it_log.png'
export const navLinks = [
  {
    id: 'about',
    title: 'About',
  },
  {
    id: 'work',
    title: 'Work',
  },
  {
    id: 'Projects',
    title: 'Projects',
  },
  {
    id: 'contact',
    title: 'Contact',
  },
]

const services = [
  {
    title: 'Frontend developer',
    icon: web,
  },
  {
    title: 'React developer',
    icon: mobile,
  },
  {
    title: 'Backend Developer',
    icon: backend,
  },
  {
    title: 'Full Stack Developer',
    icon: creator,
  },
]

const technologies = [
  {
    name: 'HTML 5',
    icon: html,
  },
  {
    name: 'CSS 3',
    icon: css,
  },
  {
    name: 'JavaScript',
    icon: javascript,
  },
  {
    name: 'TypeScript',
    icon: typescript,
  },
  {
    name: 'React JS',
    icon: reactjs,
  },
  {
    name: 'Redux Toolkit',
    icon: redux,
  },
  {
    name: 'Tailwind CSS',
    icon: tailwind,
  },
  {
    name: 'Node JS',
    icon: nodejs,
  },
  {
    name: 'Express JS',
    icon: Express,
  },
  {
    name: 'MongoDB',
    icon: mongodb,
  },
  {
    name: 'Mongoose',
    icon: Mongoose,
  },
  {
    name: 'git',
    icon: git,
  },
  {
    name: 'figma',
    icon: figma,
  },
]

const experiences = [
  {
    title: 'jr Backend Developer',
    company_name: 'Zinvera-it',
    icon: starbucks,
    iconBg: '#FFFFFF',
    date: 'September 2024 - present',
    points: [
      'Developed and maintained scalable backend services using Node.js, Express.js, and TypeScript, enabling seamless functionality across corporate, education, and e-commerce platforms.',
      'Designed robust RESTful APIs and integrated MongoDB databases using Mongoose, ensuring secure and efficient data flow across all applications',
      'Optimized server-side performance by implementing authentication and backend logic, enhancing system reliability, scalability, and response times.',
    ],
  },
  {
    title: 'SPI  |  Web Mentor',
    company_name: 'Shariatpur polytechnic institute  ',
    icon: spi_club_log,
    iconBg: '#FFFFFF',
    date: 'Shariatpur , Bangladesh',
    points: [
      'Helped students learn HTML, CSS, Tailwind , JavaScript, and React.js through practical design support.',
      'Supported students in solving coding challenges and developing front-end applications.',
      'Guided students in building personal brands and professional portfolios, emphasizing effective presentation of skills and projects.',
    ],
  },
]

const testimonials = [
  {
    testimonial: 'How  to Implement Dark Mode in Tailwind CSS in One Command ',
    name: 'Roton',
    designation: 'Developer',
    image: 'https://i.postimg.cc/Y0nmTj0r/IMG-20250107-144953.jpg',
    Link: 'https://dev.to/roton2/how-to-implement-dark-mode-in-tailwind-css-in-one-command-4f82',
  },
  {
    testimonial: 'How to Host a Project on Vercel Using a GitHub Repository',
    name: 'Roton',
    designation: 'Developer',
    image: 'https://i.postimg.cc/Y0nmTj0r/IMG-20250107-144953.jpg',
    Link: 'https://dev.to/roton2/how-to-host-a-project-on-vercel-using-a-github-repository-4aj3',
  },
  {
    testimonial: 'How to Host a Project on Firebase Hosting',
    name: 'Roton',
    designation: 'Developer',
    image: 'https://i.postimg.cc/Y0nmTj0r/IMG-20250107-144953.jpg',
    Link: 'https://dev.to/roton2/how-to-host-a-project-on-firebase-hosting-37dg',
  },
]

const projects = [
  {
    id: 'project-1',
    name: 'AssetFlow',
    overview:
      'AssetFlow is a role-based asset management system built using the MERN stack. It allows HR managers and employees to efficiently manage company assets. The system enables asset tracking, request approvals, inventory monitoring, and reporting — all in one seamless platform. Designed for usability, AssetFlow supports both desktop and mobile experiences, providing secure authentication and responsive user interface.',
    description:
      'A web app for businesses to manage assets and track employee usage, featuring role-based access, asset tracking, and inventory management with secure authentication.',
    technicalDetails: [
      'Implemented responsive UI with HTML, CSS, and Tailwind CSS',
      'Built the frontend using React with React Hook Form for form handling',
      'Integrated Firebase Authentication for secure login and role-based access',
      'Used Node.js and Express.js to create RESTful APIs',
      'Implemented MongoDB for asset and user data storage',
      'Asset request and approval system for employees and HR managers',
      'Stripe payment integration for subscription handling',
      'Used Chart.js for data visualization of inventory and usage reports',
      'Integrated PDF generation using React PDF Renderer',
      'Handled alert/feedback using SweetAlert2 and tooltips with React Tooltip',
    ],
    technologiesUsed: {
      frontend: [
        'HTML',
        'CSS',
        'Tailwind CSS',
        'JavaScript',
        'React',
        'React Router',
        'React Hook Form',
        'React PDF Renderer',
        'Chart.js',
        'Context API',
        'React Icons',
        'SweetAlert2',
        'Swiper',
      ],
      backend: ['Node.js', 'Express.js'],
      database: ['MongoDB'],
      authenticationAndPayment: ['Firebase Authentication', 'Stripe'],
      otherTools: ['React Query', 'Emotion', 'React Tooltip'],
    },
    tags: [
      {
        name: 'react',
        color: 'blue-text-gradient',
      },
      {
        name: 'Node',
        color: 'orange-text-gradient',
      },
    ],
    coreFeatures: [
      'Firebase Authentication for secure login, signup, and logout',
      'Role-based Access for HR and Employees',
      'Asset Request System with approval/rejection',
      'Inventory Management with CRUD operations',
      'Data Visualization with Chart.js',
      'Stripe integration for handling payments',
      'PDF Report generation using React PDF Renderer',
      'Responsive Design using Tailwind CSS',
    ],
    majorChallenges: [
      'Implementing secure role-based authentication with Firebase',
      'Managing real-time synchronization between asset data and user actions',
      'Designing intuitive UI/UX for multiple user roles',
      'Stripe payment gateway integration for SaaS billing',
      'Creating printable and downloadable reports directly from React components',
    ],
    futurePlans: [
      'Add Admin Super Role for global control and analytics',
      'Convert project into a mobile app using React Native',
      'Implement email notifications for updates and status changes',
      'Add multi-language (i18n) support',
      'Allow file uploads in asset request forms',
    ],
    image: asset,
    github: 'https://github.com/Roton02/AssetFlow-Asset_Management_System-',
    Live: 'https://assetflow-14.vercel.app/',
  },
  {
    id: 'project-2',
    name: 'FoodPicky',
    overview:
      'FoodPicky is a food-sharing and ordering web platform where users can create, donate, manage, and request food items. The platform offers personalized user profiles, food listing management, advanced search features, and an engaging user interface enhanced by animations and dark mode support. Designed with a user-first approach, FoodPicky aims to provide a seamless experience for food management and sharing.',
    description:
      'A food-based platform where users can order, add to cart and wishlist, manage order items, with advanced search and filters, food donation requests, and client reviews.',
    technicalDetails: [
      'Responsive UI built using HTML, CSS, Tailwind CSS, and JavaScript',
      'Frontend developed with React and React Router for routing',
      'Used Context API for global state management',
      'Integrated Firebase for authentication and hosting',
      'CRUD operations implemented with MongoDB and Express.js',
      'Dark mode toggle with persistent state',
      'Animations using Framer Motion and Lottie React',
      'Food creation, deletion, and customization through Manage My Food',
      'Profile management and update capability for users',
      'Advanced filtering and searching on Available Food page',
      'Donation request system with My Request Food tracking',
    ],
    technologiesUsed: {
      frontend: [
        'HTML',
        'CSS',
        'Tailwind CSS',
        'JavaScript',
        'React',
        'React Router',
        'React Hook Form',
        'React PDF Renderer',
        'Chart.js',
        'Context API',
        'React Icons',
        'SweetAlert2',
        'Swiper',
        'Lottie React',
      ],
      backend: ['Node.js', 'Express.js'],
      database: ['MongoDB'],
      authentication: ['Firebase'],
      otherTools: ['React Context API'],
    },
    tags: [
      {
        name: 'React',
        color: 'blue-text-gradient',
      },
      {
        name: 'MongoDB',
        color: 'green-text-gradient',
      },
    ],
    coreFeatures: [
      'User authentication via Firebase',
      'Create, edit, and delete food items',
      'Food donation request system with My Request Food tracking',
      'Advanced food filtering and search system',
      'Responsive and mobile-friendly UI with dark mode',
      'Profile viewing and editing',
      'Animated components using Lottie and Framer Motion',
      'Client reviews displayed for feedback and trust',
    ],
    majorChallenges: [
      'Implementing real-time data update across food listings and requests',
      'Managing dynamic form behavior for food creation and customization',
      'Building a reliable search and filter system for food availability',
      'Integrating animations without compromising performance',
      'Ensuring seamless user experience across both light and dark modes',
    ],
    futurePlans: [
      'Integrate Stripe for future food ordering and donations',
      'Add an Admin Dashboard for food moderation and user management',
      'Improve user review system with ratings and replies',
      'Implement push notifications for food request updates',
      'Make the platform PWA (Progressive Web App) ready',
    ],
    image: food,
    github: 'https://github.com/Roton02/Food-picky-Client',
    Live: 'https://a11-kynus-foodie.web.app/',
  },
  {
    id: 'project-3',
    name: 'LapsePet',
    overview:
      'LapsePet is a full-stack pet adoption platform built with the MERN stack, designed to connect pets in need with potential adopters. The platform also supports donation campaigns, empowering users to contribute to animal welfare. It includes user and admin dashboards, secure authentication, and a modern UI to ensure a delightful and impactful user experience.',
    description:
      'A MERN stack platform connecting pets with potential adopters, offering donation campaigns, adoption requests, and admin dashboards for managing users and pets.',
    technicalDetails: [
      'Built with MongoDB, Express.js, React, and Node.js',
      'Stripe integration for secure donation transactions',
      'Used React Hook Form for form management and validation',
      'Implemented @tanstack/react-query and react-table for efficient data fetching and display',
      'Authentication with Firebase and secure user sessions',
      'Responsive UI using Tailwind CSS and Flowbite components',
      'Dark and light mode toggling',
      'Routing via React Router DOM',
      'Used various animation and utility libraries like framer-motion, swiper, react-hot-toast, etc.',
    ],
    technologiesUsed: {
      frontend: [
        'HTML',
        'CSS',
        'Tailwind CSS',
        'JavaScript',
        'React',
        'React Router',
        'React Hook Form',
        'React PDF Renderer',
        'Chart.js',
        'Context API',
        'React Icons',
        'SweetAlert2',
        'Swiper',
        'React Icons',
        'React Tabs',
        'Swiper',
      ],
      backend: ['Node.js', 'Express.js'],
      database: ['MongoDB'],
      authentication: ['Firebase'],
      payment: ['Stripe'],
      otherLibraries: [
        '@tanstack/react-query',
        '@tanstack/react-table',
        'react-hot-toast',
        'react-modal',
        'sweetalert2',
        'axios',
        'date-fns',
        'localforage',
        'match-sorter',
        'react-select',
        'react-intersection-observer',
        'react-table',
        'sort-by',
        'react-fast-marquee',
        'react-simple-typewriter',
      ],
    },
    tags: [
      {
        name: 'react',
        color: 'blue-text-gradient',
      },
      {
        name: 'stripe',
        color: 'pink-text-gradient',
      },
    ],
    coreFeatures: [
      'Responsive homepage with pet category sections and inspirational banners',
      'Detailed pet listings with filtering and search options',
      'View pet profiles and submit adoption requests',
      'Donation page with Stripe integration',
      'User dashboard to manage added pets, adoption history, and donations',
      'Admin dashboard for full control over pets, users, and campaigns',
      'Secure user authentication and session handling',
      'Dark/light mode toggle',
      'Fully responsive UI across devices',
    ],
    majorChallenges: [
      'Stripe integration for secure and reliable donations',
      'Managing user roles and dashboard segregation (admin/user)',
      'Efficient rendering and performance with large datasets using React Table',
      'Responsive layout and accessibility across all screen sizes',
      'Ensuring secure Firebase authentication across different user types',
    ],
    futurePlans: [
      'Add push notifications for adoption updates and new pets',
      'Implement chat system between pet owners and adopters',
      'Analytics dashboard for admin users',
      'Automated email notifications for donation receipts and requests',
      'Progressive Web App (PWA) support for better mobile performance',
    ],
    image: pet,
    github: 'https://github.com/Roton02/Lapse-pet-client',
    Live: 'https://ephemeral-queijadas-e60793.netlify.app/',
  },
  {
    id: 'project-4',
    name: 'JobLinker',
    overview:
      'JobLinker is a job portal built using the MERN stack, designed to connect job seekers with employers. It allows users to browse and filter job listings, apply with resumes and cover letters, and enables employers to post and manage job openings. With a clean UI, secure authentication, and modern features, JobLinker streamlines the job application and hiring process.',
    description:
      'A job portal that connects job seekers with employers, allowing users to browse job listings, apply, and post job openings with secure authentication and search filters.',
    technicalDetails: [
      'Developed using the MERN stack for full-stack functionality',
      'Secure user authentication using Firebase',
      'Search and filter jobs by category, location, job type, etc.',
      'Dynamic job posting and updating system for employers',
      'Form handling and validation with React Hook Form',
      'Used animation and reveal libraries (Framer Motion, AOS, React Awesome Reveal) for enhanced UX',
      'Integrated responsive design for mobile and desktop devices',
      'Environment configuration managed using dotenv',
    ],
    technologiesUsed: {
      frontend: [
        'React',
        'Tailwind CSS',
        'React Router DOM',
        'Framer Motion',
        'React Awesome Reveal',
        'React Tabs',
        'React Hook Form',
        'React Toastify',
        'React Icons',
        'React Tooltip',
        'React Headroom',
        'AOS',
      ],
      backend: ['Node.js', 'Express.js'],
      database: ['MongoDB'],
      authentication: ['Firebase'],
      otherLibraries: ['axios', 'dotenv', 'sweetalert2'],
    },
    tags: [
      {
        name: 'MERN',
        color: 'blue-text-gradient',
      },
      {
        name: 'React',
        color: 'green-text-gradient',
      },
    ],
    coreFeatures: [
      'Secure user authentication and personalized profiles',
      'Browse, search, and filter job listings by category, location, and job type',
      'Apply to jobs by uploading resumes and cover letters',
      'Employers can post and update job openings',
      'Interactive and animated UI with a smooth user experience',
      'Mobile-first responsive layout',
    ],
    majorChallenges: [
      'Creating a dual-role system (job seekers vs. employers)',
      'Integrating search and filter logic for dynamic job queries',
      'Handling secure form data for resume uploads and submissions',
      'Maintaining responsive design with advanced UI animations',
    ],
    futurePlans: [
      'Add real-time notifications for job status updates',
      'Incorporate a chat feature between employers and applicants',
      'Enable CV builder feature for job seekers',
      'Admin dashboard for platform management and analytics',
    ],
    image: job,
    github: 'https://github.com/Roton02/Job-Linker',
    Live: 'https://joblinker-14.vercel.app/',
  },
  {
    id: 'project-5',
    name: 'Globe Glimpse',
    overview:
      'Globe Glimpse is a travel platform showcasing tourist spots across Asia. Users can register, explore, add, update, and manage their own tourist spot entries. The platform features dark mode, country-based filtering, client reviews, and a personalized dashboard for a more engaging and interactive user experience.',
    description:
      'A platform displaying tourist spots in Asia, allowing users to add, manage, and filter spots by country, with dark mode and personalized experience.',
    technicalDetails: [
      'Developed using React for the frontend UI and Firebase for authentication and hosting',
      'Users can register and log in to add tourist spots',
      "Each user can manage their added spots (view, update, delete) via the 'My List' section",
      'Tourist spots are filterable by country',
      'Dark mode is implemented for better UX and accessibility',
      'Client-side routing using React Router',
      'Scroll-based animations using React Awesome Reveal',
      'Typing effect animation using React Simple Typewriter',
    ],
    technologiesUsed: {
      frontend: [
        'HTML',
        'CSS',
        'Tailwind CSS',
        'JavaScript',
        'React',
        'React Router',
        'React Hook Form',
        'React PDF Renderer',
        'Chart.js',
        'Context API',
        'React Icons',
        'SweetAlert2',
        'Swiper',
        'React Simple Typewriter',
      ],
      authentication: ['Firebase'],
    },
    tags: [
      {
        name: 'React',
        color: 'blue-text-gradient',
      },
      {
        name: 'firebase',
        color: 'pink-text-gradient',
      },
    ],
    coreFeatures: [
      'User authentication and profile-based content',
      'Add, update, and delete tourist spot data',
      'Country-wise filtering of spots',
      'Dark mode toggle for accessibility',
      "Dedicated 'My List' dashboard for personalized data management",
      'Client reviews section for feedback',
      'Interactive animations and typing effects',
    ],
    majorChallenges: [
      'Implementing role-based access for user-specific content management',
      'Handling real-time updates of user-added content with Firebase',
      'Integrating smooth UI transitions and animations',
      'Ensuring consistent dark mode experience across components',
    ],
    futurePlans: [
      'Add map integration for visualizing tourist spot locations',
      'Enable image uploads for custom spot submissions',
      'Add bookmark/favorite feature for logged-in users',
      'Introduce admin panel for reviewing submitted spots',
    ],
    image: tourist,
    github: 'https://github.com/Roton02/Globe-Glimpse-Client',
    Live: 'https://wondrous-daffodil-69d353.netlify.app/',
  },
  {
    id: 'project-6',
    name: 'E-Dokan',
    overview:
      'E-Dokan is a single-page e-commerce application developed using the MERN stack. It offers a seamless user experience with features like product search, category and brand filtering, price-based sorting, and secure user authentication through Firebase.',
    description:
      'A comprehensive e-commerce platform for browsing and purchasing products, featuring search, filtering, sorting, and secure user authentication using Firebase.',
    technicalDetails: [
      'Frontend built with React and Tailwind CSS for responsive UI design',
      'User authentication and session management handled with Firebase',
      'Dynamic filtering based on category, brand, and price range',
      'Sorting capabilities for price and product update date',
      'Paginated product listing to enhance navigation and performance',
      'Used React Context API for efficient state management',
    ],
    technologiesUsed: {
      frontend: [
        'HTML',
        'CSS',
        'Tailwind CSS',
        'JavaScript',
        'React',
        'React Router',
        'React Hook Form',
        'React PDF Renderer',
        'Chart.js',
        'Context API',
        'React Icons',
        'SweetAlert2',
        'Swiper',
      ],
      authentication: ['Firebase'],
    },
    tags: [
      {
        name: 'React',
        color: 'blue-text-gradient',
      },
      {
        name: 'tailwind',
        color: 'pink-text-gradient',
      },
    ],
    coreFeatures: [
      'Responsive single-page application (SPA)',
      'Real-time product search functionality',
      'Filter by categories, brands, and price range',
      'Sort products by price (low-to-high or high-to-low) and date',
      'Secure user registration and login via Firebase',
      'Pagination for improved user experience in browsing products',
    ],
    majorChallenges: [
      'Managing complex state updates with filtering and sorting',
      'Ensuring fast performance and responsive layout for various screen sizes',
      'Implementing seamless Firebase authentication flow',
      'Maintaining a clean and maintainable codebase with modular components',
    ],
    futurePlans: [
      'Add cart functionality and checkout page',
      'Integrate payment gateway (e.g., Stripe or SSLCommerz)',
      'Add user roles for admin product management',
      'Enable product rating and review system',
    ],
    image: Ecom,
    github: 'https://github.com/Roton02/SinglePage_E-commerce-Client',
    Live: 'https://guileless-trifle-921e8c.netlify.app/',
  },
]

export { services, technologies, experiences, testimonials, projects }
