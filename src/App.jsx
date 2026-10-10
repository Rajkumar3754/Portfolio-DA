import { useEffect, useState } from 'react'
import Loader from './components/Loader'
import Navbar from './components/Navbar'
import ScrollProgress from './components/ScrollProgress'
import ScrollToTop from './components/ScrollToTop'
import Hero from './components/Hero'
import About from './components/About'
import Education from './components/Education'
import Certifications from './components/Certifications'
import Experience from './components/Experience'
import Skills from './components/Skills'
import WhyHireMe from './components/WhyHireMe'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function App() {
  const [loading, setLoading] = useState(true)
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    let raf
    const start = performance.now()
    const DURATION = 1600

    const tick = (now) => {
      const pct = Math.min(100, ((now - start) / DURATION) * 100)
      setProgress(pct)
      if (pct < 100) {
        raf = requestAnimationFrame(tick)
      } else {
        setTimeout(() => setLoading(false), 250)
      }
    }
    raf = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(raf)
  }, [])

  useEffect(() => {
    document.body.style.overflow = loading ? 'hidden' : 'auto'
  }, [loading])

  return (
    <>
      <Loader show={loading} progress={progress} />
      <ScrollProgress />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Education />
        <Certifications />
        <Experience />
        <Skills />
        <WhyHireMe />
        <Projects />
        <Contact />
      </main>
      <Footer />
      <ScrollToTop />
    </>
  )
}
