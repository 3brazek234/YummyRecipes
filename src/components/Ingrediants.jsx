import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faBowlFood} from "@fortawesome/free-solid-svg-icons";
import { Link } from 'react-router-dom';

export default function Ingrediants() {
  useEffect(()=>{ getDetails()},[]);
  let [ingr , setIngre] =useState([]);
async function getDetails(){
  let {data}=await axios.get ('https://www.themealdb.com/api/json/v1/1/list.php?i=list');
  const result =data.meals.slice(0,50);
  setIngre(result)

 
}

return (
    <div className="container mx-auto w-75 py-4">
      <div className="row my-3 p-4">
        {ingr.map((itim ,index)=> 
        <div className="col-md-3 my-4" key={index}>
          <div className=" p-5">
            <div className="position-relative text-center ">
            <FontAwesomeIcon icon={faBowlFood} size='4x' className='text-success bg-opacity-10 ' />
            <div className="text-center text-white mt-3">
        
              <Link to={`/indetails/${itim.strIngredient}`}>
              <button className='btn btn-outline-light px-3'>{itim.strIngredient}</button> 
              </Link>
  
            </div>
            </div>
            
            </div>    
          </div>
        )}
      </div>
    </div>

)}
{/*  */}