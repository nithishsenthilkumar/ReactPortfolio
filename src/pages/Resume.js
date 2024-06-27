import React from 'react'
import '../App.css'
import '../index.css'
import { MDBCol, MDBContainer, MDBRow } from "mdb-react-ui-kit";
import Footer from './Footer';

export default function Resume() {
  return (
    <div class='container-fluid'>
        
        <nav class="navbar navbar-expand-lg bg-body-secondary fixed-top bg-body-secondary d-flex">
            <div class="container-fluid d-flex">
            <h1 class='animate__animated animate__flipInX head ms-5' style={{letterSpacing:'2px'}}>Resume</h1>
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
       
        <MDBContainer class="pt-5 pb-1 animate__animated animate__flipInY"  style={{marginTop:"5rem"}}>
            <MDBRow>
                <MDBCol md="12">
                <div id="content">
                    <ul className="timeline-1 text-black">
                        <h1 class='text-center'>Education</h1>  
                        <li class="event head mt-5" data-date="2021 - 2025">
                            <h3 class="mb-3 content">Bachelor's Degree</h3>
                            <h4 class='subtitle'>
                                Sri Krishna College of Engineering and Technology
                            </h4>
                        </li>
                        <li class="event head" data-date="2020 - 2021">
                            <h3 class="mb-3 content">HSC</h3>
                            <h4 class='subtitle'>
                            Bharathiyar Hi-Tect Senior Secondary School (CBSE)
                            </h4>
                        </li>
                        <li class="event head" data-date="2018 - 2019">
                            <h3 class="mb-3 content">SSC</h3>
                            <h4 class='subtitle'>
                            Bharathiyar Hi-Tect International School (CBSE)
                            </h4>
                        </li>
                    </ul>
                </div>
                </MDBCol>
            </MDBRow>
        </MDBContainer>

        <MDBContainer class="pt-5 pb-1 animate__animated animate__flipInY">
            <MDBRow>
                <MDBCol md="12">
                <div id="content">
                    <ul className="timeline-1 text-black">
                        <h1 class='text-center'>Profession</h1>  
                        <li class="event head mt-5" data-date="2021 - till now">
                            <h3 class="mb-3 content">Employee in</h3>
                            <h4 class='subtitle'>
                                FreshSpar Technology and FreshSpar Education
                            </h4>
                        </li>
                    </ul>
                </div>
                </MDBCol>
            </MDBRow>
        </MDBContainer>

        <Footer/>
    </div>
  )
}
