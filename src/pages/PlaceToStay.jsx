import React from 'react'
import  './PlaceToStay.css';
import NFTCard from '../components/NFTCard';
import NFTFilteredarray from '../fakeBackend/2ndSampleResponse';
function PlaceToStay() {
  return (
    <>
    <div className="container__page2">
        <div className="row">
            <div className="content__container">
                <div className="filter-bar">
                    <ul className='filters__wrapper'>
                        <li className='filter'>Resturant</li>
                        <li className='filter'>Cottage</li>
                        <li className='filter'>Castle</li>
                        <li className='filter'>Fantast City</li>
                        <li className='filter'>Beach</li>
                        <li className='filter'>Carbins</li>
                        <li className='filter'>Off-Grid</li>
                        <li className='filter filter--no-margin'>Farm</li>
                    </ul>
                    <figure className='filter__button'>
                        <p className="filter__type">Location</p>
                        <img src="../filter__setting.svg" alt="filter settings" />
                    </figure>
                </div>
                <div className="nft-cards--wrapper">
                    <div className="nft__container">
                    {NFTFilteredarray.map((nftCard) => {
                  return (
                    <NFTCard
                      key={nftCard.id}
                      name={nftCard.name}
                      cost={nftCard.cost}
                      away={nftCard.away}
                      stay={nftCard.stay}
                      rating={nftCard.rating}
                      image={nftCard.image}
                      className="card"
                    />
                  );
                })}
                </div>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default PlaceToStay