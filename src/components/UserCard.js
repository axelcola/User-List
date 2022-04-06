import React from "react";
import "../styles/UserCard.css";

function UserCard(props) {
  return (
    <div className="container-user">
      <img className="image-user" src={props.image} alt={`${props.first}`} />
      <div className="container-texto-user">
        <p className="name-user">
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

        <p className="job-user">
          Contact: {props.email} Phone number: {props.phone}
        </p>
      </div>
    </div>
  );
}
export default UserCard;
