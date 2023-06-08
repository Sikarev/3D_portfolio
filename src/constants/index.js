import {
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
  vue,
  meta,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
  firebase,
  ionic,
  relex, keplerteam,
} from '../assets';
  
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
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Web Developer",
      icon: web,
    },
    {
      title: "Node JS Developer",
      icon: backend,
    },
    {
      title: "Content Creator",
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
      name: "Vue 3",
      icon: vue,
    },
    {
      name: "Firebase",
      icon: firebase,
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
      name: "Ionic",
      icon: ionic,
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
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "git",
      icon: git,
    },
  ];
  
  const experiences = [
    {
      title: "Vue.js Developer",
      company_name: "Kepler Team",
      icon: keplerteam,
      iconBg: "#fff",
      date: "August 2021 - April 2023",
      points: [
        "Developing and maintaining mobile and web applications using Vue and Firebase ecosystems with other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design for mobile and web app and ensuring cross-browser and cross-platform compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
    {
      title: "Node.js developer",
      company_name: "Relex",
      icon: relex,
      iconBg: "#1462ac",
      date: "April 2022 - June 2022",
      points: [
        "Developing api for web applications using Node.js, MongoDB and other related technologies.",
        "Developing PDF service for application data using Puppeteer and Handlebars on Node.js",
        "Setting up push-notification service for IOS and Android using Firebase Cloud Messaging",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
    {
      title: "Vue.js and Node.js mentor",
      company_name: "Relex.career",
      icon: relex,
      iconBg: "#1462ac",
      date: "August 2022",
      points: [
        "Mentoring new developers during summer internship",
        "Conducting daily meetings",
        "Assigning dev tickets to developers when building internal company project",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
    {
      title: "Running my own technical blog and writing expert posts",
      company_name: "Relex",
      icon: relex,
      iconBg: "#1462ac",
      date: "September 2022 - Present",
      points: [
        "Sharing my developer experience",
        "Giving advices to audience on how to become a developer",
        "Improving brand recognition",
      ],
    },
  ];
  
  const testimonials = [
    {
      testimonial:
        "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
      name: "Sara Lee",
      designation: "CFO",
      company: "Acme Co",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      testimonial:
        "I've never met a web developer who truly cares about their clients' success like Rick does.",
      name: "Chris Brown",
      designation: "COO",
      company: "DEF Corp",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      testimonial:
        "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
      name: "Lisa Wang",
      designation: "CTO",
      company: "456 Enterprises",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
  ];
  
  const projects = [
    {
      name: "Car Rent",
      description:
        "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "mongodb",
          color: "green-text-gradient",
        },
        {
          name: "tailwind",
          color: "pink-text-gradient",
        },
      ],
      image: carrent,
      source_code_link: "https://github.com/",
    },
    {
      name: "Job IT",
      description:
        "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "restapi",
          color: "green-text-gradient",
        },
        {
          name: "scss",
          color: "pink-text-gradient",
        },
      ],
      image: jobit,
      source_code_link: "https://github.com/",
    },
    {
      name: "Trip Guide",
      description:
        "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
      tags: [
        {
          name: "nextjs",
          color: "blue-text-gradient",
        },
        {
          name: "supabase",
          color: "green-text-gradient",
        },
        {
          name: "css",
          color: "pink-text-gradient",
        },
      ],
      image: tripguide,
      source_code_link: "https://github.com/",
    },
  ];

  const emailCredentials = {
    publicKey: import.meta.env.VITE_EMAIL_JS_API_KEY,
    templateId: import.meta.env.VITE_EMAIL_JS_TEMPLATE_ID,
    serviceId: import.meta.env.VITE_EMAIL_JS_SERVICE_ID,
  }

  export { services, technologies, experiences, testimonials, projects, emailCredentials };
  