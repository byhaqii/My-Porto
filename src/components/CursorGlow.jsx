"use client"

import { useEffect } from 'react'
import { motion, useMotionValue, useMotionTemplate } from 'framer-motion'

const MotionDiv = motion.div

function CursorGlow() {
  const mouseX = useMotionValue(-1000)
  const mouseY = useMotionValue(-1000)

  useEffect(() => {
    const handleMouseMove = (e) => {
      mouseX.set(e.clientX)
      mouseY.set(e.clientY)
    }

    window.addEventListener('mousemove', handleMouseMove)

    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
    }
  }, [mouseX, mouseY])

  const background = useMotionTemplate`radial-gradient(800px circle at ${mouseX}px ${mouseY}px, rgba(168, 85, 247, 0.45), transparent 40%)`

  return (
    <MotionDiv
      className="pointer-events-none fixed inset-0 z-50 transition-opacity duration-300"
      style={{ background }}
    />
  )
}

export default CursorGlow
