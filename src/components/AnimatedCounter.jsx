import { useEffect, useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'

export default function AnimatedCounter({ value, suffix = '', duration = 1.6 }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, amount: 0.6 })
  const [display, setDisplay] = useState(0)

  useEffect(() => {
    if (!inView) return
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (prefersReducedMotion) {
      setDisplay(value)
      return
    }
    let start = null
    const step = (timestamp) => {
      if (!start) start = timestamp
      const progress = Math.min((timestamp - start) / (duration * 1000), 1)
      setDisplay(Math.floor(progress * value))
      if (progress < 1) requestAnimationFrame(step)
      else setDisplay(value)
    }
    requestAnimationFrame(step)
  }, [inView, value, duration])

  return (
    <motion.span ref={ref} className="font-display text-4xl md:text-5xl text-gradient-bronze">
      {display}
      {suffix}
    </motion.span>
  )
}
