import { motion } from 'framer-motion'

function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center px-4 pt-24 md:px-6"
    >
      <div className="mx-auto grid w-full max-w-6xl items-center gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:gap-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          className="glow-card max-w-2xl rounded-3xl p-5 md:p-8"
        >
          <p className="mb-3 text-xs uppercase tracking-[0.16em] text-purple-300 md:text-sm">
            Personal Portfolio
          </p>
          <h1 className="font-heading text-2xl leading-snug text-white md:text-4xl">
            Hello, my name is Muhammad Rizal Al Baihaqi
          </h1>
          <p className="mt-5 max-w-xl text-sm text-slate-300 md:text-base">
            UI/UX enthusiast, graphic design explorer, and mobile developer
            focused on building meaningful digital experiences.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.75, ease: 'easeOut', delay: 0.08 }}
          className="relative mx-auto w-full max-w-sm"
        >
        </motion.div>
      </div>
    </section>
  )
}

export default Hero
