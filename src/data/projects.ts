import { Layers, Sparkles, Stethoscope } from "lucide-react";
import type { Project } from "@/types";
import drBasuImage from "@/assets/dr-basu-eye-care.png";
import healthPlexImage from "@/assets/ratna-healthplex.png";
import testAiImage from "@/assets/ratna-test-ai.png";

export const PROJECTS: Project[] = [
  {
    icon: Stethoscope,
    title: "Dr. Basu Eye Care Platform",
    kind: "Hospital management software",
    points: [
      "Hospital software for front office, appointments, billing, pharmacy and reports",
      "React on Vite with Spring Boot REST APIs, PostgreSQL, and role-based access control",
      "Patient records, OCT/VFI integration, and pharmacy workflows",
      "Reporting dashboards for clinical operations and admin analytics"
    ],
    stack: ["React", "Spring Boot", "PostgreSQL"],
    hue: "b",
    repo: "https://github.com/Ruchi-Singh4/Dr-Basu-Eye-Care-HMS",
    live: "https://demos.ratnaglobaltech.com/",
    image: drBasuImage,
  },
  {
    icon: Layers,
    title: "Ratna HealthPlex",
    kind: "Multi-tenant healthcare platform",
    points: [
      "Multi-tenant platform for several clinics, with patient data kept separate per tenant",
      "JWT authentication, MFA, and role-based access so staff only see what their role allows",
      "Pharmacy micro-frontend in a shared pnpm monorepo — dispensing, inventory, purchase orders and prescriptions",
      "Multilingual UI with react-i18next; access controls aligned with HIPAA and the DPDP Act"
    ],
    stack: ["React", "JWT", "i18next"],
    hue: "c",
    repo: "https://github.com/Ruchi-Singh4/Ratna-HealthPlex",
    live: "https://ratna-healthplex.vercel.app/",
    image: healthPlexImage,
  },
  {
    icon: Sparkles,
    title: "Ratna Test AI",
    kind: "AI-assisted testing platform",
    points: [
      "Generates, runs and reviews test cases from a React frontend with a Spring Boot backend",
      "Cuts repetitive manual QA and speeds up test-case writing",
      "Distributed execution, self-healing locators, and audit logging",
      "Project and team dashboards for reporting and test-case review"
    ],
    stack: ["React", "Spring Boot", "AI integration"],
    hue: "d",
    repo: "https://github.com/Ruchi-Singh4/Ratna-Test-AI",
    live: "https://ratnatest.ai/",
    image: testAiImage,
  },
  {
    icon: Layers,
    title: "Food Waste Management System",
    kind: "Donation platform",
    points: [
      "Connects surplus-food donors with NGOs so unused food reaches people who need it",
      "Inventory tracking, donation requests, NGO handling, and role-based dashboards",
      "React frontend, Node.js backend, and MongoDB",
      "Impact reporting so food banks can follow what was donated and where it went"
    ],
    stack: ["React", "Node.js", "MongoDB", "JWT"],
    hue: "a",
    repo: "https://github.com/Ruchi-Singh4/Food-Waste-Management",
    live: "https://food-waste-management-frontend-six.vercel.app/",
    image: "https://github.com/user-attachments/assets/77e37019-bd91-43ca-80d9-0c5396b0ca4b",
  },
];
