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
      "Hospital system for front office, appointments, billing, and pharmacy",
      "React and Spring Boot, with roles so staff only open what they should",
      "Patient records, OCT/VFI scans, and the reports the clinic runs daily",
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
      "One product for multiple clinics, with each clinic’s data kept separate",
      "JWT, MFA, and roles; the UI is available in 17 languages",
      "I built the pharmacy micro-frontend: dispense, stock, and purchase orders",
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
      "Helps QA generate and run test cases instead of repeating the same clicks",
      "React front end talking to a Spring Boot service",
      "Dashboard for what passed, what failed, and what still needs a look",
    ],
    stack: ["React", "Spring Boot", "Java"],
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
      "Connects leftover kitchen food with NGOs that can collect it",
      "Separate dashboards for donors and NGOs — React, Node.js, MongoDB",
      "Tracks inventory and donation requests",
    ],
    stack: ["React", "Node.js", "MongoDB"],
    hue: "a",
    repo: "https://github.com/Ruchi-Singh4/Food-Waste-Management",
    live: "https://food-waste-management-frontend-six.vercel.app/",
    image: "https://github.com/user-attachments/assets/77e37019-bd91-43ca-80d9-0c5396b0ca4b",
  },
];
