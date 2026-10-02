export interface ProjectLink {
  label: string;
  href: string;
  kind?: "demo" | "repository" | "coverage" | "resource";
}

export interface ProjectFocus {
  title: string;
  description: string;
}

export interface ProjectImage {
  src: string;
  alt: string;
  width: number;
  height: number;
}

export interface ProjectMetric {
  value: string;
  label: string;
  detail?: string;
}

export interface ProjectCaseStudy {
  introduction: string;
  overview: string;
  focus: ProjectFocus[];
  outcome?: string;
  metrics?: ProjectMetric[];
  role?: string;
  note?: string;
}

export interface Project {
  slug: string;
  number: string;
  title: string;
  category: string;
  year: string;
  visualLabel: string;
  description: string;
  tags: string[];
  outcome?: string;
  href?: string;
  image?: string;
  imageWidth?: number;
  imageHeight?: number;
  imageAlt?: string;
  featured?: boolean;
  gallery?: ProjectImage[];
  caseStudy: ProjectCaseStudy;
  links: ProjectLink[];
}
