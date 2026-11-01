/**
 * Site-wide configuration.
 * Edit this file to update personal information, links, and background images.
 */

export const siteConfig = {
  name: 'Radin Hemmasi',
  title: 'Full-Stack Developer',
  headline: 'Full-Stack Developer · Advanced Python · Building Software That Solves Real Problems',
  email: 'radin.hemm@gmail.com',
  github: 'https://github.com/OHMAMMAD',
  resumeUrl: '', // Add your resume PDF path here, e.g. '/resume.pdf'

  /** 
   * Background image placeholders.
   * Replace each empty string with the path to your image, e.g. '/images/hero-bg.jpg'
   * Supported formats: JPG, PNG, WebP, AVIF
   */
  backgrounds: {
    hero:     '',   // Home section background
    about:    '',   // About Me section background
    skills:   '',   // Technical Skills section background
    projects: '',   // Projects section background
    contact:  '',   // Contact section background
  },
} as const;

export type SiteConfig = typeof siteConfig;
