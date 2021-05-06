import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: 'Christian | Developer', // e.g: 'Name | Developer'
  lang: '', // e.g: en, es, fr, jp
  description: 'Welcome to my website!', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: '',
  name: 'Christian',
  subtitle: 'Im a software developer',
  cta: '',
};

// ABOUT DATA
export const aboutData = {
  img: 'me.jpg',
  paragraphOne:
    'Im a self taught web developer who is passionate about various web technologies. I like to experiment with various web development tools.',
  paragraphTwo:
    'I am currently focused in front end with responsive design in mind with technologies such as HTML, CSS, Javascript and Reactjs.',
  paragraphThree:
    'When im not focused on coding, Im usually hanging out with friends and enjoying the great outdoors! 🏞',
  resume: '', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'project.jpg',
    title: '',
    info: '',
    info2: '',
    url: '',
    repo: 'https://github.com/cobidev/react-simplefolio', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'project.jpg',
    title: '',
    info: '',
    info2: '',
    url: '',
    repo: 'https://github.com/cobidev/react-simplefolio', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'project.jpg',
    title: '',
    info: '',
    info2: '',
    url: '',
    repo: 'https://github.com/cobidev/react-simplefolio', // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  cta: '',
  btn: `Let's Talk!`,
  email: 'christiansfsantos@gmail.com',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      //   id: nanoid(),
      //   name: 'twitter',
      //   url: '',
      // },
      // {
      //   id: nanoid(),
      //   name: 'codepen',
      //   url: '',
      // },
      // {
      id: nanoid(),
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/christian428/',
    },
    {
      id: nanoid(),
      name: 'github',
      url: 'https://github.com/Christiansantoss',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: false, // set to false to disable the GitHub stars/fork buttons
};
