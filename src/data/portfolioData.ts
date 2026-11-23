export type PanelId =
  | 'about'
  | 'projects'
  | 'skills'
  | 'experience'
  | 'achievements'
  | 'creative'
  | 'contact'
  | 'resume'
  | 'future';

export type ProjectId = 'crimesync' | 'bookclub' | 'iocl-process-analytics';

export interface PersonalInfo {
  name: string;
  universeTitle: string;
  email: string;
  phone: string;
  phoneHref: string;
  github: string;
  linkedin: string;
  heroHeading: string;
  heroIntroLine: string;
  heroSupporting: string;
  heroSubtitle: string;
  heroInstruction: string;
}

export interface ProjectData {
  id: ProjectId;
  shortTitle: string;
  fullTitle: string;
  category: string;
  themeVariant: 'investigative' | 'literary' | 'industrial';
  overview: string;
  purpose: string;
  highlights: string[];
  stack: string[];
  contribution: string;
  achievementNote?: string;
}

export interface SkillCategory {
  id: string;
  title: string;
  shelfAccent: string;
  items: string[];
}

export interface InternshipEntry {
  id: string;
  organization: string;
  role: string;
  period: string;
  contributions: string[];
}

export interface EducationEntry {
  id: string;
  degree: string;
  institution: string;
  period: string;
  gradeLabel: string;
  gradeValue: string;
}

export interface CertificationEntry {
  id: string;
  issuer: string;
  title: string;
}

export interface CreativeInterest {
  id: string;
  title: string;
  note: string;
}

export interface RoomObjectMeta {
  id: string;
  label: string;
  tooltip: string;
  panel: PanelId;
  mobileCategory: string;
}

export const PERSONAL_INFO: PersonalInfo = {
  name: 'Simran',
  universeTitle: "Simran's Little Universe",
  email: 'simrnnrana@gmail.com',
  phone: '+91-8708732414',
  phoneHref: 'tel:+918708732414',
  github: 'https://github.com/isimrn',
  linkedin: 'https://linkedin.com/in/simran-rana-201221349',
  heroHeading: "Hey, I'm Simran.",
  heroIntroLine: 'An AI & Data Science student who enjoys turning ideas into intelligent solutions.',
  heroSupporting: 'I turn ideas into intelligent solutions.',
  heroSubtitle: 'AI & Data Science | Developer | Creative Thinker',
  heroInstruction: "Take a look around. There's more than meets the eye.",
};

export const ABOUT_CONTENT = {
  notebookNote: [
    "I'm an Artificial Intelligence and Data Science engineering student who enjoys exploring new tools, learning how systems work, and solving problems through technology.",
    'I enjoy working across data analytics, AI-powered applications, backend development, and creative ideas.',
  ],
  paragraphs: [
    "I'm currently pursuing a B.Tech in Artificial Intelligence and Data Science at Panipat Institute of Engineering and Technology.",
    "I'm curious about how technology can solve real-world problems. My interests span data science, AI-powered applications, backend development, and intelligent systems.",
    'I enjoy experimenting with new tools, building projects, collaborating with people, and continuously learning.',
    'Outside technology, I enjoy photography, singing, cooking, and creative expression.',
  ],
};

export const PROJECTS: ProjectData[] = [
  {
    id: 'crimesync',
    shortTitle: 'CrimeSync',
    fullTitle: 'CrimeSync – AI & Graph-Powered Crime Intelligence Platform',
    category: 'Graph Intelligence & Geospatial Analytics',
    themeVariant: 'investigative',
    overview:
      'An intelligence analysis platform designed to support law-enforcement investigations into organized crime networks, financial connections, and geospatial threat patterns.',
    purpose:
      'Complex investigations often span fragmented entity records, multi-layered financial transfers, and shifting physical locations. CrimeSync connects these disparate signals into an interactive graph and spatial investigation workspace.',
    highlights: [
      'Architected an intelligence analysis platform for investigating organized syndicates.',
      'Implemented Neo4j knowledge graphs to uncover hidden network relationships.',
      'Incorporated multi-hop money trail analysis.',
      'Integrated interactive GIS maps using Leaflet.',
      'Developed 4D suspect tracking capabilities.',
    ],
    stack: [
      'React',
      'TypeScript',
      'Node.js',
      'Express',
      'Neo4j',
      'PostgreSQL',
      'Leaflet',
      'Graph Algorithms',
    ],
    contribution:
      'Architected the intelligence analysis workflow combining Neo4j knowledge graphs, multi-hop financial trail traversal, Leaflet GIS mapping, and 4D suspect movement tracking.',
    achievementNote:
      "Showcased during the college's internal Smart India Hackathon selection process. Selected among the top 50 teams from the college to advance to the next external round.",
  },
  {
    id: 'bookclub',
    shortTitle: 'BookClub',
    fullTitle: 'BookClub – AI-Powered Reading Platform',
    category: 'Social Reading & AI Summaries',
    themeVariant: 'literary',
    overview:
      'A social reading platform that generates spoiler-free book summaries and connects readers with similar interests in real time.',
    purpose:
      'Helps readers explore new books without risking plot spoilers while fostering real-time discussion and matching among readers with shared literary tastes.',
    highlights: [
      'Built a social reading platform focused on book discovery and reader engagement.',
      'Enabled AI-driven spoiler-free book summaries.',
      'Incorporated recommendations and reader matching.',
      'Used real-time communication capabilities to connect readers.',
    ],
    stack: [
      'Node.js',
      'TypeScript',
      'NestJS',
      'PostgreSQL',
      'Prisma',
      'Redis',
      'Socket.io',
      'React',
      'Anthropic API',
    ],
    contribution:
      'Engineered the full-stack reading experience integrating AI-powered spoiler-free summaries via the Anthropic API, reader matching recommendations, and real-time Socket.io communication.',
  },
  {
    id: 'iocl-process-analytics',
    shortTitle: 'Process Data Analytics',
    fullTitle: 'Process Data Analytics Platform – Indian Oil Corporation Limited',
    category: 'Industrial Process Intelligence',
    themeVariant: 'industrial',
    overview:
      'An industrial process analytics platform designed for refinery operations, using historical sensor data to improve operational efficiency and support continuous improvement initiatives.',
    purpose:
      'Refinery workflows generate extensive historical sensor streams. Transforming those records into structured process intelligence enables teams to examine operational behavior and support ongoing improvement efforts.',
    highlights: [
      'Designed a process intelligence platform that converts refinery sensor data into actionable operational insights.',
      'Worked on industrial process analytics using historical sensor data.',
      'Focused on operational efficiency and continuous improvement.',
    ],
    stack: [
      'Python',
      'Pandas',
      'NumPy',
      'Scikit-learn',
      'FastAPI',
      'PostgreSQL',
      'Plotly Dash',
      'PM4Py',
    ],
    contribution:
      'Designed the industrial process intelligence pipeline using Python, Pandas, NumPy, Scikit-learn, PM4Py, FastAPI, PostgreSQL, and Plotly Dash to surface operational insights from historical refinery sensor data.',
  },
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    id: 'languages',
    title: 'Programming Languages',
    shelfAccent: '#C58B69',
    items: ['C', 'C++', 'Python', 'R', 'SQL'],
  },
  {
    id: 'data-science',
    title: 'Data Science and Analytics',
    shelfAccent: '#87947B',
    items: ['Pandas', 'NumPy', 'Matplotlib', 'Seaborn', 'Scikit-learn'],
  },
  {
    id: 'frameworks',
    title: 'Libraries, Frameworks and Development',
    shelfAccent: '#879EB2',
    items: ['FastAPI', 'LangChain', 'Vector Databases', 'REST APIs', 'HTML', 'CSS'],
  },
  {
    id: 'tools',
    title: 'Tools and Platforms',
    shelfAccent: '#D7AF67',
    items: ['Git', 'Jupyter Notebook', 'Google Colab', 'Relay', 'Figma'],
  },
];

export const INTERNSHIPS: InternshipEntry[] = [
  {
    id: 'ibm-skillsbuild',
    organization: 'IBM SkillsBuild',
    role: 'Internship',
    period: 'July 2025 – August 2025',
    contributions: [
      'Developed a Disaster Alert System using Relay workflows and API integration.',
      'Designed an automated email notification system to send alerts and updates to users.',
    ],
  },
  {
    id: 'code-squads',
    organization: 'Code Squads',
    role: 'Internship',
    period: 'July 2024 – August 2024',
    contributions: [
      'Learned core Python concepts, including data structures and file handling.',
      'Processed and cleaned raw datasets using NumPy and Pandas.',
      'Visualized data using Matplotlib and Seaborn to support business decision-making.',
    ],
  },
];

export const CERTIFICATIONS: CertificationEntry[] = [
  {
    id: 'csrbox-agentic-ai',
    issuer: 'CSRBOX',
    title: 'Agentic AI: From Learner to Builder',
  },
  {
    id: 'excelr-digital-marketing',
    issuer: 'EXCELR',
    title: 'Digital Marketing',
  },
  {
    id: 'ibm-agentic-ai',
    issuer: 'IBM SkillsBuild',
    title: 'Agentic AI',
  },
];

export const EDUCATION: EducationEntry[] = [
  {
    id: 'btech-piet',
    degree: 'B.Tech – Artificial Intelligence & Data Science',
    institution: 'Panipat Institute of Engineering and Technology, Samalkha',
    period: '2023 – Present',
    gradeLabel: 'Current CGPA',
    gradeValue: '8.0 / 10',
  },
  {
    id: 'cbse-12',
    degree: 'Senior Secondary – CBSE Board',
    institution: 'CBSE Board',
    period: '2022',
    gradeLabel: 'Percentage',
    gradeValue: '90%',
  },
];

export const ACHIEVEMENTS = [
  {
    id: 'sih-crimesync',
    title: 'Smart India Hackathon — Internal Selection Round',
    project: 'CrimeSync',
    description:
      "Selected among the top 50 teams in the college's internal Smart India Hackathon selection round and advanced to the next external round.",
  },
];

export const CREATIVE_INTERESTS: CreativeInterest[] = [
  {
    id: 'photography',
    title: 'Photography',
    note: 'Capturing golden-hour light, quiet corners, and everyday visual stories.',
  },
  {
    id: 'singing',
    title: 'Singing',
    note: 'Finding rhythm, melody, and calm away from screens.',
  },
  {
    id: 'cooking',
    title: 'Cooking',
    note: 'Experimenting with flavors, patience, and comforting recipes.',
  },
  {
    id: 'poetry',
    title: 'Poetry & Creative Expression',
    note: 'Writing reflective verse and putting thoughts into intentional words.',
  },
];

export const ROOM_OBJECTS: RoomObjectMeta[] = [
  {
    id: 'computer',
    label: 'Workstation',
    tooltip: 'Explore my projects',
    panel: 'projects',
    mobileCategory: 'Projects',
  },
  {
    id: 'bookshelf',
    label: 'Bookshelf',
    tooltip: 'Discover my skills',
    panel: 'skills',
    mobileCategory: 'Skills',
  },
  {
    id: 'notebook',
    label: 'Open Notebook',
    tooltip: 'A little about me',
    panel: 'about',
    mobileCategory: 'About Me',
  },
  {
    id: 'board',
    label: 'Pinboard',
    tooltip: "Things I've built and achieved",
    panel: 'achievements',
    mobileCategory: 'Achievements',
  },
  {
    id: 'journal',
    label: 'Desk Calendar & Journal',
    tooltip: 'Internships & education',
    panel: 'experience',
    mobileCategory: 'Experience',
  },
  {
    id: 'camera',
    label: 'Vintage Camera',
    tooltip: 'Beyond the code',
    panel: 'creative',
    mobileCategory: 'Creative Side',
  },
  {
    id: 'letter',
    label: 'Open Letter',
    tooltip: "Let's connect",
    panel: 'contact',
    mobileCategory: 'Contact',
  },
  {
    id: 'resume',
    label: 'Resume Folio',
    tooltip: 'View resume status',
    panel: 'resume',
    mobileCategory: 'Resume',
  },
  {
    id: 'door',
    label: 'Room Door',
    tooltip: 'Future additions',
    panel: 'future',
    mobileCategory: 'Future',
  },
];

export const CHARACTER_DIALOGUES: string[] = [
  "Welcome to my little universe! Click any object in the room to explore.",
  "My retro computer holds CrimeSync, BookClub, and my IOCL analytics work.",
  "Check out the bookshelf for my Python, Data Science, and AI stack.",
  "The camera by the window shows life beyond the code — photography, singing & poetry.",
];
