export interface Project {
  id: string;
  name: string;
  description: string;
  longDescription: string;
  technologies: string[];
  category: 'python' | 'javascript' | 'react' | 'fullstack';
  highlights: string[];
  githubUrl: string;
  liveUrl?: string;
  featured: boolean;
  image?: string; // placeholder — add your screenshot path here
}

// Projects sourced from verified GitHub repositories at https://github.com/OHMAMMAD
// Update this file to add, edit, or remove projects from the portfolio.
export const projects: Project[] = [
  {
    id: 'vbi',
    name: 'Visual Brainfuck Interpreter',
    description:
      'An optimized, visualization-enabled Brainfuck interpreter built in Python — designed to help debug esoteric programs interactively.',
    longDescription:
      'A Python-based interpreter for the Brainfuck esoteric programming language with a real-time visualization mode. The interpreter dynamically renders cell values, the memory pointer position, and surrounding context directly in the terminal, making it significantly easier to trace and debug Brainfuck programs.',
    technologies: ['Python', 'Interpreter Design', 'CLI', 'Visualization'],
    category: 'python',
    highlights: [
      'Real-time terminal visualization of memory cells and pointer',
      'Dynamic pointer tracking with configurable display window',
      'Support for standard Brainfuck programs and code examples',
      'Command-line flags for controlling execution and visualization modes',
      'Includes a library of classic Brainfuck programs (Fibonacci, etc.)',
    ],
    githubUrl: 'https://github.com/OHMAMMAD/Visual-Brainfuck-Interpreter-VBI',
    featured: true,
  },
  {
    id: 'todo-list',
    name: 'React Todo App',
    description:
      'A clean, functional task management application built with React, demonstrating component-based UI development and state management.',
    longDescription:
      'A responsive to-do list application built with React. Demonstrates the use of React hooks for state management, component composition, and building interactive user interfaces.',
    technologies: ['React', 'JavaScript', 'CSS'],
    category: 'react',
    highlights: [
      'Component-based architecture with React hooks',
      'Add, complete, and remove tasks',
      'Persistent state management',
      'Responsive layout',
    ],
    githubUrl: 'https://github.com/OHMAMMAD/todo-list',
    featured: true,
  },
  {
    id: 'notes',
    name: 'Notes App',
    description:
      'A React-based notes application with a clean interface for creating and managing personal notes.',
    longDescription:
      'A notes application built with React, featuring a clean and accessible interface for creating, reading, and managing notes. Built to explore React component patterns and local state handling.',
    technologies: ['React', 'JavaScript', 'CSS'],
    category: 'react',
    highlights: [
      'Create and manage multiple notes',
      'Clean, readable UI',
      'React hooks and functional components',
      'Responsive design',
    ],
    githubUrl: 'https://github.com/OHMAMMAD/notes',
    featured: false,
  },
  {
    id: '2048',
    name: '2048 Game',
    description:
      'A browser-based implementation of the popular 2048 sliding tile puzzle game, built with vanilla JavaScript.',
    longDescription:
      'A faithful browser-based recreation of the 2048 sliding puzzle game, built entirely with vanilla JavaScript. Implements the core game logic, tile merging mechanics, keyboard input handling, and score tracking.',
    technologies: ['JavaScript', 'HTML5', 'CSS3'],
    category: 'javascript',
    highlights: [
      'Complete game logic with tile merging',
      'Keyboard and touch input support',
      'Score tracking',
      'Pure vanilla JavaScript — no dependencies',
    ],
    githubUrl: 'https://github.com/OHMAMMAD/2048',
    featured: false,
  },
];

export const featuredProjects = projects.filter((p) => p.featured);
