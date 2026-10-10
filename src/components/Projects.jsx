import { useMemo, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FiGithub, FiExternalLink } from 'react-icons/fi'
import SectionHeading from './SectionHeading'
import AnimatedCounter from './AnimatedCounter'
import { projects, projectStats } from '../data/portfolioData'

const categories = ['All', 'Business Intelligence', 'Python Analytics']

const categoryPattern = {
  'Business Intelligence': 'from-umber/40 via-charcoal to-matte',
  'Python Analytics': 'from-bronze/30 via-charcoal to-matte',
}

function ProjectCard({ project, index }) {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -12 }}
      transition={{ duration: 0.5, delay: (index % 3) * 0.06, ease: 'easeOut' }}
      whileHover={{ y: -8 }}
      className="group glass rounded-md overflow-hidden flex flex-col"
    >
      <div
        className={`relative h-40 bg-gradient-to-br ${categoryPattern[project.category]} flex items-center justify-center overflow-hidden`}
      >
        <div className="absolute inset-0 bg-dot-grid opacity-30" />
        <span className="font-display text-3xl text-bronze/70 group-hover:scale-110 transition-transform duration-500">
          {project.title
            .split(' ')
            .slice(0, 2)
            .map((w) => w[0])
            .join('')}
        </span>
        <span className="absolute top-3 left-3 font-mono text-[10px] tracking-wider px-3 py-1 rounded-sm bg-matte/70 border border-bronze/30 text-bronze">
          {project.category}
        </span>
      </div>

      <div className="p-6 flex flex-col flex-1">
        <h3 className="font-display text-lg text-ink mb-2 leading-snug">{project.title}</h3>
        <p className="text-mist text-sm leading-relaxed mb-4 flex-1">{project.description}</p>

        <div className="flex flex-wrap gap-2 mb-5">
          {project.tech.map((t) => (
            <span
              key={t}
              className="text-[11px] font-mono px-2.5 py-1 rounded-sm bg-umber/10 text-mist border border-bronze/15"
            >
              {t}
            </span>
          ))}
        </div>

        <div className="flex gap-3 mt-auto">
          {project.github ? (
            <a
              href={project.github}
              target="_blank"
              rel="noreferrer"
              className="flex-1 flex items-center justify-center gap-2 text-sm py-2.5 rounded-sm border border-bronze/30 text-ink hover:bg-bronze/10 hover:border-bronze transition-colors duration-300"
            >
              <FiGithub size={15} /> GitHub
            </a>
          ) : (
            <span className="flex-1 flex items-center justify-center gap-2 text-sm py-2.5 rounded-sm border border-mist/15 text-mist/50">
              <FiGithub size={15} /> Coming soon
            </span>
          )}
          {project.demo && (
            <a
              href={project.demo}
              target="_blank"
              rel="noreferrer"
              className="flex-1 flex items-center justify-center gap-2 text-sm py-2.5 rounded-sm bg-gradient-to-r from-umber to-bronze text-matte hover:scale-[1.03] transition-transform duration-300"
            >
              <FiExternalLink size={15} /> Live Demo
            </a>
          )}
        </div>
      </div>
    </motion.div>
  )
}

export default function Projects() {
  const [active, setActive] = useState('All')

  const filtered = useMemo(
    () => (active === 'All' ? projects : projects.filter((p) => p.category === active)),
    [active]
  )

  return (
    <section id="projects" className="relative py-28 bg-charcoal">
      <div className="max-w-6xl mx-auto px-6">
        <SectionHeading eyebrow="Selected Work" title="Projects" />

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-5 mb-16">
          {projectStats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="glass rounded-md p-5 text-center"
            >
              <AnimatedCounter value={stat.value} suffix={stat.suffix} />
              <p className="text-mist text-xs mt-2 font-mono leading-snug">{stat.label}</p>
            </motion.div>
          ))}
        </div>

        <div className="flex flex-wrap justify-center gap-3 mb-10">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className={`px-5 py-2 rounded-sm text-sm font-mono tracking-wide transition-all duration-300 ${
                active === cat
                  ? 'bg-gradient-to-r from-umber to-bronze text-matte'
                  : 'glass text-mist hover:text-ink'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <motion.div layout className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence mode="popLayout">
            {filtered.map((project, i) => (
              <ProjectCard key={project.title} project={project} index={i} />
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  )
}
