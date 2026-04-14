import { motion } from 'framer-motion'

function About() {
  return (
    <section id="about" className="section-spacing px-4 md:px-6">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.6 }}
        className="mx-auto max-w-6xl"
      >
        <div className="glow-card rounded-3xl p-8 md:p-10">
          <h2 className="mb-5 text-3xl font-semibold text-white md:text-4xl">
            About Me
          </h2>
          <p className="max-w-4xl text-xl leading-relaxed text-slate-300 md:text-2xl">
            I am a student at Politeknik Negeri Malang, class of 2023.
            Currently, my focus and interests are in UI/UX, graphic design, and
            mobile development using Flutter.
          </p>
          <p className="mt-5 max-w-4xl text-xl leading-relaxed text-slate-300 md:text-2xl">
            In my last two projects, I handled the UI/UX design and project
            documentation. I really enjoyed that process because it feels close
            to graphic design. In my most recent project, I worked on both
            UI/UX and mobile development, and I enjoyed that experience as
            well.
          </p>
        </div>
      </motion.div>
    </section>
  )
}

export default About
