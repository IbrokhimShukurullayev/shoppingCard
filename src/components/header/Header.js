import React from 'react'
import './header.scss'
import toogle from '../../assets/images/togle.png'
import vector from "../../assets/images/Vector.png"
import Headerend from '../headerend/Headerend'

function Header() {
  return (
    <>
    <header className="header">
      <nav className="nav container">
        <div className="nav__logo__link">
          <img src={toogle} alt="" />
        </div>
        <ul className="nav__list">
          <li className="nav__item"><a href="#" className="nav__link">Home</a></li>
          <li className="nav__item"><a href="#" className="nav__link">Category</a></li>
          <li className="nav__item"><a href="#" className="nav__link">Products</a></li>
          <li className="nav__item"><a href="#" className="nav__link">Pages </a></li>
          <li className="nav__item"><a href="#" className="nav__link">Blog </a></li>
          <li className="nav__item"><a href="#" className="nav__link">Elements </a></li>
        </ul>
        <div className="nav__services">
          <img src={vector} alt="" />
          <h2>+123 ( 456 ) ( 7890 )</h2>
        </div>
      </nav>
    </header>
    <Headerend/>
    </>
  )
}

export default Header