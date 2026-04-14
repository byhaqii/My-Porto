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
          className="glow-card max-w-3xl rounded-3xl p-8 md:p-12"
        >
          <p className="mb-5 text-base uppercase tracking-[0.2em] text-purple-300 md:text-lg">
            Personal Portfolio
          </p>
          <h1 className="font-heading text-4xl leading-tight text-white md:text-6xl">
            Hello, my name is Muhammad Rizal Al Baihaqi
          </h1>
          <p className="mt-7 max-w-2xl text-lg text-slate-300 md:text-xl">
            UI/UX enthusiast, graphic design explorer, and mobile developer
            focused on building meaningful digital experiences.
          </p>
        </motion.div>
      </div>
    </section>
  )
}

export default Hero
