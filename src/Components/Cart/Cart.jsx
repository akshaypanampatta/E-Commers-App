import React from "react";
import {Card,Button} from "react-bootstrap"

const Cart = () => {
  return (
    <div className="products">
      <div id="latest-products" className="container">
        <div className="row">
          <div className="col-12 ">
            <h1 className="h1 text-center fw-bold mt-3">Latest Products</h1>
          </div>
        </div>
        <div className="row ">
          <div className="col-lg-3 col-md-4 col-sm-6  mb-4 d-flex justify-content-center ">
            <Card
              style={{
                width: "15rem",
                cursor: "pointer",
                textDecoration: "none",
              }}
            >
              <Card.Img variant="top" src="" style={{ height: "240px" }} />
              <Card.Body>
                <Card.Title style={{ textDecoration: "none" }}>
                  title
                </Card.Title>
                <Card.Text className="text-center fw-bold">$price</Card.Text>
                <div className="d-flex justify-content-center">
                  <Button variant="dark">Buy Now</Button>
                </div>
              </Card.Body>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
