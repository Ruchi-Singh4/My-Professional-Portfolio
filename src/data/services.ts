import { Code2, Server, ShieldCheck } from "lucide-react";
import type { Service } from "@/types";

export const SERVICES: Service[] = [
  {
    icon: Server,
    title: "Backend Development",
    body: "REST APIs in Spring Boot backed by PostgreSQL — consistent validation, exception handling and pagination, with slow queries tuned through indexing and join optimisation.",
  },
  {
    icon: Code2,
    title: "Frontend Development",
    body: "Production React interfaces with Redux Toolkit, TanStack Query and React Hook Form, built on a shared component library so every module looks and behaves the same.",
  },
  {
    icon: ShieldCheck,
    title: "Secure, Full Stack Delivery",
    body: "JWT auth, multi-factor authentication and role-based access control across the stack — least-privilege access to protected patient health data, end to end.",
  },
];
