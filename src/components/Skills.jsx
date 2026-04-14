import { motion } from 'framer-motion'
import { PenTool, Palette, Smartphone } from 'lucide-react'

const skills = [
  { name: 'UI/UX', icon: PenTool },
  { name: 'Graphic Design', icon: Palette },
  { name: 'Mobile Development (Flutter)', icon: Smartphone },
]

function Skills() {
  return (
    <section id="skills" className="section-spacing px-4 md:px-6">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="mb-10"
        >
          <h2 className="text-3xl font-semibold text-white md:text-4xl">
            Skills / Interests
          </h2>
        </motion.div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {skills.map((skill, index) => {
            const Icon = skill.icon
            return (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, y: 22 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.45, delay: index * 0.07 }}
                whileHover={{ scale: 1.03, y: -4 }}
                className="group glow-card rounded-2xl p-6"
              >
                <Icon className="mb-4 text-purple-300 transition group-hover:text-purple-200" />
                <h3 className="text-xl font-medium text-white">{skill.name}</h3>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default Skills
