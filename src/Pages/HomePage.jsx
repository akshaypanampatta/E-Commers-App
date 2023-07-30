import React from 'react'
import Slider from '../Components/Slider/Slider'
import Products from '../Components/Products/Products'
import Catagories from '../Components/Catagories/Catagories'
import Cart from '../Components/Cart/Cart'


const HomePage = () => {
  return (
    <div>
      <Slider />
      <Catagories />
      <Products />
      <Cart/>
    </div>
  );
}

export default HomePage