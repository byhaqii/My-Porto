import { motion } from 'framer-motion'
import { BriefcaseBusiness, GraduationCap } from 'lucide-react'

const MotionDiv = motion.div

const experiences = [
  {
    title: 'Polinema Mengajar',
    location: 'MALANG',
    role: 'Staff Media and Information',
    description:
      'Polinema Mengajar is a Polinema community initiative focused on sharing knowledge with elementary, middle, and high school students who need support in learning spaces.',
    details: [
      'Led the Media and Information division, managing visual communication, branding, and public outreach for the program.',
      'Coordinated the design and publication of Instagram feed posts, stories, and educational content to increase engagement and visibility.',
      'Acted as event media lead for activities such as the opening of a new Rumah Belajar in Muharto and the “Ramadhan Berbagi” event.',
    ],
    icon: BriefcaseBusiness,
  },
  {
    title: 'ITDEC',
    location: 'Malang',
    role: 'Head Social Media',
    description:
      'ITDEC is an English development organization at Politeknik Negeri Malang that helps students strengthen communication, confidence, and leadership through English-based activities.',
    details: [
      'Served as a field coordinator during ITDEC 2024 open recruitment.',
      'Handled equipment coordination for the ONBOARDING 2024 event.',
      'Served as a mentor for MINI CLASS 2024.',
      'Served as Head of Social Media in 2025.',
    ],
    icon: GraduationCap,
  },
]

function Experience() {
  return (
    <section id="experience" className="section-spacing px-4 md:px-6">
      <div className="mx-auto max-w-5xl">
        <MotionDiv
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="mb-10"
        >
            <h2 className="text-5xl font-semibold text-white md:text-6xl">
            Experience
          </h2>
            <p className="mt-3 max-w-3xl text-2xl text-slate-300 md:text-3xl">
            A short overview of the design and development work I have done so
            far.
          </p>
        </MotionDiv>

        <div className="grid gap-5 lg:grid-cols-2">
          {experiences.map((experience, index) => {
            const Icon = experience.icon

            return (
              <MotionDiv
                key={experience.title}
                initial={{ opacity: 0, y: 22 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.45, delay: index * 0.08 }}
                whileHover={{ scale: 1.03, y: -4 }}
                className="group glow-card rounded-2xl p-5"
              >
                <Icon className="mb-4 text-purple-300 transition group-hover:text-purple-200" />
                  <h3 className="text-lg font-medium text-white sm:text-xl md:text-2xl lg:text-3xl">
                    {experience.title}
                  </h3>
                  <p className="mt-2 text-xs uppercase tracking-[0.2em] text-purple-200/80 sm:text-sm md:text-base lg:text-lg">
                    {experience.location}
                  </p>
                  <p className="mt-2 text-sm font-medium text-slate-200 sm:text-base md:text-lg lg:text-xl">
                    {experience.role}
                  </p>
                  <p className="mt-3 text-sm leading-relaxed text-slate-300 sm:text-base md:text-lg lg:text-xl">
                    {experience.description}
                  </p>
                  <ul className="mt-4 space-y-3 text-sm leading-relaxed text-slate-300 sm:text-base md:text-lg lg:text-xl">
                  {experience.details.map((detail) => (
                    <li key={detail} className="flex gap-3">
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-purple-300" />
                      <span>{detail}</span>
                    </li>
                  ))}
                </ul>
              </MotionDiv>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default Experience