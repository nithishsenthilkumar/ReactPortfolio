import React from 'react'
import '../App.css';
import { BsInstagram,BsLinkedin,BsGithub,BsTwitter,BsFillTelephoneFill } from "react-icons/bs";

export default function Footer() {
  return (
   <div class="container-fluid">
      <div class="d-flex justify-content-center align-items-center postition-bottom mt-5 mb-4 animate__animated animate__bounceInUp footer">
            <div class='d-flex-column'>
                <a class='btn' href="https://www.instagram.com/invites/contact/?i=17419p3u1r69e&utm_content=594n3wb"><BsInstagram size='25px'/></a>
                <a class='btn' href="https://www.linkedin.com/in/nithish-senthilkumar-597789225"><BsLinkedin size='25px'/></a>
                <a class='btn' href="https://github.com/mr-nithish"><BsGithub size='25px'/></a>
                <a class='btn' href="https://twitter.com/nithish2004_s?t=QRWPTzMGnSEqmrNpt692VQ&s=09"><BsTwitter size='25px'/></a>
                <a class='btn' href="tel:+91 9566405938" target='_blank' rel='noreferrer'><BsFillTelephoneFill size='25px'/></a>
            </div>
      </div>
   </div>
  )
}
  