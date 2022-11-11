import React from "react";
import "./NavBar.css";
function NavBar() {
  return (
    <nav>
      <figure className="nav__logo--wrapper">
        <img src="../logo.svg" alt="" className="nav__logo" />
        <div className="nav__logo--text">Metabnb</div>
      </figure>
      <div className="nav__links">
        <div className="nav__link"><a className="link" href="#">Home</a></div>
        <div className="nav__link"><a className="link" href="#">Place to Stay</a></div>
        <div className="nav__link"><a className="link" href="#">NFTs</a></div>
        <div className="nav__link"><a className="link" href="#">Community</a></div>
      </div>
      <div className="button__wrapper">
        <button className="btn--primary">Connect Wallet</button>
      </div>
    </nav>
  );
}

export default NavBar;
