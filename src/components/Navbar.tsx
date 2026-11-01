import { useState, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useScrollY } from '../hooks/useScrollY'
import { useActiveSection } from '../hooks/useActiveSection'

const navLinks = [
  { label: 'Home',     href: '#home' },
  { label: 'About',    href: '#about' },
  { label: 'Skills',   href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact',  href: '#contact' },
]

const sectionIds = ['home', 'about', 'skills', 'projects', 'contact']

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const scrollY = useScrollY()
  const activeSection = useActiveSection(sectionIds)

  const scrolled = scrollY > 50

  const handleNavClick = useCallback((href: string) => {
    const id = href.replace('#', '')
    const el = document.getElementById(id)
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
    setIsMenuOpen(false)
  }, [])

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-dark-900/80 backdrop-blur-xl border-b border-white/10 shadow-xl shadow-black/20'
          : 'bg-transparent'
      }`}
      role="banner"
    >
      <nav
        className="section-container flex items-center justify-between h-16 lg:h-20"
        aria-label="Primary navigation"
      >
        {/* Logo */}
        <button
          onClick={() => handleNavClick('#home')}
          className="flex items-center gap-2 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-500 rounded-lg"
          aria-label="Go to home"
        >
          <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-primary-500 to-accent-500 flex items-center justify-center font-bold text-white text-sm group-hover:scale-110 transition-transform duration-200">
            R
          </div>
          <span className="font-semibold text-white hidden sm:block group-hover:text-primary-400 transition-colors duration-200">
            Radin
          </span>
        </button>

        {/* Desktop Nav */}
        <ul className="hidden md:flex items-center gap-1" role="list">
          {navLinks.map((link) => {
            const id = link.href.replace('#', '')
            const isActive = activeSection === id
            return (
              <li key={link.href}>
                <button
                  onClick={() => handleNavClick(link.href)}
                  className={`relative px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 focus-visible:ring-2 focus-visible:ring-primary-500 focus-visible:outline-none ${
                    isActive
                      ? 'text-white'
                      : 'text-slate-400 hover:text-white hover:bg-white/5'
                  }`}
                  aria-current={isActive ? 'page' : undefined}
                >
                  {isActive && (
                    <motion.span
                      layoutId="nav-indicator"
                      className="absolute inset-0 rounded-lg bg-white/10"
                      transition={{ type: 'spring', bounce: 0.25, duration: 0.4 }}
                    />
                  )}
                  <span className="relative z-10">{link.label}</span>
                  {isActive && (
                    <motion.span
                      layoutId="nav-dot"
                      className="absolute bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-primary-400"
                    />
                  )}
                </button>
              </li>
            )
          })}
        </ul>

        {/* CTA Button */}
        <div className="hidden md:flex items-center gap-3">
          <button
            onClick={() => handleNavClick('#contact')}
            className="btn-primary text-sm px-4 py-2"
          >
            Get In Touch
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMenuOpen((v) => !v)}
          className="md:hidden relative w-10 h-10 flex flex-col items-center justify-center gap-1.5 rounded-lg hover:bg-white/10 transition-colors duration-200 focus-visible:ring-2 focus-visible:ring-primary-500 focus-visible:outline-none"
          aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={isMenuOpen}
          aria-controls="mobile-menu"
        >
          <motion.span
            animate={isMenuOpen ? { rotate: 45, y: 7 } : { rotate: 0, y: 0 }}
            transition={{ duration: 0.2 }}
            className="block w-5 h-0.5 bg-white rounded-full"
          />
          <motion.span
            animate={isMenuOpen ? { opacity: 0, scaleX: 0 } : { opacity: 1, scaleX: 1 }}
            transition={{ duration: 0.2 }}
            className="block w-5 h-0.5 bg-white rounded-full"
          />
          <motion.span
            animate={isMenuOpen ? { rotate: -45, y: -7 } : { rotate: 0, y: 0 }}
            transition={{ duration: 0.2 }}
            className="block w-5 h-0.5 bg-white rounded-full"
          />
        </button>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            id="mobile-menu"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: 'easeInOut' }}
            className="md:hidden overflow-hidden bg-dark-800/95 backdrop-blur-xl border-b border-white/10"
          >
            <ul className="section-container py-4 flex flex-col gap-1" role="list">
              {navLinks.map((link, i) => {
                const id = link.href.replace('#', '')
                const isActive = activeSection === id
                return (
                  <motion.li
                    key={link.href}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.06, duration: 0.2 }}
                  >
                    <button
                      onClick={() => handleNavClick(link.href)}
                      className={`w-full text-left px-4 py-3 rounded-xl text-sm font-medium transition-colors duration-200 ${
                        isActive
                          ? 'bg-primary-500/20 text-primary-300 border border-primary-500/30'
                          : 'text-slate-300 hover:bg-white/10 hover:text-white'
                      }`}
                      aria-current={isActive ? 'page' : undefined}
                    >
                      {link.label}
                    </button>
                  </motion.li>
                )
              })}
              <motion.li
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: navLinks.length * 0.06, duration: 0.2 }}
                className="pt-2"
              >
                <button
                  onClick={() => handleNavClick('#contact')}
                  className="w-full btn-primary justify-center"
                >
                  Get In Touch
                </button>
              </motion.li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  )
}
