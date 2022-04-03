import React from "react";
import "../styles/Testimonio.css";

function Testimonio(props) {
  return (
    <div className="contenedor-testimonio">
      <img
        className="imagen-testimonio"
        src={require(`../images/${props.imagen}.jpg`)}
        alt={`Foto de ${props.imagen}`}
      />
      <div className="container-texto-testimonio">
        <p className="nombre-testimonio">
          {props.nombre} en {props.pais}
        </p>
        <p className="cargo-testimonio">
          {props.cargo} een {props.empresa}
        </p>
        <p className="texto-testimonio">{props.testimonio}</p>
      </div>
    </div>
  );
}
export default Testimonio;
