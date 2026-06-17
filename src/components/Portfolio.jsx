import { motion } from 'framer-motion'
import { ExternalLink } from 'lucide-react'

const MotionDiv = motion.div
const MotionA = motion.a

function Portfolio({ projects }) {
  return (
    <section id="portfolio" className="section-spacing px-4 md:px-6">
      <div className="mx-auto max-w-6xl">
        <MotionDiv
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.6 }}
          className="mb-10 text-center"
        >
          <h2 className="text-2xl font-semibold text-white sm:text-3xl md:text-4xl lg:text-5xl">
            Portfolio Showcase
          </h2>
          <p className="mt-3 text-base text-slate-300 sm:text-lg md:text-xl lg:text-2xl">
            My selected projects.
          </p>
        </MotionDiv>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <MotionA
              key={project.id}
              href={project.link || undefined}
              target={project.link ? '_blank' : undefined}
              rel={project.link ? 'noreferrer' : undefined}
              initial={{ opacity: 0, y: 26 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              whileHover={{
                y: -9,
                scale: 1.028,
                transition: {
                  type: 'spring',
                  stiffness: 320,
                  damping: 24,
                  mass: 0.58,
                },
              }}
              whileTap={{ scale: project.link ? 0.992 : 1 }}
              className={`group glow-card rounded-2xl p-4 transition ${
                project.link ? 'cursor-pointer' : 'cursor-default'
              } block`}
              aria-label={project.link ? `Open ${project.title}` : project.title}
            >
              <img
                src={project.image}
                alt={project.title}
                className={`h-44 w-full rounded-xl ${
                  project.id === 4 ? 'object-contain bg-white/5 p-6' : 'object-cover'
                }`}
              />
              <div className="mt-4">
                <h3 className="text-lg font-semibold text-white sm:text-xl md:text-2xl lg:text-3xl">
                  {project.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-300 line-clamp-3 sm:text-base md:text-lg lg:text-xl">
                  {project.description}
                </p>
                <div className="mt-4 inline-flex items-center gap-2 text-sm text-purple-300 transition group-hover:text-purple-200 sm:text-base md:text-lg lg:text-xl">
                  Preview
                  <ExternalLink size={15} />
                </div>
              </div>
            </MotionA>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Portfolio
