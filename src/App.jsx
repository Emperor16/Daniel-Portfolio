import React from 'react'
import { Hero } from "@/sections/hero"
import { Navbar } from "@/layout/navbar"
import { About } from "@/sections/About"
import { Project } from "@/sections/project"
import { Testimonials } from "@/sections/testimonials"
import { Contact } from "@/sections/contact"
import { Experience } from "@/sections/Experience"
import { Footer } from './layout/footer'

function App() {
  return (
    <div className='min-h-screen overflow-x-hidden'>
      <Navbar/>
      <main>
        <Hero/>
        <About/>
        <Project/>
        <Experience/>
        <Testimonials/>
        <Contact/>
      </main>
      <Footer/>
    </div>
  )
}

export default App