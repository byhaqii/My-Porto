import { motion } from 'framer-motion'

function GlowSilhouettes() {
  return (
    <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_10%_86%,rgba(168,85,247,0.66),transparent_46%),radial-gradient(circle_at_90%_24%,rgba(168,85,247,0.62),transparent_42%),radial-gradient(circle_at_86%_76%,rgba(147,51,234,0.56),transparent_45%),linear-gradient(180deg,#020106_0%,#040109_45%,#020106_100%)]" />
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(0,0,0,0.14)_0%,rgba(0,0,0,0.58)_34%,rgba(0,0,0,0.74)_50%,rgba(0,0,0,0.58)_66%,rgba(0,0,0,0.14)_100%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(0,0,0,0.2)_0%,rgba(0,0,0,0.58)_54%,rgba(0,0,0,0.82)_100%)] mix-blend-multiply" />

      <motion.div
        className="purple-beam beam-left"
        animate={{ x: [0, -14, 0], y: [0, 8, 0], rotate: [16, 14, 16] }}
        transition={{ duration: 15, repeat: Infinity, ease: 'easeInOut' }}
      />

      <motion.div
        className="purple-beam beam-right"
        animate={{ x: [0, 16, 0], y: [0, -10, 0], rotate: [-16, -14, -16] }}
        transition={{ duration: 14, repeat: Infinity, ease: 'easeInOut' }}
      />

      <motion.div
        className="purple-beam beam-right-soft"
        animate={{ x: [0, -10, 0], y: [0, 10, 0], rotate: [-12, -10, -12] }}
        transition={{ duration: 18, repeat: Infinity, ease: 'easeInOut' }}
      />

      <motion.div
        className="glow-silhouette absolute -left-24 top-24 h-80 w-80"
        animate={{ y: [0, -16, 0], x: [0, 8, 0] }}
        transition={{ duration: 9, repeat: Infinity, ease: 'easeInOut' }}
      />

      <motion.div
        className="glow-silhouette absolute right-[-6rem] top-[34%] h-[22rem] w-[22rem]"
        animate={{ y: [0, 18, 0], x: [0, -10, 0] }}
        transition={{ duration: 11, repeat: Infinity, ease: 'easeInOut' }}
      />

      <motion.div
        className="glow-silhouette absolute bottom-[-6rem] left-1/3 h-96 w-96"
        animate={{ y: [0, -12, 0], x: [0, 12, 0] }}
        transition={{ duration: 13, repeat: Infinity, ease: 'easeInOut' }}
      />

      <div className="noise-overlay absolute inset-0" />
    </div>
  )
}

export default GlowSilhouettes
