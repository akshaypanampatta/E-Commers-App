import React, { useEffect, useState } from 'react'
import { Button, Card } from 'react-bootstrap';
import "./Products.css"

const Products = () => {
    const [products,setProducts]=useState([]);
    useEffect(()=>{
        const fetchProducts = async()=>{
            const response = await fetch("https://fakestoreapi.com/products");
            const data = await response.json()
            console.log(data);
            setProducts(data)
        }
        fetchProducts()

    },[])
  return (
    <div>
      <div className="container">
        <div className='row'>
          <div className='col-12 '>
            <h1 className='text-center  mt-4'>Latest Products</h1>

          </div>

        </div>
      </div>
    </div>
  );
}

export default Products