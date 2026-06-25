import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import About from '../components/About'
import Skills from '../components/Skills'
import Experience from '../components/Experience'
import Portfolio from '../components/Portfolio'
import Footer from '../components/Footer'
import SoftAurora from '../components/SoftAurora'
import CursorGlow from '../components/CursorGlow'
import ScrollBlur from '../components/ScrollBlur'
import { portfolioData } from '../data/portfolioData'

function Home() {
  return (
    <div className="relative min-h-screen overflow-x-hidden bg-[#05010a] text-slate-100">
      <CursorGlow />
      <div className="fixed inset-0 z-0 opacity-30">
        <SoftAurora
          speed={0.6}
          scale={1.5}
          brightness={0.8}
          color1="#f7f7f7"
          color2="#e100ff"
          noiseFrequency={2.5}
          noiseAmplitude={1}
          bandHeight={0.5}
          bandSpread={1}
          octaveDecay={0.1}
          layerOffset={0}
          colorSpeed={1}
          enableMouseInteraction
          mouseInfluence={0.25}
        />
      </div>
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
