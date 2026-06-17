import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'

const MotionDiv = motion.div

function GlowSilhouettes() {
  const containerRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  })

  // Create different parallax speeds for depth
  const ySlow = useTransform(scrollYProgress, [0, 1], ['0%', '20%'])
  const yMedium = useTransform(scrollYProgress, [0, 1], ['0%', '40%'])
  const yFast = useTransform(scrollYProgress, [0, 1], ['0%', '60%'])

  return (
    <div ref={containerRef} className="pointer-events-none absolute inset-0 z-0 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_10%_86%,rgba(168,85,247,0.66),transparent_46%),radial-gradient(circle_at_90%_24%,rgba(168,85,247,0.62),transparent_42%),radial-gradient(circle_at_86%_76%,rgba(147,51,234,0.56),transparent_45%),linear-gradient(180deg,#020106_0%,#040109_45%,#020106_100%)]" />
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(0,0,0,0.14)_0%,rgba(0,0,0,0.58)_34%,rgba(0,0,0,0.74)_50%,rgba(0,0,0,0.58)_66%,rgba(0,0,0,0.14)_100%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(0,0,0,0.2)_0%,rgba(0,0,0,0.58)_54%,rgba(0,0,0,0.82)_100%)] mix-blend-multiply" />

      {/* Wrapping animated elements in parallax containers */}
      <MotionDiv style={{ y: yFast }} className="absolute inset-0">
        <MotionDiv
          className="purple-beam beam-left"
          animate={{ x: [0, -24, 0], y: [0, 14, 0], rotate: [16, 12, 16], opacity: [0.4, 0.8, 0.4] }}
          transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
        />
        <MotionDiv
          className="glow-silhouette absolute -left-24 top-24 h-80 w-80"
          animate={{ y: [0, -24, 0], x: [0, 12, 0], scale: [1, 1.1, 1] }}
          transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
        />
        <MotionDiv
          className="glow-silhouette absolute right-1/4 bottom-[-4rem] h-72 w-72"
          animate={{ y: [0, 20, 0], x: [0, -12, 0], scale: [1, 1.05, 1] }}
          transition={{ duration: 14, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
        />
      </MotionDiv>

      <MotionDiv style={{ y: yMedium }} className="absolute inset-0">
        <MotionDiv
          className="purple-beam beam-right"
          animate={{ x: [0, 26, 0], y: [0, -16, 0], rotate: [-16, -12, -16], opacity: [0.4, 0.8, 0.4] }}
          transition={{ duration: 11, repeat: Infinity, ease: 'easeInOut' }}
        />
        <MotionDiv
          className="glow-silhouette absolute right-[-6rem] top-[34%] h-[22rem] w-[22rem]"
          animate={{ y: [0, 24, 0], x: [0, -16, 0], scale: [1, 1.08, 1] }}
          transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
        />
        <MotionDiv
          className="glow-silhouette absolute left-[-5rem] top-1/2 h-64 w-64"
          animate={{ y: [0, -18, 0], x: [0, 14, 0], scale: [1, 1.09, 1] }}
          transition={{ duration: 16, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
        />
      </MotionDiv>

      <MotionDiv style={{ y: ySlow }} className="absolute inset-0">
        <MotionDiv
          className="purple-beam beam-right-soft"
          animate={{ x: [0, -18, 0], y: [0, 16, 0], rotate: [-12, -8, -12], opacity: [0.3, 0.7, 0.3] }}
          transition={{ duration: 15, repeat: Infinity, ease: 'easeInOut' }}
        />
        <MotionDiv
          className="glow-silhouette absolute bottom-[-6rem] left-1/3 h-96 w-96"
          animate={{ y: [0, -20, 0], x: [0, 18, 0], scale: [1, 1.12, 1] }}
          transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
        />
        <MotionDiv
          className="glow-silhouette absolute right-[-4rem] bottom-1/4 h-80 w-80"
          animate={{ y: [0, 22, 0], x: [0, -14, 0], scale: [1, 1.11, 1] }}
          transition={{ duration: 13, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
        />
        <MotionDiv
          className="glow-silhouette absolute top-[-3rem] left-1/4 h-56 w-56"
          animate={{ y: [0, -14, 0], x: [0, 10, 0], scale: [1, 1.06, 1] }}
          transition={{ duration: 9, repeat: Infinity, ease: 'easeInOut', delay: 1.5 }}
        />
      </MotionDiv>

      <div className="noise-overlay absolute inset-0" />
    </div>
  )
}

export default GlowSilhouettes
