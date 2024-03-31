import React from 'react'
import befores from "../../assets/images/__before.png"
import afters from '../../assets/images/__after.png'
import meva from "../../assets/images/meva.png"
import meva2 from "../../assets/images/banner-13.png.png"
import banner13 from "../../assets/images/banner-13.png.png"
import sent from '../../assets/images/sent.png'
import "./hero.scss"

function Hero() {
  return (
    <section id="hero">
        <img className="befoors" src={befores} alt="" />
        <img className="after" src={afters} alt="" />
        <img className="befor" src={meva} alt="" />
        <img className="karam" src={banner13} alt="" />
        <div className="container">
          <div className="hero">
            <div className="hero__left">
              <h3 className="hero__text">
                <span className="perecant">100%</span> Organic Vegetables
              </h3>
              <h1 className="hero__title">The best way to stuff your wallet.</h1>
              <p className="hero__list">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet
                reiciendis beatae consequuntur.
              </p>
              <div className="hero__input">
                <img src={sent} alt="" />
                <input type="text" placeholder="Your emaill address" />
                <button>Subscribe</button>
              </div>
            </div>
          </div>
        </div>
      </section>
  )
}

export default Hero