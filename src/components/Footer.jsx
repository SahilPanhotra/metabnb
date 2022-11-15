import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";
function Footer() {
  return (
    <div>
      <div className="footer__container">
        <div className="row">
            <div className="footer">
        <div className="footer__container--left">
            <div className="container__copyright">
            <figure className="logo">
                <img className="logo__img" src="../logo__white.svg" alt="Logo" />
                <span className="logo__text">Metabnb</span>
            </figure>
            <div className="social-list">
                <Link className="not_clickable"><img src="../insta.svg" alt="Instagram" /></Link>
                <Link className="not_clickable"><img src="../fb.svg" alt="FB" /></Link>
                <Link className="not_clickable"><img src="../twitter.svg" alt="Twitter" /></Link>
            </div>
            </div>
            <p className="copyright">&copy;2022 Metabnb</p>
        </div>
        <div className="footer__container--right">
            <div className="links__container">
                <ul className="links__community links__container--unordered">
                    <label>Commuinty</label>
                    <li className="list__link"><Link className="footer__link not_clickable">NFT</Link></li>
                    <li className="list__link"><Link className="footer__link not_clickable">Tokens</Link></li>
                    <li className="list__link"><Link className="footer__link not_clickable">Landlords</Link></li>
                    <li className="list__link"><Link className="footer__link not_clickable">Discord</Link></li>
                </ul>
                <ul className="links__places links__container--unordered">
                <label>Places</label>
                    <li className="list__link"><Link className="footer__link not_clickable">Castle</Link></li>
                    <li className="list__link"><Link className="footer__link not_clickable">Farms</Link></li>
                    <li className="list__link"><Link className="footer__link not_clickable">Beach</Link></li>
                    <li className="list__link"><Link className="footer__link not_clickable">Learn more</Link></li>
                </ul>
                <ul className="links__about-us links__container--unordered">
                <label>About us</label>
                    <li className="list__link"><Link className="footer__link not_clickable">Road map</Link></li>
                    <li className="list__link"><Link className="footer__link not_clickable">Creators</Link></li>
                    <li className="list__link"><Link className="footer__link not_clickable">Career</Link></li>
                    <li className="list__link"><Link className="footer__link not_clickable">Contact us</Link></li>
                </ul>
            </div>
        </div>
        
      </div>
      </div>
      </div>
    </div>
  );
}

export default Footer;
