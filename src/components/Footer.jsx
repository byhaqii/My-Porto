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

        <div className="flex flex-wrap items-center gap-3">
          <a
            href="https://wa.me/6282228472871"
            target="_blank"
            rel="noreferrer"
            aria-label="WhatsApp"
            className="icon-button px-4 py-2 text-sm font-semibold"
          >
            WhatsApp
          </a>
          <a
            href="https://www.instagram.com/byhaqii__/"
            target="_blank"
            rel="noreferrer"
            aria-label="Instagram"
            className="icon-button px-4 py-2 text-sm font-semibold"
          >
            Instagram
          </a>
          <a
            href="https://github.com/byhaqii"
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
            className="icon-button px-4 py-2 text-sm font-semibold"
          >
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/muhammad-rizal-al-baihaqi-7b28a3336/"
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
            className="icon-button px-4 py-2 text-sm font-semibold"
          >
            LinkedIn
          </a>
        </div>
      </motion.div>
    </footer>
  )
}

export default Footer
