import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import About from '../components/About'
import Skills from '../components/Skills'
import Experience from '../components/Experience'
import Portfolio from '../components/Portfolio'
import Footer from '../components/Footer'
import GlowSilhouettes from '../components/GlowSilhouettes'
import CursorGlow from '../components/CursorGlow'
import ScrollBlur from '../components/ScrollBlur'
import { portfolioData } from '../data/portfolioData'

function Home() {
  return (
    <div className="relative min-h-screen overflow-x-hidden bg-[#05010a] text-slate-100">
      <CursorGlow />
      <GlowSilhouettes />
      <div className="relative z-10">
        <ScrollBlur />
        <Navbar />
        <main>
          <Hero />
          <About />
          <Skills />
          <Experience />
          <Portfolio projects={portfolioData} />
        </main>
        <Footer />
      </div>
    </div>
  )
}

export default Home
