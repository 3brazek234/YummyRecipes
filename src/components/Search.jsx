import React, { useState, useEffect } from "react";
import './search.css';
export default function App() {
  const [searchQuery, setSearchQuery] = useState("");
  const [meals, setMeals] = useState([]);

  // Fetch meals based on the search query
  useEffect(() => {
    if (searchQuery !== "") {
      fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${searchQuery}`)
        .then((response) => response.json())
        .then((data) => {
          if (data.meals) {
            setMeals(data.meals);
          } else {
            setMeals([]);
          }
        })
        .catch((error) => console.error("Error fetching data:", error));
    }
  }, [searchQuery]);

  return (
    <div className="container">
      <h1 className="text-center my-3">Meal Search</h1>

      {/* Search Inputs */}
      <div className="d-flex justify-content-around mb-3">
        <input
          type="text"
          placeholder="Search By Name ..."
          className="form-control w-50"
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>

      {/* Results */}
      <div className="row">
        {meals.length > 0 ? (
          meals.map((meal) => (
            <div className="col-md-3 mb-3" key={meal.idMeal}>
              <div className="card">
                <img
                  src={meal.strMealThumb}
                  className="card-img-top"
                  alt={meal.strMeal}
                />
                <div className="card-body">
                  <h5 className="card-title">{meal.strMeal}</h5>
                </div>
              </div>
            </div>
          ))
        ) : (
          <p className="text-center">No meals found.</p>
        )}
      </div>
    </div>
  );
}
