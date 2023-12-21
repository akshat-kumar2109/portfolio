import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  html,
  css,
  reactjs,
  nodejs,
  mongodb,
  git,
  terraform,
  docker,
  deqode,
  carrent,
  jobit,
  tripguide,
  azure,
  kubernetes,
  bash,
  vainInnovation,
} from "../assets";

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
    id: "projects",
    title: "Projects"
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "DevOps",
    icon: web,
  },
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Frontend Developer",
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
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Git",
    icon: git,
  },
  {
    name: "Docker",
    icon: docker,
  },
  {
    name: "Terraform",
    icon: terraform,
  },
  {
    name: "Azure",
    icon: azure,
  },
  {
    name: "Kubernetes",
    icon: kubernetes,
  },
];

const experiences = [
  {
    title: "Solution Engineer",
    company_name: "Deqode",
    icon: deqode,
    iconBg: "#383E56",
    date: "Jan 2023 - Present",
    points: [
      "Proficiently managed programming for databases and websites using Node.js, Express.js, MongoDB, React.js",
      "Conducted research on postgresql databases to optimize data fetching time through effective query development.",
      "Successfully resolved website bugs, leading to notable improvements in web functionality and speed.",
      "Provide swift resolutions to website issues on-the-go, effectively safeguarding the company from potential losses.",
    ],
  },
  {
    title: "Software Engineer Intern",
    company_name: "Vain Innovations",
    icon: vainInnovation,
    iconBg: "#383E56",
    date: "Jun 2022 - Aug 2022",
    points: [
      "Implemented Rest API for food delivery application using Node.js and Express.js",
      "Used MongoDB as our database and implemented authentication and authorization using JWT",
      "Implemented Rest API for school management system using Node.js, Express.js, MongoDB",
    ],
  },
];

// const testimonials = [
//   {
//     testimonial:
//       "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
//     name: "Sara Lee",
//     designation: "CFO",
//     company: "Acme Co",
//     image: "https://randomuser.me/api/portraits/women/4.jpg",
//   },
//   {
//     testimonial:
//       "I've never met a web developer who truly cares about their clients' success like Rick does.",
//     name: "Chris Brown",
//     designation: "COO",
//     company: "DEF Corp",
//     image: "https://randomuser.me/api/portraits/men/5.jpg",
//   },
//   {
//     testimonial:
//       "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
//     name: "Lisa Wang",
//     designation: "CTO",
//     company: "456 Enterprises",
//     image: "https://randomuser.me/api/portraits/women/6.jpg",
//   },
// ];

const projects = [
  {
    name: "Ecommerce website",
    description:
      `Frontend development using React.js for creating interactive, intuitive and responsive user interfaces.
      Backend implementation built using Node.js and Express.js to handle API integration and database operations.
      Database management utilized MongoDB as the database to store and manage product information and user
      data.
      Implemented user authentication and authorization using sessions and JWT.
      Product catalog, shopping cart functionality: created a product catalog with features like search, filtering and
      sorting.`,
    tags: [
      {
        name: "reactjs",
        color: "blue-text-gradient",
      },
      {
        name: "redux",
        color: "green-text-gradient",
      },
      {
        name: "nodejs",
        color: "pink-text-gradient",
      },
      {
        name: "expressjs",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwindcss",
        color: "pink-text-gradient",
      },
      {
        name: "cloudinary",
        color: "blue-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "#",
  },
  {
    name: "Helping Hand",
    description:
      `This project solves the problem statement - Hunger issues for poor people. This Hackathon was organised
      by GDSC - IGDTUW in which our team won the Best Hack built using APIs.
      Developed responsive and interactive frontend using React.js and implemented Google Authentication.
      Integrated view directions using Google Maps API and handled image uploads, creating products by users and
      implemented reward points.`,
    tags: [
      {
        name: "react.js",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "express.js",
        color: "pink-text-gradient",
      },
      {
        name: "node.js",
        color: "blue-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://beamish-rugelach-73d8cc.netlify.app",
  },
];

export { services, technologies, experiences, projects };
