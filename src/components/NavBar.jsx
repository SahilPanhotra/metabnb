import React, { useState } from "react";
import { Link } from "react-router-dom";
import Modal from "./Modal";
import "./NavBar.css";
function NavBar({handleModel}) {
  

  return (
    <nav>
      <figure className="nav__logo--wrapper">
        <img className="nav__logo" src="../logo.svg" alt=""  />
        {/* <span className="nav__logo--text">Metabnb</span> */}
        <img className="menu--icon" src="../bars_solid.svg" alt="" />
      </figure>
      <div className="nav__links">
        <div className="nav__link"><Link className="link" href="#">Home</Link></div>
        <div className="nav__link"><Link className="link" href="#">Place to Stay</Link></div>
        <div className="nav__link"><Link className="link" href="#">NFTs</Link></div>
        <div className="nav__link"><Link className="link" href="#">Community</Link></div>
      </div>
      <div className="button__wrapper">
        <button className="btn--primary" onClick={handleModel}>Connect <span className="wallet"> Wallet</span></button>
      </div>
    </nav>
  );
}

export default NavBar;
