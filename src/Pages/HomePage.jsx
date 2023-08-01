import React from 'react'
import Slider from '../Components/Slider/Slider'
import Products from '../Components/Products/Products'
import Categories from '../Components/Categories/Categories'



const HomePage = () => {
  return (
    <div>
      <Slider />
      <Categories/>
      <Products />
    </div>
  );
}

export default HomePage