export interface PersonalInfo {
  name: string;
  shortName: string;
  title: string;
  subtitle: string;
  location: string;
  email: string;
  university: string;
  faculty: string;
  degree: string;
  academicLevel: string;
  heroStatement: string;
}

export interface SocialLinks {
  github: string;
  linkedin: string;
  email: string;
}

export type SkillCategory =
  | "Programming"
  | "Frontend"
  | "Backend"
  | "Database"
  | "Software Engineering"
  | "Cybersecurity"
  | "Tools";

export interface SkillGroup {
  category: SkillCategory;
  description: string;
  items: string[];
}

export type ProjectStatus = "Active" | "Completed" | "In Progress";

export interface ProjectDetail {
  overview: string;
  problem: string;
  solution: string;
  architecture: string;
  technologies: string[];
  securityConcepts: string[];
  engineeringDecisions: string[];
  challenges: string;
  lessonsLearned: string;
}

export interface Project {
  id: string;
  caseNumber: string;
  title: string;
  domain: string;
  status: ProjectStatus;
  securityFocus: string;
  technologies: string[];
  description: string;
  features: string[];
  github?: string;
  demo?: string;
  details: ProjectDetail;
}

export type CredentialStatus = "COMPLETED" | "IN PROGRESS" | "TRAINING" | "WORKSHOP";

export interface Credential {
  id: string;
  name: string;
  issuer: string;
  status: CredentialStatus;
}

export interface TimelineEntry {
  year: string;
  label: string;
  items: string[];
}

export interface StatItem {
  key: string;
  label: string;
  value: number;
}
