import {
  AcademicCapIcon,
  ArrowDownTrayIcon,
  BuildingOffice2Icon,
  FlagIcon,
  MapIcon,
} from '@heroicons/react/24/outline';

import GithubIcon from '../components/Icon/GithubIcon';
import InstagramIcon from '../components/Icon/InstagramIcon';
import LinkedInIcon from '../components/Icon/LinkedInIcon';
import heroImage from '../images/header-background.webp';
import EUFundsGDP from '../images/portfolio/EUFundsGDP.jpg';
import FDI from '../images/portfolio/FDI.jpg';
import ImpunityIndex from '../images/portfolio/ImpunityIndex.jpg';
import LocalG from '../images/portfolio/LocalG.jpg';
import RegionalD from '../images/portfolio/RegionalD.jpg';
import SexR from '../images/portfolio/SexR.jpg';
import profilepic from '../images/profilepic2.png';
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
  I’m currently a postdoctoral research fellow at the University of Turin.  
  I completed my PhD in Accounting, Management and Business Economics at the “G. d’Annunzio” University of Chieti-Pescara, with a dissertation titled “Economic and Social Implications of Legal Quality and Impunity.”  
  My main research interests include institutional economics, the economic determinants of crime and justice, gender gaps in reporting, and applied causal inference.  
  I’m also a Teaching Tutor for the course Economic Policy at IUL University of Florence.
</p>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
        In my free time time, you can catch me playing beach volley in <strong className="text-stone-100">Valencia</strong>
      </p>
    </>
  ),
  actions: [
    {
      href: '/resume.pdf',
      text: 'Resume',
      primary: true,
      Icon: ArrowDownTrayIcon,
    },
    {
      href: '/CV researcher.pdf',
      text: 'Academic Resume',
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
  description: `I'm a researcher focused on the economic determinants of crime reporting, with a special interest in public policy and impunity, and the Gender GAP. 
  My work combines economics and law to analyze how policies and economic conditions affect the likelihood of reporting crimes, particularly sexual violence. 
  Outside of research, I enjoy exploring technology and playing beach volleyball.`,
  aboutItems: [
  {label: 'Location', text: 'Valencia, Spain', Icon: MapIcon},
  {label: 'Nationality', text: 'Italian', Icon: FlagIcon},
  {label: 'Study', text: 'University of Chieti and Pescara, Italy', Icon: AcademicCapIcon},
  {label: 'Research Fellow', text: 'University of Turin, Italy', Icon: BuildingOffice2Icon},
  {label: 'Tutor', text: 'IUL University of Florence, Italy', Icon: BuildingOffice2Icon},
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
        level: 6,
      },
    ],
  },
  {
    name: 'Data Analysis',
    skills: [
      {
        name: 'Excel',
        level: 8,
      },
      {
        name: 'Stata',
        level: 7,
      },
      {
        name: 'Python',
        level: 6,
      },
    ],
  },
  {
    name: 'Data Visualization',
    skills: [
      {
        name: 'Canva',
        level: 7,
      },
      {
        name: 'Tableau',
        level: 6,
      },
      {
        name: 'QGis',
        level: 6,
      },
    ],
  },
  {
    name: 'General Tools',
    skills: [
      {
        name: 'Google G Suite',
        level: 9,
      },
      {
        name: 'SQL',
        level: 6,
      },
      {
        name: 'GeoDa',
        level: 5,
      },
    ],
  },
];

/**
 * Portfolio section
 */
export const portfolioItems: PortfolioItem[] = [
  {
    title: 'The Role of Impunity: Proposal for a Composite Index',
    description: 'Mario Eboli, Lorenzo Fabiani',
    url: '/ImpunityIndex',
    image: ImpunityIndex,
  },
  {
    title: 'An Analysis of the Relationship Between Foreign Direct Investments and Impunity',
    description: 'Lorenzo Fabiani, Mario Eboli',
    url: '/FDIAnalysis',
    image: FDI,
  },
  {
    title: 'Empowering Local Governance for Creating Public Value: A Preliminary Analysis',
    description: 'Lorenzo Fabiani, Simone Cifolelli',
    url: '/LocalGovernanceAnalysis',
    image: LocalG,
  },
  {
    title: 'The Impact of EU Funds on Regional Per Capita GDP in Italy: An Econometric Analysis',
    description: 'Lorenzo Fabiani, Andrea Toto',
    url: '/EUFundsImpact',
    image: EUFundsGDP,
  },
  {
    title: 'Regional Disparities and Economic Convergence in Italy: A Theoretical and Empirical Perspective',
    description: 'Lorenzo Fabiani, Andrea Toto',
    url: '/RegionalDisparities',
    image: RegionalD,
  },
  {
    title: 'Heterogeneity of sexual crimes reporting in Italian provinces and the effect of the Impunity',
    description: 'Lorenzo Fabiani, Mario Eboli',
    url: '/SexualCrimeReporting',
    image: SexR,
  },
  {
    title: 'Denouncing in the Dark: A Theoretical Model of Domestic Violence Disclosure under Welfare Ambiguity',
    description: 'Lorenzo Fabiani',
    url: '/DVModelDisclosure',
    image: SexR,
  },
  {
    title: 'Efficiency and Transparency in Medical Equipment Procurement: A Comparative Study',
    description: 'Lorenzo Fabiani, University of Turin & University of Valencia',
    url: '/MedicalProcurementStudy',
    image: LocalG,
  }
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
        During my Master’s, I specialized in the study of European Structural Funds, focusing on their impact on regional convergence and long-term sustainability. My thesis applied neoclassical growth models to analyze productivity at the regional level, assessing the effectiveness of these funds in reducing economic disparities within the European Union.
      </p>
    ),
  },
  {
    date: 'March 2016',
    location: 'University of Chieti and Pescara, Italy',
    title: 'Bachelor’s Degree in Business Administration',
    content: (
      <p>
        My undergraduate degree provided a comprehensive foundation in business management, accounting, and microeconomics. I gained valuable insights into organizational structures, financial accounting, and market dynamics. My Bachelor's thesis examined the balance between the right to report and constitutionally guaranteed personal rights, focusing on freedom of expression and individual protections such as privacy, honor, and the rights of minors. The work analyzed legal and ethical considerations, exploring how courts balance these often competing rights in modern jurisprudence.
      </p>
    ),
  },  
];

export const experience: TimelineItem[] = [
  {
    date: 'January 2025 - In Progress',
    location: 'Turin',
    title: 'Postdoctoral Research Fellow – University of Turin',
    content: (
      <p>
            I’m currently a postdoctoral researcher at the University of Turin, where I develop a Python-based document management system to support NRRP/PRIN projects. The tool aims to streamline procedures, reduce errors in compiling determinations and checklists, and ensure better compliance. I also continue research on procurement practices through surveys and internal interviews with administrative staff. 
      </p>
    ),
  }, 
  {
    date: 'February 2025 - In Progress',
    location: 'Online',
    title: 'Teaching Tutor – IUL University of Florence',
    content: (
      <p>
        I work as a Teaching Tutor in Economic Policy at IUL University of Florence, assisting students with academic support and course-related activities. 
      </p>
    ),
  },
  {
    date: 'November 2020 - In Progress',
    location: 'Online',
    title: 'Freelancer Tutor',
    content: (
      <p>
        Provided private online tutoring in Microeconomics, Business Economics, and Economic Policy to university and high school students. 
      </p>
    ),
  },
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
      name: 'Simone Cifolelli',
      text: 'Here, we are instructed to compete and jostle for position, to systematically surpass others in order to achieve predetermined objectives. Lorenzo\'s greatest quality is certainly his innate ability to bring people together, fostering collaboration that transcends individual limitations. Both professionally and personally, he is among the very few individuals worth surrounding oneself with.',
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
      text: 'lorenzo.fabiani@unito.it',
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
      href: 'https://github.com/lorenzofabiani',
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
