import {
  FaHome,
  FaUser,
  FaFolderOpen,
  FaEnvelopeOpen,
  FaBriefcase,
  FaGraduationCap,
  FaCode,
} from 'react-icons/fa';

import { FiDownload } from 'react-icons/fi';
import { FiFileText, FiSmile, FiExternalLink } from 'react-icons/fi';

import Work1 from './assets/projects/project1.png';
import Work2 from './assets/projects/project2.png';
import Work3 from './assets/projects/project3.png';
import Work4 from './assets/projects/project4.png';
import Work5 from './assets/projects/project5.png';
import Work6 from './assets/projects/project6.png';
import Work7 from './assets/projects/project7.png';
import Work8 from './assets/projects/project8.png';
import Work9 from './assets/projects/project9.png';

import Theme1 from './assets/purple.png';
import Theme2 from './assets/red.png';
import Theme3 from './assets/blueviolet.png';
import Theme4 from './assets/blue.png';
import Theme5 from './assets/goldenrod.png';
import Theme6 from './assets/magenta.png';
import Theme7 from './assets/yellowgreen.png';
import Theme8 from './assets/orange.png';
import Theme9 from './assets/green.png';
import Theme10 from './assets/yellow.png';

export const links = [
  {
    id: 1,
    name: 'Home',
    icon: <FaHome className='nav__icon' />,
    path: '/',
  },

  {
    id: 2,
    name: 'About',
    icon: <FaUser className='nav__icon' />,
    path: '/about',
  },

  {
    id: 3,
    name: 'Portfolio',
    icon: <FaFolderOpen className='nav__icon' />,
    path: '/portfolio',
  },

  {
    id: 4,
    name: 'Contact',
    icon: <FaEnvelopeOpen className='nav__icon' />,
    path: '/contact',
  },
];

export const personalInfo = [
  {
    id: 1,
    title: 'First Name : ',
    description: 'Dèwanou',
  },

  {
    id: 2,
    title: 'Last Name : ',
    description: 'HOUNKPATIN',
  },

  // {
  //   id: 3,
  //   title: 'Age : ',
  //   description: '18 Years',
  // },

  {
    id: 4,
    title: 'Nationality : ',
    description: 'Beninese',
  },

  {
    id: 5,
    title: 'Freelance : ',
    description: 'Available',
  },

  {
    id: 6,
    title: 'Address : ',
    description: 'Cotonou',
  },

  {
    id: 7,
    title: 'Phone : ',
    description: '+229 0146097120',
  },

  {
    id: 8,
    title: 'Email : ',
    description: 'hounkpatindewanou@gmail.com',
  },

  {
    id: 9,
    title: 'LinkedIn : ',
    description: 'hounkpatin-dewanou',
  },

  {
    id: 10,
    title: 'Langages : ',
    description: 'French, English',
  },
];

export const stats = [
  {
    id: 1,
    no: '12+',
    title: 'Years of <br /> Experience',
  },

  {
    id: 2,
    no: '97+',
    title: 'Completed <br /> Projects',
  },

  {
    id: 3,
    no: '81+',
    title: 'Happy <br /> Customers',
  },

  {
    id: 4,
    no: '53+',
    title: ' Awards <br /> Won',
  },
];

export const resume = [
  {
    id: 1,
    category: 'experience',
    icon: <FaBriefcase />,
    year: 'May 26 to July 25, 2025',
    title: 'Academic Internship, <span> METEO BENIN </span>',
    desc: " Support for IT and technical activities. Participation in the management and monitoring of digital tools. Learning about the operation of information systems in a public institution. Strengthening professional rigor and teamwork skills. Assistance with IT maintenance."
  },

  {
    id: 2,
    category: 'experience',
    icon: <FaBriefcase />,
    year: 'July – August 2024',
    title: "Academic Internship, <span> ENEAM IT Department </span>",
    desc: "Technical support for users. Maintenance of IT equipment. Support for digital and administrative activities. Participation in tasks related to IT systems. Reprogramming of an iPad. Participation in some network projects at ENEAM.",
  },

  {
    id: 4,
    category: 'education',
    icon: <FaGraduationCap />,
    year: 'June 2023',
    title: 'Baccalaureate C <span> Complexe Scolaire Catholique Père Aupiais </span>',
    desc: '',
  },

  {
    id: 5,
    category: 'education',
    icon: <FaGraduationCap />,
    year: 'June 2019',
    title: 'BEPC – Modele court <span> Complexe Scolaire Assafwa Les Élites de Fidjrossè </span>',
    desc: '',
  },

  {
    id: 6,
    category: 'education',
    icon: <FaGraduationCap />,
    year: 'June 2016',
    title: "CEP <span> Complexe Scolaire Christus Redemptor d'Akogbato </span>",
    desc: '',
  },
];

export const skills = [
  {
    category: 'Web Development',
    items: [
      { id: 7, title: 'React', percentage: '100' },
      { id: 10, title: 'Laravel', percentage: '100' },
      { id: 2, title: 'Javascript', percentage: '100' },
      { id: 5, title: 'Wordpress', percentage: '100' },
    ],
  },
  {
    category: 'Mobile App',
    items: [
      { id: 17, title: 'Flutter', percentage: '100' },
      { id: 18, title: 'Java', percentage: '100' },
    ],
  },
  {
    category: 'System & Security',
    items: [
      { id: 9, title: 'Linux', percentage: '100' },
      { id: 14, title: 'Maintenance', percentage: '100' },
      { id: 20, title: 'Cryptography', percentage: '100' },
      { id: 13, title: 'Networks', percentage: '100' },
    ],
  },
  {
    category: 'Backend & Data',
    items: [
      { id: 8, title: 'Python', percentage: '100' },
      { id: 4, title: 'Php', percentage: '100' },
      { id: 19, title: 'Database Admin', percentage: '100' },
    ],
  },
];

export const portfolio = [
  {
    id: 1,
    img: Work1,
    title: 'AGRICEFORPA-LIGHT',
    type: 'web',
    details: [
      {
        icon: <FiFileText />,
        title: 'Project : ',
        desc: 'AGRICEFORPA-LIGHT',
      },
      {
        icon: <FiSmile />,
        title: 'Description : ',
        desc: "Site web de présentation de la structure AGRICEFORPA-LIGHT au Bénin sur ses travaux agricoles et d'élevages modernes",
      },
      {
        icon: <FaCode />,
        title: 'Language : ',
        desc: "HTML + CSS + JS + PHP",
      },
      {
        icon: <FiExternalLink />,
        title: 'Preview : ',
        desc: 'https://hugues2024.github.io/AGRICEFORPA-LIGHT/',
      },
    ],
  },

  {
    id: 2,
    img: Work2,
    title: 'FBIP Compta – Inter-Foods',
    type: 'web',
    details: [
      {
        icon: <FiFileText />,
        title: 'Project : ',
        desc: 'FBIP Compta – Inter-Foods',
      },
      {
        icon: <FiSmile />,
        title: 'Description : ',
        desc: 'Site web de gestion comptable',
      },
      {
        icon: <FaCode />,
        title: 'Language : ',
        desc: "Laravel",
      },
      {
        icon: <FiExternalLink />,
        title: 'Preview : ',
        desc: 'https://fbipcompta.inter-foods.com/site/public/',
      },
    ],
  },

  {
    id: 3,
    img: Work3,
    title: 'CGS Sécurité',
    type: 'web',
    details: [
      {
        icon: <FiFileText />,
        title: 'Project : ',
        desc: 'CGS Sécurité',
      },
      {
        icon: <FiSmile />,
        title: 'Description : ',
        desc: 'Site web professionnel développé avec Laravel',
      },
      {
        icon: <FaCode />,
        title: 'Language : ',
        desc: "Laravel",
      },
      {
        icon: <FiExternalLink />,
        title: 'Preview : ',
        desc: 'https://cgspsecurite.com/',
      },
    ],
  },

  {
    id: 4,
    img: Work4,
    title: 'FORD HIGH TECH (FHT)',
    type: 'web',
    details: [
      {
        icon: <FiFileText />,
        title: 'Project : ',
        desc: 'FORD HIGH TECH (FHT)',
      },
      {
        icon: <FiSmile />,
        title: 'Description : ',
        desc: 'Site institutionnel et technique (informatique & électronique)',
      },
      {
        icon: <FaCode />,
        title: 'Language : ',
        desc: "Laravel",
      },
      {
        icon: <FiExternalLink />,
        title: 'Preview : ',
        desc: 'https://outilsco.com/fht/public',
      },
    ],
  },

  {
    id: 5,
    img: Work5,
    title: 'EasyTests',
    type: 'web',
    details: [
      {
        icon: <FiFileText />,
        title: 'Project : ',
        desc: 'EasyTests',
      },
      {
        icon: <FiSmile />,
        title: 'Description : ',
        desc: 'Plateforme web de gestion et de passation de tests',
      },
      {
        icon: <FaCode />,
        title: 'Language : ',
        desc: "PHP",
      },
      {
        icon: <FiExternalLink />,
        title: 'Preview : ',
        desc: 'https://easytests.free.nf',
      },
    ],
  },

  {
    id: 6,
    img: Work6,
    title: 'TodoWork',
    type: 'mobile',
    details: [
      {
        icon: <FiFileText />,
        title: 'Project : ',
        desc: 'TodoWork',
      },
      {
        icon: <FiSmile />,
        title: 'Description : ',
        desc: "Application mobile de planifications des tâches et d'agendas",
      },
      {
        icon: <FaCode />,
        title: 'Language : ',
        desc: "Flutter + Firebase",
      },
      {
        icon: <FiDownload />,
        title: 'Download : ',
        desc: 'https://drive.google.com/file/d/1z6gnUet6lxQUYzeILSHeaOPPk62e53cs/view?usp=sharing',
      },
    ],
  },

  {
    id: 7,
    img: Work7,
    title: 'Culture-Bénin',
    type: 'web',
    details: [
      {
        icon: <FiFileText />,
        title: 'Project : ',
        desc: 'Culture-Bénin',
      },
      {
        icon: <FiSmile />,
        title: 'Description : ',
        desc: 'Plateforme web de valorisation de la culture béninoise',
      },
      {
        icon: <FaCode />,
        title: 'Language : ',
        desc: "Laravel",
      },
      {
        icon: <FiExternalLink />,
        title: 'Preview : ',
        desc: 'https://culture-benin-xk8x.onrender.com/',
      },
    ],
  },

  {
    id: 8,
    img: Work8,
    title: 'Dèwanou HOUNKPATIN',
    type: 'web',
    details: [
      {
        icon: <FiFileText />,
        title: 'Project : ',
        desc: 'Dèwanou HOUNKPATIN',
      },
      {
        icon: <FiSmile />,
        title: 'Description : ',
        desc: 'Site web de Dèwanou HOUNKPATIN',
      },
      {
        icon: <FaCode />,
        title: 'Language : ',
        desc: "Laravel",
      },
      {
        icon: <FiExternalLink />,
        title: 'Preview : ',
        desc: 'https://hugues2024.github.io/hugues/',
      },
    ],
  },

  {
    id: 9,
    img: Work9,
    title: 'Contact Manager',
    type: 'web',
    details: [
      {
        icon: <FiFileText />,
        title: 'Project : ',
        desc: 'A contact Manager app',
      },
      {
        icon: <FiSmile />,
        title: 'Description : ',
        desc: 'Manage your contacts easily and efficiently',
      },
      {
        icon: <FaCode />,
        title: 'Language : ',
        desc: "Next.JS + JSON SERVER",
      },
      {
        icon: <FiExternalLink />,
        title: 'Preview : ',
        desc: 'https://dewanou-contact.vercel.app/',
      },
    ],
  },

];

// export const themes = [
//   {
//     id: 1,
//     img: Theme1,
//     color: 'hsl(252, 35%, 51%)',
//   },

//   {
//     id: 2,
//     img: Theme2,
//     color: 'hsl(4, 93%, 54%)',
//   },

//   {
//     id: 3,
//     img: Theme3,
//     color: 'hsl(271, 76%, 53%)',
//   },

//   {
//     id: 4,
//     img: Theme4,
//     color: 'hsl(225, 73%, 57%)',
//   },

//   {
//     id: 5,
//     img: Theme5,
//     color: 'hsl(43, 74%, 49%)',
//   },

//   {
//     id: 6,
//     img: Theme6,
//     color: 'hsl(339, 81%, 66%)',
//   },

//   {
//     id: 7,
//     img: Theme7,
//     color: 'hsl(80, 61%, 50%)',
//   },

//   {
//     id: 8,
//     img: Theme8,
//     color: 'hsl(19, 96%, 52%)',
//   },

//   {
//     id: 9,
//     img: Theme9,
//     color: 'hsl(88, 65%, 43%)',
//   },

//   {
//     id: 10,
//     img: Theme10,
//     color: 'hsl(42, 100%, 50%)',
//   },
// ];