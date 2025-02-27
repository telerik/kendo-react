
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

export const gridData = [
  { taskName: "#2213 Define project scope and objectives.", status: "🕒 Postponed" },
  { taskName: "#2214 Conduct market research to assess existing LMS solutions.", status: "✅ Completed" },
  { taskName: "#5342 Identify target audience and their specific needs.", status: "⚠ Delayed" },
  { taskName: "#7211 Create a project timeline with milestones and deliverables.", status: "⏳ In Progress" },
  { taskName: "#2811 Gather requirements from stakeholders through interviews or surveys.", status: "❌ Cancelled" },
  { taskName: "#2213 Define project scope and objectives.", status: "🕒 Postponed" },
  { taskName: "#2214 Conduct market research to assess existing LMS solutions.", status: "✅ Completed" },
  { taskName: "#5342 Identify target audience and their specific needs.", status: "⚠ Delayed" },
  { taskName: "#7211 Create a project timeline with milestones and deliverables.", status: "⏳ In Progress" },
  { taskName: "#2811 Gather requirements from stakeholders through interviews or surveys.", status: "❌ Cancelled" },
];

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
  { text: "Urgent" },
  { text: "Medium priority" },
  { text: "Low priority" },
  { text: "High priority" },
  { text: "Routine" },
];

export const projectManagers = [
  { text: "Marlon66" },
  { text: "Maegan_Dietrich56" },
  { text: "Howell69" },
  { text: "Kory.Lockman" },
  { text: "Nolan.Kling13" },
  { text: "Antoinette_Hills" },
  { text: "Alden_Upton" },
  { text: "Travis.Gerhold80" },
  { text: "Jamaal41" },
  { text: "Fabiola.Cassin90" },
]

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
    ProjectName: "Automated Software Development Tool",
    ProjectManager: "Nolan.Kling13",
    Stakeholders: "Gabrielle90",
    DueDate: "01/07/2025",
    Priority: "High priority",
    AvatarSrc: Avatar4
  },
  {
    ProjectID: 6,
    ProjectName: "Telehealth and Health Tracking Application",
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
  {
    ProjectID: 11,
    ProjectName: "Telehealth and Health Tracking Application",
    ProjectManager: "Maegan_Dietrich56",
    Stakeholders: "Judy.Beatty",
    DueDate: "21/08/2025",
    Priority: "Medium priority",
    AvatarSrc: Avatar1
  },
  {
    ProjectID: 12,
    ProjectName: "Market Research and Analytics Tool",
    ProjectManager: "Howell69",
    Stakeholders: "Mary.Flatley37",
    DueDate: "17/07/2025",
    Priority: "Urgent",
    AvatarSrc: Avatar2
  },
  {
    ProjectID: 13,
    ProjectName: "Virtual Reality Training Module for Employee Onboarding",
    ProjectManager: "Kory.Lockman",
    Stakeholders: "Lynn_Kunde",
    DueDate: "24/05/2025",
    Priority: "Low priority",
    AvatarSrc: Avatar3
  },
  {
    ProjectID: 14,
    ProjectName: "Automated Software Development Tool",
    ProjectManager: "Marlon66",
    Stakeholders: "Monserrat49",
    DueDate: "08/11/2025",
    Priority: "Routine",
    AvatarSrc: Avatar0
  },
  {
    ProjectID: 15,
    ProjectName: "Automated Software Development Tool",
    ProjectManager: "Nolan.Kling13",
    Stakeholders: "Gabrielle90",
    DueDate: "01/07/2025",
    Priority: "High priority",
    AvatarSrc: Avatar4
  },
  {
    ProjectID: 16,
    ProjectName: "Telehealth and Health Tracking Application",
    ProjectManager: "Antoinette_Hills",
    Stakeholders: "Lavina.Grady",
    DueDate: "15/12/2025",
    Priority: "Medium priority",
    AvatarSrc: Avatar5
  },
  {
    ProjectID: 17,
    ProjectName: "Collaborative Agile Project Management Suite",
    ProjectManager: "Travis.Gerhold80",
    Stakeholders: "Deborah.Stamm",
    DueDate: "05/09/2025",
    Priority: "Routine",
    AvatarSrc: Avatar7
  },
  {
    ProjectID: 18,
    ProjectName: "Incident Response Coordination Portal",
    ProjectManager: "Jamaal41",
    Stakeholders: "Skylar_Smith65",
    DueDate: "12/07/2025",
    Priority: "High priority",
    AvatarSrc: Avatar8
  },
  {
    ProjectID: 19,
    ProjectName: "Online Learning Management System (LMS)",
    ProjectManager: "Alden_Upton",
    Stakeholders: "Lenna_Schmidt30",
    DueDate: "03/05/2025",
    Priority: "Urgent",
    AvatarSrc: Avatar6
  },
  {
    ProjectID: 20,
    ProjectName: "AI-Powered Bug Tracking and Resolution System",
    ProjectManager: "Fabiola.Cassin90",
    Stakeholders: "Richmond_Bruen",
    DueDate: "31/07/2025",
    Priority: "Medium priority",
    AvatarSrc: Avatar9
  },
  {
    ProjectID: 21,
    ProjectName: "Automated Software Development Tool",
    ProjectManager: "Marlon66",
    Stakeholders: "Monserrat49",
    DueDate: "08/11/2025",
    Priority: "Routine",
    AvatarSrc: Avatar0
  },
  {
    ProjectID: 22,
    ProjectName: "Market Research and Analytics Tool",
    ProjectManager: "Howell69",
    Stakeholders: "Mary.Flatley37",
    DueDate: "17/07/2025",
    Priority: "Urgent",
    AvatarSrc: Avatar2
  },
  {
    ProjectID: 23,
    ProjectName: "Telehealth and Health Tracking Application",
    ProjectManager: "Maegan_Dietrich56",
    Stakeholders: "Judy.Beatty",
    DueDate: "21/08/2025",
    Priority: "Medium priority",
    AvatarSrc: Avatar1
  },
  {
    ProjectID: 24,
    ProjectName: "Virtual Reality Training Module for Employee Onboarding",
    ProjectManager: "Kory.Lockman",
    Stakeholders: "Lynn_Kunde",
    DueDate: "24/05/2025",
    Priority: "Low priority",
    AvatarSrc: Avatar3
  },
  {
    ProjectID: 25,
    ProjectName: "Automated Software Development Tool",
    ProjectManager: "Nolan.Kling13",
    Stakeholders: "Gabrielle90",
    DueDate: "01/07/2025",
    Priority: "High priority",
    AvatarSrc: Avatar4
  },
  {
    ProjectID: 26,
    ProjectName: "Online Learning Management System (LMS)",
    ProjectManager: "Alden_Upton",
    Stakeholders: "Lenna_Schmidt30",
    DueDate: "03/05/2025",
    Priority: "Urgent",
    AvatarSrc: Avatar6
  },
  { 
    ProjectID: 27,
    ProjectName: "Collaborative Agile Project Management Suite",
    ProjectManager: "Travis.Gerhold80",
    Stakeholders: "Deborah.Stamm",
    DueDate: "05/09/2025",
    Priority: "Routine",
    AvatarSrc: Avatar7
  },
  {
    ProjectID: 28,
    ProjectName: "Incident Response Coordination Portal",
    ProjectManager: "Jamaal41",
    Stakeholders: "Skylar_Smith65",
    DueDate: "12/07/2025",
    Priority: "High priority",
    AvatarSrc: Avatar8
  },
  { 
    ProjectID: 29,
    ProjectName: "Telehealth and Health Tracking Application",
    ProjectManager: "Antoinette_Hills",
    Stakeholders: "Lavina.Grady",
    DueDate: "15/12/2025",
    Priority: "Medium priority",
    AvatarSrc: Avatar5
  },
  {
    ProjectID: 30,
    ProjectName: "AI-Powered Bug Tracking and Resolution System",
    ProjectManager: "Fabiola.Cassin90",
    Stakeholders: "Richmond_Bruen",
    DueDate: "31/07/2025",
    Priority: "Medium priority",
    AvatarSrc: Avatar9
  },
  {
    ProjectID: 31,
    ProjectName: "Automated Software Development Tool",
    ProjectManager: "Marlon66",
    Stakeholders: "Monserrat49",
    DueDate: "08/11/2025",
    Priority: "Routine",
    AvatarSrc: Avatar0
  },
  {
    ProjectID: 32,
    ProjectName: "Telehealth and Health Tracking Application",
    ProjectManager: "Maegan_Dietrich56",
    Stakeholders: "Judy.Beatty",
    DueDate: "21/08/2025",
    Priority: "Medium priority",
    AvatarSrc: Avatar1
  },
  {
    ProjectID: 33,
    ProjectName: "Virtual Reality Training Module for Employee Onboarding",
    ProjectManager: "Kory.Lockman",
    Stakeholders: "Lynn_Kunde",
    DueDate: "24/05/2025",
    Priority: "Low priority",
    AvatarSrc: Avatar3
  },
  {
    ProjectID: 34,
    ProjectName: "Collaborative Agile Project Management Suite",
    ProjectManager: "Travis.Gerhold80",
    Stakeholders: "Deborah.Stamm",
    DueDate: "05/09/2025",
    Priority: "Routine",
    AvatarSrc: Avatar7
  },
  {
    ProjectID: 35,
    ProjectName: "Automated Software Development Tool",
    ProjectManager: "Nolan.Kling13",
    Stakeholders: "Gabrielle90",
    DueDate: "01/07/2025",
    Priority: "High priority",
    AvatarSrc: Avatar4
  },
  {
    ProjectID: 36,
    ProjectName: "Telehealth and Health Tracking Application",
    ProjectManager: "Antoinette_Hills",
    Stakeholders: "Lavina.Grady",
    DueDate: "15/12/2025",
    Priority: "Medium priority",
    AvatarSrc: Avatar5
  },
  {
    ProjectID: 37,
    ProjectName: "Market Research and Analytics Tool",
    ProjectManager: "Howell69",
    Stakeholders: "Mary.Flatley37",
    DueDate: "17/07/2025",
    Priority: "Urgent",
    AvatarSrc: Avatar2
  },
  {
    ProjectID: 38,
    ProjectName: "Online Learning Management System (LMS)",
    ProjectManager: "Alden_Upton",
    Stakeholders: "Lenna_Schmidt30",
    DueDate: "03/05/2025",
    Priority: "Urgent",
    AvatarSrc: Avatar6
  },
  {
    ProjectID: 39,
    ProjectName: "Incident Response Coordination Portal",
    ProjectManager: "Jamaal41",
    Stakeholders: "Skylar_Smith65",
    DueDate: "12/07/2025",
    Priority: "High priority",
    AvatarSrc: Avatar8
  },
  {
    ProjectID: 40,
    ProjectName: "AI-Powered Bug Tracking and Resolution System",
    ProjectManager: "Fabiola.Cassin90",
    Stakeholders: "Richmond_Bruen",
    DueDate: "31/07/2025",
    Priority: "Medium priority",
    AvatarSrc: Avatar9
  },
  {
    ProjectID: 41,
    ProjectName: "Telehealth and Health Tracking Application",
    ProjectManager: "Maegan_Dietrich56",
    Stakeholders: "Judy.Beatty",
    DueDate: "21/08/2025",
    Priority: "Medium priority",
    AvatarSrc: Avatar1
  },
  {
    ProjectID: 42,
    ProjectName: "Market Research and Analytics Tool",
    ProjectManager: "Howell69",
    Stakeholders: "Mary.Flatley37",
    DueDate: "17/07/2025",
    Priority: "Urgent",
    AvatarSrc: Avatar2
  },
  {
    ProjectID: 43,
    ProjectName: "Virtual Reality Training Module for Employee Onboarding",
    ProjectManager: "Kory.Lockman",
    Stakeholders: "Lynn_Kunde",
    DueDate: "24/05/2025",
    Priority: "Low priority",
    AvatarSrc: Avatar3
  },
  {
    ProjectID: 44,
    ProjectName: "Automated Software Development Tool",
    ProjectManager: "Marlon66",
    Stakeholders: "Monserrat49",
    DueDate: "08/11/2025",
    Priority: "Routine",
    AvatarSrc: Avatar0
  },
  {
    ProjectID: 45,
    ProjectName: "Automated Software Development Tool",
    ProjectManager: "Nolan.Kling13",
    Stakeholders: "Gabrielle90",
    DueDate: "01/07/2025",
    Priority: "High priority",
    AvatarSrc: Avatar4
  },
  {
    ProjectID: 46,
    ProjectName: "Telehealth and Health Tracking Application",
    ProjectManager: "Antoinette_Hills",
    Stakeholders: "Lavina.Grady",
    DueDate: "15/12/2025",
    Priority: "Medium priority",
    AvatarSrc: Avatar5
  },
  {
    ProjectID: 47,
    ProjectName: "Collaborative Agile Project Management Suite",
    ProjectManager: "Travis.Gerhold80",
    Stakeholders: "Deborah.Stamm",
    DueDate: "05/09/2025",
    Priority: "Routine",
    AvatarSrc: Avatar7
  },
  {
    ProjectID: 48,
    ProjectName: "Incident Response Coordination Portal",
    ProjectManager: "Jamaal41",
    Stakeholders: "Skylar_Smith65",
    DueDate: "12/07/2025",
    Priority: "High priority",
    AvatarSrc: Avatar8
  },
  {
    ProjectID: 49,
    ProjectName: "AI-Powered Bug Tracking and Resolution System",
    ProjectManager: "Fabiola.Cassin90",
    Stakeholders: "Richmond_Bruen",
    DueDate: "31/07/2025",
    Priority: "Medium priority",
    AvatarSrc: Avatar9
  },
  {
    ProjectID: 50,
    ProjectName: "Online Learning Management System (LMS)",
    ProjectManager: "Alden_Upton",
    Stakeholders: "Lenna_Schmidt30",
    DueDate: "03/05/2025",
    Priority: "Urgent",
    AvatarSrc: Avatar6
  },
  {
    ProjectID: 51,
    ProjectName: "Telehealth and Health Tracking Application",
    ProjectManager: "Maegan_Dietrich56",
    Stakeholders: "Judy.Beatty",
    DueDate: "21/08/2025",
    Priority: "Medium priority",
    AvatarSrc: Avatar1
  },
  {
    ProjectID: 52,
    ProjectName: "Market Research and Analytics Tool",
    ProjectManager: "Howell69",
    Stakeholders: "Mary.Flatley37",
    DueDate: "17/07/2025",
    Priority: "Urgent",
    AvatarSrc: Avatar2
  },
  {
    ProjectID: 53,
    ProjectName: "Virtual Reality Training Module for Employee Onboarding",
    ProjectManager: "Kory.Lockman",
    Stakeholders: "Lynn_Kunde",
    DueDate: "24/05/2025",
    Priority: "Low priority",
    AvatarSrc: Avatar3
  },
  {
    ProjectID: 54,
    ProjectName: "Automated Software Development Tool",
    ProjectManager: "Marlon66",
    Stakeholders: "Monserrat49",
    DueDate: "08/11/2025",
    Priority: "Routine",
    AvatarSrc: Avatar0
  },
  {
    ProjectID: 55,
    ProjectName: "Automated Software Development Tool",
    ProjectManager: "Nolan.Kling13",
    Stakeholders: "Gabrielle90",
    DueDate: "01/07/2025",
    Priority: "High priority",
    AvatarSrc: Avatar4
  },
  {
    ProjectID: 56,
    ProjectName: "Telehealth and Health Tracking Application",
    ProjectManager: "Antoinette_Hills",
    Stakeholders: "Lavina.Grady",
    DueDate: "15/12/2025",
    Priority: "Medium priority",
    AvatarSrc: Avatar5
  },
  {
    ProjectID: 57,
    ProjectName: "Collaborative Agile Project Management Suite",
    ProjectManager: "Travis.Gerhold80",
    Stakeholders: "Deborah.Stamm",
    DueDate: "05/09/2025",
    Priority: "Routine",
    AvatarSrc: Avatar7
  },
  {
    ProjectID: 58,
    ProjectName: "Incident Response Coordination Portal",
    ProjectManager: "Jamaal41",
    Stakeholders: "Skylar_Smith65",
    DueDate: "12/07/2025",
    Priority: "High priority",
    AvatarSrc: Avatar8
  },
  {
    ProjectID: 59,
    ProjectName: "Online Learning Management System (LMS)",
    ProjectManager: "Alden_Upton",
    Stakeholders: "Lenna_Schmidt30",
    DueDate: "03/05/2025",
    Priority: "Urgent",
    AvatarSrc: Avatar6
  },
  {
    ProjectID: 60,
    ProjectName: "AI-Powered Bug Tracking and Resolution System",
    ProjectManager: "Fabiola.Cassin90",
    Stakeholders: "Richmond_Bruen",
    DueDate: "31/07/2025",
    Priority: "Medium priority",
    AvatarSrc: Avatar9
  }
];