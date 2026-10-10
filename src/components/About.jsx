import { motion } from 'framer-motion'
import SectionHeading from './SectionHeading'
import AnimatedCounter from './AnimatedCounter'
import { profile } from '../data/portfolioData'
import profileImg from '../assets/profile.jpg'

const stats = [
  { value: 3, suffix: '+', label: 'BI & Analytics Projects' },
  { value: null, tags: ['Power BI', 'SQL', 'Python'], label: 'Core Toolkit' },
  { value: null, tags: ['Dashboards', 'ETL', 'Data Modeling'], label: 'Focus Areas' },
]

export default function About() {
  return (
    <section id="about" className="relative py-28 bg-charcoal">
      <div className="max-w-6xl mx-auto px-6">
        <SectionHeading eyebrow="Get to know me" title="About Me" />

        <div className="grid md:grid-cols-[0.85fr_1.15fr] gap-14 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="relative mx-auto"
          >
            <div className="relative w-64 h-80 sm:w-72 sm:h-96 rounded-md overflow-hidden border-2 border-bronze shadow-bronze-glow corner-brackets">
              <img
                src={profileImg}
                alt="Portrait of Rajkumar U"
                className="w-full h-full object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-matte/50 via-transparent to-transparent" />
            </div>
            <div className="absolute -bottom-5 -right-5 w-20 h-20 rounded-sm glass-strong flex items-center justify-center font-display text-xl text-bronze">
              RU
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.8, ease: 'easeOut', delay: 0.15 }}
          >
            <h3 className="font-display text-2xl sm:text-3xl text-ink mb-5">
              Turning data into decisions
            </h3>
            {profile.aboutParagraphs.map((para, i) => (
              <p key={i} className="text-mist leading-relaxed mb-4 text-[15px] sm:text-base">
                {para}
              </p>
            ))}

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 mt-10">
              {stats.map((stat, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.5 }}
                  transition={{ duration: 0.6, delay: i * 0.1 }}
                  className="glass rounded-md p-5 text-center sm:text-left"
                >
                  {stat.value !== null ? (
                    <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                  ) : (
                    <div className="flex flex-wrap gap-1.5 justify-center sm:justify-start">
                      {stat.tags.map((tag) => (
                        <span
                          key={tag}
                          className="text-[11px] font-mono px-2 py-0.5 rounded-sm bg-bronze/10 text-bronze border border-bronze/20"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  )}
                  <p className="text-mist text-xs mt-2 font-mono tracking-wide">{stat.label}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
