import { FiLinkedin, FiGithub, FiMail } from 'react-icons/fi'
import { profile } from '../data/portfolioData'

export default function Footer() {
  return (
    <footer className="bg-charcoal border-t border-bronze/10 py-10">
      <div className="max-w-6xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-6">
        <div className="text-center sm:text-left">
          <p className="font-display text-lg text-ink">
            © 2026 Rajkumar U
          </p>
          <p className="text-mist text-xs mt-1 font-mono">
            Designed with passion for Data Analytics and Business Intelligence.
          </p>
        </div>

        <div className="flex items-center gap-4">
          {[
            { icon: FiLinkedin, href: profile.linkedin, label: 'LinkedIn' },
            { icon: FiGithub, href: profile.github, label: 'GitHub' },
            { icon: FiMail, href: `mailto:${profile.email}`, label: 'Email' },
          ].map(({ icon: Icon, href, label }) => (
            <a
              key={label}
              href={href}
              target={href.startsWith('http') ? '_blank' : undefined}
              rel="noreferrer"
              aria-label={label}
              className="w-10 h-10 rounded-sm glass flex items-center justify-center text-mist hover:text-bronze hover:border-bronze transition-colors duration-300"
            >
              <Icon size={15} />
            </a>
          ))}
        </div>
      </div>
    </footer>
  )
}
