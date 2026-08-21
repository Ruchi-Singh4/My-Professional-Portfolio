import type { NavItem, Profile, Stat } from "@/types";

export const ME: Profile = {
  name: "Ruchi Singh",
  first: "Ruchi",
  last: "Singh",
  email: "ruchisingh.0411@gmail.com",
  location: "Hyderabad, Telangana, India",
  linkedin: "https://www.linkedin.com/in/ruchi-singh-b87180288/",
  github: "https://github.com/Ruchi-Singh4",
  resume: "/Ruchi_Singh_Java_Resume.pdf",
  photo: "/profile.jpg",
};

export const ROLES: string[] = [
  "Java Full Stack Developer",
  "Spring Boot Developer",
  "React.js Developer",
];

export const STATS: Stat[] = [
  { n: "1.5+", l: "Years experience" },
  { n: "React", l: "Vite, Redux, TanStack Query" },
  { n: "Java", l: "Spring Boot REST APIs" },
  { n: "SQL", l: "PostgreSQL and MySQL" },
];

export const NAV: NavItem[] = [
  ["home", "Home"],
  ["about", "About"],
  ["services", "What I do"],
  ["skills", "Skills"],
  ["experience", "Experience"],
  ["education", "Education"],
  ["projects", "Projects"],
  ["contact", "Contact"],
];
