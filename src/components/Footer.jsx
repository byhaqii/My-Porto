import { Mail, Phone, MapPin } from 'lucide-react'
import { motion } from 'framer-motion'

function Footer() {
  return (
    <footer id="contact" className="section-spacing px-4 pb-10 md:px-6">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.6 }}
        className="glow-card mx-auto flex max-w-6xl flex-col items-start justify-between gap-5 rounded-3xl p-8 sm:flex-row sm:items-center"
      >
        <div>
          <h2 className="text-2xl font-semibold text-white md:text-3xl">Contact</h2>
          <p className="mt-1 text-lg text-slate-300 md:text-xl">Let&apos;s build something impactful together.</p>
        </div>

        <div className="flex items-center gap-3">
          <a href="#" aria-label="Email" className="icon-button">
            <Mail size={18} />
          </a>
          <a href="#" aria-label="Phone" className="icon-button">
            <Phone size={18} />
          </a>
          <a href="#" aria-label="Location" className="icon-button">
            <MapPin size={18} />
          </a>
        </div>
      </motion.div>
    </footer>
  )
}

export default Footer
