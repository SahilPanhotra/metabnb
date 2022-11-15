import React from "react";
import "./Menu.css";
import { Link } from "react-router-dom";
function Menu({ handleMenu }) {
  return (
    <>
      <div className="menu">
        <div className="menu__container">
          <div className="menu__heading--wrapper">
            <figure className="nav__logo--wrapper">
              <img
                className="nav__logo nav__logo--menu"
                src="../logo.svg"
                alt=""
              />
            </figure>
            <button className="btn__menu" onClick={handleMenu}>
              <img className="cross" src="../x.svg" alt="" />
            </button>
          </div>
          <div className="buttons__wrapper">
            <div className="nav__links--menu">
              <div className="nav__link">
                <Link onClick={handleMenu} className="link" to="/">
                  Home
                </Link>
              </div>
              <div className="nav__link">
                <Link onClick={handleMenu} className="link" to="/placetostay">
                  Place to Stay
                </Link>
              </div>
              <div className="nav__link">
                <Link className="link not_clickable" to="/">
                  NFTs
                </Link>
              </div>
              <div className="nav__link">
                <Link className="link not_clickable" to="/">
                  Community
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="backdrop" />
    </>
  );
}

export default Menu;
