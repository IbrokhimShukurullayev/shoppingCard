import React , {useEffect , useState} from 'react'
import "./card.scss"
import axios from "axios"


import star from "../../assets/images/star.png"
import card from "../../assets/images/card.png"
import { Link } from 'react-router-dom'
import Skeleton from '../skeleton/Skeleton'
import Loading from '../loading/Loading'

const API_URL = "https://fakestoreapi.com/products/"

function Card() {
    const [data , setData] = useState([])
    const [count , setCount] = useState(4)
    const [categories , SetCategories] = useState([])
    const [categoryValue , setCategoryValue] = useState("")
    const [loading, setLoading] = useState(false)

useEffect(()=> {
        axios
        .get(`${API_URL}/categories`)
        .then(res => SetCategories(res.data))
        .catch(err => console.log(err))
    }, [])

    useEffect(()=> {
      setLoading(true)
      let url = categoryValue === "" ? `${API_URL}?limit=${count}` : `${API_URL}/category/${categoryValue}?limit=${count}`
        axios
        .get(url)
        .then(res => setData(res.data))
        .catch(err => console.log(err))
        .finally(()=> setLoading(false))
    }, [count ,categoryValue])

    let products = data?.map(el=> (
        <div  key={el.id} className="card">
              <div className="card__img">
                <Link to={`/single/${el.id}`}><img src={el.image} alt="" /></Link>
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

    // let categoriesItem = categories?.map((el , inx) => <option key={inx} value={el}>{el}</option>)
    let categoriesItem = categories?.map((el , inx) => <li onClick={e => setCategoryValue(e.target.innerHTML)} className='filter__item' key={inx} >{el}</li>)
    return (
    <section>
        <div className="container">
          {/* <select onChange={e => setCategoryValue(e.target.value)} name="" id="">
            {
              categoriesItem
            }
          </select> */}
          <div className="filter">
            <h2 className="filter__title">
              Popular Products
            </h2>
            <ul className="filter__list">
              <li className='filter__item items'>All</li>
              {categoriesItem}
            </ul>
          </div>
          { loading && <Skeleton count={4}/> }
          { loading && <Loading count={4}/> }
          <div className="row">
            {products}
          </div>
            <button onClick={()=>setCount(p => p + 4)} className='row__buttons'>See More</button>
        </div>
      </section>
  )
}

export default Card