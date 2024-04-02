import React from 'react'

import Hero from '../../components/hero/Hero'
import Banner from "../../components/banner/Banner"
import Card from '../../components/card/Card'

function Home() {
  return (
    <div>
        <Hero/>
        <Banner/>
        <Card/>
    </div>
  )
}

export default Home