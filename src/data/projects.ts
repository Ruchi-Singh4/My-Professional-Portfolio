import { Layers, Sparkles, Stethoscope } from "lucide-react";
import type { Project } from "@/types";

export const PROJECTS: Project[] = [
  {
    icon: Stethoscope,
    title: "Dr. Basu Eye Care HMS",
    kind: "Healthcare management system",
    points: [
      "Comprehensive hospital management covering front office operations, patient appointments, billing and financial reports",
      "Built with React on Vite and Spring Boot REST APIs backed by PostgreSQL with role-based access control",
      "Real-time appointment tracking, patient record management, OCT/VFI integration, and pharmacy workflow automation",
      "Comprehensive reporting dashboards for clinical operations and administrative analytics"
    ],
    stack: ["React", "Spring Boot", "PostgreSQL"],
    hue: "b",
    repo: "https://github.com/Ruchi-Singh4/Dr-Basu-Eye-Care-HMS",
    live: "https://demos.ratnaglobaltech.com/",
    image: "/src/assets/dr-basu-eye-care.svg",
  },
  {
    icon: Layers,
    title: "Ratna HealthPlex",
    kind: "Multi-tenant healthcare platform",
    points: [
      "Enterprise-grade multi-tenant platform enabling secure operations across multiple clinics with unified patient records",
      "JWT authentication, multi-factor authentication (MFA), and granular role-based access control (RBAC) for patient data protection",
      "Telemedicine integration, EMR for nurses/physicians, lab management, pharmacy operations, and multilingual voice AI",
      "HIPAA & DPDPA compliance for underserved community healthcare with shared staff roles and protected workflows"
    ],
    stack: ["React", "JWT", "MFA", "RBAC"],
    hue: "c",
    repo: "https://github.com/Ruchi-Singh4/Ratna-HealthPlex",
    live: "https://ratna-healthplex.vercel.app/",
    image: "/src/assets/ratna-healthplex.svg",
  },
  {
    icon: Sparkles,
    title: "Ratna Test AI",
    kind: "AI-assisted testing platform",
    points: [
      "AI-powered automated testing platform generating, executing, and analyzing test cases from React frontend with Spring Boot backend",
      "Reduces manual QA effort by 90%, achieves 5x faster test generation, and ensures 100% compliance coverage",
      "24/7 autonomous testing with distributed test execution, self-healing test locators, and comprehensive audit logging",
      "Enterprise-scale project/team management dashboards with reporting and test case review capabilities"
    ],
    stack: ["React", "Spring Boot", "AI integration"],
    hue: "d",
    repo: "https://github.com/Ruchi-Singh4/Ratna-Test-AI",
    live: "https://ratnatest.ai/",
    image: "/src/assets/ratna-test-ai.svg",
  },
  {
    icon: Layers,
    title: "Food Waste Management System",
    kind: "Full-stack product",
    points: [
      "Full-stack food waste reduction and donation platform connecting surplus-food donors with NGOs for community impact",
      "Comprehensive food inventory tracking, real-time donation management, NGO request handling, and role-based dashboards",
      "Built with React frontend, Node.js backend, and MongoDB for scalable, efficient operations",
      "Sustainability impact reporting that enables food banks and NGOs to streamline donation workflows and serve underserved communities"
    ],
    stack: ["React", "Node.js", "MongoDB", "JWT"],
    hue: "a",
    repo: "https://github.com/Ruchi-Singh4/Food-Waste-Management",
    live: "https://food-waste-management-frontend-six.vercel.app/",
    image: "https://github.com/user-attachments/assets/77e37019-bd91-43ca-80d9-0c5396b0ca4b",
  },
];
