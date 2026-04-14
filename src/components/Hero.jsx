import { motion } from 'framer-motion'

function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center px-4 pt-24 md:px-6"
    >
      <div className="mx-auto w-full max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          className="glow-card max-w-3xl rounded-3xl p-6 md:p-10"
        >
          <p className="mb-4 text-sm uppercase tracking-[0.18em] text-purple-300 md:text-base">
            Personal Portfolio
          </p>
          <h1 className="font-heading text-3xl leading-tight text-white md:text-5xl">
            Hello, my name is Muhammad Rizal Al Baihaqi
          </h1>
          <p className="mt-6 max-w-2xl text-base text-slate-300 md:text-lg">
            UI/UX enthusiast, graphic design explorer, and mobile developer
            focused on building meaningful digital experiences.
          </p>
        </motion.div>
      </div>
    </section>
  )
}

export default Hero
