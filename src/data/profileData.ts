export interface NavItem {
  id: string;
  label: string;
  href: string;
}

export interface AcademicStat {
  id: string;
  value: number;
  decimals?: number;
  suffix?: string;
  label: string;
  sublabel: string;
}

export interface AcademicMilestone {
  id: string;
  order: string;
  category: string;
  title: string;
  subtitle?: string;
  institution: string;
  timeframe: string;
  status: string;
  metricValue: number;
  metricDecimals?: number;
  metricSuffix?: string;
  metricLabel: string;
  details: string[];
  highlight?: boolean;
}

export interface AchievementItem {
  id: string;
  index: string;
  statement: string;
  context: string;
  metricDisplay: string;
  metricCaption: string;
  period: string;
}

export interface SkillCategory {
  id: 'accounting' | 'taxation' | 'finance' | 'tools';
  label: string;
  subtitle: string;
  skills: {
    name: string;
    focus: string;
  }[];
}

export interface InterestItem {
  id: string;
  index: string;
  title: string;
  domain: string;
  description: string;
  keyThemes: string[];
}

export const PROFILE = {
  fullName: 'Nital Narendra Patil',
  firstName: 'NITAL',
  lastName: 'NARENDRA PATIL',
  brandMark: 'Nital Patil',
  initials: 'NP',
  title: 'Aspiring Chartered Accountant',
  identity: 'Modern Finance Professional',
  heroHeadline: 'Turning Financial Knowledge Into Professional Excellence.',
  heroIntro:
    'An ambitious commerce student pursuing the Chartered Accountancy journey, with a strong academic foundation and a passion for accounting, taxation, finance and continuous professional development.',
  aboutHeading: 'Beyond Numbers. Driven by Purpose.',
  aboutParagraphs: [
    'I am Nital Narendra Patil, an aspiring Chartered Accountant currently pursuing my B.Com degree while progressing through the Chartered Accountancy course.',
    'My academic journey has strengthened my interest in accounting, corporate laws, taxation and financial management.',
    'I believe in continuous learning, professional discipline and developing the analytical mindset required in the financial world.',
  ],
  footerQuote: 'Building Knowledge. Creating Value. Growing Every Day.',
  copyright: '© 2026 Nital Narendra Patil. All Rights Reserved.',
  portraitPath: '/assets/aistudio/IMG-20260918-WA0012_dcfb7d33.jpg',
  contact: {
    mobile: '7875476397',
    mobileFormatted: '+91 78754 76397',
    telHref: 'tel:7875476397',
    email: 'nitalpatil211@gmail.com',
    mailtoHref: 'mailto:nitalpatil211@gmail.com',
    whatsappHref: 'https://wa.me/917875476397',
  },
} as const;

export const NAV_ITEMS: NavItem[] = [
  { id: 'home', label: 'Home', href: '#home' },
  { id: 'about', label: 'About', href: '#about' },
  { id: 'education', label: 'Education', href: '#education' },
  { id: 'achievements', label: 'Achievements', href: '#achievements' },
  { id: 'skills', label: 'Skills', href: '#skills' },
  { id: 'interests', label: 'Interests', href: '#interests' },
  { id: 'contact', label: 'Contact', href: '#contact' },
];

export const ACADEMIC_STATS: AcademicStat[] = [
  {
    id: 'ca-foundation',
    value: 217,
    label: 'CA Foundation Marks',
    sublabel: 'ICAI · September 2024',
  },
  {
    id: 'ca-inter',
    value: 150,
    label: 'CA Intermediate Group I Marks',
    sublabel: 'ICAI · September 2026',
  },
  {
    id: 'bcom-cgpa',
    value: 8.36,
    decimals: 2,
    label: 'Current B.Com CGPA',
    sublabel: 'Third Year Undergraduate',
  },
  {
    id: 'class-12',
    value: 92,
    suffix: '%',
    label: 'Class 12 Commerce',
    sublabel: 'Higher Secondary Board',
  },
];

export const ACADEMIC_MILESTONES: AcademicMilestone[] = [
  {
    id: 'ca-intermediate-g1',
    order: '01',
    category: 'Chartered Accountancy',
    title: 'CA Intermediate — Group I',
    institution: 'The Institute of Chartered Accountants of India (ICAI)',
    timeframe: 'September 2026',
    status: 'Successful',
    metricValue: 150,
    metricLabel: 'Obtained Marks',
    details: [
      'Examination: September 2026',
      'Result: Successful',
      'Institute: The Institute of Chartered Accountants of India (ICAI)',
    ],
    highlight: true,
  },
  {
    id: 'ca-foundation',
    order: '02',
    category: 'Chartered Accountancy',
    title: 'CA Foundation',
    institution: 'The Institute of Chartered Accountants of India (ICAI)',
    timeframe: 'September 2024',
    status: 'Successful / Passed',
    metricValue: 217,
    metricLabel: 'Obtained Marks',
    details: [
      'Examination: September 2024',
      'Result: Successful / Passed',
      'Institute: The Institute of Chartered Accountants of India (ICAI)',
    ],
    highlight: true,
  },
  {
    id: 'bcom',
    order: '03',
    category: 'Undergraduate Degree',
    title: 'Bachelor of Commerce (B.Com)',
    institution: 'Adv. S.A. Baheti Arts, Commerce and Science College',
    timeframe: 'Third Year · In Progress',
    status: 'Pursuing',
    metricValue: 8.36,
    metricDecimals: 2,
    metricLabel: 'Current CGPA',
    details: [
      'Degree: Bachelor of Commerce (B.Com)',
      'Current Year: Third Year',
      'College: Adv. S.A. Baheti Arts, Commerce and Science College',
    ],
  },
  {
    id: 'class-12',
    order: '04',
    category: 'Higher Secondary',
    title: 'Class 12 — Commerce',
    institution: 'Higher Secondary Education · Commerce Stream',
    timeframe: 'Completed',
    status: 'Distinction',
    metricValue: 92,
    metricSuffix: '%',
    metricLabel: 'Aggregate Score',
    details: [
      'Stream: Commerce',
      'Academic Result: 92%',
      'Built strong fundamentals in accountancy, economics and business studies',
    ],
  },
];

export const VERIFIED_ACHIEVEMENTS: AchievementItem[] = [
  {
    id: 'ach-ca-foundation',
    index: '01',
    statement: 'Successfully cleared CA Foundation — September 2024.',
    context: 'The Institute of Chartered Accountants of India (ICAI)',
    metricDisplay: '217',
    metricCaption: 'Marks Obtained',
    period: 'September 2024',
  },
  {
    id: 'ach-ca-inter',
    index: '02',
    statement: 'Successfully cleared CA Intermediate Group I — September 2026.',
    context: 'The Institute of Chartered Accountants of India (ICAI)',
    metricDisplay: '150',
    metricCaption: 'Marks Obtained',
    period: 'September 2026',
  },
  {
    id: 'ach-class-12',
    index: '03',
    statement: 'Achieved 92% in Class 12 Commerce.',
    context: 'Higher Secondary Commerce Stream',
    metricDisplay: '92%',
    metricCaption: 'Board Result',
    period: 'Class 12',
  },
  {
    id: 'ach-bcom',
    index: '04',
    statement: 'Currently pursuing B.Com with 8.36 CGPA.',
    context: 'Adv. S.A. Baheti Arts, Commerce and Science College · Third Year',
    metricDisplay: '8.36',
    metricCaption: 'Current CGPA',
    period: 'Third Year',
  },
];

// Editable skill placeholders aligned with commerce & CA curriculum.
// Update directly as skills are expanded or confirmed.
export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    id: 'accounting',
    label: 'Accounting',
    subtitle: 'Core principles of bookkeeping, statements and standards',
    skills: [
      {
        name: 'Accounting Fundamentals',
        focus: 'Double-entry concepts, ledger integrity and accounting conventions',
      },
      {
        name: 'Financial Accounting',
        focus: 'Preparation and structured analysis of core financial statements',
      },
      {
        name: 'Financial Reporting',
        focus: 'Standards-oriented presentation and disclosure principles',
      },
    ],
  },
  {
    id: 'taxation',
    label: 'Taxation',
    subtitle: 'Statutory tax structure, compliance concepts and indirect frameworks',
    skills: [
      {
        name: 'Direct Taxation',
        focus: 'Income tax framework, heads of income and computational principles',
      },
      {
        name: 'Indirect Taxation',
        focus: 'Statutory indirect levy structures and regulatory foundations',
      },
      {
        name: 'GST',
        focus: 'Goods and Services Tax concepts, input tax credit and supply rules',
      },
    ],
  },
  {
    id: 'finance',
    label: 'Finance',
    subtitle: 'Analytical evaluation of capital, liquidity and business performance',
    skills: [
      {
        name: 'Financial Management',
        focus: 'Capital structure concepts, working capital and cost of capital',
      },
      {
        name: 'Financial Analysis',
        focus: 'Ratio interpretation, cash-flow review and comparative evaluation',
      },
      {
        name: 'Business Finance',
        focus: 'Commercial decision-making principles and resource allocation',
      },
    ],
  },
  {
    id: 'tools',
    label: 'Tools',
    subtitle: 'Productivity and accounting software fundamentals',
    skills: [
      {
        name: 'MS Excel',
        focus: 'Structured spreadsheets, schedules and financial calculations',
      },
      {
        name: 'Tally',
        focus: 'Familiarity with voucher entry and ledger accounting workflows',
      },
      {
        name: 'MS Office',
        focus: 'Professional documentation, presentations and structured reporting',
      },
    ],
  },
];

export const AREAS_OF_INTEREST: InterestItem[] = [
  {
    id: 'accounting-reporting',
    index: '01',
    title: 'Accounting & Financial Reporting',
    domain: 'Reporting Standards',
    description:
      'Exploring transparent financial statement preparation, accounting standards and accurate reporting practices that support institutional trust.',
    keyThemes: ['Financial Statements', 'Accounting Standards', 'Disclosure Clarity'],
  },
  {
    id: 'taxation',
    index: '02',
    title: 'Taxation',
    domain: 'Direct & Indirect Tax',
    description:
      'Building deep academic clarity across direct tax provisions, GST principles and structured statutory compliance frameworks.',
    keyThemes: ['Income Tax Concepts', 'GST Framework', 'Statutory Compliance'],
  },
  {
    id: 'auditing-assurance',
    index: '03',
    title: 'Auditing & Assurance',
    domain: 'Verification & Controls',
    description:
      'Developing an interest in internal control evaluation, verification methodologies and ethical assurance standards.',
    keyThemes: ['Internal Controls', 'Audit Ethics', 'Verification Discipline'],
  },
  {
    id: 'corporate-finance',
    index: '04',
    title: 'Corporate Finance',
    domain: 'Capital Strategy',
    description:
      'Studying how organizations evaluate capital allocation, funding structures and long-term value creation.',
    keyThemes: ['Capital Structure', 'Valuation Principles', 'Long-Term Value'],
  },
  {
    id: 'business-analysis',
    index: '05',
    title: 'Business Analysis',
    domain: 'Analytical Thinking',
    description:
      'Examining financial performance indicators and commercial drivers to understand how businesses sustain resilience and growth.',
    keyThemes: ['Performance Metrics', 'Cost Drivers', 'Structured Reasoning'],
  },
  {
    id: 'financial-management',
    index: '06',
    title: 'Financial Management',
    domain: 'Liquidity & Planning',
    description:
      'Understanding working capital planning, budgeting discipline and risk-aware financial stewardship.',
    keyThemes: ['Working Capital', 'Budgeting Concepts', 'Cash Flow Discipline'],
  },
  {
    id: 'corporate-laws',
    index: '07',
    title: 'Corporate Laws',
    domain: 'Governance & Statutes',
    description:
      'Studying company law provisions, governance obligations and statutory frameworks that underpin modern enterprises.',
    keyThemes: ['Companies Act', 'Corporate Governance', 'Legal Compliance'],
  },
];
