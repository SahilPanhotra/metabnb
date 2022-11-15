import React from "react";
import "./Modal.css";
function Modal({handleModel}) {
  return (
    <>
      <div className="modal">
        <div className="modal__container">
          <div className="modal__heading--wrapper">
            <p className="modal__title">Connect Wallet</p>
            <button className="btn__modal" onClick={handleModel} > <img className="cross" src="../x.svg" alt="" /></button>
          </div>
          <div className="buttons__wrapper">
            <p className="modal__subtitle">Choose your preferred wallet</p>
            <button className="modal__wallet--btn modal__wallet--margin not_clickable"><div className="wallet__wrapper"><img  src="../metamask__color.svg" alt="" /><span className="wallet__name">MetaMask</span></div><div className="arrow__wrapper"><img src="../arrow__right.svg" alt="" /></div></button>
            <button className="modal__wallet--btn not_clickable"><div className="wallet__wrapper"><img  src="../wallet__connect.svg" alt="" /><span className="wallet__name">WalletConnect</span></div><div className="arrow__wrapper"><img src="../arrow__right.svg" alt="" /></div></button>   
          </div>
        </div>
      </div>
      <div className="backdrop" />
    </>
  );
}

export default Modal;
