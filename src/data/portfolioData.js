export const profile = {
  name: 'Rajkumar U',
  initials: 'RU',
  roles: ['Data Analyst', 'BI Developer', 'Business Intelligence Analyst'],
  heroDescription:
    "I'm a Data Analyst with two years of combined experience in business intelligence, reporting, and analytics. I specialize in Power BI, Python, SQL, and Microsoft Dynamics 365, building interactive dashboards and automated reports that turn raw data into decisions teams can act on.",
  aboutParagraphs: [
    "I'm a Data Analyst with two years of combined experience across an MIS Assistant role and a Data Analyst internship, working in business intelligence, reporting, and analytics. My toolkit includes Python, Power BI, Tableau, SQL, Microsoft Dynamics 365 CRM, and Microsoft Excel.",
    "I enjoy integrating data from multiple sources into unified BI models, automating reporting workflows, and building dashboards that make decisions easier for the teams around me. I've helped cut manual reporting effort by up to 40%, and I'm always looking for the next process worth automating.",
  ],
  email: 'u.rajkumar2001@gmail.com',
  phone: '+91 9360550686',
  linkedin: 'https://www.linkedin.com/feed/',
  github: 'https://github.com/Rajkumar3754',
  location: 'Chennai, Tamil Nadu, India',
  resumePath: '/resume.pdf',
}

export const aboutStats = [
  { label: 'BI & Analytics Projects', value: 3, suffix: '+' },
  { label: 'Core Stack', value: null, tags: ['Power BI', 'SQL', 'Python'] },
  { label: 'Focus Areas', value: null, tags: ['Dashboards', 'ETL', 'Data Modeling'] },
]

export const education = [
  {
    degree: 'Bachelor of Engineering (B.E.)',
    field: 'Mechanical Engineering',
    period: 'Government College of Engineering, Srirangam · 2023',
    year: '2023',
    status: 'complete',
  },
]

export const experience = [
  {
    role: 'MIS Assistant (Data & BI Analytics)',
    company: 'Forsan Foods & Consumer Products',
    period: 'April 2025 - Present',
    points: [
      'Automated interactive dashboards using BI tools, reducing manual reporting time by 40%',
      'Integrated multiple data sources (SQL Server, Oracle, Dynamics 365 Business Central, SharePoint) into unified BI models',
      'Implemented row-level security (RLS) for 20+ users, ensuring secure role-based access',
    ],
  },
  {
    role: 'Data Analyst Intern',
    company: 'Besant Technology, Chennai',
    period: 'June 2024 - March 2025',
    points: [
      'Designed KPI dashboards that improved visibility into sales and operational performance',
      'Built data models using Power Query and optimized ETL pipelines, improving load times by 30%',
      'Supported 24/7 BI operations, resolving ad-hoc requests and maintaining 99% SLA compliance',
    ],
  },
]

export const skillGroups = [
  {
    title: 'BI Tools',
    icon: 'chart',
    skills: [
      { name: 'Power BI (Desktop, Pro, Service)', level: 90 },
      { name: 'Tableau', level: 75 },
    ],
  },
  {
    title: 'Programming & Databases',
    icon: 'code',
    skills: [
      { name: 'SQL (MS SQL Server, Oracle)', level: 85 },
      { name: 'Python', level: 80 },
      { name: 'PostgreSQL', level: 72 },
    ],
  },
  {
    title: 'Libraries',
    icon: 'layers',
    skills: [
      { name: 'Pandas', level: 80 },
      { name: 'NumPy', level: 75 },
      { name: 'Matplotlib', level: 72 },
      { name: 'Seaborn', level: 72 },
    ],
  },
  {
    title: 'Data Handling',
    icon: 'database',
    skills: [
      { name: 'Power Query', level: 88 },
      { name: 'DAX', level: 86 },
      { name: 'Advanced Excel', level: 85 },
    ],
  },
  {
    title: 'Cloud & Tools',
    icon: 'tool',
    skills: [
      { name: 'Dynamics 365 Business Central', level: 85 },
      { name: 'SharePoint', level: 78 },
      { name: 'Git', level: 75 },
      { name: 'Monday.com', level: 72 },
    ],
  },
  {
    title: 'Soft Skills',
    icon: 'users',
    skills: [
      { name: 'Problem Solving', level: 88 },
      { name: 'Stakeholder Communication', level: 85 },
      { name: 'Process Optimization', level: 86 },
      { name: 'Continuous Learning', level: 90 },
    ],
  },
]

export const certifications = []

export const whyHireMe = [
  {
    title: 'Business Intelligence Expertise',
    description: 'Skilled in Power BI and Tableau, building interactive dashboards that turn raw data into decision-ready insights.',
    icon: 'chart',
  },
  {
    title: 'Proven Process Optimization',
    description: 'Reduced manual reporting time by 40% and improved ETL load times by 30% through automation and process redesign.',
    icon: 'code',
  },
  {
    title: 'Multi-Source Data Integration',
    description: 'Experience unifying SQL Server, Oracle, Dynamics 365 Business Central, and SharePoint data into single BI models.',
    icon: 'layers',
  },
  {
    title: 'Reliable & Detail-Oriented',
    description: 'Supported 24/7 BI operations and maintained 99% SLA compliance while resolving ad-hoc requests and securing access for 50+ users.',
    icon: 'spark',
  },
]

export const projectStats = [
  { label: 'BI & Analytics Projects', value: 3, suffix: '+' },
  { label: 'Reporting Time Reduced', value: 40, suffix: '%' },
  { label: 'Users Secured via RLS', value: 70, suffix: '+' },
  { label: 'SLA Compliance', value: 99, suffix: '%' },
]

export const projects = [
  {
    title: 'Fast Food & Business Central BI Dashboards',
    github: '',
    category: 'Business Intelligence',
    description:
      'Automated ETL pipelines with API integrations and scheduled Power BI refreshes for onboarding, product tracking, and dine-in vs. takeaway performance. Built grocery and sales credit memo dashboards on Dynamics 365 data covering real-time sales, VAT, cost, and quantity metrics, with advanced DAX measures and row-level security for 50+ users.',
    tech: ['Power BI', 'DAX', 'Dynamics 365 Business Central', 'Power Query', 'Row-Level Security'],
  },
  {
    title: 'Retail Sales Dashboard',
    github: '',
    category: 'Business Intelligence',
    description:
      'Built a Power BI dashboard tracking invoices, total sales, quantities, and unit prices, with visuals broken out by location, department, payment type, and monthly trend. Added dynamic date filters, automated refresh schedules, and DAX-based calculations.',
    tech: ['Power BI', 'DAX', 'Data Modeling', 'Power Query'],
  },
  {
    title: 'Food Sales & Inventory Analysis (Python)',
    github: '',
    category: 'Python Analytics',
    description:
      'Analyzed food product sales, inventory, and wastage data from Dynamics 365 Business Central using Python to identify slow-moving SKUs and demand patterns. Built data-cleaning and aggregation scripts to consolidate branch-wise sales and stock data, then visualized trends, cost variance, and inventory turnover to support procurement and pricing decisions.',
    tech: ['Python', 'Pandas', 'NumPy', 'Matplotlib', 'Seaborn'],
  },
]

export const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Education', href: '#education' },
  { label: 'Certifications', href: '#certifications' },
  { label: 'Experience', href: '#experience' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
]
