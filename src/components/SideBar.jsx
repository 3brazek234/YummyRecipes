import React from "react";
import "./sidebar.css";
import img from "../img1.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faShareNodes,
  faGlobe,
} from "@fortawesome/free-solid-svg-icons";
import $ from "jquery";
import { Link } from "react-router-dom";

export default function SideBar() {
  // function clicking() {
  //   $(".demo").animate({ width: "toggle" }, 500);
  // }
  function clicking(){
   
    $(".cont").animate({width:'toggle'} , 500)
  }

  
  return (
    <>
     <div className="over">
    <aside>
        <div className="cont">
            <ul>
                <li><Link to="search" className="text-decoration-none text-white">Search</Link></li>
                <li><Link to="categrous" className="text-decoration-none text-white">Categrous</Link></li>
                <li><Link to="area" className="text-decoration-none text-white">Area</Link></li>
                <li><Link to="ingrediants" className="text-decoration-none text-white">Ingrediants</Link></li>
                <li><Link to="contact" className="text-decoration-none text-white">Contact Us</Link></li>
            </ul>
        </div> 
        <div className="right bg-white">
            <img src={img} className="w-75" alt=""/>
            <FontAwesomeIcon
          icon={faBars}
          size="2x"
          onClick={() => clicking()}
        />
            <div className="icons">
            <FontAwesomeIcon icon={faGlobe} />
          <FontAwesomeIcon icon={faShareNodes} />
            </div>
</div>

    </aside>
   </div>
    
    </>
  );
}

{/* <aside>
<div className="container-fluid">
<div className="row door">
    <div className="col-9 demo">
      <div>
        <ul>
          <li>
            <Link to="search" className="text-decoration-none">Search</Link>
          </li>
          <li>
            <Link to="categrous" className="text-decoration-none">Categrous</Link>
          </li>
          <li><Link to="area" className="text-decoration-none">Area</Link></li>
          <li> <Link to="ingrediants" className="text-decoration-none">Ingrediants</Link> </li>
          <li>
            <Link to="contact" className="text-decoration-none">Contact Us</Link>
          </li>
        </ul>
      </div>
    </div>
    <div className="col-3 bg-dark-subtle">
      <div className="items d-flex flex-column align-content-center justify-content-between   ">
        <img src={img} alt="" />
        <FontAwesomeIcon
          icon={faBars}
          size="2x"
          onClick={() => clicking()}
        />

        <div className="lower ">
          <FontAwesomeIcon icon={faGlobe} />
          <FontAwesomeIcon icon={faShareNodes} />
        </div>
      </div>
    </div>
    <div className="items">
<img src={img} alt="Yummy Logo" />
<FontAwesomeIcon
  icon={faBars}
  size="2x"
  onClick={() => clicking()}
/>
<div className="lower">
  <FontAwesomeIcon icon={faGlobe} size="2x" />
  <FontAwesomeIcon icon={faShareNodes} size="2x" />
</div>
</div>

  </div>
</div>
</aside>  */}
