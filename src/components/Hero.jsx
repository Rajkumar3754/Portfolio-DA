import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { FiGithub, FiLinkedin, FiMail, FiArrowDown, FiDownload } from 'react-icons/fi'
import ParticlesBackground from './ParticlesBackground'
import { profile } from '../data/portfolioData'

function useTypingRoles(roles) {
  const [text, setText] = useState('')
  const [roleIndex, setRoleIndex] = useState(0)
  const [deleting, setDeleting] = useState(false)

  useEffect(() => {
    const current = roles[roleIndex % roles.length]
    const speed = deleting ? 40 : 85
    const pause = 1400

    if (!deleting && text === current) {
      const t = setTimeout(() => setDeleting(true), pause)
      return () => clearTimeout(t)
    }
    if (deleting && text === '') {
      setDeleting(false)
      setRoleIndex((i) => i + 1)
      return
    }

    const t = setTimeout(() => {
      setText((prev) =>
        deleting ? current.slice(0, prev.length - 1) : current.slice(0, prev.length + 1)
      )
    }, speed)
    return () => clearTimeout(t)
  }, [text, deleting, roleIndex, roles])

  return text
}

export default function Hero() {
  const typed = useTypingRoles(profile.roles)

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-matte"
    >
      {/* Layered background */}
      <div className="absolute inset-0 bg-gradient-to-b from-charcoal via-matte to-matte" />
      <ParticlesBackground />

      {/* Floating geometric elements */}
      <motion.div
        aria-hidden="true"
        className="absolute top-24 left-[8%] w-24 h-24 border border-bronze/30 rounded-sm animate-float-slow"
      />
      <motion.div
        aria-hidden="true"
        className="absolute bottom-32 right-[10%] w-16 h-16 border border-umber/40 rotate-45 animate-float"
      />
      <motion.div
        aria-hidden="true"
        className="absolute top-1/3 right-[18%] w-3 h-3 bg-bronze/60 rounded-full animate-float"
      />
      <div className="absolute inset-0 bg-dot-grid opacity-20 pointer-events-none" />

      <div className="relative z-10 max-w-5xl mx-auto px-6 pt-24 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: 'easeOut' }}
          className="font-display text-4xl sm:text-5xl md:text-6xl leading-tight text-ink"
        >
          Hi, I'm <span className="text-gradient-bronze">Rajkumar U</span>
        </motion.h1>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="mt-6 h-10 flex items-center justify-center"
        >
          <span className="font-mono text-lg sm:text-2xl text-bronze">
            {typed}
            <span className="inline-block w-[2px] h-6 bg-bronze ml-1 align-middle animate-pulse-soft" />
          </span>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="mt-8 max-w-2xl mx-auto text-mist text-base sm:text-lg leading-relaxed"
        >
          {profile.heroDescription}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.85, duration: 0.8 }}
          className="mt-10 flex flex-wrap items-center justify-center gap-4"
        >
          <a
            href="#projects"
            onClick={(e) => {
              e.preventDefault()
              document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' })
            }}
            className="px-7 py-3 rounded-sm bg-gradient-to-r from-umber to-bronze text-matte font-medium text-sm tracking-wide transition-transform duration-300 hover:scale-105 hover:shadow-bronze-glow"
          >
            View Projects
          </a>
          <a
            href="#contact"
            onClick={(e) => {
              e.preventDefault()
              document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })
            }}
            className="px-7 py-3 rounded-sm border border-bronze/50 text-ink font-medium text-sm tracking-wide transition-all duration-300 hover:bg-bronze/10 hover:border-bronze"
          >
            Contact Me
          </a>
          <a
            href={profile.resumePath}
            download
            className="flex items-center gap-2 px-7 py-3 rounded-sm glass text-ink font-medium text-sm tracking-wide transition-all duration-300 hover:border-bronze"
          >
            <FiDownload /> Download Resume
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.1, duration: 0.8 }}
          className="mt-12 flex items-center justify-center gap-6"
        >
          {[
            { icon: FiGithub, href: profile.github, label: 'GitHub' },
            { icon: FiLinkedin, href: profile.linkedin, label: 'LinkedIn' },
            { icon: FiMail, href: `mailto:${profile.email}`, label: 'Email' },
          ].map(({ icon: Icon, href, label }) => (
            <a
              key={label}
              href={href}
              target={href.startsWith('http') ? '_blank' : undefined}
              rel="noreferrer"
              aria-label={label}
              className="w-11 h-11 rounded-sm glass flex items-center justify-center text-mist hover:text-bronze hover:border-bronze transition-colors duration-300"
            >
              <Icon size={17} />
            </a>
          ))}
        </motion.div>
      </div>

      <motion.a
        href="#about"
        onClick={(e) => {
          e.preventDefault()
          document.querySelector('#about')?.scrollIntoView({ behavior: 'smooth' })
        }}
        aria-label="Scroll to About section"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-bronze/70 z-10"
      >
        <FiArrowDown size={22} />
      </motion.a>
    </section>
  )
}
