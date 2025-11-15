import type { SubjectData } from './types';
import { Atom, Dna, FlaskConical } from 'lucide-react';

export const subjects: SubjectData[] = [
  {
    name: 'Physics',
    icon: Atom,
    heroImageId: 'physics-hero',
    chapters: [
      {
        title: 'Mechanics',
        experiments: [
          {
            id: 'simple-pendulum',
            title: 'Simple Pendulum',
            subject: 'Physics',
            chapter: 'Mechanics',
            difficulty: 'Beginner',
            aim: 'To determine the time period of a simple pendulum and to study the relationship between its length and time period.',
            theory:
              'A simple pendulum consists of a heavy point mass suspended by a weightless, inextensible, and perfectly flexible string from a rigid support. The time period (T) of a simple pendulum is the time taken to complete one oscillation. For small amplitudes, it is given by T = 2π√(L/g), where L is the effective length of the pendulum and g is the acceleration due to gravity.',
            apparatus: [
              'Pendulum bob',
              'String',
              'Stopwatch',
              'Metre scale',
              'Split cork',
              'Retort stand',
            ],
            safety: [
              'Ensure the support is rigid.',
              'The amplitude of oscillation should be small.',
              'Avoid air currents.',
            ],
            expectedResults:
              'The time period of the pendulum is expected to increase with the square root of its length. The T² vs L graph should be a straight line passing through the origin.',
            simulationImageId: 'pendulum-simulation',
          },
        ],
      },
      {
        title: 'Optics',
        experiments: [],
      },
    ],
  },
  {
    name: 'Chemistry',
    icon: FlaskConical,
    heroImageId: 'chemistry-hero',
    chapters: [
      {
        title: 'Solutions & Titration',
        experiments: [
          {
            id: 'acid-base-titration',
            title: 'Acid-Base Titration',
            subject: 'Chemistry',
            chapter: 'Solutions & Titration',
            difficulty: 'Intermediate',
            aim: 'To determine the concentration of a given sodium hydroxide (NaOH) solution by titrating it against a standard solution of oxalic acid.',
            theory:
              'Titration is a quantitative chemical analysis method used to determine the concentration of an identified analyte. A reagent, termed the titrant or titrator, is prepared as a standard solution of known concentration and volume. The titrant reacts with a solution of analyte (the titrand) to determine the analyte\'s concentration. The reaction is typically a neutralization reaction in acid-base titration.',
            apparatus: [
              'Burette',
              'Pipette',
              'Conical flask',
              'Burette stand',
              'Funnel',
              'White tile',
              'Standard oxalic acid solution',
              'NaOH solution',
              'Phenolphthalein indicator',
            ],
            safety: [
              'Handle acids and bases with care.',
              'Wear safety goggles.',
              'Rinse the burette and pipette with the respective solutions before use.',
            ],
            expectedResults:
              'The endpoint of the titration is reached when the solution turns from colorless to a faint permanent pink color. The concentration of the NaOH solution can be calculated using the formula M1V1/n1 = M2V2/n2.',
            simulationImageId: 'titration-simulation',
          },
        ],
      },
    ],
  },
  {
    name: 'Biology',
    icon: Dna,
    heroImageId: 'biology-hero',
    chapters: [
      {
        title: 'Cell Structure',
        experiments: [
          {
            id: 'onion-cell-staining',
            title: 'Onion Cell Staining',
            subject: 'Biology',
            chapter: 'Cell Structure',
            difficulty: 'Beginner',
            aim: 'To prepare a temporary mount of an onion peel and to study the plant cells.',
            theory:
              'The cell is the basic structural and functional unit of all known organisms. Onion cells are plant cells and have a distinct cell wall, cell membrane, cytoplasm, a large central vacuole, and a nucleus. Staining makes these transparent structures visible under a microscope.',
            apparatus: [
              'Onion bulb',
              'Microscope',
              'Glass slide',
              'Coverslip',
              'Forceps',
              'Dropper',
              'Watch glass',
              'Safranin or Methylene Blue stain',
              'Glycerine',
              'Water',
            ],
            safety: [
              'Handle the microscope with care.',
              'Avoid air bubbles while placing the coverslip.',
              'Use a small drop of stain to avoid overstaining.',
            ],
            expectedResults:
              'Under the microscope, rectangular cells arranged in rows are observed. Each cell shows a distinct cell wall, a nucleus, cytoplasm, and a large central vacuole.',
            simulationImageId: 'microscope-simulation',
          },
        ],
      },
    ],
  },
];

export const allExperiments = subjects.flatMap(subject =>
  subject.chapters.flatMap(chapter => chapter.experiments)
);

export const getExperimentById = (id: string) => {
  return allExperiments.find(exp => exp.id === id);
};

export const getSubjectByName = (name: string) => {
  return subjects.find(
    sub => sub.name.toLowerCase() === name.toLowerCase()
  );
};
