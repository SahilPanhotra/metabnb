import React from "react";
import NavBar from "../components/NavBar";
import "./Home.css";
import NFTCard from "../components/NFTCard";
function Home() {
  const NFTarray = [
    {
      id: 1,
      name: "Desert King",
      cost: 1,
      away: 2345,
      stay: "2 weeks",
      rating: 5,
      image: "../nft1.svg",
    },
    {
      id: 2,
      name: "Desert King",
      cost: 1,
      away: 2345,
      stay: "2 weeks",
      rating: 5,
      image: "../nft2.svg",
    },
    {
      id: 3,
      name: "Desert King",
      cost: 1,
      away: 2345,
      stay: "2 weeks",
      rating: 5,
      image: "../nft3.svg",
    },
    {
      id: 4,
      name: "Desert King",
      cost: 1,
      away: 2345,
      stay: "2 weeks",
      rating: 5,
      image: "../nft4.svg",
    },
    {
      id: 5,
      name: "Desert King",
      cost: 1,
      away: 2345,
      stay: "2 weeks",
      rating: 5,
      image: "../nft5.svg",
    },
    {
      id: 6,
      name: "Desert King",
      cost: 1,
      away: 2345,
      stay: "2 weeks",
      rating: 5,
      image: "../nft6.svg",
    },
    {
      id: 7,
      name: "Desert King",
      cost: 1,
      away: 2345,
      stay: "2 weeks",
      rating: 5,
      image: "../nft7.svg",
    },
    {
      id: 8,
      name: "Desert King",
      cost: 1,
      away: 2345,
      stay: "2 weeks",
      rating: 5,
      image: "../nft8.svg",
    },
  ];
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
              <h2 className="nft__heading">
                Inspiration for your next adventure
              </h2>
              <div className="nft__container">
                {NFTarray.map((nftCard) => {

                   return <NFTCard
                    key={nftCard.id}
                    name={nftCard.name}
                    cost={nftCard.cost}
                    away={nftCard.away}
                    stay={nftCard.stay}
                    rating={nftCard.rating}
                    image={nftCard.image}
                    className="card"
                  />;
                })}
              </div>
            </div>
          </div>
        </section>
        <section id="learnmore">
          <div className="learnmore__container">
            <div className="row">
              <div className="about--wrapper">
                <div className="left-area">
                  <h2 className="about__heading--left">Metabnb NFTs</h2>
                  <p className="about__para--left">Discover our NFT gift cards collection. Loyal customers gets amazing gift cards which are traded as NFTs. These NFTs gives our cutomer access to loads of our exclusive services.</p>
                  <button className="btn--primary btn--learnmore">Learn more</button>
                </div>
                <div className="right-area">
                  <figure>
                  <img className="right__img" src="../about__right.svg" alt="" />
                  </figure>
                </div>
                </div>
            </div>
          </div>
        </section>
      </main>
      
    </div>
  );
}

export default Home;
