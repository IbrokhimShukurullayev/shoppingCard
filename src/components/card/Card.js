import React , {useEffect , useState} from 'react'
import axios from "axios"
import "./card.scss"

const API_URL = "https://fakestoreapi.com/products/"

function Card() {
    const [data , setData] = useState([])
    useEffect(()=> {
        axios
        .get(API_URL)
        .then(res => setData(res.data))
        .catch(err => console.log(err))
    }, [])

    let products = data?.map(el=> (
        <div key={el.id} className="card">
              <div className="card__img">
                <img src={el.image} alt="" />
              </div>
              <p className="card__text">{el.category}</p>
              <h2 className="card__description">
                {el.description}
              </h2>
              <div className="rating">
                <img src="./images/star.png" alt="" />
                <p>({el.rating.rate})</p>
              </div>
              <p className="card__list">By <span>NestFood</span></p>
              <div className="card__price">
                <h2>${el.price}</h2>
                <p>$32.8</p>
                <button><img src="./images/Icon.png" alt="" />Add</button>
              </div> 
            </div>
    ))
  return (
    <section>
        <div className="container">
          <div className="row">
            {products}
          </div>
        </div>
      </section>
  )
}

export default Card