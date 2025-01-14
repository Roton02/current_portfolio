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
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
} from "../assets";

import asset from "../assets/Projects/Asset-flow.png";
import food from "../assets/Projects/Food-picky.png";
import pet from "../assets/Projects/pet-adoption.png";
import job from "../assets/Projects/Job-Linker.png";
import tourist from "../assets/Projects/Tourist.png";
import Ecom from "../assets/Projects/e-com.png";
import Mongoose from "../assets/skill-icon/mongoose.png";
import Express from "../assets/skill-icon/express.png";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "Projects",
    title: "Projects",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Frontend developer",
    icon: web,
  },
  {
    title: "React developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Full Stack Developer",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "Express JS",
    icon: Express,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Mongoose",
    icon: Mongoose,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
];

const experiences = [
  {
    title: "jr. Full stack Developer",
    company_name: "Zinvera-it",
    icon: starbucks,
    iconBg: "#FFFFFF",
    date: "September 2024 - present",
    points: [
      "Full-Stack Development: Built and maintained both front-end (React) and back-end (Node.js, Express) applications.",
      "Team Leadership: Managed a team of 3 developers, overseeing project progress and ensuring code quality.",
      "Database & API Integration: Managing databases (MongoDB) and integrating RESTful APIs.",
      "Testing & Deployment: Led testing, debugging, and deployment of applications to production environments.",
    ],
  },
  {
    title: "SPI  |  Web Mentor",
    company_name: "Shariatpur polytechnic institute  ",
    icon: starbucks,
    iconBg: "#FFFFFF",
    date: "Shariatpur , Bangladesh",
    points: [
      "Educated students on HTML, CSS, JavaScript, and modern frameworks, emphasizing industry relevance.",
      "Created customized learning paths and project guidelines to help students achieve their career goals effectively.",
      "Assisted students in debugging and solving coding problems, fostering practical problem-solving abilities.",
      "Organized Meetings to encourage students, emphasizing the importance of continuous learning and innovation in web development.",
    ],
  },
];

const testimonials = [
  {
    testimonial: "How  to Implement Dark Mode in Tailwind CSS in One Command ",
    name: "Roton",
    designation: "Developer",
    image: "https://i.postimg.cc/Y0nmTj0r/IMG-20250107-144953.jpg",
    Link: "https://dev.to/roton2/how-to-implement-dark-mode-in-tailwind-css-in-one-command-4f82",
  },
  {
    testimonial: "How to Host a Project on Vercel Using a GitHub Repository",
    name: "Roton",
    designation: "Developer",
    image: "https://i.postimg.cc/Y0nmTj0r/IMG-20250107-144953.jpg",
    Link: "https://dev.to/roton2/how-to-host-a-project-on-vercel-using-a-github-repository-4aj3",
  },
  {
    testimonial: "How to Host a Project on Firebase Hosting",
    name: "Roton",
    designation: "Developer",
    image: "https://i.postimg.cc/Y0nmTj0r/IMG-20250107-144953.jpg",
    Link: "https://dev.to/roton2/how-to-host-a-project-on-firebase-hosting-37dg",
  },
 
];

const projects = [
  {
    name: "AssetFlow",
    description:
      "A web app for businesses to manage assets and track employee usage, featuring role-based access, asset tracking, and inventory management with secure authentication.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "Node",
        color: "orange-text-gradient",
      },
    ],
    image: asset, // Add the image variable here
    source_code_link:
      "https://github.com/Roton02/AssetFlow-Asset_Management_System-", // Add the GitHub link
    Live: "https://assetflow-14.vercel.app/", 
  },
  {
    name: "FoodPicky",
    description:
      "A food-based platform where users can order, add to cart and wishlist, and manage order items, with advanced search and filters, and client reviews.",
    tags: [
      {
        name: "React",
        color: "blue-text-gradient",
      },
      {
        name: "MongoDB",
        color: "green-text-gradient",
      },
    ],
    image: food, // Add the image variable here
    source_code_link: "https://github.com/Roton02/Food-picky-Client",
    Live: "https://a11-kynus-foodie.web.app/",
  },
  {
    name: "LapsePet",
    description:
      "A MERN stack platform connecting pets with potential adopters, offering donation campaigns, adoption requests, and admin dashboards for managing users and pets.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "stripe",
        color: "pink-text-gradient",
      },
    ],
    image: pet, // Add the image variable here
    source_code_link: "https://github.com/Roton02/Lapse-pet-client",
    Live: "https://ephemeral-queijadas-e60793.netlify.app/",
  },
  {
    name: "JobLinker",
    description:
      "A job portal that connects job seekers with employers, allowing users to browse job listings, apply, and post job openings with secure authentication and search filters.",
    tags: [
      {
        name: "MERN",
        color: "blue-text-gradient",
      },
      {
        name: "React",
        color: "green-text-gradient",
      },
    ],
    image: job, // Add the image variable here
    source_code_link: "https://github.com/Roton02/Job-Linker", // Replace with GitHub link if available
    Live: "https://joblinker-14.vercel.app/", // Replace with the actual live link
  },
  {
    name: "GlobeGlimpse",
    description:
      "A platform displaying tourist spots in Asia, allowing users to add, manage, and filter spots by country, with dark mode and personalized experience.",
    tags: [
      {
        name: "React",
        color: "blue-text-gradient",
      },
      {
        name: "firebase",
        color: "pink-text-gradient",
      },
    ],
    image: tourist, // Add the image variable here
    source_code_link: "https://github.com/Roton02/Globe-Glimpse-Client", // Replace with GitHub link if available
    Live: "https://astonishing-cendol-d7cdd7.netlify.app/",
  },
  {
    name: "E-Dokan",
    description:
      "A comprehensive e-commerce platform for browsing and purchasing products, featuring search, filtering, sorting, and secure user authentication using Firebase.",
    tags: [
      {
        name: "React",
        color: "blue-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: Ecom, // Add the image variable here
    source_code_link: "https://github.com/Roton02/SinglePage_E-commerce-Client", // Replace with GitHub link if available
    Live: "https://guileless-trifle-921e8c.netlify.app/",
  },
];

export { services, technologies, experiences, testimonials, projects };
