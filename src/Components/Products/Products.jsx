import React, { useEffect, useState } from "react";
import "./Products.css";
import { Button, Card } from "react-bootstrap";
import { Link } from "react-router-dom";


const Products = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    const fetchProducts = async () => {
      const response = await fetch("https://fakestoreapi.com/products");
      const data = await response.json();
      setProducts(data);
    };
    fetchProducts();
  }, []);


  return (
    <div className="products">
      <div id="latest-products" className="container">
        <div className="row">
          <div className="col-12 ">
            <h1 className="h1 text-center fw-bold mt-3">Latest Products</h1>
          </div>
        </div>
        <div className="row ">
          {products.map((product) => (
            <div className="col-lg-3 col-md-4 col-sm-6  mb-4 d-flex justify-content-center ">
              <Link
                to={`./products/${product.id}`}
                style={{ textDecoration: "none" }}
              >
                <Card
                  style={{
                    width: "15rem",
                    cursor: "pointer",
                    textDecoration: "none",
                    boxShadow: "0 5px 10px rgba(0, 0, 0, 0.2)",
                  }}
                >
                  <Card.Img
                    variant="top"
                    src={product.image}
                    style={{ height: "240px" }}
                  />
                  <Card.Body>
                    <Card.Title style={{ textDecoration: "none" }}>
                      {product.title}
                    </Card.Title>
                    <Card.Text className="text-center fw-bold">
                      ${product.price}
                    </Card.Text>
                    <div className="d-flex justify-content-center">
                      <Button variant="dark">Detailed View</Button>
                    </div>
                  </Card.Body>
                </Card>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Products;
