
// @ts-nocheck
import Avatar0 from '../assets/Avatar.png';
import Avatar1 from '../assets/Avatar-1.png';
import Avatar2 from '../assets/Avatar-2.png';
import Avatar3 from '../assets/Avatar-3.png';
import Avatar4 from '../assets/Avatar-4.png';
import Avatar5 from '../assets/Avatar-5.png';
import Avatar6 from '../assets/Avatar-6.png';
import Avatar7 from '../assets/Avatar-7.png';
import Avatar8 from '../assets/Avatar-8.png';
import Avatar9 from '../assets/Avatar-9.png';

// HOME PAGE
export const listData = [
  { text: "Review LMS project timelines and milestones." },
  { text: "Research new investment possibilities for your portfolio." },
  { text: "Communicate with stakeholders on project X updates." },
  { text: "Analyze costs and make recommendations for cost-saving initiatives." },
  { text: "Attend today’s client meeting to discuss the project X requirements." },
  { text: "Review current workflows for project X and identify areas for improvement." },
  { text: "Review LMS project timelines and milestones." },
  { text: "Research new investment possibilities for your portfolio." },
  { text: "Communicate with stakeholders on project X updates." },
  { text: "Analyze costs and make recommendations for cost-saving initiatives." },
  { text: "Attend today’s client meeting to discuss the project X requirements." },
  { text: "Review current workflows for project X and identify areas for improvement." }
];

// PROJECTS PAGE
export interface ProjectData {
  ProjectID: number;
  ProjectName?: string;
  ProjectManager?: string;
  Stakeholders?: string;
  DueDate?: string;
  Priority?: string;
  AvatarSrc?: string;
}

export const priorities = [
  "Urgent" ,
  "Medium priority",
  "Low priority",
  "High priority",
  "Routine" ,
];

export const projectManagers = [
  { name: "Marlon66", avatarSrc: Avatar0 },
  { name: "Maegan_Dietrich56", avatarSrc: Avatar1 },
  { name: "Howell69", avatarSrc: Avatar2 },
  { name: "Kory.Lockman", avatarSrc: Avatar3 },
  { name: "Nolan.Kling13", avatarSrc: Avatar4 },
  { name: "Antoinette_Hills", avatarSrc: Avatar5 },
  { name: "Alden_Upton", avatarSrc: Avatar6 },
  { name: "Travis.Gerhold80", avatarSrc: Avatar7 },
  { name: "Jamaal41", avatarSrc: Avatar8 },
  { name: "Fabiola.Cassin90", avatarSrc: Avatar9 },
];

export const projectsData = [
  {
    ProjectID: 1,
    ProjectName: "Automated Software Development Tool",
    ProjectManager: "Marlon66",
    Stakeholders: "Monserrat49",
    DueDate: "08/11/2025",
    Priority: "Routine",
    AvatarSrc: Avatar0
  },
  {
    ProjectID: 2,
    ProjectName: "Telehealth and Health Tracking Application",
    ProjectManager: "Maegan_Dietrich56",
    Stakeholders: "Judy.Beatty",
    DueDate: "21/08/2025",
    Priority: "Medium priority",
    AvatarSrc: Avatar1
  },
  {
    ProjectID: 3,
    ProjectName: "Market Research and Analytics Tool",
    ProjectManager: "Howell69",
    Stakeholders: "Mary.Flatley37",
    DueDate: "17/07/2025",
    Priority: "Urgent",
    AvatarSrc: Avatar2
  },
  {
    ProjectID: 4,
    ProjectName: "Virtual Reality Training Module for Employee Onboarding",
    ProjectManager: "Kory.Lockman",
    Stakeholders: "Lynn_Kunde",
    DueDate: "24/05/2025",
    Priority: "Low priority",
    AvatarSrc: Avatar3
  },
  {
    ProjectID: 5,
    ProjectName: "Automated Software Development Tool 2",
    ProjectManager: "Nolan.Kling13",
    Stakeholders: "Gabrielle90",
    DueDate: "01/07/2025",
    Priority: "High priority",
    AvatarSrc: Avatar4
  },
  {
    ProjectID: 6,
    ProjectName: "Telehealth and Health Tracking Application 2",
    ProjectManager: "Antoinette_Hills",
    Stakeholders: "Lavina.Grady",
    DueDate: "15/12/2025",
    Priority: "Medium priority",
    AvatarSrc: Avatar5
  },
  {
    ProjectID: 7,
    ProjectName: "Online Learning Management System (LMS)",
    ProjectManager: "Alden_Upton",
    Stakeholders: "Lenna_Schmidt30",
    DueDate: "03/05/2025",
    Priority: "Urgent",
    AvatarSrc: Avatar6
  },
  {
    ProjectID: 8,
    ProjectName: "Collaborative Agile Project Management Suite",
    ProjectManager: "Travis.Gerhold80",
    Stakeholders: "Deborah.Stamm",
    DueDate: "05/09/2025",
    Priority: "Routine",
    AvatarSrc: Avatar7
  },
  {
    ProjectID: 9,
    ProjectName: "Incident Response Coordination Portal",
    ProjectManager: "Jamaal41",
    Stakeholders: "Skylar_Smith65",
    DueDate: "12/07/2025",
    Priority: "High priority",
    AvatarSrc: Avatar8
  },
  {
    ProjectID: 10,
    ProjectName: "AI-Powered Bug Tracking and Resolution System",
    ProjectManager: "Fabiola.Cassin90",
    Stakeholders: "Richmond_Bruen",
    DueDate: "31/07/2025",
    Priority: "Medium priority",
    AvatarSrc: Avatar9
  },
];

// TASKS PAGE
export const taskTags = [
  "Feature Development",
  "Phase 1",
  "Research",
  "Q1 Release",
  "Client",
  "Internal",
  "Innovation",
  "Maintenance",
  "Java",
  "Python",
  "JavaScript",
  "React",
  "Node.js",
  "SQL",
  "Bug Fix"
];

export const tasksData = [
  {
    taskId: '2213',
    taskName: '#2213 Define project scope and objectives.',
    assignedTo: 'Fabiola.Cassin90',
    dueDate: '07/31/2025',
    status: '🕒 Postponed',
    tags: ['Feature Development', 'Phase 1'],
    priority: 'High priority',
    projectId: 1
  },
  {
    taskId: '2214',
    taskName: '#2214 Conduct market research to assess existing LMS solutions.',
    assignedTo: 'Marlon66',
    dueDate: '08/11/2025',
    status: '✅ Completed',
    tags: ['Research', 'Q1 Release'],
    priority: 'Medium priority',
    projectId: 2
  },
  {
    taskId: '5342',
    taskName: '#5342 Identify target audience and their specific needs.',
    assignedTo: 'Maegan_Dietrich56',
    dueDate: '08/21/2025',
    status: '⚠ Delayed',
    tags: ['Research', 'Client'],
    priority: 'Urgent',
    projectId: 3
  },
  {
    taskId: '7211',
    taskName: '#7211 Create a project timeline with milestones and deliverables.',
    assignedTo: 'Howell69',
    dueDate: '07/17/2025',
    status: '⏳ In Progress',
    tags: ['Feature Development', 'Sprint 1'],
    priority: 'High priority',
    projectId: 4
  },
  {
    taskId: '2215',
    taskName: '#2215 Review and update the incident response plan to incorporate new threats and vulnerabilities.',
    assignedTo: 'Kory.Lockman',
    dueDate: '05/24/2025',
    status: '❌ Cancelled',
    tags: ['Feature Development', 'Internal'],
    priority: 'Low priority',
    projectId: 5
  },
  {
    taskId: '2811',
    taskName: '#2811 Gather requirements from stakeholders through interviews or surveys.',
    assignedTo: 'Nolan.Kling13',
    dueDate: '07/01/2025',
    status: '🔄 Pending Review',
    tags: ['Feature Development', 'Innovation'],
    priority: 'Medium priority',
    projectId: 6
  },
  {
    taskId: '2812',
    taskName: '#2812 Set up monitoring tools and analyze system performance metrics to identify and address potential bottlenecks.',
    assignedTo: 'Antoinette_Hills',
    dueDate: '12/15/2025',
    status: '⚠ Delayed',
    tags: ['Research', 'Innovation'],
    priority: 'Low priority',
    projectId: 7
  },
  {
    taskId: '3516',
    taskName: '#3516 Develop a budget for the project, including potential software and hardware needs.',
    assignedTo: 'Alden_Upton',
    dueDate: '05/03/2025',
    status: '🚧 On Hold',
    tags: ['Feature Development', 'Maintenance'],
    priority: 'Routine',
    projectId: 8
  },
  {
    taskId: '1415',
    taskName: '#1415 Conduct a SWOT analysis to assess strengths, weaknesses, opportunities, and threats.',
    assignedTo: 'Travis.Gerhold80',
    dueDate: '09/05/2025',
    status: '✔ Approved',
    tags: ['Feature Development', 'Java, Python, JavaScript, React, Node.js, SQL'],
    priority: 'Medium priority',
    projectId: 9
  },
  {
    taskId: '1536',
    taskName: '#1536 Implement Content Management Features for Instructors.',
    assignedTo: 'Jamaal41',
    dueDate: '07/12/2025',
    status: '✅ Completed',
    tags: ['Bug Fix', 'Feature Development'],
    priority: 'High priority',
    projectId: 10
  },
  {
    taskId: '1541',
    taskName: '#1541 Select a suitable technology stack or platform for the LMS.',
    assignedTo: 'Fabiola.Cassin90',
    dueDate: '07/31/2025',
    status: '🚧 On Hold',
    tags: ['Feature Development', 'Innovation'],
    priority: 'High priority',
    projectId: 1
  },
  {
    taskId: '2216',
    taskName: '#2216 Evaluate potential third-party integrations (e.g., payment gateways, content libraries).',
    assignedTo: 'Fabiola.Cassin90',
    dueDate: '08/11/2025',
    status: '✅ Completed',
    tags: ['Feature Development', 'Innovation'],
    priority: 'Urgent',
    projectId: 2
  },
  {
    taskId: '2217',
    taskName: '#2217 Create wireframes for user interface (UI) elements and navigation.',
    assignedTo: 'Marlon66',
    dueDate: '08/21/2025',
    status: '⏳ In Progress',
    tags: ['Feature Development', 'Sprint 1'],
    priority: 'Medium priority',
    projectId: 3
  }
];

// TEAMS PAGE
export const teamsChips = [
  { text: "All", value: 'all', disabled: false },
  { text: "Technology and Developement", value: 'technology', disabled: true },
  { text: "Product and Design", value: 'product', disabled: true },
  { text: "Business Operation", value: 'business', disabled: true },
  { text: "Marketing and Sales", value: 'marketing', disabled: true },
];

export const teamsData = [
  {
    teamCode: "FE",
    teamName: "Frontend Team",
    avatarColor: "#9C38FF",
    group: "technology",
    teamMembers: [
      { teamMember: "Alex Morgan", title: "Frontend Developer" },
      { teamMember: "Jordan Lee", title: "Frontend Developer" },
      { teamMember: "Casey Carter", title: "React Developer" },
      { teamMember: "Taylor Woods", title: "CSS Specialist" },
      { teamMember: "Morgan Reed", title: "JavaScript Developer" },
      { teamMember: "Jordan Parker", title: "Frontend Architect" },
      { teamMember: "Riley Hayes", title: "Frontend Developer" },
      { teamMember: "Blake Kim", title: "Angular Developer" },
      { teamMember: "Sydney Clark", title: "Frontend Developer" },
      { teamMember: "Chris Bennett", title: "Vue.js Developer" }
    ]
  },
  {
    teamCode: 'BE',
    teamName: 'Backend Team',
    avatarColor: '#800000',
    group: 'technology',
    teamMembers: [
      { teamMember: "James Parker", title: "Backend Developer" },
      { teamMember: "Maria Garcia", title: "API Developer" },
      { teamMember: "John Davis", title: "Database Administrator" },
      { teamMember: "Emily Wilson", title: "DevOps Engineer" },
      { teamMember: "David Brown", title: "System Architect" },
      { teamMember: "Daniel Lee", title: "Java Developer" },
      { teamMember: "Samantha Hall", title: "Python Developer" },
      { teamMember: "Michael Turner", title: "Ruby on Rails Developer" },
      { teamMember: "Sophia Adams", title: "Security Engineer" },
      { teamMember: "Matthew Clark", title: "Cloud Engineer" }
    ]
  },
  {
    teamCode: 'DO',
    teamName: 'DevOps Team',
    avatarColor: '#333333',
    group: 'technology',
    teamMembers: [
      { teamMember: "Alice Green", title: "DevOps Engineer" },
      { teamMember: "Ethan Scott", title: "Automation Engineer" },
      { teamMember: "Sophia Taylor", title: "Cloud Infrastructure Engineer" },
      { teamMember: "Liam White", title: "CI/CD Specialist" },
      { teamMember: "Olivia Martin", title: "System Administrator" },
      { teamMember: "Mason Rodriguez", title: "Site Reliability Engineer" },
      { teamMember: "Charlotte Harris", title: "Release Manager" },
      { teamMember: "Aiden King", title: "Containerization Expert" },
      { teamMember: "Amelia Lewis", title: "Monitoring Specialist" },
      { teamMember: "Lucas Walker", title: "Cloud Solutions Architect" }
    ]
  },
  {
    teamCode: 'QA',
    teamName: 'QA Team',
    avatarColor: '#218247',
    group: 'product',
    teamMembers: [
      { teamMember: "Nina Roberts", title: "QA Engineer" },
      { teamMember: "Oliver Harris", title: "Automation Tester" },
      { teamMember: "Ava Miller", title: "Manual Tester" },
      { teamMember: "Ethan Wilson", title: "Performance Test Engineer" },
      { teamMember: "Grace Johnson", title: "Test Lead" },
      { teamMember: "Jack Brown", title: "Quality Analyst" },
      { teamMember: "Sophia Lee", title: "Mobile QA Engineer" },
      { teamMember: "Mason Taylor", title: "Security Test Engineer" },
      { teamMember: "Chloe Davis", title: "Test Automation Architect" },
      { teamMember: "Liam Martin", title: "Usability Tester" }
    ]
  },
  {
    teamCode: 'UX',
    teamName: 'UX/UI Design Team',
    avatarColor: '#DB0000',
    group: 'product',
    teamMembers: [
      { teamMember: "Isabella White", title: "UX Designer" },
      { teamMember: "Noah Black", title: "UX Researcher" },
      { teamMember: "Mia Green", title: "Interaction Designer" },
      { teamMember: "James Blue", title: "UI/UX Developer" },
      { teamMember: "Emma Grey", title: "Usability Analyst" },
      { teamMember: "Lucas Brown", title: "Information Architect" },
      { teamMember: "Olivia Pink", title: "Product Designer" },
      { teamMember: "Ethan Red", title: "UX Writer" },
      { teamMember: "Charlotte Yellow", title: "Visual Designer" },
      { teamMember: "Jack Orange", title: "UX/UI Research Lead" }
    ]
  },
  {
    teamCode: 'DB',
    teamName: 'Database Team',
    avatarColor: '#8F7200',
    group: 'technology',
    teamMembers: [
      { teamMember: "William Smith", title: "Database Administrator" },
      { teamMember: "Emily Johnson", title: "Database Architect" },
      { teamMember: "David Brown", title: "SQL Developer" },
      { teamMember: "Sophia Wilson", title: "Data Analyst" },
      { teamMember: "James Taylor", title: "Database Engineer" },
      { teamMember: "Olivia Martinez", title: "ETL Developer" },
      { teamMember: "Ethan Lee", title: "Data Modeling Specialist" },
      { teamMember: "Ava Harris", title: "NoSQL Developer" },
      { teamMember: "Michael Clark", title: "Database Performance Engineer" },
      { teamMember: "Liam Lewis", title: "Cloud Database Administrator" }
    ]
  },
  {
    teamCode: 'М',
    teamName: 'Marketing Team',
    avatarColor: '#008B8B',
    group: 'marketing',
    teamMembers: [
      { teamMember: "Edmund Lowe", title: "Chief Marketing Officer" },
      { teamMember: "Ellis Glover", title: "Marketing Manager" },
      { teamMember: "Tommy Hudson", title: "Content Marketing Specialist" },
      { teamMember: "Lester Pouros", title: "Social Media Manager" },
      { teamMember: "Teri Stanton", title: "SEO Specialist" },
      { teamMember: "Constance Larkin", title: "Digital Marketing Specialist" },
      { teamMember: "Sheri Stracke", title: "Graphic Designer" },
      { teamMember: "Rochelle Toy", title: "Email Marketing Coordinator" },
      { teamMember: "Lloyd Bashirian", title: "Market Research Analyst" },
      { teamMember: "Thomas Hane III", title: "Public Relations Manager" }
    ]
  },
  {
    teamCode: 'PM',
    teamName: 'Product Management Team',
    avatarColor: '#C14E34',
    group: 'product',
    teamMembers: [
      { teamMember: "Olivia Davis", title: "Product Manager" },
      { teamMember: "Ethan Clark", title: "Senior Product Manager" },
      { teamMember: "Sophia Wilson", title: "Product Owner" },
      { teamMember: "James Brown", title: "Product Strategy Lead" },
      { teamMember: "Mia Taylor", title: "Associate Product Manager" },
      { teamMember: "Liam Harris", title: "Product Marketing Manager" },
      { teamMember: "Ava Robinson", title: "Product Analyst" },
      { teamMember: "Noah Lee", title: "Growth Product Manager" },
      { teamMember: "Charlotte Hall", title: "Product Designer" },
      { teamMember: "Lucas White", title: "User Experience Product Lead" }
    ]
  },
  {
    teamCode: 'TS',
    teamName: 'Technical Support Team',
    avatarColor: '#027EB5',
    group: 'business',
    teamMembers: [
      { teamMember: "David Miller", title: "Technical Support Engineer" },
      { teamMember: "Sophia Lewis", title: "Senior Support Specialist" },
      { teamMember: "James Harris", title: "Support Technician" },
      { teamMember: "Ava Walker", title: "Customer Support Engineer" },
      { teamMember: "Ethan Robinson", title: "Technical Account Manager" },
      { teamMember: "Olivia Clark", title: "Support Analyst" },
      { teamMember: "Mason White", title: "IT Support Specialist" },
      { teamMember: "Chloe Adams", title: "Help Desk Technician" },
      { teamMember: "Liam Carter", title: "Network Support Engineer" },
      { teamMember: "Isabella Green", title: "Software Support Specialist" }
    ]
  },
  {
    teamCode: 'S',
    teamName: 'Security Team',
    avatarColor: '#267B92',
    group: 'technology',
    teamMembers: [
      { teamMember: "William Scott", title: "Chief Security Officer (CSO)" },
      { teamMember: "Olivia Anderson", title: "Security Analyst" },
      { teamMember: "Ethan Baker", title: "Network Security Engineer" },
      { teamMember: "Sophia Martinez", title: "Cybersecurity Specialist" },
      { teamMember: "James Wilson", title: "Security Architect" },
      { teamMember: "Ava Thompson", title: "Incident Response Lead" },
      { teamMember: "Mason Clark", title: "Penetration Tester" },
      { teamMember: "Chloe Lewis", title: "Security Compliance Officer" },
      { teamMember: "Lucas White", title: "Application Security Engineer" },
      { teamMember: "Emma Harris", title: "Threat Intelligence Analyst" }
    ]
  },
  {
    teamCode: 'DS',
    teamName: 'Data Science Team',
    avatarColor: '#708090',
    group: 'technology',
    teamMembers: [
      { teamMember: "David Johnson", title: "Lead Data Scientist" },
      { teamMember: "Sophia Martinez", title: "Data Scientist" },
      { teamMember: "James Lee", title: "Machine Learning Engineer" },
      { teamMember: "Olivia Brown", title: "Data Analyst" },
      { teamMember: "Ethan Wilson", title: "Senior Data Engineer" },
      { teamMember: "Chloe Clark", title: "AI Researcher" },
      { teamMember: "Mason Rodriguez", title: "Quantitative Analyst" },
      { teamMember: "Ava Taylor", title: "Data Science Researcher" },
      { teamMember: "Lucas Anderson", title: "Business Intelligence Developer" },
      { teamMember: "Emma White", title: "Data Visualization Specialist" }
    ]
  },
  {
    teamCode: 'IE',
    teamName: 'Infrastructure Engineering',
    avatarColor: '#191970',
    group: 'technology',
    teamMembers: [
      { teamMember: "James Taylor", title: "Infrastructure Engineer" },
      { teamMember: "Olivia Brown", title: "Cloud Infrastructure Engineer" },
      { teamMember: "Ethan White", title: "Network Engineer" },
      { teamMember: "Sophia Clark", title: "Systems Architect" },
      { teamMember: "David Green", title: "DevOps Engineer" },
      { teamMember: "Ava Harris", title: "Site Reliability Engineer" },
      { teamMember: "Mason Davis", title: "Storage Solutions Engineer" },
      { teamMember: "Chloe Wilson", title: "Virtualization Engineer" },
      { teamMember: "Liam Lewis", title: "Infrastructure Automation Engineer" },
      { teamMember: "Emma Robinson", title: "Security Infrastructure Engineer" }
    ]
  },
  {
    teamCode: 'RD',
    teamName: 'Research and Development',
    avatarColor: '#7B3F00',
    group: 'product',
    teamMembers: [
      { teamMember: "David King", title: "R&D Director" },
      { teamMember: "Olivia Johnson", title: "Lead Research Scientist" },
      { teamMember: "Ethan White", title: "R&D Engineer" },
      { teamMember: "Sophia Lee", title: "Product Development Specialist" },
      { teamMember: "James Brown", title: "Innovation Manager" },
      { teamMember: "Ava Wilson", title: "Research Associate" },
      { teamMember: "Mason Taylor", title: "Data Scientist" },
      { teamMember: "Chloe Clark", title: "Prototype Engineer" },
      { teamMember: "Lucas Harris", title: "Technical Researcher" },
      { teamMember: "Emma Martinez", title: "R&D Project Manager" }
    ]
  },
  {
    teamCode: 'BA',
    teamName: 'Business Analysis Team',
    avatarColor: '#607F1F',
    group: 'business',
    teamMembers: [
      { teamMember: "William Harris", title: "Lead Business Analyst" },
      { teamMember: "Olivia Davis", title: "Senior Business Analyst" },
      { teamMember: "James Smith", title: "Business Systems Analyst" },
      { teamMember: "Sophia Martinez", title: "Process Improvement Analyst" },
      { teamMember: "Ethan Clark", title: "Data Analyst" },
      { teamMember: "Ava Brown", title: "Requirements Analyst" },
      { teamMember: "Mason Taylor", title: "Product Analyst" },
      { teamMember: "Chloe Robinson", title: "Business Intelligence Analyst" },
      { teamMember: "Liam Wilson", title: "Financial Analyst" },
      { teamMember: "Emma Lee", title: "Junior Business Analyst" }
    ]
  },
  {
    teamCode: 'TW',
    teamName: 'Technical Writing Team',
    avatarColor: '#DC147F',
    group: 'business',
    teamMembers: [
      { teamMember: "David Miller", title: "Lead Technical Writer" },
      { teamMember: "Olivia White", title: "Senior Technical Writer" },
      { teamMember: "Ethan Clark", title: "Technical Writing Specialist" },
      { teamMember: "Sophia Harris", title: "Documentation Engineer" },
      { teamMember: "James Brown", title: "API Technical Writer" },
      { teamMember: "Ava Johnson", title: "Content Developer" },
      { teamMember: "Mason Davis", title: "Technical Editor" },
      { teamMember: "Chloe Wilson", title: "Instructional Designer" },
      { teamMember: "Liam Anderson", title: "UX Writer" },
      { teamMember: "Emma Martinez", title: "Junior Technical Writer" }
    ]
  },
  {
    teamCode: 'S',
    teamName: 'Sales Team',
    avatarColor: '#5769D2',
    group: 'marketing',
    teamMembers: [
      { teamMember: "William Scott", title: "Sales Director" },
      { teamMember: "Olivia Taylor", title: "Senior Account Executive" },
      { teamMember: "Ethan Harris", title: "Sales Manager" },
      { teamMember: "Sophia Davis", title: "Sales Development Representative" },
      { teamMember: "James Wilson", title: "Account Executive" },
      { teamMember: "Ava Brown", title: "Regional Sales Manager" },
      { teamMember: "Mason Green", title: "Sales Operations Specialist" },
      { teamMember: "Chloe Clark", title: "Customer Success Manager" },
      { teamMember: "Lucas Johnson", title: "Sales Analyst" },
      { teamMember: "Emma Lee", title: "Business Development Representative" }
    ]
  },
  {
    teamCode: 'SA',
    teamName: 'System Administration',
    avatarColor: '#4682B4',
    group: 'technology',
    teamMembers: [
      { teamMember: "David Miller", title: "Senior System Administrator" },
      { teamMember: "Olivia Johnson", title: "System Administrator" },
      { teamMember: "James Wilson", title: "Network Administrator" },
      { teamMember: "Sophia Clark", title: "Linux Administrator" },
      { teamMember: "Ethan Brown", title: "Windows Administrator" },
      { teamMember: "Ava Martinez", title: "Cloud Systems Administrator" },
      { teamMember: "Mason Harris", title: "Database Administrator" },
      { teamMember: "Chloe White", title: "Virtualization Administrator" },
      { teamMember: "Lucas Anderson", title: "IT Support Specialist" },
      { teamMember: "Emma Taylor", title: "Junior System Administrator" }
    ]
  },
  {
    teamCode: 'CG',
    teamName: 'Compliance and Governance',
    avatarColor: '#4B0082',
    group: 'business',
    teamMembers: [
      { teamMember: "William Harris", title: "Compliance Officer" },
      { teamMember: "Olivia Brown", title: "Governance Manager" },
      { teamMember: "James Taylor", title: "Regulatory Affairs Specialist" },
      { teamMember: "Sophia Lewis", title: "Risk Management Analyst" },
      { teamMember: "Ethan Walker", title: "Internal Auditor" },
      { teamMember: "Ava Clark", title: "Compliance Analyst" },
      { teamMember: "Mason Scott", title: "Legal and Compliance Advisor" },
      { teamMember: "Chloe Martinez", title: "Policy and Procedure Analyst" },
      { teamMember: "Lucas Johnson", title: "Data Privacy Officer" },
      { teamMember: "Emma Robinson", title: "Corporate Governance Specialist" }
    ]
  }
];