import { motion } from 'framer-motion'
import SectionHeading from './SectionHeading'
import { education } from '../data/portfolioData'

export default function Education() {
  return (
    <section id="education" className="relative py-28 bg-matte overflow-hidden">
      <div className="max-w-4xl mx-auto px-6">
        <SectionHeading eyebrow="Academic Path" title="Education" />

        <div className="relative pl-10 sm:pl-14">
          {/* Timeline spine */}
          <div className="absolute left-[7px] sm:left-[11px] top-2 bottom-2 w-[2px] bg-gradient-to-b from-bronze via-umber/60 to-transparent" />

          {education.map((item, i) => (
            <motion.div
              key={item.degree}
              initial={{ opacity: 0, x: -24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.7, delay: i * 0.15, ease: 'easeOut' }}
              className="relative mb-10 last:mb-0"
            >
              <span className="absolute -left-10 sm:-left-14 top-1.5 w-4 h-4 rounded-full bg-bronze shadow-bronze-glow ring-4 ring-matte" />

              <motion.div
                whileHover={{ y: -4, borderColor: 'rgba(59,130,246,0.5)' }}
                transition={{ duration: 0.3 }}
                className="glass rounded-md p-6 sm:p-8"
              >
                <div className="flex flex-wrap items-center gap-3 justify-between mb-2">
                  <h3 className="font-display text-xl sm:text-2xl text-ink">{item.degree}</h3>
                  <span
                    className={`font-mono text-xs px-3 py-1 rounded-sm border ${
                      item.status === 'in-progress'
                        ? 'text-bronze border-bronze/40 bg-bronze/5'
                        : 'text-mist border-mist/20'
                    }`}
                  >
                    {item.status === 'in-progress' ? 'In Progress' : 'Completed'}
                  </span>
                </div>
                <p className="text-mist text-[15px]">{item.field}</p>
                <p className="text-bronze/80 text-sm font-mono mt-3 tracking-wide">{item.period}</p>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
