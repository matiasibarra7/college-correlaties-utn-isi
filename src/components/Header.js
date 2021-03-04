import React from "react";
import "./Header.css"
import spider from '../utn-spider.jpg';
// import "./HeaderNew.css"
// import Arania from './Arania';

function Header() {
  return (

    <header className="App-header">
      <div className="utn-info-container">
        <a href="https://www.frre.utn.edu.ar/" target="_blank" rel="noreferrer">
          <figure title="Universidad Tecnológica Nacional">
            <img src={spider} className="App-logo" alt="logo" />
          </figure>
        </a>
        <div className="utn-head">
          <div>UNIVERSIDAD TECNOLÓGICA NACIONAL</div>
          <div>FACULTAD REGIONAL RESISTENCIA</div>
        </div>
      </div>
      <div style={{width:"50%"}}>
        <div>Simulador de situación académica</div>
        <div>Ingeniería en Sistemas de Información</div>
      </div>
      <div style={{width:"25%"}}>
        
      </div>
    </header>
/*   <header className="App-header">
    <div className="utn-info-container" style={{backgroundColor: "gray"}}>
      <Arania />
      <div className="utn-head">
        <div>UNIVERSIDAD TECNOLÓGICA NACIONAL</div>
        <div>FACULTAD REGIONAL RESISTENCIA</div>
      </div>
    </div>
    <div style={{backgroundColor: "lightblue"}}>
      <div>Simulador de situación académica</div>
      <div>Ingeniería en Sistemas de Información</div>
    </div>
    <div style={{backgroundColor: "lightgreen"}}>

    </div>
  </header> */

  )
}


export default Header;