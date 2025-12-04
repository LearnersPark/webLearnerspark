import { LucideIcon } from 'lucide-react';

export interface TimelineEvent {
  year: string;
  title: string;
  description: string;
  icon?: LucideIcon;
  tags: string[];
}

export interface Platform {
  name: string;
  role: string;
  description: string;
  link?: string;
  highlight?: boolean;
}

export interface Stat {
  label: string;
  value: string;
  suffix?: string;
}

export enum SectionId {
  HERO = 'hero',
  ABOUT = 'about',
  JOURNEY = 'journey',
  PLATFORMS = 'platforms',
  VISION = 'vision',
  CONTACT = 'contact'
}
