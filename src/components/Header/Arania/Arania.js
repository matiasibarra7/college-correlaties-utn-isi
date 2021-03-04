import React from "react";
import spider from './utn-spider.jpg';
import "./Arania.css"

function Footer() {
  return (
    <a className="arania-container" href="https://www.frre.utn.edu.ar/" target="_blank" rel="noreferrer">
      <figure title="Universidad Tecnológica Nacional">
        <img src={spider} className="App-logo" alt="logo" />
      </figure>
    </a>
  )
}


export default Footer;