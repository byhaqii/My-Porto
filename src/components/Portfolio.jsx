import { motion } from 'framer-motion'
import { ExternalLink } from 'lucide-react'

function Portfolio({ projects }) {
  return (
    <section id="portfolio" className="section-spacing px-4 md:px-6">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.6 }}
          className="mb-10 text-center"
        >
          <h2 className="text-3xl font-semibold text-white md:text-4xl">
            Portfolio Showcase
          </h2>
          <p className="mt-3 text-lg text-slate-300 md:text-xl">
            Selected projects presented in a spacious and modern layout.
          </p>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <motion.a
              key={project.id}
              href={project.link || undefined}
              target={project.link ? '_blank' : undefined}
              rel={project.link ? 'noreferrer' : undefined}
              initial={{ opacity: 0, y: 26 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              whileHover={{ y: -6, scale: 1.02 }}
              className={`group glow-card rounded-2xl p-4 transition ${
                project.link ? 'cursor-pointer' : 'cursor-default'
              } block`}
              aria-label={project.link ? `Open ${project.title}` : project.title}
            >
              <img
                src={project.image}
                alt={project.title}
                className="h-44 w-full rounded-xl object-cover"
              />
              <div className="mt-4">
                <h3 className="text-xl font-semibold text-white">
                  {project.title}
                </h3>
                <p className="mt-2 text-base leading-relaxed text-slate-300">
                  {project.description}
                </p>
                <div className="mt-4 inline-flex items-center gap-2 text-base text-purple-300 transition group-hover:text-purple-200">
                  Preview
                  <ExternalLink size={15} />
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Portfolio
