export interface StackItem {
  name: string;
  slug: string;
  color: string;
}

export interface StackGroup {
  title: string;
  items: StackItem[];
}

export const STACK: StackGroup[] = [
  {
    title: "Frontend",
    items: [
      { name: "JavaScript", slug: "javascript", color: "F7DF1E" },
      { name: "React", slug: "react", color: "61DAFB" },
      { name: "Redux", slug: "redux", color: "764ABC" },
      { name: "Tailwind CSS", slug: "tailwindcss", color: "06B6D4" },
      { name: "HTML5", slug: "html5", color: "E34F26" },
      { name: "CSS3", slug: "css", color: "1572B6" },
      { name: "Vite", slug: "vite", color: "646CFF" },
    ],
  },
  {
    title: "Backend",
    items: [
      { name: "Java", slug: "openjdk", color: "437291" },
      { name: "Spring Boot", slug: "springboot", color: "6DB33F" },
      { name: "REST APIs", slug: "swagger", color: "85EA2D" },
    ],
  },
  {
    title: "Database",
    items: [
      { name: "PostgreSQL", slug: "postgresql", color: "4169E1" },
      { name: "MySQL", slug: "mysql", color: "4479A1" },
    ],
  },
  {
    title: "Tools",
    items: [
      { name: "Git", slug: "git", color: "F05032" },
      { name: "GitHub", slug: "github", color: "181717" },
      { name: "Postman", slug: "postman", color: "FF6C37" },
      { name: "JWT", slug: "jsonwebtokens", color: "FB015B" },
    ],
  },
];

export interface PathItem {
  when: string;
  title: string;
  where: string;
  body: string;
  tags: string;
  tone: "pink" | "violet" | "gold" | "teal";
  kind: "work" | "school";
  points?: string[];
}

export const WORK: PathItem[] = [
  {
    when: "Apr 2025 — Present",
    title: "Software Engineer",
    where: "Ratna Global Tech · Full-time · Hyderabad · On-site",
    body: "I work on the hospital product used at the desk: Front Office, appointments, billing, pharmacy, and reports. Stack is React, Spring Boot, and PostgreSQL.",
    tags: "React · Spring Boot · PostgreSQL · JWT",
    tone: "teal",
    kind: "work",
    points: [
      "Features across Front Office, Appointments, Billing, Pharmacy, Lead Management, Reports, and refunds",
      "React UI with Vite, Redux Toolkit, TanStack Query, React Hook Form, and Tailwind CSS",
      "Pharmacy micro-frontend in a pnpm monorepo — dispensing, inventory, purchase orders, barcodes",
      "JWT, MFA, role-based access, and 17-language support with i18next",
      "Spring Boot REST APIs and SQL so production screens stay responsive",
    ],
  },
  {
    when: "Aug 2024 — Mar 2025",
    title: "Full Stack Java Developer Trainee",
    where: "JSpiders — Training & Development Center · Bengaluru · On-site",
    body: "Eight-month full-stack training in Bengaluru. Java on the server, React on the page, then I joined Ratna.",
    tags: "Java · JDBC · Servlets · React · SQL",
    tone: "gold",
    kind: "work",
    points: [
      "Built practice apps with Java (JDBC, Servlets) wired to React screens",
      "SQL, HTML, CSS, and JavaScript on assigned projects",
      "Git and GitHub daily — write, review, fix, merge — with mentors",
    ],
  },
];

export const EDUCATION: PathItem[] = [
  {
    when: "2020 — 2024",
    title: "B.Tech, Computer Science & Engineering",
    where: "Raj Kumar Goel Institute of Technology & Management, Ghaziabad",
    body: "CGPA 7.73 / 10. Java, data structures, and web — the base I still use at work.",
    tags: "Java · DSA · Web",
    tone: "violet",
    kind: "school",
  },
];

export interface Honor {
  title: string;
  meta: string;
  body: string;
  tone: "gold" | "blue" | "teal" | "violet";
  kind: "award" | "cert" | "trophy" | "medal";
}

export const HONORS: Honor[] = [
  {
    title: "AWS Cloud Foundations",
    meta: "AWS Academy Graduate",
    body: "Cloud basics I can talk through without the slide deck.",
    tone: "gold",
    kind: "cert",
  },
  {
    title: "React.js & JavaScript",
    meta: "DevTown · Front-end",
    body: "The course that turned classroom JS into screens I could ship.",
    tone: "blue",
    kind: "award",
  },
  {
    title: "AKTU Zonal Sports Fest",
    meta: "Volleyball",
    body: "Played for the campus side at the zonal meet.",
    tone: "teal",
    kind: "trophy",
  },
  {
    title: "Inter-Campus Rangoli",
    meta: "First place",
    body: "Won the inter-campus competition.",
    tone: "violet",
    kind: "medal",
  },
];
