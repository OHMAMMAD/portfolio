import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Github, Code2, Layers, Cpu } from 'lucide-react'
import SectionBackground from '../components/SectionBackground'
import { siteConfig } from '../data/config'

const interests = [
  {
    icon: Code2,
    title: 'Problem Solving',
    desc: 'I enjoy breaking down complex technical challenges into clean, workable solutions.',
  },
  {
    icon: Layers,
    title: 'Full-Stack Thinking',
    desc: 'I work across the entire stack, from designing APIs to building the interfaces that consume them.',
  },
  {
    icon: Cpu,
    title: 'Continuous Learning',
    desc: 'I keep up with modern tools and practices, including AI-powered development workflows.',
  },
]

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: 'easeOut' } },
}

export default function About() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 })

  return (
    <SectionBackground
      /* About Me section background placeholder — configure in src/data/config.ts */
      src={siteConfig.backgrounds.about}
      alt="About section background"
      overlay="bg-dark-800/90"
      id="about"
    >
      {/* Subtle gradient */}
      <div
        className="absolute inset-0 bg-gradient-to-b from-dark-900 via-transparent to-dark-900 pointer-events-none"
        aria-hidden="true"
      />

      <section className="section-container section-padding" aria-labelledby="about-heading">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start"
        >
          {/* Left — Portrait + links */}
          <div className="flex flex-col items-center lg:items-start gap-8">
            {/* Portrait placeholder */}
            <motion.div variants={itemVariants} className="relative">
              <div className="w-56 h-56 sm:w-64 sm:h-64 rounded-2xl overflow-hidden ring-2 ring-white/10 shadow-2xl shadow-black/50">
                {/*
                  Portrait placeholder — add your photo by setting the src attribute below.
                  Recommended: a square image, at least 512×512px.
                */}
                <img
                  src=""
                  alt="Radin Hemmasi"
                  className="w-full h-full object-cover"
                  aria-label="Portrait placeholder — add your photo path here"
                  // Suppress broken-image icon when src is empty
                  onError={(e) => { (e.target as HTMLImageElement).style.display = 'none' }}
                />
                {/* Fallback gradient avatar */}
                <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-primary-600/40 to-accent-600/40 backdrop-blur-sm">
                  <span className="text-7xl font-black text-white/80 select-none">R</span>
                </div>
              </div>
              {/* Accent ring */}
              <div
                className="absolute -inset-1 rounded-2xl bg-gradient-to-br from-primary-500/20 to-accent-500/20 -z-10 blur-sm"
                aria-hidden="true"
              />
            </motion.div>

            {/* GitHub CTA */}
            <motion.a
              variants={itemVariants}
              href={siteConfig.github}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary text-sm"
              aria-label="View GitHub profile (opens in new tab)"
            >
              <Github size={16} aria-hidden="true" />
              View GitHub Profile
            </motion.a>

            {/* Quick facts */}
            <motion.div variants={itemVariants} className="glass-card p-5 w-full max-w-xs space-y-3">
              <h3 className="text-sm font-semibold text-slate-400 uppercase tracking-wide">Quick Facts</h3>
              {[
                ['Experience', '6 years — Python'],
                ['Stack', 'Full-Stack'],
                ['Status', 'Open to opportunities'],
              ].map(([label, value]) => (
                <div key={label} className="flex items-center justify-between">
                  <span className="text-slate-500 text-sm">{label}</span>
                  <span className="text-white text-sm font-medium">{value}</span>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right — Bio + interests */}
          <div className="flex flex-col gap-8">
            <motion.div variants={itemVariants} className="space-y-2">
              <p className="section-label">About Me</p>
              <h2 id="about-heading" className="section-title">
                Building software that <span className="gradient-text">matters</span>
              </h2>
            </motion.div>

            <motion.div variants={itemVariants} className="space-y-4 text-slate-400 leading-relaxed">
              <p>
                I'm a full-stack developer and student with six years of experience working with Python and a strong
                interest in building practical, scalable software.
              </p>
              <p>
                My development journey started with Python, which I've developed advanced proficiency in over those
                six years. From there I expanded into full-stack development, working across both frontend and backend
                to build complete applications.
              </p>
              <p>
                On the frontend, I work with HTML, CSS, JavaScript, and React to create responsive, interactive web
                experiences. For mobile, I use React Native. On the backend, I build APIs and services with Python,
                FastAPI, and Node.js, working with SQL databases for data persistence.
              </p>
              <p>
                One of my ongoing projects is <strong className="text-white font-medium">Telo</strong>, a messaging
                application that has given me practical experience with collaborative development, backend
                architecture, authentication, and deployment.
              </p>
            </motion.div>

            {/* Interests grid */}
            <motion.div variants={containerVariants} className="grid gap-4">
              {interests.map(({ icon: Icon, title, desc }) => (
                <motion.div
                  key={title}
                  variants={itemVariants}
                  className="glass-card-hover p-4 flex gap-4 items-start"
                >
                  <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-primary-500/20 flex items-center justify-center">
                    <Icon size={18} className="text-primary-400" aria-hidden="true" />
                  </div>
                  <div>
                    <h3 className="text-white font-semibold text-sm mb-1">{title}</h3>
                    <p className="text-slate-400 text-sm leading-relaxed">{desc}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.div>
      </section>
    </SectionBackground>
  )
}
