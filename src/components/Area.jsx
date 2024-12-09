import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faCity} from "@fortawesome/free-solid-svg-icons";
import { Link } from 'react-router-dom';
export default function Area() {
  useEffect(()=>{ gettingData()},[]);
  let [areaInfo , setInfo] =useState([]);
async function gettingData(){
  let areaData=await axios.get ('https://www.themealdb.com/api/json/v1/1/list.php?a=list');
  setInfo(areaData.data.meals)
  console.log( areaData);
}
  return ( <>
    <div className='container mx-auto w-75 py-4'>
    <div className="row my-3 p-4">
    {areaInfo.map((ite)=>{return (
          <>
          <div className="col-md-3 my-4">
          <div className=" p-5">
            <div className="position-relative text-center ">
            <FontAwesomeIcon icon={faCity} size='4x' className='text-danger ' />
            <div className="text-center text-white mt-3">
          <Link to={`/jarea/${ite.strArea }`}>
          <button className='btn btn-outline-light px-3'>{ite.strArea}</button> 
          </Link>
            </div>
            </div>
            
            </div>    
          </div>
          </>
        )

        })}

    </div>
    </div>
    </>)
}

// import axios from 'axios'
// import React, { useEffect, useState } from 'react'
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import {faCity} from "@fortawesome/free-solid-svg-icons";
// import { Link } from 'react-router-dom';
// import './area.css'
// export default function Area() {
//   useEffect(()=>{ gettingData()},[]);
//   let [areaInfo , setInfo] =useState([]);
// async function gettingData(){
//   let areaData=await axios.get ('https://www.themealdb.com/api/json/v1/1/list.php?a=list');
//   setInfo(areaData.data.meals)
//   console.log( areaData);
// }
//   return ( <>
//     <div className='container mx-auto w-75 py-4'>
//     <div className="row my-3 p-4">
//     {areaInfo.map((ite)=>{return (
//           <>
//           <div className="col-3 my-4">
//           <div className="  rounded-2 border p-5">
//             <div className="position-relative text-center ">
//             <FontAwesomeIcon icon={faCity} size='4x' className='text-danger ' />
//             <div className="text-center text-white mt-3">
//           <Link to={`/jarea/${ite.strArea }`}>
//           <button className='btn btn-outline-light px-3'>{ite.strArea}</button> 
//           </Link>
//             </div>
//             </div>
            
//             </div>    
//           </div>
//           </>
//         )

//         })}

//     </div>
//     </div>
//     </>)
// }
