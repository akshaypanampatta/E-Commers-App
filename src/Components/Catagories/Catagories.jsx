import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";

const Catagories = () => {
  const [catagories, setCatagories] = useState([]);
  useEffect(() => {
    const fetchCatagory = async () => {
      const response = await fetch(
        "https://fakestoreapi.com/products/categories"
      );
      const data = await response.json();
      setCatagories(data);
    };
    fetchCatagory();
    console.log(catagories);
  }, []);
  return (
    <div className="container-fluid ">
      <div className="row">
        <h1 className="h1 fw-bold text-center mt-2">Catagories</h1>
        <div className="col-12 d-flex flex-wrap justify-content-center ">
          <Link to={"./products"}>
            {" "}
            <Button variant="dark m-1">All</Button>
          </Link>
          {catagories.map((card) => (
            <Link to={`./catagories/${card}`}>
              <div className="ctgry-btn   ">
                <Button variant="dark m-1">{card}</Button>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Catagories;
