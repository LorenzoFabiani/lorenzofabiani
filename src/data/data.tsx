import {
  AcademicCapIcon,
  ArrowDownTrayIcon,
  BuildingOffice2Icon,
  CalendarIcon,
  FlagIcon,
  MapIcon,
  SparklesIcon,
} from '@heroicons/react/24/outline';

import GithubIcon from '../components/Icon/GithubIcon';
import InstagramIcon from '../components/Icon/InstagramIcon';
import LinkedInIcon from '../components/Icon/LinkedInIcon';
import heroImage from '../images/header-background.webp';
import porfolioImage1 from '../images/portfolio/portfolio-1.jpg';
import porfolioImage2 from '../images/portfolio/portfolio-2.jpg';
import porfolioImage3 from '../images/portfolio/portfolio-3.jpg';
import porfolioImage4 from '../images/portfolio/portfolio-4.jpg';
import porfolioImage5 from '../images/portfolio/portfolio-5.jpg';
import porfolioImage6 from '../images/portfolio/portfolio-6.jpg';
import porfolioImage7 from '../images/portfolio/portfolio-7.jpg';
import porfolioImage8 from '../images/portfolio/portfolio-8.jpg';
import porfolioImage9 from '../images/portfolio/portfolio-9.jpg';
import porfolioImage10 from '../images/portfolio/portfolio-10.jpg';
import porfolioImage11 from '../images/portfolio/portfolio-11.jpg';
import profilepic from '../images/profilepic.jpg';
import testimonialImage from '../images/testimonial.webp';
import {
  About,
  ContactSection,
  ContactType,
  Hero,
  HomepageMeta,
  PortfolioItem,
  SkillGroup,
  Social,
  TestimonialSection,
  TimelineItem,
} from './dataDef';

/**
 * Page meta data
 */
export const homePageMeta: HomepageMeta = {
  title: 'Lorenzo Fabiani',
  description: "Lorenzo's resume and projects",
};

/**
 * Section definition
 */
export const SectionId = {
  Hero: 'hero',
  About: 'about',
  Contact: 'contact',
  Portfolio: 'portfolio',
  Resume: 'resume',
  Skills: 'skills',
  Stats: 'stats',
  Testimonials: 'testimonials',
} as const;

export type SectionId = (typeof SectionId)[keyof typeof SectionId];

/**
 * Hero section
 */
export const heroData: Hero = {
  imageSrc: heroImage,
  name: `I'm Lorenzo Fabiani.`,
  description: (
    <>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
        Researcher specialized in economic policies, microeconomics, and the intersections between economics and law. 
        Currently focused on analysing the economic determinants of crime reporting and the effectiveness of prevention policies.
      </p>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
        In my free time time, you can catch me playing beach volley in <strong className="text-stone-100">Valencia</strong>,
        or exploring beautiful Places
      </p>
    </>
  ),
  actions: [
    {
      href: '/assets/resume.pdf',
      text: 'Resume',
      primary: true,
      Icon: ArrowDownTrayIcon,
    },
    {
      href: `#${SectionId.Contact}`,
      text: 'Contact',
      primary: false,
    },
  ],
};

/**
 * About section
 */
export const aboutData: About = {
  profileImageSrc: profilepic,
  description: `I'm a researcher focused on the economic determinants of crime reporting, with a special interest in public policy and impunity. 
  My work combines economics and law to analyze how policies and economic conditions affect the likelihood of reporting crimes, particularly sexual violence. 
Outside of research, I enjoy exploring technology and playing beach volleyball.`,
  aboutItems: [
    {label: 'Location', text: 'Canistro, AQ', Icon: MapIcon},
    {label: 'Age', text: '34', Icon: CalendarIcon},
    {label: 'Nationality', text: 'Italian', Icon: FlagIcon},
    {label: 'Interests', text: 'Motorcycles, Technologies, Traveling', Icon: SparklesIcon},
    {label: 'Study', text: 'University of Chieti and Pescara, Italy', Icon: AcademicCapIcon},
    {label: 'Employment', text: 'University of Chieti and Pescara, Italy', Icon: BuildingOffice2Icon},
  ],
};

/**
 * Skills section
 */
export const skills: SkillGroup[] = [
  {
    name: 'Spoken languages',
    skills: [
      {
        name: 'Italian',
        level: 10,
      },
      {
        name: 'English',
        level: 8,
      },
      {
        name: 'Spanish',
        level: 7,
      },
    ],
  },
  {
    name: 'Frontend development',
    skills: [
      {
        name: 'React',
        level: 9,
      },
      {
        name: 'Typescript',
        level: 7,
      },
      {
        name: 'GraphQL',
        level: 6,
      },
    ],
  },
  {
    name: 'Backend development',
    skills: [
      {
        name: 'Node.js',
        level: 8,
      },
      {
        name: 'Rust',
        level: 5,
      },
      {
        name: 'Golang',
        level: 4,
      },
    ],
  },
  {
    name: 'Mobile development',
    skills: [
      {
        name: 'React Native',
        level: 9,
      },
      {
        name: 'Flutter',
        level: 4,
      },
      {
        name: 'Swift',
        level: 3,
      },
    ],
  },
];

/**
 * Portfolio section
 */
export const portfolioItems: PortfolioItem[] = [
  {
    title: 'Project title 1',
    description: 'Give a short description of your project here.',
    url: 'https://reactresume.com',
    image: porfolioImage1,
  },
  {
    title: 'Project title 2',
    description: 'Give a short description of your project here.',
    url: 'https://reactresume.com',
    image: porfolioImage2,
  },
  {
    title: 'Project title 3',
    description: 'Give a short description of your project here.',
    url: 'https://reactresume.com',
    image: porfolioImage3,
  },
  {
    title: 'Project title 4',
    description: 'Give a short description of your project here.',
    url: 'https://reactresume.com',
    image: porfolioImage4,
  },
  {
    title: 'Project title 5',
    description: 'Give a short description of your project here.',
    url: 'https://reactresume.com',
    image: porfolioImage5,
  },
  {
    title: 'Project title 6',
    description: 'Give a short description of your project here.',
    url: 'https://reactresume.com',
    image: porfolioImage6,
  },
  {
    title: 'Project title 7',
    description: 'Give a short description of your project here.',
    url: 'https://reactresume.com',
    image: porfolioImage7,
  },
  {
    title: 'Project title 8',
    description: 'Give a short description of your project here.',
    url: 'https://reactresume.com',
    image: porfolioImage8,
  },
  {
    title: 'Project title 9',
    description: 'Give a short description of your project here.',
    url: 'https://reactresume.com',
    image: porfolioImage9,
  },
  {
    title: 'Project title 10',
    description: 'Give a short description of your project here.',
    url: 'https://reactresume.com',
    image: porfolioImage10,
  },
  {
    title: 'Project title 11',
    description: 'Give a short description of your project here.',
    url: 'https://reactresume.com',
    image: porfolioImage11,
  },
];

/**
 * Resume section -- TODO: Standardize resume contact format or offer MDX
 */
export const education: TimelineItem[] = [
  {
    date: 'May 2024',
    location: 'University of Chieti and Pescara, Italy',
    title: 'PhD in Accounting, Management, and Business Economics',
    content: <p>During my PhD, I focused on the economic determinants of crime reporting, with a specific emphasis on issues of impunity and public policy. 
      I developed strong skills in econometric analysis, using fixed and random effect regression models to study the factors influencing the reporting of sexual violence. 
      My research also involved collaboration with international institutions, expanding my understanding of both economic theory and its real-world applications in criminal behavior and prevention.</p>,
  },
  {
    date: 'December 2019',
    location: 'University of Chieti and Pescara, Italy',
    title: 'Master’s Degree in Economics and Business Management',
    content: (
      <p>
        I specialized in advanced financial analysis, business strategy, and public policy during my Master's degree. My thesis focused on the economic impact of regulatory frameworks on small businesses, which allowed me to deepen my understanding of the intersection between economics and law. Throughout my studies, I developed a strong proficiency in data analysis and econometrics.
      </p>
    ),
  },
  {
    date: 'March 2016',
    location: 'University of Chieti and Pescara, Italy',
    title: 'Bachelor’s Degree in Business Administration',
    content: (
      <p>
        My undergraduate degree provided a comprehensive foundation in business management, accounting, and microeconomics. I gained valuable insights into organizational structures, financial accounting, and market dynamics. This laid the groundwork for my later specialization in economic policies and criminal behavior analysis.
      </p>
    ),
  },  
];

export const experience: TimelineItem[] = [
  {
    date: 'October 2017 - June 2018',
    location: 'Walter Tosto S.p.A., Chieti-Pescara, Italy',
    title: 'Junior Controller',
    content: (
      <p>
        As a Junior Controller, I was responsible for cost control across cost centers, implementing a new ERP system, preparing industrial financial statements, and supporting financial reporting. This experience allowed me to hone my skills in financial analysis and cost management in a dynamic industrial setting.
      </p>
    ),
  },
  {
    date: '2011 - 2019',
    location: 'Ristorante Parco del Rio Sparto, Canistro (AQ), Italy',
    title: 'Family Business in Restaurant',
    content: (
      <p>
        While pursuing my university studies, I worked in my family’s restaurant. This experience helped me develop strong interpersonal, multitasking, and time management skills. I learned how to handle customer relations, manage workloads under pressure, and balance my academic commitments with work responsibilities.
      </p>
    ),
  },
];


/**
 * Testimonial section
 */
export const testimonial: TestimonialSection = {
  imageSrc: testimonialImage,
  testimonials: [
    {
      name: 'John Doe',
      text: 'Collaborare con me significa lavorare con un professionista appassionato di dati e innovazione, sempre pronto a trovare soluzioni creative e a trasformare le sfide in opportunità. ' +
'Il mio approccio è basato su trasparenza, rispetto delle scadenze e attenzione ai dettagli. Ecco cosa dicono di me colleghi e clienti soddisfatti.',
      image: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/169.jpg',
    },
  ],
};

/**
 * Contact section
 */

export const contact: ContactSection = {
  headerText: 'Get in touch.',
  description: 'Feel free to reach out for collaborations, research opportunities, or any inquiries regarding my work on economic policies and crime reporting. I\'m always open to discussing new ideas and potential partnerships. You can contact me via email or connect with me on social media.',
  items: [
    {
      type: ContactType.Email,
      text: 'lorenzo.fabiani@unich.it',
      href: 'mailto:lorenzo.fabiani@unich.it',
    },
    {
      type: ContactType.Location,
      text: 'Canistro AQ, Italy',
      href: 'https://www.google.com/maps/place/67050+Canistro+AQ,+Italia/@41.9410151,13.3983588,17z',
    },
    {
      type: ContactType.Instagram,
      text: '@lorenzo_s_got_talent',
      href: 'https://www.instagram.com/lorenzo_s_got_talent/',
    },
    {
      type: ContactType.Github,
      text: 'FabianiLo',
      href: 'https://github.com/',
    },
  ],
};

/**
 * Social items
 */
export const socialLinks: Social[] = [
  {label: 'Github', Icon: GithubIcon, href: 'https://github.com/LorenzoFabiani'},
  {label: 'LinkedIn', Icon: LinkedInIcon, href: 'https://www.linkedin.com/in/lorenzo-fabiani-482471106/'},
  {label: 'Instagram', Icon: InstagramIcon, href: 'https://www.instagram.com/lorenzo_s_got_talent/'},
];
