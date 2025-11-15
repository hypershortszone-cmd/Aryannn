import type { LucideIcon } from 'lucide-react';

export type Subject = 'Physics' | 'Chemistry' | 'Biology';

export type Experiment = {
  id: string;
  title: string;
  subject: Subject;
  chapter: string;
  difficulty: 'Beginner' | 'Intermediate' | 'Advanced';
  aim: string;
  theory: string;
  apparatus: string[];
  safety: string[];
  expectedResults: string;
  simulationImageId: string;
};

export type Chapter = {
  title: string;
  experiments: Experiment[];
};

export type SubjectData = {
  name: Subject;
  icon: LucideIcon;
  heroImageId: string;
  chapters: Chapter[];
};

export type OnboardingData = {
  board: string;
  class: string;
  subject: Subject;
};
