import { Menu, X } from 'lucide-react'
import { useState } from 'react'

const navItems = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'portofolio', label: 'Portofolio' },
  { id: 'skills', label: 'Skills' },
  { id: 'contact', label: 'Contact' },
]

function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  // Smoothly navigate to each section based on the section id.
  const handleScroll = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' })
      setIsOpen(false)
    }
  }

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-purple-500/20 bg-black/55 backdrop-blur-lg">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-4 py-5 md:px-6 md:py-6">
        <button
          onClick={() => handleScroll('home')}
          className="font-heading !text-3xl font-bold tracking-[0.2em] text-purple-200 transition hover:text-white md:!text-4xl"
        >
          Portofolio Baihaqi
        </button>

        <ul className="hidden items-center gap-8 md:flex">
          {navItems.map((item) => (
            <li key={item.id}>
              <button
                onClick={() => handleScroll(item.id)}
                className="font-body !text-2xl font-medium text-slate-300 transition hover:text-purple-300 md:!text-3xl"
              >
                {item.label}
              </button>
            </li>
          ))}
        </ul>

        <button
          onClick={() => setIsOpen((prev) => !prev)}
          className="rounded-lg border border-purple-500/30 p-3 text-purple-200 transition hover:border-purple-400 md:hidden"
          aria-label="Toggle navigation"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {isOpen && (
        <div className="border-t border-purple-500/20 bg-black/80 px-4 py-3 backdrop-blur-lg md:hidden">
          <ul className="space-y-2">
            {navItems.map((item) => (
              <li key={item.id}>
                <button
                  onClick={() => handleScroll(item.id)}
                  className="font-body w-full rounded-md px-3 py-3 text-left !text-2xl font-medium text-slate-300 transition hover:bg-purple-500/10 hover:text-white"
                >
                  {item.label}
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  )
}

export default Navbar
