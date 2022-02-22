import React, { useState } from "react";
import "./styles.css";
export function Boton({ parametro1 }) {
  const [textoBoton, setTextoBoton] = useState("Soy un boton");
  return (
    <button
      // className="boton-componente"
      onClick={() => {
        setTextoBoton("Soy Jordi");
      }}
    >
      {parametro1}
    </button>
  );
}
// componente boton que saluda
export function Saludo( { parametro2 } ) {
  const [textoSaludo, setSaludo] = useState("Saludar a Jordi >D");
  return (
    <button onClick={() =>{
      setSaludo("(: Hola Jordi !");
    }}>
      {parametro2}
    </button>
  );
}