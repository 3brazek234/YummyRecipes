import React from 'react'
import axios from "axios";
import  { useEffect, useState } from "react";
import './categrous.css'
import { Link } from 'react-router-dom';
export default function Categrous() {
  useEffect(() => {
    getCategroy();
  }, []);
  let [item, setItem] = useState([]);
  async function getCategroy() {
    let cate = await axios.get(
      'https://www.themealdb.com/api/json/v1/1/categories.php');
    setItem(cate.data.categories);
    console.log(cate);
  }
  return (
    <div className='secound container g-5'>
      <div className="row">
        {item.map((element)=>{return (
          <>
          <div className="col-3">
            <Link to={`/details/${element.strCategory}`}>
            <figure className='dad position-relative'>
              <img src={element.strCategoryThumb} alt="" className='w-100' />
              <figcaption className='child position-absolute top-0 w-100 h-100 text-center'>
                <h2> {element.strCategory} </h2>
                <p> {element.strCategoryDescription.split(' ').slice(0,15).join(' ')} </p>
              </figcaption>
            </figure>
            </Link>
          </div>
          </>
        )})}
      </div>

    </div>
  )
}
