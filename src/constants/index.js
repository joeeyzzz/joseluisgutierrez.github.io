import {
  frontend,
  backend,
  ux,
  prototyping,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  git,
  figma,
  docker,
  postgresql,
  rubyrails,
  graphql,
  pinfbet,
  pharmacy,
  psychology,
  todo,
  prototype,
  knowmad,
} from '../assets';

export const navLinks = [
  {
    id: 'about',
    title: 'About',
  },
  {
    id: 'projects',
    title: 'Projects',
  },
  {
    id: 'contact',
    title: 'Contact',
  },
];

const services = [
  {
    title: 'Frontend Developer',
    icon: frontend,
  },
  {
    title: 'Backend Developer',
    icon: backend,
  },
  {
    title: 'UI/UX Design',
    icon: ux,
  },
  {
    title: 'Software Prototyping',
    icon: prototyping,
  },
];

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
    name: 'Rails',
    icon: rubyrails,
  },
  {
    name: 'graphql',
    icon: graphql,
  },
  {
    name: 'postgresql',
    icon: postgresql,
  },
  {
    name: 'git',
    icon: git,
  },
  {
    name: 'figma',
    icon: figma,
  },
  {
    name: 'docker',
    icon: docker,
  },
];

const experiences = [
  {
    title: 'PHP Back-End Developer',
    company_name: 'Knowmad Mood',
    icon: knowmad,
    iconBg: '#333333',
    date: 'Apr 2023-Oct 2023',
  },
];

const projects = [
  {
    id: 'project-1',
    name: 'pinfbet',
    description: 'An academic betting website for students.',
    tags: [
    ],
    image: pinfbet,
  },
  {
    id: 'project-2',
    name: 'Pharmacy API',
    description:
      'An API with different design patterns for a pharmacy.',
    tags: [
    ],
    image: pharmacy,
  },
  {
    id: 'project-3',
    name: 'Scheduling App',
    description: 'A scheduling application for psychologists.',
    tags: [
    ],
    image: psychology,
  },
  {
    id: 'project-4',
    name: 'To-Do App',
    description: `A To-Do application to organize your days.`,
    tags: [
    ],
    image: todo,
  },
  {
    id: 'project-5',
    name: 'Website Prototype',
    description: 'Software Requirements Document, System Activity Document and Prototyping of a new web application.',
    tags: [
    ],
    image: prototype,
  },
];

export { services, technologies, experiences, projects };
