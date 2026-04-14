import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import About from '../components/About'
import Portfolio from '../components/Portfolio'
import Skills from '../components/Skills'
import Footer from '../components/Footer'
import GlowSilhouettes from '../components/GlowSilhouettes'
import { portfolioData } from '../data/portfolioData'

function Home() {
  return (
    <div className="relative min-h-screen overflow-x-hidden bg-[#05010a] text-slate-100">
      <GlowSilhouettes />
      <div className="relative z-10">
        <Navbar />
        <main>
          <Hero />
          <About />
          <Portfolio projects={portfolioData} />
          <Skills />
        </main>
        <Footer />
      </div>
    </div>
  )
}

export default Home
