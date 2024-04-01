import React from 'react'
import "./banner.scss"

function Banner() {
  return (
    <section>
        <div className="container">
          <div className="products">
            <div className="product-1">
              <p>
                Everyday Fresh & <br />
                Clean with Our <br />
                Products
              </p>
              <button className='buttons'>Shop Now</button>
            </div>
            <div className="product-2">
              <p>
                Everyday Fresh & <br />
                Clean with Our <br />
                Products
              </p>
              <button className='buttons'>Shop Now</button>
            </div>
            <div className="product-3">
              <p>
                Everyday Fresh & <br />
                Clean with Our <br />
                Products
              </p>
              <button className='buttons'>Shop Now</button>
            </div>
          </div>
        </div>
      </section>
  )
}

export default Banner