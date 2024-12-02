import axios from "axios";
import React, { useEffect, useState } from "react";
import "./main.css";
import { Link } from "react-router-dom";

export default function Main() {
  useEffect(() => {
    getData();
  }, []);
  let [meal, setMeal] = useState([]);
  async function getData() {
    let data = await axios.get(
      "https://www.themealdb.com/api/json/v1/1/search.php?s="
    );
    setMeal(data.data.meals);
  }
  return (
    <>
      <div className="container mx-auto w-75 p-5">
        <div className="row">
          {meal.map((item, index) => {
            return (
              <>
                <div className="col-3" key={index}>
                 <Link to={`/maindetails/${item.idMeal}`}>
                 <figure className="parent position-relative">
                    <img src={item.strMealThumb} alt="meals" className="w-100 rounded"/>
                    <figcaption className="caption position-absolute top-0 w-100 h-100">
                      <h3>{item.strMeal}</h3>
                    </figcaption>
                  </figure>
                  </Link>
                </div>
              </>
            );
          })}
        </div>
      </div>
    </>
  );
}
