import en from "./en";
import es from "./es";
import ja from "./ja";

export const locales = { en, es, ja } as const;
export type Locale = keyof typeof locales;

export const pages = ["", "life", "work/jacaero", "work/benchlog"] as const;
export type Page = (typeof pages)[number];

export const href = (locale: Locale, page: Page = "") =>
  (locale === "en" ? "/" : `/${locale}/`) + (page && `${page}/`);

export const links = {
  email: "leo.caero.ledezma@gmail.com",
  linkedin: "https://www.linkedin.com/in/leonardo-caero-ledezma/",
  github: "https://github.com/LeonardoCaero",
  repo: "https://github.com/LeonardoCaero/jacaero-platform",
};

export const projects = {
  jacaero: {
    name: "jacaero-platform",
    since: "2025",
    repo: links.repo,
    tools: ["React 19", "Vite", "Tailwind CSS", "Express 5", "Zod", "Prisma", "PostgreSQL", "Docker", "GitHub Actions"],
  },
  benchlog: {
    name: "benchlog",
    since: "2026",
    repo: null,
    tools: ["Next.js 16", "React 19", "Tailwind CSS", "NestJS", "Prisma", "PostgreSQL", "Better Auth", "Zod", "Turborepo", "Vitest", "Docker", "GitHub Actions"],
  },
};

export const timeline = [
  { key: "freelance", org: "Freelance", period: "2025" },
  { key: "slash", org: "Slashmobility", period: "2024 – 2025" },
  { key: "ntt", org: "NTT Data", period: "2023 – 2024" },
  { key: "gft", org: "GFT Technologies", period: "2022 – 2023" },
  { key: "planendo", org: "Planendo", period: "2021 – 2022" },
] as const;

export const ongoing = new Set(["freelance"]);

export const stack = [
  { name: "Java", icon: "siOpenjdk", color: "#E76F00" },
  { name: "Spring Boot", icon: "siSpringboot" },
  { name: "Node.js", icon: "siNodedotjs" },
  { name: "TypeScript", icon: "siTypescript" },
  { name: "Angular", icon: "siAngular", color: "#DD0031" },
  { name: "React", icon: "siReact" },
  { name: "Vue", icon: "siVuedotjs" },
  { name: "Python", icon: "siPython" },
  { name: "PostgreSQL", icon: "siPostgresql" },
  { name: "MongoDB", icon: "siMongodb" },
  { name: "Prisma", icon: "siPrisma", color: "#E6E6E8" },
  { name: "Azure", icon: null, color: "#0089D6" },
  { name: "Docker", icon: "siDocker" },
  { name: "Kubernetes", icon: "siKubernetes" },
  { name: "GitHub Actions", icon: "siGithubactions" },
  { name: "Jenkins", icon: "siJenkins" },
  { name: "LangChain", icon: "siLangchain" },
] as const;
