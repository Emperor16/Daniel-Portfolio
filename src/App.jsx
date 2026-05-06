import React from 'react'
import { Hero } from "@/sections/hero"
import { Navbar } from "@/layout/navbar"
import { About } from "@/sections/about"
import { Project } from "@/sections/aroject"
import { Testimonials } from "@/sections/aestimonials"
import { Contact } from "@/sections/contact"
import { Experience } from "@/sections/experience"
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
