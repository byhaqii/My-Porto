import { motion } from 'framer-motion'

const MotionDiv = motion.div

function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center px-4 pt-24 md:px-6"
    >
      <div className="mx-auto grid w-full max-w-6xl items-center gap-8 lg:grid-cols-[1.35fr_0.65fr] lg:gap-10">
        <MotionDiv
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          className="glow-card w-full max-w-4xl rounded-3xl p-6 md:min-h-[340px] md:p-10 lg:min-h-[380px] lg:p-12"
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
      </div>
    </section>
  )
}

export default Hero
