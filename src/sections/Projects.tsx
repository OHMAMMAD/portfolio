import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Github, ExternalLink, Star, ChevronDown, ChevronUp } from 'lucide-react'
import SectionBackground from '../components/SectionBackground'
import { projects, type Project } from '../data/projects'
import { siteConfig } from '../data/config'

type FilterCategory = 'all' | Project['category']

const filterLabels: { value: FilterCategory; label: string }[] = [
  { value: 'all', label: 'All Projects' },
  { value: 'python', label: 'Python' },
  { value: 'react', label: 'React' },
  { value: 'javascript', label: 'JavaScript' },
]

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
}

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: 'easeOut' } },
}

function ProjectCard({ project }: { project: Project }) {
  const [expanded, setExpanded] = useState(false)

  const categoryColors: Record<Project['category'], string> = {
    python: 'bg-blue-500/15 text-blue-300 border-blue-500/25',
    react: 'bg-cyan-500/15 text-cyan-300 border-cyan-500/25',
    javascript: 'bg-yellow-500/15 text-yellow-300 border-yellow-500/25',
    fullstack: 'bg-emerald-500/15 text-emerald-300 border-emerald-500/25',
  }

  return (
    <motion.article
      variants={cardVariants}
      layout
      className="glass-card-hover flex flex-col overflow-hidden group"
      aria-label={`Project: ${project.name}`}
    >
      {/* Project image placeholder */}
      <div className="relative h-44 bg-gradient-to-br from-dark-600 to-dark-700 overflow-hidden">
        {project.image ? (
          <img
            src={project.image}
            alt={`${project.name} screenshot`}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            loading="lazy"
          />
        ) : (
          /* Placeholder — add your screenshot path as project.image in src/data/projects.ts */
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center space-y-2 opacity-30">
              <span className="text-5xl block">
                {project.category === 'python' ? '🐍' :
                 project.category === 'react' ? '⚛️' : '🌐'}
              </span>
              <p className="text-xs text-slate-400 font-mono">{project.name}</p>
            </div>
            {/* Animated lines decoration */}
            <svg className="absolute inset-0 w-full h-full opacity-10" aria-hidden="true">
              {[0,1,2,3].map(i => (
                <line key={i} x1={`${i * 33}%`} y1="0" x2={`${100 - i * 20}%`} y2="100%" stroke="currentColor" strokeWidth="0.5" className="text-primary-400"/>
              ))}
            </svg>
          </div>
        )}
        {/* Category badge */}
        <div className="absolute top-3 left-3">
          <span className={`inline-flex items-center px-2 py-0.5 rounded-md text-xs font-medium border capitalize ${categoryColors[project.category]}`}>
            {project.category}
          </span>
        </div>
        {project.featured && (
          <div className="absolute top-3 right-3">
            <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-md text-xs font-medium bg-amber-500/20 text-amber-300 border border-amber-500/25">
              <Star size={10} aria-hidden="true" />
              Featured
            </span>
          </div>
        )}
      </div>

      {/* Card body */}
      <div className="flex flex-col flex-1 p-5 gap-4">
        <div>
          <h3 className="text-lg font-bold text-white mb-2">{project.name}</h3>
          <p className="text-slate-400 text-sm leading-relaxed">{project.description}</p>
        </div>

        {/* Expandable details */}
        <AnimatePresence initial={false}>
          {expanded && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.25 }}
              className="overflow-hidden"
            >
              <div className="pt-2 space-y-3">
                <p className="text-slate-400 text-sm leading-relaxed">{project.longDescription}</p>
                <div>
                  <p className="text-xs font-semibold text-slate-500 uppercase tracking-wide mb-2">Highlights</p>
                  <ul className="space-y-1">
                    {project.highlights.map((h) => (
                      <li key={h} className="flex items-start gap-2 text-sm text-slate-400">
                        <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-primary-500 flex-shrink-0" aria-hidden="true" />
                        {h}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Toggle details */}
        <button
          onClick={() => setExpanded((v) => !v)}
          className="flex items-center gap-1 text-xs text-slate-500 hover:text-primary-400 transition-colors duration-200 self-start"
          aria-expanded={expanded}
          aria-label={expanded ? 'Show less' : 'Show more details'}
        >
          {expanded ? (
            <><ChevronUp size={14} aria-hidden="true" /> Show less</>
          ) : (
            <><ChevronDown size={14} aria-hidden="true" /> More details</>
          )}
        </button>

        {/* Technologies */}
        <div className="flex flex-wrap gap-1.5 mt-auto">
          {project.technologies.map((tech) => (
            <span key={tech} className="tag text-xs">{tech}</span>
          ))}
        </div>

        {/* Action buttons */}
        <div className="flex items-center gap-2 pt-2 border-t border-white/10">
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-ghost text-xs flex-1 justify-center"
            aria-label={`View ${project.name} on GitHub (opens in new tab)`}
          >
            <Github size={14} aria-hidden="true" />
            View on GitHub
          </a>
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary text-xs flex-1 justify-center"
              aria-label={`View live demo of ${project.name} (opens in new tab)`}
            >
              <ExternalLink size={14} aria-hidden="true" />
              Live Demo
            </a>
          )}
        </div>
      </div>
    </motion.article>
  )
}

export default function Projects() {
  const [filter, setFilter] = useState<FilterCategory>('all')
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.05 })

  const filtered = filter === 'all' ? projects : projects.filter((p) => p.category === filter)

  return (
    <SectionBackground
      /* Projects section background placeholder — configure in src/data/config.ts */
      src={siteConfig.backgrounds.projects}
      alt="Projects section background"
      overlay="bg-dark-800/90"
      id="projects"
    >
      {/* Radial glow */}
      <div
        className="absolute bottom-0 right-0 w-96 h-96 rounded-full bg-accent-500/5 blur-3xl pointer-events-none"
        aria-hidden="true"
      />

      <section
        className="section-container section-padding"
        aria-labelledby="projects-heading"
      >
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="flex flex-col gap-10"
        >
          {/* Header */}
          <motion.div variants={cardVariants} className="text-center space-y-3">
            <p className="section-label">What I've built</p>
            <h2 id="projects-heading" className="section-title">
              My <span className="gradient-text">Projects</span>
            </h2>
            <p className="section-subtitle mx-auto text-center">
              A selection of projects from my GitHub, showcasing my approach to software development.
            </p>
          </motion.div>

          {/* Filter buttons */}
          <motion.div
            variants={cardVariants}
            className="flex flex-wrap justify-center gap-2"
            role="group"
            aria-label="Filter projects by category"
          >
            {filterLabels.map(({ value, label }) => (
              <button
                key={value}
                onClick={() => setFilter(value)}
                className={`px-4 py-2 rounded-xl text-sm font-medium transition-all duration-200 ${
                  filter === value
                    ? 'bg-primary-600 text-white shadow-lg shadow-primary-600/25'
                    : 'bg-white/5 text-slate-400 hover:bg-white/10 hover:text-white border border-white/10'
                }`}
                aria-pressed={filter === value}
              >
                {label}
              </button>
            ))}
          </motion.div>

          {/* Project grid */}
          <AnimatePresence mode="wait">
            <motion.div
              key={filter}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.25 }}
              className="grid gap-6 sm:grid-cols-2 xl:grid-cols-2"
            >
              {filtered.length > 0 ? (
                filtered.map((project) => (
                  <ProjectCard key={project.id} project={project} />
                ))
              ) : (
                <div className="col-span-full text-center py-16 text-slate-500">
                  No projects in this category yet.
                </div>
              )}
            </motion.div>
          </AnimatePresence>

          {/* GitHub CTA */}
          <motion.div variants={cardVariants} className="text-center">
            <a
              href={siteConfig.github}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary inline-flex"
              aria-label="View all repositories on GitHub (opens in new tab)"
            >
              <Github size={16} aria-hidden="true" />
              View All on GitHub
            </a>
            <p className="mt-3 text-xs text-slate-600">
              Project data sourced from verified public GitHub repositories
            </p>
          </motion.div>
        </motion.div>
      </section>
    </SectionBackground>
  )
}
