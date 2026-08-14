import { Layers, Leaf, Sparkles, Stethoscope } from "lucide-react";
import type { Project } from "@/types";

export const PROJECTS: Project[] = [
  {
    icon: Stethoscope,
    title: "Business Management Web Application",
    kind: "Java / Spring Boot",
    body: "Business workflow platform covering customer records, inventory, orders, role-based access, and admin operations.",
    stack: ["Java", "Spring Boot", "Thymeleaf", "MySQL"],
    hue: "a",
    repo: "https://github.com/Ruchi-Singh4/Business-Management-System",
    image:
      "https://github.com/SuhasKamate/Business_Management_Project/assets/126138738/e8db8f17-72d6-42a0-b264-def0bf883bbf",
  },
  {
    icon: Layers,
    title: "Food Waste Management System",
    kind: "Full-stack product",
    body: "Food inventory, donation, and waste reduction platform designed to streamline operations and improve sustainability reporting.",
    stack: ["React", "Node.js", "MongoDB", "JWT"],
    hue: "b",
    repo: "https://github.com/Ruchi-Singh4/Food-Waste-Management",
    live: "https://food-waste-management-frontend-six.vercel.app/",
    image: "https://github.com/user-attachments/assets/77e37019-bd91-43ca-80d9-0c5396b0ca4b",
  },
  {
    icon: Sparkles,
    title: "Sorting Algorithm Visualization",
    kind: "Frontend project",
    body: "Interactive visualizer for sorting algorithms with a responsive UI designed to simplify learning for students and learners.",
    stack: ["HTML", "CSS", "JavaScript"],
    hue: "e",
    repo: "https://github.com/Ruchi-Singh4/Sorting-Algorithm-Visualization",
    live: "https://ruchi-singh4.github.io/Sorting-Algorithm-Visualization/",
    image: "https://github.com/user-attachments/assets/a9e6878a-2563-4aca-b66e-a4ed8a289d3a",
  },
  {
    icon: Leaf,
    title: "Weather Project",
    kind: "API-driven app",
    body: "City weather dashboard that fetches live conditions and presents temperature, humidity, and wind information clearly.",
    stack: ["HTML", "Bootstrap", "JavaScript"],
    hue: "d",
    repo: "https://github.com/Ruchi-Singh4/Weather-Project",
    live: "https://ruchi-singh4.github.io/Weather-Project/",
    image: "https://github.com/user-attachments/assets/60aae408-b91a-4986-a0dc-6f528bb87354",
  },
];
