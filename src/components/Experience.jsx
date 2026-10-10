import { motion } from 'framer-motion'
import { FiCheckCircle } from 'react-icons/fi'
import SectionHeading from './SectionHeading'
import { experience } from '../data/portfolioData'

export default function Experience() {
  return (
    <section id="experience" className="relative py-28 bg-charcoal">
      <div className="max-w-4xl mx-auto px-6">
        <SectionHeading eyebrow="Where I've Worked" title="Experience" />

        <div className="space-y-8">
          {experience.map((job, i) => (
            <motion.div
              key={job.role}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.7, delay: i * 0.1, ease: 'easeOut' }}
              whileHover={{ y: -6 }}
              className="glass rounded-md p-8 sm:p-10 relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-40 h-40 bg-bronze/10 rounded-full blur-3xl" />
              <div className="relative flex flex-wrap items-center justify-between gap-3 mb-6">
                <div>
                  <h3 className="font-display text-2xl sm:text-3xl text-ink">{job.role}</h3>
                  <p className="text-bronze font-mono text-sm mt-1 tracking-wide">{job.company}</p>
                </div>
                <span className="text-mist text-xs font-mono tracking-wide">{job.period}</span>
              </div>

              <ul className="relative grid sm:grid-cols-2 gap-x-8 gap-y-3">
                {job.points.map((point) => (
                  <li key={point} className="flex items-start gap-3 text-mist text-[15px]">
                    <FiCheckCircle className="text-bronze mt-1 shrink-0" size={15} />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
