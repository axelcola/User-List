import React from "react";
import "../styles/Testimony.css";

function Testimony(props) {
  return (
    <div className="container-testimony">
      <img className="image-testimony" src={props.image} alt={props.image} />
      <div className="container-texto-testimony">
        <p className="name-testimony">
          Name: {props.name} from: {props.city}
        </p>
        <p className="job-testimony">
          Job: {props.job} company: {props.company}
        </p>
        <p className="job-testimony">
          Contact: {props.email} Phone number: {props.number}
        </p>
      </div>
    </div>
  );
}
export default Testimony;

//  <div className="container-testimony">
// <img
//   className="image-testimony"
//   src={require(`../images/${props.imagen}.jpg`)}
//   alt={`Foto de ${props.imagen}`}
// />
// <div className="container-texto-testimony">
//   <p className="name-testimony">
//     {props.name} en {props.city}
//   </p>
//   <p className="job-testimony">
//     {props.bs} een {props.company}
//   </p>
//   <p className="job-testimony">{props.email}</p>
// </div>
// </div>
