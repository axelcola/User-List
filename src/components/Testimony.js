import React from "react";
import "../styles/Testimony.css";

function Testimony(props) {
  return (
    <div className="container-testimony">
      <img className="image-testimony" src={props.image} alt={props.image} />
      <div className="container-texto-testimony">
        <p className="name-testimony">
          Name: {props.name} {props.city}
        </p>
        <p className="job-testimony">Contact: {props.email}</p>
      </div>
    </div>
  );
}
export default Testimony;
