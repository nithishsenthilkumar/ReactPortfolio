import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Blogs from './Blogs';
import Portfolio from './Portfolio';
import About from './About';
import Hero from './Hero';
import Contact from './Contact';
import Resume from './Resume';

export default function Routee() {
  return (

    <BrowserRouter>
      <Routes>
          <Route path="/" element={ <Hero/> } />
          <Route path="blogs" element={ <Blogs/> } />
          <Route path="portfolio" element={ <Portfolio/> } />
          <Route path="about" element={ <About/> } />
          <Route path="contact" element={ <Contact/> } />
          <Route path="resume" element={ <Resume/> } />
      </Routes>
    </BrowserRouter>

  )
}
