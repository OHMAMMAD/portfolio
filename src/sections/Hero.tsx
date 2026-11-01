import { motion } from 'framer-motion'
import { Github, Mail, Download, ArrowDown, ChevronRight } from 'lucide-react'
import SectionBackground from '../components/SectionBackground'
import { siteConfig } from '../data/config'

/* Animated code illustration */
const codeLines = [
  { text: 'class Developer:', color: 'text-primary-400', indent: 0 },
  { text: 'name = "Radin Hemmasi"', color: 'text-slate-300', indent: 1 },
  { text: 'stack = ["Python", "React", "FastAPI"]', color: 'text-slate-300', indent: 1 },
  { text: 'experience = { "Python": 6 }', color: 'text-slate-300', indent: 1 },
  { text: '', color: '', indent: 0 },
  { text: 'def build(self, idea: str):', color: 'text-accent-400', indent: 1 },
  { text: 'return Solution(idea)', color: 'text-emerald-400', indent: 2 },
]

function CodeIllustration() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.5 }}
      className="glass-card p-5 sm:p-6 font-mono text-sm sm:text-base w-full max-w-md mx-auto lg:mx-0"
    >
      {/* Window chrome */}
      <div className="flex items-center gap-2 mb-4 pb-4 border-b border-white/10">
        <div className="flex gap-1.5">
          <span className="w-3 h-3 rounded-full bg-red-500/80" />
          <span className="w-3 h-3 rounded-full bg-yellow-500/80" />
          <span className="w-3 h-3 rounded-full bg-green-500/80" />
        </div>
        <span className="text-xs text-slate-500 ml-2">developer.py</span>
      </div>

      {/* Code lines */}
      <div className="space-y-1">
        {codeLines.map((line, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3, delay: 0.6 + i * 0.1 }}
            className={`${line.color} leading-relaxed`}
            style={{ paddingLeft: `${line.indent * 1.5}rem` }}
          >
            {line.text || '\u00A0'}
          </motion.div>
        ))}
        {/* Blinking cursor */}
        <motion.div
          animate={{ opacity: [1, 0, 1] }}
          transition={{ duration: 1.2, repeat: Infinity, ease: 'steps(1)' }}
          className="inline-block w-2 h-4 bg-primary-400 ml-12 rounded-sm"
          aria-hidden="true"
        />
      </div>
    </motion.div>
  )
}

/* Floating dots decoration */
function FloatingDots() {
  const dots = [
    { size: 'w-2 h-2', x: '10%', y: '20%', delay: 0 },
    { size: 'w-1.5 h-1.5', x: '85%', y: '15%', delay: 1 },
    { size: 'w-3 h-3', x: '90%', y: '70%', delay: 0.5 },
    { size: 'w-1.5 h-1.5', x: '5%', y: '75%', delay: 1.5 },
    { size: 'w-2 h-2', x: '75%', y: '85%', delay: 0.8 },
  ]

  return (
    <>
      {dots.map((dot, i) => (
        <motion.div
          key={i}
          className={`absolute ${dot.size} rounded-full bg-primary-500/30`}
          style={{ left: dot.x, top: dot.y }}
          animate={{ y: [0, -15, 0], opacity: [0.3, 0.7, 0.3] }}
          transition={{ duration: 4 + i * 0.5, delay: dot.delay, repeat: Infinity, ease: 'easeInOut' }}
          aria-hidden="true"
        />
      ))}
    </>
  )
}

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1, delayChildren: 0.2 } },
}

const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
}

export default function Hero() {
  const scrollToProjects = () => {
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })
  }
  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <SectionBackground
      /* Home section background placeholder — configure in src/data/config.ts */
      src={siteConfig.backgrounds.hero}
      alt="Home section background"
      overlay="bg-gradient-to-b from-dark-900/90 via-dark-900/70 to-dark-900"
      className="min-h-screen flex flex-col"
      id="home"
    >
      {/* Grid pattern */}
      <div className="absolute inset-0 bg-grid opacity-50" aria-hidden="true" />

      {/* Radial glow */}
      <div
        className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-primary-600/10 blur-3xl pointer-events-none"
        aria-hidden="true"
      />
      <div
        className="absolute top-1/2 right-1/4 w-64 h-64 rounded-full bg-accent-500/10 blur-3xl pointer-events-none"
        aria-hidden="true"
      />

      <FloatingDots />

      <section
        className="section-container flex-1 flex items-center pt-24 pb-16"
        aria-label="Introduction"
      >
        <div className="w-full grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          {/* Text content */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="flex flex-col gap-6"
          >
            {/* Badge */}
            <motion.div variants={itemVariants}>
              <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-semibold bg-primary-500/15 text-primary-300 border border-primary-500/25">
                <span className="w-2 h-2 rounded-full bg-primary-400 animate-pulse" aria-hidden="true" />
                Available for opportunities
              </span>
            </motion.div>

            {/* Heading */}
            <motion.div variants={itemVariants} className="space-y-2">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight tracking-tight">
                Hi, I'm{' '}
                <span className="gradient-text">Radin Hemmasi</span>
              </h1>
              <p className="text-xl sm:text-2xl text-slate-300 font-medium">
                Full-Stack Developer
              </p>
            </motion.div>

            {/* Intro */}
            <motion.p
              variants={itemVariants}
              className="text-slate-400 text-base sm:text-lg leading-relaxed max-w-xl"
            >
              I'm a full-stack developer with six years of experience in Python. I build web and
              mobile applications using modern frontend and backend technologies — from interactive
              React interfaces to powerful Python and Node.js backends.
            </motion.p>

            {/* Highlights */}
            <motion.div variants={itemVariants} className="flex flex-wrap gap-2">
              {['Python · 6 Years', 'React & React Native', 'FastAPI · Node.js', 'SQL Databases'].map(
                (item) => (
                  <span key={item} className="tag text-xs sm:text-sm">
                    {item}
                  </span>
                )
              )}
            </motion.div>

            {/* CTAs */}
            <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-3 pt-2">
              <button onClick={scrollToProjects} className="btn-primary">
                Explore My Projects
                <ChevronRight size={16} aria-hidden="true" />
              </button>
              <button onClick={scrollToContact} className="btn-secondary">
                Get In Touch
                <Mail size={16} aria-hidden="true" />
              </button>
            </motion.div>

            {/* Resume + GitHub */}
            <motion.div variants={itemVariants} className="flex items-center gap-4 pt-1">
              {siteConfig.resumeUrl ? (
                <a
                  href={siteConfig.resumeUrl}
                  download
                  className="btn-ghost text-sm"
                  aria-label="Download resume"
                >
                  <Download size={14} aria-hidden="true" />
                  Download Resume
                </a>
              ) : (
                <span
                  className="inline-flex items-center gap-2 text-sm text-slate-500 cursor-not-allowed"
                  title="Resume coming soon — add your PDF path in src/data/config.ts"
                  aria-label="Resume placeholder (not yet available)"
                >
                  <Download size={14} aria-hidden="true" />
                  Resume (Coming Soon)
                </span>
              )}

              <a
                href={siteConfig.github}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-ghost text-sm"
                aria-label="View GitHub profile (opens in new tab)"
              >
                <Github size={14} aria-hidden="true" />
                GitHub
              </a>
            </motion.div>
          </motion.div>

          {/* Code illustration */}
          <div className="flex justify-center lg:justify-end">
            <CodeIllustration />
          </div>
        </div>
      </section>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.6 }}
        className="flex justify-center pb-8"
        aria-hidden="true"
      >
        <motion.button
          onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          className="flex flex-col items-center gap-1 text-slate-500 hover:text-slate-300 transition-colors duration-200"
          tabIndex={-1}
          aria-hidden="true"
        >
          <span className="text-xs tracking-widest uppercase">Scroll</span>
          <ArrowDown size={16} />
        </motion.button>
      </motion.div>
    </SectionBackground>
  )
}
