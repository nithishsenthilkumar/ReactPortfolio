import React from 'react'
import 'animate.css';
import '../App.css';
import hovel from '../asserts/Hovel.png';
import pregmed from '../asserts/Pregmed.png';
import shesafe from '../asserts/Shesafe.png';
import Footer from './Footer';
export default function Portfolio() {
  return (
   <div class='container-fluid'>

      <nav class="navbar navbar-expand-lg bg-body-secondary fixed-top bg-body-secondary d-flex">
        <div class="container-fluid d-flex">
          <h1 class='animate__animated animate__flipInX head ms-5' style={{letterSpacing:'2px'}}>Portfolio</h1>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse ms-5" id="navbarTogglerDemo03" >
            <ul class="nav justify-content-center footer h2">
              <li class="nav-item">
                <a class="nav-link" href="/">Home</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="about">About</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="portfolio">Portfolio</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="blogs">Blog</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="resume">Resume</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="contact">Contact</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

        <div class='d-flex flex-wrap align-items-center justify-content-center' style={{marginTop:"5rem"}}>
          <div class='card mt-5 ms-5 me-3 animate__animated animate__zoomIn hover-zoom' style={{width: '20rem'}}>
            <img src={ hovel } class="card-img-top" alt="..."/>
            <div class="card-body">
              <h5 class="card-text subtitle text-center">Project aims to develop a slum area in India, providing better housing, sanitation, and water facilities. Expected to have significant impact on residents' lives and region's development.</h5>
            </div>
          </div>
          <div class='card mt-5 ms-5 me-3 animate__animated animate__zoomIn' style={{width: '21rem'}}>
            <img src={ pregmed } class="card-img-top" alt="..."/>
            <div class="card-body">
              <h5 class="card-text subtitle text-center">Project launched to provide guidance for pregnant women, aimed at improving their health and well-being. Includes resources on prenatal care, nutrition, exercise, and healthcare professional training.</h5>
            </div>
          </div>
          <div class='card mt-5 ms-5 me-3 animate__animated animate__zoomIn' style={{width: '21rem'}}>
            <img src={ shesafe} class="card-img-top" alt="..."/>
            <div class="card-body">
              <h5 class="card-text subtitle text-center">Project initiated to ensure the safety of women. Includes measures such as security personnel deployment, and safe spaces creation. Aims to empower women and address gender-based violence and harassment.</h5>
            </div>
          </div>

          <h3 class='mt-5 text-center content animate__animated animate__rubberBand mb-5'>Here These are Projects done for the welfare development of the society and <br></br> will be helpful for the people in their day-to-day life.</h3>
        </div>
        <Footer/>
    </div>
  )
}
