import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FiArrowUp } from 'react-icons/fi'

export default function ScrollToTop() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 600)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <AnimatePresence>
      {visible && (
        <motion.button
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          whileHover={{ scale: 1.08, boxShadow: '0 0 30px rgba(59,130,246,0.4)' }}
          whileTap={{ scale: 0.94 }}
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          aria-label="Scroll back to top"
          className="fixed bottom-7 right-6 z-50 w-12 h-12 rounded-sm glass-strong flex items-center justify-center text-bronze shadow-bronze-glow"
        >
          <FiArrowUp size={18} />
        </motion.button>
      )}
    </AnimatePresence>
  )
}
