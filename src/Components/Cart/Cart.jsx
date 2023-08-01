import React from "react";
import { Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const Cart = ({ cartItems, removeFromCart }) => {
  const handleRemoveFromCart = (item) => {
    removeFromCart(item);

  
  };
  
  return (
    <div className="products">
      <div id="latest-products" className="container">
        <div className="row">
          <div className="col-12 ">
            <h1 className="h1 text-center fw-bold mt-3">Your cart</h1>
          </div>
        </div>
        {cartItems.length === 0 ? (
          <h2 className="justify-content-center d-flex m-20">
            "Your Cart is Empty"
          </h2>
        ) : (
          <div className="row ">
            {cartItems.map((item) => (
              <div className="col-lg-3 col-md-4 col-sm-6  mb-4 d-flex justify-content-center ">
                <Card
                  style={{
                    width: "15rem",
                    cursor: "pointer",
                    textDecoration: "none",
                  }}
                >
                  <Card.Img
                    variant="top"
                    src={item.image}
                    style={{ height: "240px" }}
                  />
                  <Card.Body>
                    <Card.Title style={{ textDecoration: "none" }}>
                      {item.title}
                    </Card.Title>
                    <Card.Text className="text-center fw-bold">
                      ${item.price}
                    </Card.Text>
                    <div className="d-flex justify-content-center">
                      <Button
                        onClick={() => handleRemoveFromCart(item)}
                        variant="dark"
                      >
                        Remove from cart
                      </Button>
                    </div>
                  </Card.Body>
                </Card>
              </div>
            ))}
          </div>
        )}
      </div>
      <div className="d-flex justify-content-center">
        {cartItems.length > 0 && (
          <Button variant="dark" className="m-4">
            Proceed to Checkout
          </Button>
        )}

        <Link to={"/"}>
          <Button variant="dark" className="m-4 bg-white text-dark">
            Continue Shopping
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default Cart;
