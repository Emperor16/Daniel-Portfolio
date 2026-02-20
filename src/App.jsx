import React from 'react'
import { Hero } from "@/sections/hero"
import { Navbar } from "@/layout/navbar"
import { About } from "@/sections/About"
import { Project } from "@/sections/Project"
import { Testimonials } from "@/sections/Testimonials"
import { Contact } from "@/sections/Contact"
import { Experience } from "@/sections/Experience"

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
    </div>
  )
}

export default App
