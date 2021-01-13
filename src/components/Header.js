import React from "react";
import spider from '../utn-spider.jpg';

function Header() {
  return (

    <header className="App-header">
      <figure style={{ position: 'absolute', top: "-0.5rem", left:"1.5rem"}}>
        <img src={spider} className="App-logo" alt="logo" style={{ width:"120px", height: "123px", borderRadius: "50%" }} />
      </figure>
    </header>

  )
}


export default Header;