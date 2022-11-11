import React from 'react'
import "./NFTCard.css"

function NFTCard() {
  return (
    
        <div className="card">
            <figure className='card__img--wrapper'>
              <img className='card__img' src="../nft1.svg" alt="" />
              <button className='card__heart--btn'><img className='card__heart--img' src="../heart.svg" alt="heart" /></button>
            </figure>
            <div className="nft__title--wrapper">
              <p className="nft__title">Desert King</p>
              <p className="nft__cost">1MBT per night</p>
            </div>
            <div className="nft__title--wrapper nft__second-title">
              <p className="nft__away">2345km away</p>
              <p className="nft__time">available for 2weeks stay</p>
            </div>
            <ul>
              <img src="../star.svg" alt="stars-rating" />
              <img src="../star.svg" alt="stars-rating" />
              <img src="../star.svg" alt="stars-rating" />
              <img src="../star.svg" alt="stars-rating" />
              <img src="../star.svg" alt="stars-rating" />
            </ul>
        </div>
    
  )
}

export default NFTCard