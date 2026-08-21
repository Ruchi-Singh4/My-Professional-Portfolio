import { Database, LayoutDashboard, LockKeyhole } from "lucide-react";
import type { Service } from "@/types";

export const SERVICES: Service[] = [
  {
    icon: Database,
    title: "Spring Boot APIs",
    body: "REST services on PostgreSQL — validation, pagination, and SQL that holds up when traffic is real.",
  },
  {
    icon: LayoutDashboard,
    title: "React screens",
    body: "Interfaces with Vite, Redux Toolkit, TanStack Query, and React Hook Form. Same patterns across modules, so it feels like one product.",
  },
  {
    icon: LockKeyhole,
    title: "Login and roles",
    body: "JWT, MFA, and role-based access so people only see what their role is allowed to see.",
  },
];
