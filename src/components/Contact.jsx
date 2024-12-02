import React from "react";
import "./contact.css";
export default function Contact() {
  return (
    <>
    <div className="cont container d-flex flex-column justify-content-center align-content-center ">
     <div className="mt-5">
     <h1>Contact Us</h1>
      <div className="group mt-5">
        <div className="first d-flex p-2 mt-5">
        <input type="text" className="form-control w-75 mx-2 " placeholder="Enter Your Name" />
        <input type="email" className="form-control w-75 mx-2 " placeholder="Enter Your Email " />
        </div>
        <div className="first d-flex p-2 ">
        <input type="number" className="form-control w-75 mx-2" placeholder="Enter Your Phone" />
        <input type="number" className="form-control w-75 mx-2" placeholder="Enter Your Age " />
        </div>
        <div className="first d-flex p-2">
        <input type="password" className="form-control w-75 mx-2" placeholder="Enter Your Password" />
        <input type="password" className="form-control w-75 mx-2" placeholder="Enter Your Password Again " />
        </div>
      </div>
     </div>
    </div>
    </>
  );
}
