import { Github, Mail, Heart } from 'lucide-react'
import { siteConfig } from '../data/config'

const navLinks = [
  { label: 'Home',     href: '#home' },
  { label: 'About',    href: '#about' },
  { label: 'Skills',   href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact',  href: '#contact' },
]

export default function Footer() {
  const year = new Date().getFullYear()

  const scrollTo = (href: string) => {
    const id = href.replace('#', '')
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <footer className="bg-dark-800 border-t border-white/10" role="contentinfo">
      <div className="section-container py-10 flex flex-col gap-8">
        {/* Top row */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
          {/* Brand */}
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-primary-500 to-accent-500 flex items-center justify-center font-bold text-white text-sm">
              R
            </div>
            <div>
              <p className="font-semibold text-white">{siteConfig.name}</p>
              <p className="text-xs text-slate-500">{siteConfig.title}</p>
            </div>
          </div>

          {/* Nav */}
          <nav aria-label="Footer navigation">
            <ul className="flex flex-wrap justify-center gap-x-5 gap-y-2" role="list">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <button
                    onClick={() => scrollTo(link.href)}
                    className="text-sm text-slate-400 hover:text-white transition-colors duration-200"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </nav>

          {/* Social icons */}
          <div className="flex items-center gap-3">
            <a
              href={`mailto:${siteConfig.email}`}
              className="w-9 h-9 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-slate-400 hover:text-white hover:bg-white/10 transition-all duration-200"
              aria-label={`Email ${siteConfig.email}`}
            >
              <Mail size={16} aria-hidden="true" />
            </a>
            <a
              href={siteConfig.github}
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-slate-400 hover:text-white hover:bg-white/10 transition-all duration-200"
              aria-label="GitHub profile (opens in new tab)"
            >
              <Github size={16} aria-hidden="true" />
            </a>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-white/10" />

        {/* Bottom row */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-slate-500">
          <p>© {year} {siteConfig.name}. All rights reserved.</p>
          <p className="flex items-center gap-1">
            Built with React, TypeScript &amp; Framer Motion
            <Heart size={12} className="text-red-400 ml-1" aria-hidden="true" />
          </p>
        </div>
      </div>
    </footer>
  )
}
