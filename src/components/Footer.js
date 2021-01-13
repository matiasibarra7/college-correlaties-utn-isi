import React from "react";
import mati from '../mati.png';
import "./Footer.css"

function Footer() {
  return (
    <footer>
      <div style={{alignSelf: "center"}}>Hecho por Matías Ibarra</div>     
      <div className="my-info">
        <div><a href="https://github.com/matiasibarra7" target="_black"><i className="fab fa-github" style={{color: "black"}}></i></a></div>
        <div><a href="https://linkedin.com/in/ibarra-nahuel-matias" target="_black"><i className="fab fa-linkedin" style={{color: "#0e76a8"}}></i></a></div>
      </div>
      <figure className="mini-me-container" title="Ibarra Nahuel Matías">
        <img src={mati} className="App-logo rotate" alt="logo" />
      </figure>
    </footer>
  )
}


export default Footer;