import { motion } from 'framer-motion'

export default function SectionHeading({ eyebrow, title, align = 'center' }) {
  const alignment = align === 'left' ? 'items-start text-left' : 'items-center text-center'
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{ duration: 0.7, ease: 'easeOut' }}
      className={`flex flex-col ${alignment} mb-14`}
    >
      <span className="section-eyebrow mb-3 flex items-center gap-2">
        <span className="inline-block w-2 h-2 bg-bronze" aria-hidden="true" />
        {eyebrow}
      </span>
      <h2 className="font-display text-4xl sm:text-5xl text-ink tracking-tight">{title}</h2>
      <div className="section-label-line w-16 mt-5" />
    </motion.div>
  )
}
