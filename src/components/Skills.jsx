import { motion } from 'framer-motion'
import { PenTool, Palette, Smartphone } from 'lucide-react'

const MotionDiv = motion.div

const skills = [
  { name: 'UI/UX', icon: PenTool },
  { name: 'Graphic Design', icon: Palette },
  { name: 'Mobile Development (Flutter)', icon: Smartphone },
]

function Skills() {
  return (
    <section id="skills" className="section-spacing px-4 md:px-6">
      <div className="mx-auto max-w-6xl">
        <MotionDiv
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="mb-10"
        >
            <h2 className="text-2xl font-semibold text-white sm:text-3xl md:text-4xl lg:text-5xl">
            Skills / Interests
          </h2>
        </MotionDiv>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {skills.map((skill, index) => {
            const Icon = skill.icon
            return (
              <MotionDiv
                key={skill.name}
                initial={{ opacity: 0, y: 22 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.45, delay: index * 0.07 }}
                whileHover={{ scale: 1.03, y: -4 }}
                className="group glow-card rounded-2xl p-6"
              >
                <Icon className="mb-4 text-purple-300 transition group-hover:text-purple-200" />
                  <h3 className="text-lg font-medium text-white sm:text-xl md:text-2xl lg:text-3xl">{skill.name}</h3>
              </MotionDiv>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default Skills
