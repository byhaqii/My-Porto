import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'

const MotionDiv = motion.div

function Hero() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  })

  const y = useTransform(scrollYProgress, [0, 1], ['0%', '50%'])
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0])

  return (
    <section
      ref={ref}
      id="home"
      className="relative flex min-h-screen items-center px-4 pt-24 md:px-6"
    >
      <MotionDiv
        style={{ y, opacity }}
        className="mx-auto grid w-full max-w-6xl items-center gap-8 lg:grid-cols-[1.35fr_0.65fr] lg:gap-10"
      >
        <MotionDiv
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          className="glow-card w-full max-w-3xl rounded-3xl p-5 md:min-h-[280px] md:p-8 lg:min-h-[320px] lg:p-10"
        >
          <p className="mb-3 text-sm uppercase tracking-[0.16em] text-purple-300 md:text-base">
            Personal Portfolio
          </p>
          <h1 className="font-heading text-3xl leading-snug text-white md:text-5xl lg:text-6xl">
            Hello, my name is Muhammad Rizal Al Baihaqi
          </h1>
          <p className="mt-5 max-w-xl text-lg text-slate-300 md:text-xl lg:text-2xl">
            UI/UX enthusiast, graphic design explorer, and mobile developer
            focused on building meaningful digital experiences.
          </p>
        </MotionDiv>

        <MotionDiv
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.75, ease: 'easeOut', delay: 0.08 }}
          className="relative mx-auto w-full max-w-sm"
        >
        </MotionDiv>
      </MotionDiv>
    </section>
  )
}

export default Hero
