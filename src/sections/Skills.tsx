import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import SectionBackground from '../components/SectionBackground'
import { skillCategories, type Skill } from '../data/skills'
import { siteConfig } from '../data/config'

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
}

const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: 'easeOut' } },
}

function SkillBadge({ skill }: { skill: Skill }) {
  return (
    <motion.div
      whileHover={{ scale: 1.05, y: -2 }}
      transition={{ duration: 0.2 }}
      className="flex items-center gap-2.5 px-3 py-2 rounded-xl bg-white/5 border border-white/10 hover:border-white/20 hover:bg-white/10 transition-colors duration-200 cursor-default"
    >
      <span className="text-lg leading-none" aria-hidden="true">{skill.icon}</span>
      <div className="min-w-0">
        <p className="text-sm font-medium text-white truncate">{skill.name}</p>
        {skill.note && (
          <p className="text-xs text-slate-500 truncate">{skill.note}</p>
        )}
      </div>
    </motion.div>
  )
}

function PythonFeatured() {
  return (
    <motion.div
      variants={itemVariants}
      className="relative overflow-hidden rounded-2xl border border-primary-500/30 bg-gradient-to-br from-primary-900/40 to-dark-700/60 p-6 sm:p-8"
    >
      {/* Glow effect */}
      <div
        className="absolute -top-10 -right-10 w-40 h-40 rounded-full bg-primary-500/10 blur-2xl"
        aria-hidden="true"
      />
      <div className="relative flex flex-col sm:flex-row items-start sm:items-center gap-6">
        <div className="flex-shrink-0 w-16 h-16 rounded-2xl bg-gradient-to-br from-primary-500/30 to-accent-500/20 flex items-center justify-center border border-primary-500/30 text-4xl">
          🐍
        </div>
        <div className="flex-1">
          <div className="flex flex-wrap items-center gap-3 mb-2">
            <h3 className="text-2xl font-bold text-white">Python</h3>
            <span className="px-2.5 py-1 rounded-full text-xs font-semibold bg-primary-500/20 text-primary-300 border border-primary-500/30">
              Primary Language
            </span>
            <span className="px-2.5 py-1 rounded-full text-xs font-semibold bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
              6 Years
            </span>
          </div>
          <p className="text-slate-400 text-sm leading-relaxed max-w-lg">
            My most experienced language. Used for backend development, API design, interpreter
            implementation, scripting, and data processing. I've built everything from FastAPI web
            services to custom language interpreters with Python.
          </p>
        </div>
      </div>
    </motion.div>
  )
}

export default function Skills() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.08 })

  return (
    <SectionBackground
      /* Technical Skills section background placeholder — configure in src/data/config.ts */
      src={siteConfig.backgrounds.skills}
      alt="Skills section background"
      overlay="bg-dark-900/85"
      id="skills"
    >
      {/* Subtle grid */}
      <div className="absolute inset-0 bg-grid opacity-30" aria-hidden="true" />

      <section
        className="section-container section-padding"
        aria-labelledby="skills-heading"
      >
        {/* Header */}
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="flex flex-col gap-12"
        >
          <motion.div variants={itemVariants} className="text-center space-y-3">
            <p className="section-label">What I work with</p>
            <h2 id="skills-heading" className="section-title">
              Technical <span className="gradient-text">Skills</span>
            </h2>
            <p className="section-subtitle mx-auto text-center">
              Technologies and tools I use to build full-stack applications.
            </p>
          </motion.div>

          {/* Python featured card */}
          <PythonFeatured />

          {/* Skill categories */}
          <div className="grid gap-8 sm:grid-cols-2 xl:grid-cols-3">
            {skillCategories.map((category) => (
              <motion.div
                key={category.id}
                variants={itemVariants}
                className="glass-card p-5 flex flex-col gap-4"
              >
                {/* Category header */}
                <div className="flex items-center gap-3">
                  <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${category.color} bg-opacity-20 flex items-center justify-center text-xl`}>
                    {category.icon}
                  </div>
                  <h3 className="text-white font-semibold">{category.title}</h3>
                </div>

                {/* Skills */}
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <SkillBadge key={skill.name} skill={skill} />
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>
    </SectionBackground>
  )
}
