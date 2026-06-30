/**
 * File: portfolio.ts
 * Purpose: Static data for the eLearning portfolio website.
 */

export interface Project {
  id: string;
  title: string;
  subtitle?: string;
  excerpt: string;
  details: string;
  highlights?: string[];
  img?: string;
  tags?: string[];
}

/**
 * Portfolio projects and site content extracted from the provided slides.
 */
export const PROJECTS: Project[] = [
  {
    id: 'adp',
    title: 'Analyst Development Programme (ADP)',
    subtitle: 'Large-scale cohort training for new analysts',
    excerpt:
      'A structured 6‑month programme: planning, prototyping, iterative development, QA, SCORM packaging and LMS deployment.',
    details:
      'Purpose: Deliver a consistent training foundation for new analysts. Process included stakeholder consultation, curriculum mapping, storyboards, agile sprints, QA and LMS deployment. Impact: 100+ cohorts completed as of 2024. Emphasis on accessibility, iterative feedback and measurable learning outcomes.',
    highlights: [
      'Stakeholder-driven curriculum mapping',
      'Storyboards & prototype testing',
      'SCORM packaging & LMS deployment',
    ],
    img: 'https://pub-cdn.sider.ai/u/U0X7H47R6WA/web-coder/6a441b8052b1a03547268df4/resource/d8a128e6-e737-4e4a-a4d8-3deb22602ac3.jpg',
    tags: ['SCORM', 'Instructional Design', 'Stakeholder'],
  },
  {
    id: 'renewables',
    title: 'Renewable Energy — Sample Storyboard',
    subtitle: 'Instructional storyboard and knowledge check examples',
    excerpt:
      'Short module exploring types of renewable energy, benefits to climate, UK initiatives and interactive checks.',
    details:
      'Contains learning objectives, interactive elements (drag & drop, multiple choice), sample storyboard slides and a final review page. Intended as a modular example that can be expanded into deeper modules covering criticisms and limitations.',
    highlights: [
      'Types of renewables explained',
      'Interactive knowledge checks',
      'Pilot testing & iterative improvements',
    ],
    img: 'https://pub-cdn.sider.ai/u/U0X7H47R6WA/web-coder/6a441b8052b1a03547268df4/resource/7947e84c-fb1b-48a5-afe1-586eb595ec18.jpg',
    tags: ['Storyboard', 'E-learning', 'Assessment'],
  },
]

/**
 * General site content used in Home page.
 */
export const SITE = {
  title: 'eLearning Portfolio — Glynn Williams',
  heroSubtitle:
    "Instructional designer & developer — SCORM, Captivate, Storyline. Secure & quality-led eLearning.",
  about:
    "Experienced eLearning and multimedia specialist with a background in secure government environments. Strengths include instructional design, stakeholder engagement, quality-focused development, and LMS integration.",
  skills: [
    'Articulate Storyline',
    'Adobe Captivate',
    'ELB Lectora',
    'SCORM / xAPI',
    'Moodle / Saba',
    'Instructional Design (ADDIE, SAM)',
    'Adobe Creative Suite',
  ],
  testimonials: [
    {
      author: 'Mel R, GCHQ',
      text:
        "Glynn has professional skills, experience and leadership to deliver what I have asked for. His approachability and ability to innovate stands out. Results improve people's understanding of the organisation’s purpose.",
    },
    {
      author: 'Penny C, GCHQ',
      text:
        "Glynn is approachable and kind with extensive knowledge. He adapts work to suit the project and delivers excellent results.",
    },
  ],
  contactEmail: 'glynn.Williams@me.com',
}
