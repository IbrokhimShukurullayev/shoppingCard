import React , {useState , useEffect} from 'react'
import axios from "axios"
import "./single.scss"

import { IoIosStar } from "react-icons/io";
import {useParams} from "react-router-dom"
import { FaHeart } from "react-icons/fa";
import { LuEye } from "react-icons/lu";

import blue from "../../assets/images/span-blue.png"
import yellow from "../../assets/images/span-yellow.png"
import red from "../../assets/images/span-red.png"
import green from "../../assets/images/span-green.png"
import Loading from '../../components/loading/Loading';

const API_URL = "https://fakestoreapi.com/products/"

function Single() {
  const {id} = useParams()

  const [data , setData] = useState([])
  const [loading, setLoading] = useState(false)
      let [count , setCuont] = useState(0)

  window.scrollTo(0,0)

  useEffect(()=> {
    setLoading(true)
        axios
        .get(API_URL)
        .then(res => setData(res.data))
        .catch(err => console.log(err))
        .finally(()=> setLoading(false))
    }, [])

    let findProduct = data.find(el => el.id === +id)


  return (
    <>
    { loading && <Loading /> }
      <div className="container">
        <div className="heros">
          <div className="heros__left">
            <div className="heros__left__box">
                <h3 className="heros__category">product Category</h3>
                <div className="heros__box__row1">
                    <div className="heros__box__inputs">
                        <div className="heros__box__inputs__left">
                            <input type="checkbox" />
                            <p>Juice & Drinks</p>
                        </div>
                        <h6>[20]</h6>
                    </div>
                    <div className="heros__box__inputs">
                        <div className="heros__box__inputs__left">
                            <input type="checkbox" />
                            <p>Dairy & Milk</p>
                        </div>
                        <h6>[20]</h6>
                    </div>
                    <div className="heros__box__inputs">
                        <div className="heros__box__inputs__left">
                            <input type="checkbox" />
                            <p>Snack & Spice</p>
                        </div>
                        <h6>[20]</h6>
                    </div>
                </div>
                <div className="heros__box__row2">
                    <h2>Filter by Price</h2>
                    <input type="range" />
                    <h3>Price: <span>$20 - $250</span></h3>
                    <button>Filter</button>
                </div>
                <div className="heros__box__row3 heros__box__row1">
                    <h2>product Category</h2>
                    <div className="heros__box__inputs">
                        <div className="heros__box__inputs__left">
                            <input type="checkbox" />
                            <p>Blue</p>
                        </div>
                        <img src={blue} alt="" />
                    </div>
                    <div className="heros__box__inputs">
                        <div className="heros__box__inputs__left">
                            <input type="checkbox" />
                            <p>Yellow</p>
                        </div>
                        <img src={yellow} alt="" />
                    </div>
                    <div className="heros__box__inputs">
                        <div className="heros__box__inputs__left">
                            <input type="checkbox" />
                            <p>Red</p>
                        </div>
                        <img src={red} alt="" />
                    </div>
                    <div className="heros__box__inputs">
                        <div className="heros__box__inputs__left">
                            <input type="checkbox" />
                            <p>Green</p>
                        </div>
                        <img src={green} alt="" />
                    </div>
                </div>
                <div className="heros__box__row4">
                    <h2>Weight</h2>
                    <div className="heros__box__inputs">
                        <input type="checkbox" />
                        <p>2kg Pack</p>
                    </div>
                    <div className="heros__box__inputs">
                <input type="checkbox" />
                        <p>20kg Pack</p>
                    </div>
                    <div className="heros__box__inputs">
                        <input type="checkbox" />
                        <p>30kg pack</p>
                    </div>
                </div>
                <div className="heros__box__row5">
                    <h2>products Tages</h2>
                    <div className="heros__box__row5__line">
                        <p>Vegetables</p>
                        <p>juice</p>
                        <p>Food</p>
                        <p>Dry Fruits</p>
                        <p>Vegetables</p>
                        <p>juice</p>
                    </div>
                </div>
            </div>
        </div>
        <div className="heros__right">
          <div className="heros__home-left">
            <div className="heros__bg-img">
              <img src={findProduct?.image} alt="" />
            </div>
            <div className='heros__litle-img'>
              <img src={findProduct?.image} alt="" />
              <img src={findProduct?.image} alt="" />
              <img src={findProduct?.image} alt="" />
              <img src={findProduct?.image} alt="" />
              <img src={findProduct?.image} alt="" />
            </div>
          </div>
          <div className="heros__home-right">
            <h2 className="heros__right-title">
              {findProduct?.title}
            </h2>
            <p className="heros__right-text">
              {findProduct?.description}
            </p>
            <div className="heros__right-star">
              <IoIosStar />
              <IoIosStar />
              <IoIosStar />
              <IoIosStar />
              <IoIosStar />
              <h2>( {findProduct?.rating.rate} Review )</h2>
            </div>
            <div className="heros__inform__right__content">
              <span className='heros__inform__right__content__box'>
                  <h3>Brand <span>:</span></h3>
                  <p>ESTA BETTERU CO</p>
              </span>
              <span className='heros__inform__right__content__box'>
                  <h3>Flavour <span>:</span></h3>
                  <p>Super Saver Pack</p>
              </span>
              <span className='heros__inform__right__content__box'>
                  <h3>Diet Type <span>:</span></h3>
                  <p>Vegetarian</p>
              </span>
              <span className='heros__inform__right__content__box'>
                  <h3>Weight <span>:</span></h3>
                  <p>200 Grams</p>
              </span>
              <span className='heros__inform__right__content__box'>
                  <h3>Speciality <span>:</span></h3>
                  <p>Gluten Free, Sugar Free</p>
              </span>
              <span className='heros__inform__right__content__box'>
                  <h3>Info <span>:</span></h3>
                  <p>Egg Free, Allergen-Free</p>
              </span>
              <span className='heros__inform__right__content__box'>
                  <h3>Items <span>:</span></h3>
                  <p>1</p>
              </span>
          </div>
          <div className="heros__right__price">
            <h2 >
              ${findProduct?.price.toFixed(1) * count}
            </h2>
            <p>${findProduct?.price.toFixed(1) * 2 * count}</p>
          </div>
          <div className="heros__inform__right__weight">
                <h3>Size/Weight :</h3>
                <span>50kg</span>
                <span>80kg</span>
                <span>120kg</span>
                <span>200kg</span>
            </div>
            <div className="heros__inform__right__buttons">
                <div className="heros__inform__right__buttons__start">
                    <p>{count}</p>
                    <div>
                        <button onClick={() => setCuont(count+1)}>+</button>
                        <button onClick={() => setCuont(count-1)}>-</button>
                    </div>
                </div>
                <button className="heros__inform__right__buttons__btn">
                    Add To Cart
                </button>
                <button className="heros__inform__right__buttons__like__btn">
                    <FaHeart /> 
                </button>
                <button className="heros__inform__right__buttons__like__btn">
                    <LuEye />
                </button>
            </div>
          </div>
        </div>
        </div>
      </div>
    </>
  )
}

export default Single