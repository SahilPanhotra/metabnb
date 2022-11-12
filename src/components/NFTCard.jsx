import React from 'react'
import "./NFTCard.css"

function NFTCard(props) {
  console.log(props);
  return (
    
        <div className="card">
            <figure className='card__img--wrapper'>
              <img className='card__img' src={props.image} alt="Card img" />
              <button className='card__heart--btn'><img className='card__heart--img' src="../heart.svg" alt="heart" /></button>
            </figure>
            <div className="nft__title--wrapper">
              <p className="nft__title">{props.name}</p>
              <p className="nft__cost">{props.cost}MBT per night</p>
            </div>
            <div className="nft__title--wrapper nft__second-title">
              <p className="nft__away">{props.away}km away</p>
              <p className="nft__time">available for {props.stay} stay</p>
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