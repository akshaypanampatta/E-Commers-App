import React from 'react'
import Navbar from '../Components/Navbar/Navbar'
import Slider from '../Components/Home/Slider'
import Products from '../Components/Products/Products'

const HomePage = () => {
  return (
    <div>
        <Navbar/>
        <Slider/>
        <Products/>
       
    </div>
  )
}

export default HomePage