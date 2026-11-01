export interface Skill {
  name: string;
  icon: string; // emoji or devicon class
  level?: 'advanced' | 'proficient' | 'familiar';
  years?: number;
  note?: string;
}

export interface SkillCategory {
  id: string;
  title: string;
  icon: string;
  color: string;
  skills: Skill[];
}

export const skillCategories: SkillCategory[] = [
  {
    id: 'languages',
    title: 'Programming Languages',
    icon: '💻',
    color: 'from-violet-500 to-purple-600',
    skills: [
      { name: 'Python', icon: '🐍', level: 'advanced', years: 6, note: '6 years — advanced proficiency' },
      { name: 'JavaScript', icon: '🟨', level: 'proficient', note: 'Frontend & full-stack' },
      { name: 'HTML5', icon: '🧱', level: 'proficient' },
      { name: 'CSS3', icon: '🎨', level: 'proficient' },
    ],
  },
  {
    id: 'frontend',
    title: 'Frontend Development',
    icon: '🖼️',
    color: 'from-cyan-500 to-blue-600',
    skills: [
      { name: 'React', icon: '⚛️', level: 'proficient' },
      { name: 'TypeScript', icon: '🔷', level: 'familiar' },
      { name: 'Tailwind CSS', icon: '💨', level: 'proficient' },
      { name: 'Responsive Design', icon: '📱', level: 'proficient' },
    ],
  },
  {
    id: 'mobile',
    title: 'Mobile Development',
    icon: '📱',
    color: 'from-emerald-500 to-teal-600',
    skills: [
      { name: 'React Native', icon: '📲', level: 'familiar', note: 'Cross-platform mobile' },
    ],
  },
  {
    id: 'backend',
    title: 'Backend Development',
    icon: '⚙️',
    color: 'from-orange-500 to-amber-600',
    skills: [
      { name: 'FastAPI', icon: '⚡', level: 'proficient', note: 'Python REST APIs' },
      { name: 'Node.js', icon: '🟢', level: 'proficient' },
      { name: 'REST APIs', icon: '🔗', level: 'proficient' },
      { name: 'Authentication', icon: '🔐', level: 'proficient' },
    ],
  },
  {
    id: 'databases',
    title: 'Databases',
    icon: '🗄️',
    color: 'from-rose-500 to-pink-600',
    skills: [
      { name: 'SQL', icon: '🗃️', level: 'proficient' },
      { name: 'SQLite', icon: '📦', level: 'proficient' },
      { name: 'Database Design', icon: '📐', level: 'proficient' },
    ],
  },
];
