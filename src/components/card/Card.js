import React , {useEffect , useState} from 'react'
import axios from "axios"
import star from "../../assets/images/star.png"
import card from "../../assets/images/card.png"
import "./card.scss"

const API_URL = "https://fakestoreapi.com/products/"

function Card() {
    const [data , setData] = useState([])
    const [count , setCount] = useState(8)
    useEffect(()=> {
        axios
        .get(`${API_URL}?limit = ${count}`)
        .then(res => setData(res.data))
        .catch(err => console.log(err))
    }, [count])

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
                <img src={star} alt="" />
                <p>({el.rating.rate})</p>
              </div>
              <p className="card__list">By <span>NestFood</span></p>
              <div className="card__price">
                <h2>${el.price}</h2>
                <p>$32.8</p>
                <button><img src={card} alt="" />Add</button>
              </div> 
            </div>
    ))
  return (
    <section>
        <div className="container">
          <div className="row">
            {products}
          </div>
            <button onClick={()=>setCount(p => p + 4)} className='row__buttons'>See More</button>
        </div>
      </section>
  )
}

export default Card