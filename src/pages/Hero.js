import 'animate.css';
import "../App.css";
import React, { useEffect, useRef } from 'react';
import Typed from 'typed.js';
import Footer from './Footer';

export default function Hero() {
  const typedRef = useRef(null);

  useEffect(() => {
    const options = {
      strings: ['Web Developer', 'Frontend Developer', 'UI/UX Designer'],
      typeSpeed: 50,
      backSpeed: 50,
      loop: true,
      showCursor: false, 
    };
    const typed = new Typed(typedRef.current, options);

    return () => {
      typed.destroy();
    };
  }, []);
  return (
    <div class='container-fluid'>
        <h2 class='head mt-5 ms-5 animate__animated animate__bounceInDown'>NITHISH</h2>

        <div class='d flex-wrap row'>

          <div class='col-lg-5 sm-12'>
              <ul class="justify-content-center footer h1 text-center mt-5 ms-5 animate__animated animate__rubberBand" style={{listStyle:"none"}}>
                <li class='justify-content-center align-items-center' style={{marginTop:"9rem"}}>
                  <a class="nav-link" href="/">Home</a>
                </li>
                <li class='mt-2'>
                  <a class="nav-link" href="about">About</a>
                </li>
                <li class='mt-2'>
                  <a class="nav-link" href="portfolio">Portfolio</a>
                </li>
                <li class='mt-2'>
                  <a class="nav-link" href="blogs">Blog</a>
                </li>
                <li class='mt-2'>
                  <a class="nav-link" href="resume">Resume</a>
                </li>
                <li class='mt-2'>
                  <a class="nav-link" href="contact">Contact</a>
                </li>
              </ul>
          </div>

          <div class='col-lg-7 sm-12 justify-content-centre align-items-center text-center'>
            <h1 class='head  animate__animated animate__rubberBand' style={{marginTop:"16rem"}}>Hii I'm NITHISH </h1>
            <h1 class=" head  animate__animated animate__rubberBand">I'm a <span ref={typedRef}></span> </h1>
            <Footer/>
          </div>

        </div>
        
    </div>
  )
}
