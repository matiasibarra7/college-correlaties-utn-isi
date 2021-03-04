import React from "react";
import "./Header.css"
import Arania from './Arania/Arania';

function Header() {
  return (
    <header className="App-header">
      <div className="utn-info-container">
        <Arania />
        <div className="utn-head">
          <div>UNIVERSIDAD TECNOLÓGICA NACIONAL</div>
          <div>FACULTAD REGIONAL RESISTENCIA</div>
        </div>
      </div>
      <div className="center-title">
        <div>Simulador de situación académica</div>
        <div>Ingeniería en Sistemas de Información</div>
      </div>
    </header>

  )
}


export default Header;