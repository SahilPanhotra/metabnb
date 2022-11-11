import React from "react";
import NavBar from "../components/NavBar";
import "./Home.css";
import NFTCard from "../components/NFTCard";
function Home() {
  return (
    <div>
      <div className="home__container--nav">
        <div className="row">
          <NavBar />
          <div className="hero__section">
            <div className="hero__section--left">
              <h1 className="hero__title">
                Rent a <span className="primary-color bold"> Place </span> away
                from <span className="primary-color bold">Home</span> in the{" "}
                <span className="primary-color bold">Metaverse</span>
              </h1>
              <p className="hero__para">
                we provide you access to luxury and affordable houses in the
                metaverse, get a chance to turn your imagination to reality at
                your comfort zone
              </p>
              <div className="inputsearch">
                <input
                  className="hero__input"
                  type="text"
                  placeholder="Search for location"
                />
                <button className="btn--search btn--primary">Search</button>
                <img className="dropdown" src="./dropdown.svg" alt="" />
              </div>
            </div>
            <div className="hero__section--right">
              <img src="../hero__right.svg" alt="" className="hero__img" />
            </div>
          </div>
        </div>
        <div className="row row__brands">
          <div className="partner__brands">
            <img src="../mbtoken.svg" alt="Mbtoken" />
            <img src="../metamask.svg" alt="Metamask" />
            <img src="../opensea.svg" alt="Opensea" />
          </div>
        </div>
      </div>
      <main>
        <section id="NFTs">
          <div className="row row__nft">
            <div className="nft__container--wrapper">
          <h2 className="nft__heading">Inspiration for your next adventure</h2>
          <div className="nft__container">
            <NFTCard className="card" />
            <NFTCard className="card" />
            <NFTCard className="card" />
            <NFTCard className="card"/>
            <NFTCard className="card"/>
            <NFTCard className="card"/>
            <NFTCard className="card"/>
            <NFTCard className="card"/>
          </div>
          </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default Home;
