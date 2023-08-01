import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";

const Categories = () => {
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    const fetchCategory = async () => {
      const response = await fetch(
        "https://fakestoreapi.com/products/categories"
      );
      const data = await response.json();
      setCategories(data);
    };
    fetchCategory();
  }, []);
  return (
    <div className="container-fluid ">
      <div className="row">
        <h1 className="h1 fw-bold text-center mt-2">Categories</h1>
        <div className="col-12 d-flex flex-wrap justify-content-center ">
          <Link to={"./products"}>
            {" "}
            <Button variant="dark m-1">All</Button>
          </Link>
          {categories.map((card) => (
            <Link to={`./categories/${card}`}>
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

export default Categories;
