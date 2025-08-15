import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaPhone,
  FaReact,
  FaNodeJs,
  FaDatabase,
  FaCode,
  FaHtml5,
  FaCss3Alt,
  FaWordpress,
  FaPython,
  FaFigma,
  FaFlask,
} from "react-icons/fa"; // Example icons
import {
  SiJquery,
  SiExpress,
  SiMongodb,
  SiFirebase,
  SiTailwindcss,
  SiJavascript,
  SiTypescript,
  SiCplusplus,
  SiPython,
  SiJson,
} from "react-icons/si"; // More specific tech icons

export const personalInfo = {
  name: "Freedom Freak",
  title: "Full Stack Developer",
  email:
    "https://mail.google.com/mail/?view=cm&fs=1&to=freedomfreak369@gmail.com",
  github: "https://github.com/FreedomFreak",
  resumeLink: "/FreedomFreak.pdf", // Make sure your resume is in public/
  bio: "Innovative Full Stack Developer passionate about creating seamless and impactful web solutions. Eager to leverage modern technologies to solve real-world problems and contribute to dynamic team environments.",
  shortBio: "I build things for the web.", // For Hero section
};

export const education = [
  {
    institution: "The Hague University of Applied Science",
    degree: "Applied Associate Degree",
    duration: "2012 - 2015",
    score: "CGPA: 8.17/10",
  },
  {
    institution: "Erasmus University College",
    degree: "Computer Science,  Bachelor’s degree",
    duration: "2015 -2 018",
    score: "96.5%",
  },
];

export const projects = [
  {
    title: "AgriSure",
    tech: ["React JS", "Node.js", "Express.js", "MongoDB"],
    description:
      "Improved financial access for over 12,000 farmers boosting microloan approvals by 35% via CIBIL-based lending, integrating AI insights, and Hindi support via Google Translation. Engineered the full-stack system, handling frontend UI, backend API and database management.",
    date: "March 2025 – Present",
    githubLink: "https://github.com/FreedomFreak/AgriSure-master", // Replace with actual link
    liveLink: null, // Replace with actual link if available
    category: "Full Stack",
    icon: <FaReact size={24} className="text-accent-1" />,
  },
  {
    title: "BuildBridge",
    tech: ["React JS", "Node.js", "Express.js", "MongoDB"],
    description:
      "Streamlined contracting for construction projects, reducing deal closure time by 40% via an AI-based platform matching builders with clients. Developed both frontend and backend, integrating user authentication, contract storage, and a responsive UI.",
    date: "March 2025 – Present",
    githubLink: "https://github.com/FreedomFreak/BuildBridge", // Replace with actual link
    liveLink: "https://build-bridge-seven.vercel.app/",
    category: "Full Stack",
    icon: <FaReact size={24} className="text-accent-1" />,
  },
  {
    title: "FarmConnect",
    tech: ["React JS", "Node.js", "Express.js", "MongoDB"],
    description:
      "Optimized crop storage for farmers, increasing warehouse occupancy by 25% via an AI-powered marketplace connecting farmers with warehouse owners. Developed a seamless booking system with real-time warehouse availability and farmer-friendly UI.",
    date: "Feb 2025 – Present",
    githubLink: "https://github.com/FreedomFreak/FarmConnect",
    liveLink: "https://farm-connect-iota-psi.vercel.app/",
    category: "Full Stack",
    icon: <FaReact size={24} className="text-accent-1" />,
  },
  {
    title: "Blood Shortage Survey and Dashboard",
    tech: ["React.js", "Node.js", "MongoDB"],
    description:
      "Increased efficiency of blood shortage tracking for healthcare organizations by 60% through a real-time analytics dashboard. Built an intuitive React.js dashboard with real-time charts and data visualizations.",
    date: "Jan 2025 – Present",
    githubLink: "https://github.com/FreedomFreak/BloodLink", // Replace with actual link
    liveLink: null,
    category: "Healthcare",
    icon: <FaDatabase size={24} className="text-accent-1" />,
  },
];

export const skills = {
  languages: [
    { name: "C/C++", icon: <SiCplusplus /> },
    { name: "JavaScript", icon: <SiJavascript /> },
    // { name: "TypeScript", icon: <SiTypescript /> }, // Add if you use it
    { name: "Python", icon: <FaPython /> },
    { name: "SQL", icon: <FaDatabase /> },
    { name: "TypeScript", icon: <SiTypescript /> },
    { name: "MongoDB", icon: <SiMongodb /> },
  ],
  frameworksAndLibraries: [
    { name: "React JS", icon: <FaReact /> },
    { name: "Node JS", icon: <FaNodeJs /> },
    { name: "Flask", icon: <FaFlask /> },
    { name: "Tailwind CSS", icon: <SiTailwindcss /> }, // You are using it!
    { name: "Wordpress", icon: <FaWordpress /> },
  ],
  toolsAndPlatforms: [
    { name: "Firebase", icon: <SiFirebase /> },
    { name: "Git & GitHub", icon: <FaGithub /> },
    { name: "VS Code", icon: <FaCode /> }, // Or a more specific icon
    { name: "Postman", icon: <FaCode /> }, // Placeholder icon
    { name: "Google Cloud Platform", icon: <FaCode /> }, // Placeholder icon
  ],
  coreCompetencies: [
    "Problem Solving",
    "Presentations",
    "Oratory",
    "Team Leadership",
    "Event Hosting",
    "Agile Methodologies",
  ],
};

export const leadershipAndInvolvement = [
  {
    role: "Software Engineer",
    organization: "Quantum Dynamics, Utrecht",
    duration: "02/2021 – Present",
    points: [
      "A web and mobile design and development consultancy offering services such as product design, web development, and mobile app development",
    ],
  },
  {
    role: "Full Stack Engineer",
    organization: "Skyline Software, Utrecht",
    duration: "12/2019 – 02/2021",
    points: [
      "A global provider of software development solutions and support services. Chetu's specialized technology and industry experts serve startups and SMBs with an unparalleled software delivery model suited to clients' needs.",
    ],
  },
  {
    role: "Junior Web Developer",
    organization: "Digital Nest, Amsterdam",
    duration: "06/2015-12/2019",
    points: [
      "An award-winning national custom software development, IT staffing, and consulting firm known for providing strategic technology solutions to businesses nationwide.",
    ],
  },
];

export const socialLinks = {
  github: { url: personalInfo.github, icon: <FaGithub size={24} /> },
  email: {
    url: `${personalInfo.email}`,
    icon: <FaEnvelope size={24} />,
  },
  // phone: { url: `tel:${personalInfo.phone}`, icon: <FaPhone size={24} /> }, // Optional
};
