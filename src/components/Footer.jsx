import { BiLogoLinkedin } from 'react-icons/bi'
import { SiGithub, SiInstagram, SiWhatsapp } from 'react-icons/si'
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
            className="icon-button inline-flex items-center gap-2 px-3 py-2 text-sm font-semibold text-[#25D366]"
          >
            <SiWhatsapp size={20} />
            <span>WhatsApp</span>
          </a>
          <a
            href="https://www.instagram.com/byhaqii__/"
            target="_blank"
            rel="noreferrer"
            aria-label="Instagram"
            className="icon-button inline-flex items-center gap-2 px-3 py-2 text-sm font-semibold text-[#E1306C]"
          >
            <SiInstagram size={20} />
            <span>Instagram</span>
          </a>
          <a
            href="https://github.com/byhaqii"
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
            className="icon-button inline-flex items-center gap-2 px-3 py-2 text-sm font-semibold text-slate-100"
          >
            <SiGithub size={20} />
            <span>GitHub</span>
          </a>
          <a
            href="https://www.linkedin.com/in/muhammad-rizal-al-baihaqi-7b28a3336/"
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
            className="icon-button inline-flex items-center gap-2 px-3 py-2 text-sm font-semibold text-[#0A66C2]"
          >
            <BiLogoLinkedin size={22} />
            <span>LinkedIn</span>
          </a>
        </div>
      </motion.div>
    </footer>
  )
}

export default Footer
