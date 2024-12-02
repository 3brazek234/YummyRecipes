import axios from 'axios'
import React, { useEffect, useState } from 'react'
import './indetails.css';
import { useParams } from 'react-router-dom';
export default function Indetails() {
    let {intro}= useParams();
    let [info , setInfo]=useState([]);
    async function getInfo(starMeal){
        let {data} = await axios.get(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${starMeal}`);
        setInfo(data.meals);
        console.log(data.meals);
    }

    useEffect(()=>{ getInfo(intro) },[])
  return (
    <div>
        <div className="container mx-auto w-75 g-3 p-4 ">
            <div className="row">
            { info.map((item , index )=> <div className='col-md-3' key={index}>
              <figure className='ing-fig'>
              <img src={item.strMealThumb} className='w-100' />
              <figcaption className='ing-caption'>
                <h3>{ item.strMeal}</h3>
              </figcaption>
              </figure>
            </div> ) }
            </div> 
        </div>
    </div>
  )
}
