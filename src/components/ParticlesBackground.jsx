import { useEffect, useRef } from 'react'

// A quiet scatter-plot motif: dots drift like data points, and nearby
// points connect with a faint line, the way a correlation graph would.
export default function ParticlesBackground() {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    const ctx = canvas.getContext('2d')
    let width, height, points, animationId
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches

    const DENSITY = 14000
    const LINK_DIST = 130

    function resize() {
      width = canvas.width = canvas.offsetWidth * window.devicePixelRatio
      height = canvas.height = canvas.offsetHeight * window.devicePixelRatio
      canvas.style.width = canvas.offsetWidth + 'px'
      const count = Math.min(70, Math.floor((width * height) / (DENSITY * window.devicePixelRatio ** 2)))
      points = Array.from({ length: count }, () => ({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.15,
        vy: (Math.random() - 0.5) * 0.15,
        r: Math.random() * 1.6 + 0.6,
      }))
    }

    function draw() {
      ctx.clearRect(0, 0, width, height)
      const scaledLink = LINK_DIST * window.devicePixelRatio

      for (let i = 0; i < points.length; i++) {
        const p = points[i]
        if (!prefersReducedMotion) {
          p.x += p.vx
          p.y += p.vy
          if (p.x < 0 || p.x > width) p.vx *= -1
          if (p.y < 0 || p.y > height) p.vy *= -1
        }

        for (let j = i + 1; j < points.length; j++) {
          const q = points[j]
          const dx = p.x - q.x
          const dy = p.y - q.y
          const dist = Math.sqrt(dx * dx + dy * dy)
          if (dist < scaledLink) {
            ctx.strokeStyle = `rgba(59, 130, 246, ${0.14 * (1 - dist / scaledLink)})`
            ctx.lineWidth = 1
            ctx.beginPath()
            ctx.moveTo(p.x, p.y)
            ctx.lineTo(q.x, q.y)
            ctx.stroke()
          }
        }
      }

      for (const p of points) {
        ctx.beginPath()
        ctx.fillStyle = 'rgba(59, 130, 246, 0.55)'
        ctx.arc(p.x, p.y, p.r * window.devicePixelRatio, 0, Math.PI * 2)
        ctx.fill()
      }

      animationId = requestAnimationFrame(draw)
    }

    resize()
    draw()
    window.addEventListener('resize', resize)
    return () => {
      window.removeEventListener('resize', resize)
      cancelAnimationFrame(animationId)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className="absolute inset-0 w-full h-full opacity-70"
    />
  )
}
