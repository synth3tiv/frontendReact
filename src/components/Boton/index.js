import React, { useState } from "react";
import "./styles.css";
export function Boton() {
  const [textoBoton, setTextoBoton] = useState("Saludar");
  return (
    <button
      className="boton-componente"
      onClick={() => {
        setTextoBoton("Hola Jordi!");
      }}
    >
      {textoBoton}
    </button>
  );
};