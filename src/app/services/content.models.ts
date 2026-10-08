export type SectionId = 'hero' | 'automation' | 'working-drawings' | 'design-projects' | 'about' | 'contact';

export const LOCKED_SECTIONS: SectionId[] = ['hero', 'automation', 'working-drawings', 'contact'];

export interface SectionConfig {
  id: SectionId;
  enabled: boolean;
}

export interface Counter {
  value: number;
  label: string;
}

export interface SiteConfig {
  name: string;
  role: string;
  tagline: string;
  email: string;
  linkedin: string;
  portfolioPdf: string;
  portfolioFullPdf: string;
  cvPdf: string;
  ogImage: string;
  metaDescription: string;
  accentColor: string;
  backgroundColor: string;
  inkColor: string;
  counters: Counter[];
  sections: SectionConfig[];
}

export interface ImageRef {
  path: string;
  alt: string;
}

export interface SheetRef {
  id: string;
  path: string;
  alt: string;
}

export interface AutomationItem {
  title: string;
  tool: string;
  order: number;
  enabled: boolean;
  slug: string;
  demoUrl?: string;
  video?: string;
  images: ImageRef[];
  problem: string;
  solution: string;
  result: string;
}

export interface WorkingDrawingItem {
  title: string;
  year: number;
  sheetCount: number;
  order: number;
  enabled: boolean;
  slug: string;
  academic: boolean;
  description: string;
  sheets: SheetRef[];
}

export interface DesignProjectItem {
  title: string;
  order: number;
  enabled: boolean;
  slug: string;
  image: ImageRef;
  description: string;
}
