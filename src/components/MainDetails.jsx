import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import './mainDetails.css';
export default function MainDetails() {
  let {meal}=useParams();
    let [info , setInfo]=useState([]);
    async function getDetails(id){
        let {data}= await axios.get(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id} `)
        setInfo(data.meals);
        console.log(data.meals)
    }
    useEffect(()=>{ getDetails(meal) },[])
  return (
    <div className='container p-4'>
      
       {info.map((meat ,index)=> <div className='row' key={index}>
       <div className='col-md-4' >
        <img src={meat.strMealThumb} alt="" className='w-100 rounded' />
       </div> 
      <div className="col-md-8 text">
        <h1 className='head'>Instructions</h1>
        <p>{meat.strInstructions}</p>
        <h3>Area: <span>{meat.strArea}</span> </h3>
        <h3>Category : <span>{meat.strCategory}</span> </h3>
      </div> 
       </div>
      )
       
       }
      
    </div>
  )
}
