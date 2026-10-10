import { motion } from 'framer-motion'
import {
  FiCode,
  FiBarChart2,
  FiLayers,
  FiDatabase,
  FiTool,
  FiUsers,
} from 'react-icons/fi'
import { GiBrain } from 'react-icons/gi'
import SectionHeading from './SectionHeading'
import { skillGroups } from '../data/portfolioData'

const iconMap = {
  code: FiCode,
  brain: GiBrain,
  chart: FiBarChart2,
  layers: FiLayers,
  database: FiDatabase,
  tool: FiTool,
  users: FiUsers,
}

function SkillBar({ name, level, delay }) {
  return (
    <div className="mb-4 last:mb-0">
      <div className="flex justify-between mb-1.5">
        <span className="text-mist text-sm">{name}</span>
        <span className="text-bronze/80 font-mono text-xs">{level}%</span>
      </div>
      <div className="h-1.5 rounded-none bg-matte/60 overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${level}%` }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 1, delay, ease: 'easeOut' }}
          className="h-full rounded-none bg-gradient-to-r from-umber to-bronze"
        />
      </div>
    </div>
  )
}

export default function Skills() {
  return (
    <section id="skills" className="relative py-28 bg-matte">
      <div className="max-w-6xl mx-auto px-6">
        <SectionHeading eyebrow="What I Bring" title="Skills" />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillGroups.map((group, i) => {
            const Icon = iconMap[group.icon] || FiCode
            return (
              <motion.div
                key={group.title}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, delay: (i % 3) * 0.1, ease: 'easeOut' }}
                whileHover={{ y: -6, boxShadow: '0 0 30px rgba(59,130,246,0.12)' }}
                className="glass rounded-md p-6"
              >
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-10 h-10 rounded bg-bronze/10 flex items-center justify-center text-bronze">
                    <Icon size={18} />
                  </div>
                  <h3 className="font-display text-lg text-ink">{group.title}</h3>
                </div>
                {group.skills.map((skill, si) => (
                  <SkillBar key={skill.name} {...skill} delay={si * 0.08} />
                ))}
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
