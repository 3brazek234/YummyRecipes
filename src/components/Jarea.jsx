import axios from 'axios'
import React, { useEffect, useState } from 'react'
import './jarea.css';
import { useParams } from 'react-router-dom';
export default function Jarea (){
const {id}= useParams();
useEffect(()=>{ getdata(id)},[])
  const [item,setItem]=useState([])
async function getdata(id){
  const dataArea=await axios.get(`https://www.themealdb.com/api/json/v1/1/filter.php?a=${id}`);
  setItem(dataArea.data.meals);
}
  return (
    <>
    <div className="container ms-auto w-75">
      <div className="row">
        {item.map((elem)=>{return (
          <>
          <div className="col-md-3">
          <figure className='f-jarea'>
        <img src={elem.strMealThumb} alt="" className='w-100' />
        <figcaption className='fc-jarea'>
        <h5>{elem.strMeal}</h5>
        </figcaption>
          </figure>
          </div>
          </>
        )})
        }
      </div>
    </div>
    </>
  )
}
{/* <p>{elem.strMeal}</p> */}