import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FiMail, FiLinkedin, FiGithub, FiMapPin, FiPhone, FiSend } from 'react-icons/fi'
import SectionHeading from './SectionHeading'
import { profile } from '../data/portfolioData'

const contactCards = [
  { icon: FiMail, label: 'Email', value: profile.email, href: `mailto:${profile.email}` },
  { icon: FiPhone, label: 'Phone', value: profile.phone, href: `tel:${profile.phone.replace(/\s+/g, '')}` },
  { icon: FiLinkedin, label: 'LinkedIn', value: 'View Profile', href: profile.linkedin },
  { icon: FiGithub, label: 'GitHub', value: 'Rajkumar3754', href: profile.github },
  { icon: FiMapPin, label: 'Location', value: profile.location, href: null },
]

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' })
  const [sent, setSent] = useState(false)

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value })

  const handleSubmit = (e) => {
    e.preventDefault()
    const body = `Name: ${form.name}%0D%0AEmail: ${form.email}%0D%0A%0D%0A${encodeURIComponent(
      form.message
    )}`
    const mailto = `mailto:${profile.email}?subject=${encodeURIComponent(
      form.subject || 'Portfolio Inquiry'
    )}&body=${body}`
    window.location.href = mailto
    setSent(true)
    setTimeout(() => setSent(false), 4000)
  }

  return (
    <section id="contact" className="relative py-28 bg-matte">
      <div className="max-w-6xl mx-auto px-6">
        <SectionHeading eyebrow="Let's Connect" title="Contact" />

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-16">
          {contactCards.map((card, i) => {
            const Icon = card.icon
            const content = (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                whileHover={{ y: -6 }}
                className="glass rounded-md p-6 h-full flex flex-col items-center text-center"
              >
                <div className="w-11 h-11 rounded bg-bronze/10 flex items-center justify-center text-bronze mb-4">
                  <Icon size={18} />
                </div>
                <p className="text-mist text-xs font-mono mb-1 tracking-wide">{card.label}</p>
                <p className="text-ink text-sm break-words">{card.value}</p>
              </motion.div>
            )
            return card.href ? (
              <a key={card.label} href={card.href} target="_blank" rel="noreferrer">
                {content}
              </a>
            ) : (
              <div key={card.label}>{content}</div>
            )
          })}
        </div>

        <motion.form
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          onSubmit={handleSubmit}
          className="glass-strong rounded-md p-8 sm:p-10 max-w-3xl mx-auto"
        >
          <div className="grid sm:grid-cols-2 gap-6 mb-6">
            <div>
              <label htmlFor="name" className="block text-mist text-xs font-mono mb-2 tracking-wide">
                Name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                required
                value={form.name}
                onChange={handleChange}
                placeholder="Your name"
                className="w-full bg-matte/50 border border-bronze/20 rounded px-4 py-3 text-ink placeholder:text-mist/40 focus:border-bronze outline-none transition-colors"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-mist text-xs font-mono mb-2 tracking-wide">
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                value={form.email}
                onChange={handleChange}
                placeholder="you@example.com"
                className="w-full bg-matte/50 border border-bronze/20 rounded px-4 py-3 text-ink placeholder:text-mist/40 focus:border-bronze outline-none transition-colors"
              />
            </div>
          </div>

          <div className="mb-6">
            <label htmlFor="subject" className="block text-mist text-xs font-mono mb-2 tracking-wide">
              Subject
            </label>
            <input
              id="subject"
              name="subject"
              type="text"
              required
              value={form.subject}
              onChange={handleChange}
              placeholder="What's this about?"
              className="w-full bg-matte/50 border border-bronze/20 rounded px-4 py-3 text-ink placeholder:text-mist/40 focus:border-bronze outline-none transition-colors"
            />
          </div>

          <div className="mb-8">
            <label htmlFor="message" className="block text-mist text-xs font-mono mb-2 tracking-wide">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows={5}
              required
              value={form.message}
              onChange={handleChange}
              placeholder="Tell me about the opportunity..."
              className="w-full bg-matte/50 border border-bronze/20 rounded px-4 py-3 text-ink placeholder:text-mist/40 focus:border-bronze outline-none transition-colors resize-none"
            />
          </div>

          <button
            type="submit"
            className="w-full sm:w-auto flex items-center justify-center gap-2 px-8 py-3 rounded-sm bg-gradient-to-r from-umber to-bronze text-matte font-medium text-sm tracking-wide transition-transform duration-300 hover:scale-[1.03]"
          >
            <FiSend size={15} /> Send Message
          </button>

          <AnimatePresence>
            {sent && (
              <motion.p
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                className="mt-4 text-bronze text-sm font-mono"
              >
                Your email client should now be open — thanks for reaching out!
              </motion.p>
            )}
          </AnimatePresence>
        </motion.form>
      </div>
    </section>
  )
}
