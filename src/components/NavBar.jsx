import React from "react";
import { Link } from "react-router-dom";
import "./NavBar.css";
function NavBar() {
  return (
    <nav>
      <figure className="nav__logo--wrapper">
        <img src="../logo.svg" alt="" className="nav__logo" />
        <div className="nav__logo--text">Metabnb</div>
      </figure>
      <div className="nav__links">
        <div className="nav__link"><Link className="link" href="#">Home</Link></div>
        <div className="nav__link"><Link className="link" href="#">Place to Stay</Link></div>
        <div className="nav__link"><Link className="link" href="#">NFTs</Link></div>
        <div className="nav__link"><Link className="link" href="#">Community</Link></div>
      </div>
      <div className="button__wrapper">
        <button className="btn--primary">Connect Wallet</button>
      </div>
    </nav>
  );
}

export default NavBar;
