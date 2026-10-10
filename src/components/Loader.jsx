import { motion, AnimatePresence } from 'framer-motion'

export default function Loader({ show, progress }) {
  return (
    <AnimatePresence>
      {show && (
        <motion.div
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-matte"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8, ease: 'easeInOut' }}
        >
          <div className="relative flex flex-col items-center">
            {/* Signature: an animated plotted line, like a chart being drawn, tracing under the initials */}
            <motion.svg
              width="200"
              height="60"
              viewBox="0 0 200 60"
              className="mb-2"
            >
              <motion.polyline
                points="0,45 30,38 55,48 80,20 105,32 130,12 155,26 180,6 200,14"
                fill="none"
                stroke="#3B82F6"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: 1, opacity: 0.9 }}
                transition={{ duration: 1.8, ease: 'easeInOut' }}
              />
            </motion.svg>

            <motion.h1
              className="font-display text-6xl md:text-7xl tracking-wide text-gradient-bronze"
              initial={{ opacity: 0, letterSpacing: '0.4em' }}
              animate={{ opacity: 1, letterSpacing: '0.08em' }}
              transition={{ duration: 1.1, ease: 'easeOut' }}
            >
              RK
            </motion.h1>

            <motion.p
              className="section-eyebrow mt-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.8 }}
            >
              Rajkumar · Data Analyst
            </motion.p>

            <div className="mt-8 h-[2px] w-40 bg-charcoal overflow-hidden rounded-none">
              <motion.div
                className="h-full bg-gradient-to-r from-umber to-bronze"
                style={{ width: `${progress}%` }}
                transition={{ ease: 'linear' }}
              />
            </div>
            <motion.p
              className="mt-3 font-mono text-[11px] text-mist/60"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              {Math.min(100, Math.round(progress))}%
            </motion.p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
