import { useEffect } from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Hero from './sections/Hero'
import About from './sections/About'
import Skills from './sections/Skills'
import Projects from './sections/Projects'
import Contact from './sections/Contact'

export default function App() {
  // Update document title based on hash / scroll position
  useEffect(() => {
    document.title = 'Radin Hemmasi — Full-Stack Developer'
  }, [])

  return (
    <div className="min-h-screen flex flex-col">
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:px-4 focus:py-2 focus:bg-primary-600 focus:text-white focus:rounded-lg focus:text-sm"
      >
        Skip to main content
      </a>

      <Navbar />

      <main id="main-content" className="flex-1">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>

      <Footer />
    </div>
  )
}
