import Head from 'next/head'
import Image from 'next/image'
import About from '../components/About'
import Banner from '../components/Banner'
import Experience from '../components/Experience'
import Header from '../components/Header'
import Skills from '../components/Skills'
import { motion, useIsPresent } from 'framer-motion';
import Projects from '../components/Projects'
import { AnimatePresence } from 'framer-motion';

const privacyScreen: any = {
  position: "fixed",
  top: "0",
  left: "0",
  right: "0",
  bottom: "0",
  backgroundColor: "#801a86",
  zIndex: 2,
};

export default function Home() {
  const isPresent = useIsPresent()

  return (
    <div className="h-screen scroll-smooth snap-y snap-mandatory overflow-scroll z-0">
      <AnimatePresence mode="wait" initial={true}>
        <Header />
        <div>
          <section id="banner" className="snap-start">
            <Banner />
          </section>
          <section id="about" className="snap-center">
            <About />
          </section>
          <section id="exprecience" className="snap-center">
            <Experience />
          </section>
          <section id="skills" className="snap-center">
            <Skills />
          </section>
          <section id="projects" className="snap-center">
            <Projects />
          </section>

        </div>

      </AnimatePresence>
      <motion.div
        initial={{ scaleX: 2, }}
        animate={{ scaleX: 0, transition: { duration: 0.8, ease: "circOut" } }}
        exit={{ scaleX: 1, transition: { duration: 0.8, ease: "circIn" } }}
        style={{
          ...privacyScreen,
          originX: isPresent ? 0 : 1
        }}
      // className="privacy-screen"
      />
    </div>
  )
}
