import { motion } from 'framer-motion'
import { FiCode, FiBarChart2 } from 'react-icons/fi'
import { GiBrain } from 'react-icons/gi'
import { HiOutlineSparkles } from 'react-icons/hi'
import SectionHeading from './SectionHeading'
import { whyHireMe } from '../data/portfolioData'

const iconMap = {
  code: FiCode,
  brain: GiBrain,
  chart: FiBarChart2,
  spark: HiOutlineSparkles,
}

export default function WhyHireMe() {
  return (
    <section className="relative py-28 bg-matte">
      <div className="max-w-6xl mx-auto px-6">
        <SectionHeading eyebrow="The Case For Me" title="Why Hire Me" />

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {whyHireMe.map((item, i) => {
            const Icon = iconMap[item.icon] || FiCode
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, delay: i * 0.1, ease: 'easeOut' }}
                whileHover={{ y: -8, borderColor: 'rgba(59,130,246,0.5)' }}
                className="glass rounded-md p-7"
              >
                <div className="w-11 h-11 rounded bg-bronze/10 flex items-center justify-center text-bronze mb-5">
                  <Icon size={19} />
                </div>
                <h3 className="font-display text-lg text-ink mb-3 leading-snug">{item.title}</h3>
                <p className="text-mist text-sm leading-relaxed">{item.description}</p>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
