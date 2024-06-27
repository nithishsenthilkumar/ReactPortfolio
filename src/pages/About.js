import React from 'react';
import 'animate.css';
import '../App.css';
import Footer from './Footer';
import profile from '../asserts/portfolio.jpeg';

export default function About() {
  return (
    <div class='container-fluid'>

      <nav class="navbar navbar-expand-lg bg-body-secondary fixed-top bg-body-secondary d-flex">
        <div class="container-fluid d-flex">
          <h1 class='animate__animated animate__flipInX head ms-5' style={{letterSpacing:'2px'}}>About</h1>
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

      <div style={{marginTop:"9rem"}}>
          <h2 class='text-center content animate__animated animate__bounceIn mt-5'>Hi there! My name is NITHISH, and I am a Developer with One year of experience. I have <br></br> a Bachelor's Degree in the field of Electronic and Communication from <br></br> Sri Krishna College of Engineering and Technology and have worked with various <br></br> clients and companies throughout my career.</h2>
      </div>

      <div class='row d flex justify-content-center align-items-center ms-5'>
        <div class='col-lg-6 sm-12 mt-5  animate__animated animate__bounceInLeft'>
          <img src={ profile } class="rounded mx-auto d-block profile" alt="..." style={{height:"400px",width:"400px"}}/>
        </div>
        <div class='col-lg-6 sm-12 mt-5 subtitle animate__animated animate__bounceInRight'>
          <h2>Birthday : 11th July 2004</h2>
          <h2>Age : 18</h2>
          <h2>Degree : Undergraduate</h2>
          <h2>City : Salem, Tamil Nadu</h2>
          <h2>Phone : +91 95664 05938 </h2>
        </div>
      </div>

      <div class='mt-5 text-center'>
        <h1 class='head animate__animated animate__fadeInTopLeft'>Skills</h1>
        <div  class='animate__animated animate__fadeInTopRight'>
          <div class='justify-content-center align-items-center'>
            <h4 class='subtitle mt-5'>HTML5, CSS</h4>
            <div class="progress-wrapper">
              <div class="progress">
                <div class="progress-bar w-75" role="progressbar" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>
              </div>
            </div>
          </div>
          <div class='justify-content-center align-items-center'>
            <h4 class='subtitle mt-3'>Javascript</h4>
            <div class="progress-wrapper">
              <div class="progress">
                <div class="progress-bar w-75" role="progressbar" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>
              </div>
            </div>
          </div>
          <div class='justify-content-center align-items-center'>
            <h4 class='subtitle mt-3'>Java</h4>
            <div class="progress-wrapper">
              <div class="progress">
                <div class="progress-bar w-75" role="progressbar" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>
              </div>
            </div>
          </div>
          <div class='justify-content-center align-items-center'>
            <h4 class='subtitle mt-3'>React JS</h4>
            <div class="progress-wrapper">
              <div class="progress">
                <div class="progress-bar w-75" role="progressbar" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>
              </div>
            </div>
          </div>
          <div class='justify-content-center align-items-center'>
            <h4 class='subtitle mt-3'>My SQL</h4>
            <div class="progress-wrapper">
              <div class="progress">
                <div class="progress-bar w-75" role="progressbar" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>
              </div>
            </div>
          </div>
          <div class='justify-content-center align-items-center'>
            <h4 class='subtitle mt-3'>React Native</h4>
            <div class="progress-wrapper">
              <div class="progress">
                <div class="progress-bar w-75" role="progressbar" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer/>
    </div>
  )
}
