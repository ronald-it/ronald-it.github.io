// Portfolio information

const header = {
  // all the properties are optional - can be left empty or deleted
  homepage: 'https://github.com/ronald-it/ronald-it.github.io',
  title: 'RC.',
}

const about = {
  // all the properties are optional - can be left empty or deleted
  name: 'Ronald Cirgofer',
  role: 'Full-stack Developer',
  educationInfo: `In July 2018, I obtained my bachelor’s degree in International Business and Languages at Hanze University of Applied Sciences, Groningen, the Netherlands. The first few years after graduating, I primarily gained work experience in administrative roles.`,
  frontendInfo: `In February 2022, I made a career switch to IT by completing a Frontend Development bootcamp at NOVI University of Applied Sciences. This marked the beginning of my journey as a Frontend Developer.`,
  backendInfo: `Between 2023 and 2025, I further expanded my skill set by successfully completing the key modules of a self-study Back-end Development program, broadening my expertise in backend technologies. This progression has enabled me to transition towards becoming a Full-Stack Developer.`,
  characteristicsInfo: `I am a motivated and organized professional with a strong eagerness to learn. I work well both independently and in a team and actively look for opportunities to develop my skills and grow within the tech industry.`,
  resume: 'https://example.com',
  social: {
    linkedin: 'https://www.linkedin.com/in/ronald-cirgofer/',
    github: 'https://github.com/ronald-it/',
  },
}

const projects = [
  // projects can be added an removed
  // if there are no projects, Projects section won't show up
  {
    name: 'The Clueless Cook',
    description:
      'Final project for my Frontend Development bootcamp. A web application for searching and exploring recipes, now rebuilt as a full-stack app responsive across all devices.',
    stack: ['Tailwind', 'Next.js', 'PostgreSQL'],
    sourceCode: 'https://github.com/ronald-it/the-clueless-cook',
    livePreview: 'https://the-clueless-cook.onrender.com/',
  },
  {
    name: 'Membership Manager',
    description:
      'Final project for the PHP & MySQL module of my Backend Development program. A full-stack web application for managing memberships, supporting full CRUD operations.',
    stack: ['Tailwind', 'Laravel', 'PostgreSQL'],
    sourceCode: 'https://github.com/ronald-it/membership-manager',
    livePreview: 'https://membership-manager.onrender.com/',
  },
  {
    name: 'Budgetly',
    description:
      'A Frontend Mentor challenge to build a personal finance tracker. Users can set budgets, track expenses, and visualize financial data with charts and summaries. Built full-stack.',
    stack: ['SCSS', 'Next.js', 'Django', 'PostgreSQL'],
  },
]

const skills = [
  // skills can be added or removed
  // if there are no skills, Skills section won't show up
  'HTML',
  'CSS/SASS/SCSS',
  'Tailwind',
  'JavaScript',
  'Node.js',
  'React',
  'Next.js',
  'Python',
  'PHP',
  'Laravel',
  'SQL',
  'Git',
  'REST API',
  'Jest',
  'CI/CD',
]

const contact = {
  // email is optional - if left empty Contact section won't show up
  email: 'ronald.cirgofer@hotmail.com',
}

export { header, about, projects, skills, contact }
