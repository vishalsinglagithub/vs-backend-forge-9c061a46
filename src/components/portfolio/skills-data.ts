export type Skill = {
  name: string;
  level: number;
  description: string;
  highlights: string[];
  motif:
    | "code"
    | "spring"
    | "shield"
    | "entities"
    | "mapping"
    | "query"
    | "token"
    | "branch"
    | "terminal";
};

export type SkillCategory = {
  title: string;
  blurb: string;
  skills: Skill[];
};

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    title: "Backend Development",
    blurb: "Primary specialization — Java and the Spring ecosystem.",
    skills: [
      {
        name: "Java",
        level: 95,
        description: "Core backend programming language.",
        highlights: [
          "OOP",
          "Collections",
          "Streams",
          "Exception Handling",
          "Multithreading",
          "Java 8+ features",
        ],
        motif: "code",
      },
      {
        name: "Spring Boot",
        level: 93,
        description:
          "Backend framework used for developing REST APIs and enterprise backend applications.",
        highlights: [
          "Dependency Injection",
          "REST APIs",
          "Layered architecture",
          "Configuration",
          "Service development",
        ],
        motif: "spring",
      },
      {
        name: "Spring Security",
        level: 88,
        description: "Used for securing backend applications and REST APIs.",
        highlights: [
          "Authentication",
          "Authorization",
          "Security filters",
          "Protected endpoints",
        ],
        motif: "shield",
      },
      {
        name: "Hibernate",
        level: 87,
        description: "ORM framework used for database interaction.",
        highlights: [
          "Entity mapping",
          "Relationships",
          "Lazy / eager loading",
          "Transactions",
          "JPQL",
          "Persistence",
        ],
        motif: "entities",
      },
      {
        name: "JPA",
        level: 90,
        description:
          "Persistence specification used for mapping Java objects to relational database tables.",
        highlights: [
          "Entity",
          "Repository",
          "Relationships",
          "JPQL",
          "Persistence operations",
        ],
        motif: "mapping",
      },
    ],
  },
  {
    title: "Database",
    blurb: "Relational modelling and query performance.",
    skills: [
      {
        name: "SQL",
        level: 89,
        description: "Used for relational database operations.",
        highlights: [
          "SELECT",
          "JOIN",
          "Filtering",
          "Aggregation",
          "Subqueries",
          "Database design",
        ],
        motif: "query",
      },
    ],
  },
  {
    title: "Authentication & Security",
    blurb: "Stateless auth and protected API surfaces.",
    skills: [
      {
        name: "JWT",
        level: 90,
        description: "Used for stateless authentication and securing REST APIs.",
        highlights: [
          "Bearer tokens",
          "Access tokens",
          "Authentication",
          "Authorization",
        ],
        motif: "token",
      },
      {
        name: "Spring Security",
        level: 88,
        description: "Used for securing backend applications and REST APIs.",
        highlights: [
          "Authentication",
          "Authorization",
          "Security filters",
          "Protected endpoints",
        ],
        motif: "shield",
      },
    ],
  },
  {
    title: "Tools & Environment",
    blurb: "Day-to-day development and server workflow.",
    skills: [
      {
        name: "Git",
        level: 86,
        description: "Version control system used for managing source code.",
        highlights: [
          "Branching",
          "Merging",
          "Commits",
          "Pull requests",
          "Collaborative development",
        ],
        motif: "branch",
      },
      {
        name: "Linux",
        level: 80,
        description:
          "Used for backend development and server/environment management.",
        highlights: [
          "Terminal commands",
          "File management",
          "Processes",
          "Permissions",
          "Application configuration",
        ],
        motif: "terminal",
      },
    ],
  },
];
