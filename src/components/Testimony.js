import React from "react";
import "../styles/Testimony.css";

function Testimony(props) {
  return (
    <div className="container-testimony">
      <img
        className="image-testimony"
        src={props.image}
        alt={`${props.first}`}
      />
      <div className="container-texto-testimony">
        <p className="name-testimony">
          Name: {props.title} {props.first} {props.last}
        </p>
        <p>
          From {props.city}
          {props.state}
        </p>
        <p>
          {" "}
          Date: {props.date} ({props.age}){" "}
        </p>

        <p className="job-testimony">
          Contact: {props.email} Phone number: {props.phone}
        </p>
      </div>
    </div>
  );
}
export default Testimony;
