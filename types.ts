
export interface Experience {
  company: string;
  role: string;
  period: string;
  location: string;
  bullets: string[];
  link?: string;
}

export interface Project {
  title: string;
  description: string;
  link?: string;
  tags: string[];
  github?: string;
  image?: string;
}

export interface Publication {
  title: string;
  description: string;
  doi?: string;
  year: string;
}

export interface SkillCategory {
  category: string;
  items: string[];
}

export interface Achievement {
  title: string;
  org: string;
  date: string;
  description: string;
}

export interface Certification {
  name: string;
  issuer: string;
  link?: string;
}
