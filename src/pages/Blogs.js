import React from 'react'
import 'animate.css'
import Footer from './Footer';
import java from '../asserts/Java.jpg'
import python from '../asserts/Python.jpg';
import javascript from '../asserts/JavaScript.jpg';
import mysql from '../asserts/Mysql.jpg';
import node from '../asserts/Node.jpg';
import react from '../asserts/React.jpg';

export default function Blogs() {
  return (
   <div class='container-fluid'>

      <nav class="navbar navbar-expand-lg bg-body-secondary fixed-top bg-body-secondary d-flex">
        <div class="container-fluid d-flex">
          <h1 class='animate__animated animate__flipInX head ms-5' style={{letterSpacing:'2px'}}>Blog</h1>
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
        <div class='card mt-5 ms-5 me-3 animate__animated animate__zoomIn text-center' style={{width: '20rem'}}>
          <img src={ java } class="card-img-top animate__animated animate__zoomInUp img-fluid" alt="..."/>
          <div class="card-body ">
            <h5 class="card-text subtitle text-center">Java is a popular, object-oriented programming language used to develop a wide variety of applications, from web and mobile apps to desktop software and enterprise solutions.</h5>
            <a href="https://www.w3schools.com/java/" class="btn btn-outline-primary mt-3">Tutorial</a>
          </div>
        </div>
        <div class='card mt-5 ms-5 me-3 animate__animated animate__zoomIn text-center' style={{width: '21rem'}}>
          <img src={ python } class="card-img-top animate__animated animate__zoomInUp img-fluid" alt="..."/>
          <div class="card-body">
            <h5 class="card-text subtitle text-center">Python is a high-level, interpreted programming language used for web development, data analysis, artificial intelligence, and more. Its clean syntax and rich ecosystem make it a popular choice for beginners and experts alike.</h5>
            <a href="https://www.python.org/" class="btn btn-outline-primary mt-3">Tutorial</a>
          </div>
        </div>
        <div class='card mt-5 ms-5 me-3 animate__animated animate__zoomIn text-center' style={{width: '21rem'}}>
          <img src={ javascript} class="card-img-top animate__animated animate__zoomInUp img-fluid" alt="..."/>
          <div class="card-body">
            <h5 class="card-text subtitle text-center">JavaScript is a programming language used to create interactive web pages and web applications. It's widely used for client-side scripting and can also be used on the server-side with Node.js.</h5>
            <a href="https://www.w3schools.com/js/DEFAULT.asp" class="btn btn-outline-primary mt-3">Tutorial</a>
          </div>
        </div>
        <div class='card mt-5 ms-5 me-3 animate__animated animate__zoomIn text-center' style={{width: '21rem'}}>
          <img src={ mysql} class="card-img-top animate__animated animate__zoomInUp img-fluid" alt="..."/>
          <div class="card-body">
            <h5 class="card-text subtitle text-center">MySQL is a popular open-source relational database management system used for storing, organizing, and retrieving data. It's widely used for web applications and supports SQL for querying and managing data.</h5>
            <a href="https://www.mysql.com/" class="btn btn-outline-primary mt-3">Tutorial</a>
          </div>
        </div>
        <div class='card mt-5 ms-5 me-3 animate__animated animate__zoomIn text-center' style={{width: '21rem'}}>
          <img src={ node} class="card-img-top animate__animated animate__zoomInUp img-fluid" alt="..."/>
          <div class="card-body">
            <h5 class="card-text subtitle text-center">Node.js is a popular, open-source JavaScript runtime environment used for building scalable and high-performance network applications. It allows for building server-side applications using JavaScript.</h5>
            <a href="https://www.w3schools.com/nodejs/" class="btn btn-outline-primary mt-3">Tutorial</a>
          </div>
        </div>
        <div class='card mt-5 ms-5 me-3 animate__animated animate__zoomIn text-center' style={{width: '21rem'}}>
          <img src={ react} class="card-img-top animate__animated animate__zoomInUp img-fluid" alt="..."/>
          <div class="card-body">
            <h5 class="card-text subtitle text-center">React is a popular JavaScript library used for building user interfaces and web applications. It allows for building reusable UI components and manages updates efficiently, resulting in high performance applications.</h5>
            <a href="https://react.dev/" class="btn btn-outline-primary mt-3">Tutorial</a>
          </div>
        </div>
    </div>

      <Footer/>
   </div>
  )
}
