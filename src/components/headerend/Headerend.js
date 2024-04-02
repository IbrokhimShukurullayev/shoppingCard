import React from 'react'
import './home.scss'
import { Link } from 'react-router-dom'

import logo from '../../assets/images/logo.png'
import foot from '../../assets/images/foot.png'
import search from "../../assets/images/search.png"
import heart from "../../assets/images/heart.png"
import person from '../../assets/images/person.png'
import cart from '../../assets/images/cart.png'
import { IoMdJet } from 'react-icons/io'

function Headerend() {
  return (
    <section>
        <div className="container">
          <div className="home">
            <div className="home__logo">
              <Link to="/">
              <img src={logo} alt="" />
              <img src={foot} alt="" />
              </Link>
            </div>
            <div className="home__search">
              <input type="text" placeholder="Search For items..." />
              <select id="catigories">
                <option value="All Categories">All Categories</option>
                <option value="saab">Saab</option>
                <option value="opel">Opel</option>
                <option value="audi">Audi</option>
              </select>
              <img src={search} alt="" />
            </div>
            <ul className="home__product">
              <li>
                <Link to="/admin">
                  <img src={person} alt="" />
                  <p>Account</p>
                </Link>
              </li>
              <li>
                <img src={heart} alt="" />
                <p>Wishlist</p>
              </li>
              <li>
                <img src={cart} alt="" />
                <p>Cart</p>
              </li>
            </ul>
          </div>
        </div>
      </section>
  )
}

export default Headerend