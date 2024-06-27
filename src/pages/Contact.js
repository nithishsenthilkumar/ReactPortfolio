import React from 'react';
import 'animate.css'
import '../App.css';
import emailjs from '@emailjs/browser';
import Footer from './Footer';


export default function Contact() {

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_so2u3kv', 'template_5rxmsgx', e.target, 'L6zLwJ80HUugSpmyr')
      .then((result) => {
          console.log(result);
      }, (error) => {
          console.log(error);
      });
  };
  return (
    <div class='container-fluid'>

      <nav class="navbar navbar-expand-lg bg-body-secondary fixed-top bg-body-secondary d-flex">
        <div class="container-fluid d-flex">
          <h1 class='animate__animated animate__flipInX head ms-5' style={{letterSpacing:'2px'}}>Contact</h1>
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

      <div class='container-fluid' style={{marginTop:"9rem"}}>

        <div onSubmit={sendEmail} class='d flex content h3 text-center animate__animated animate__fadeInDown'>

          <label class='mt-5'>Name</label>
          <br></br>
          <input class='mt-3' type='text' name='name'></input>
          <br></br>
          <label class='mt-3'>Email</label>
          <br></br>
          <input class='mt-3' type='email' name='user_email'></input>
          <br></br>
          <label class='mt-3'>Message</label>
          <br></br>
          <textarea class='mt-3' name='message'></textarea>
          <br></br>
          <input class='mt-3' type='submit' value='send'></input>

        </div>

      </div>

      <Footer/>
    </div>
  )
} 
