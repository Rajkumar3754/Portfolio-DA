import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FiAward, FiCloud, FiPenTool, FiExternalLink, FiX } from 'react-icons/fi'
import SectionHeading from './SectionHeading'

const iconMap = {
  powerbi: FiAward,
  aws: FiCloud,
  google: FiPenTool,
}

const certifications = [
   {
    title: 'Foundations: Data, Data, Everywhere',
    issuer: 'Google via Coursera · Jan 2025',
    icon: 'google',
    image: 'src/assets/google-data-foundations.png',
    link: 'https://coursera.org/verify/IYHM0JLR7IRL',
  },
  {
    title: 'SQL (Basic)',
    issuer: 'HackerRank · May 2026',
    icon: 'powerbi',
    image: 'src/assets/hackerrank-sql-basic.png',
    note: 'ID: 9E837FE1A4CB',
  },
]

export default function Certifications() {
  const [preview, setPreview] = useState(null)

  return (
    <section id="certifications" className="relative py-28 bg-charcoal">
      <div className="max-w-5xl mx-auto px-6">
        <SectionHeading eyebrow="Verified Learning" title="Certifications" />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {certifications.map((cert, i) => {
            const Icon = iconMap[cert.icon] || FiAward
            return (
              <motion.div
                key={cert.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.12, ease: 'easeOut' }}
                whileHover={{ y: -8, scale: 1.02 }}
                className="glass rounded-md p-7 text-center flex flex-col items-center"
              >
                {cert.image ? (
                  <img
                    src={cert.image}
                    alt={cert.title}
                    onClick={() => setPreview(cert.image)}
                    className="w-full rounded-md mb-5 border border-bronze/20 cursor-zoom-in"
                  />
                ) : (
                  <div className="w-14 h-14 rounded-md bg-gradient-to-br from-umber/30 to-bronze/20 flex items-center justify-center text-bronze mb-5 border border-bronze/20">
                    <Icon size={24} />
                  </div>
                )}
                <h3 className="font-display text-lg text-ink leading-snug mb-2">{cert.title}</h3>
                <p className="text-mist text-sm font-mono">{cert.issuer}</p>
                {cert.note && <p className="text-mist/70 text-xs font-mono mt-1">{cert.note}</p>}
                {cert.link && (
                  <a
                    href={cert.link}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-4 inline-flex items-center gap-1 text-bronze text-sm hover:underline"
                  >
                    Verify <FiExternalLink size={14} />
                  </a>
                )}
              </motion.div>
            )
          })}
        </div>
      </div>

      <AnimatePresence>
        {preview && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setPreview(null)}
            className="fixed inset-0 z-[100] bg-black/80 flex items-center justify-center p-6 cursor-zoom-out"
          >
            <button
              className="absolute top-6 right-6 text-white"
              onClick={() => setPreview(null)}
              aria-label="Close"
            >
              <FiX size={28} />
            </button>
            <img src={preview} alt="Certificate" className="max-h-full max-w-full rounded-md" />
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}