import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import './details.css'
export default function Details() {
    let {demo}=useParams();
    let [user , setUser]=useState([]);
    async function detailsCate(dot){
        let {data} = await axios.get(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${dot}`);
        setUser(data.meals);
        console.log(data)
    }
    useEffect(()=>{ detailsCate(demo)  },[])
  return (
    <div>
      <div className="container">
        <div className="row">
            {user.map((item , index)=> <div className='col-md-3 p-4' key={index}>
            <figure className='parent-details'>
            <img src={item.strMealThumb} alt="" className='w-100 rounded' />
            <figcaption className='child-details'>
                <h3 > {item.strMeal} </h3>
            </figcaption>
            </figure>
            </div> )}
        </div>
      </div>
    </div>
  )
}
