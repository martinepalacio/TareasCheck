import React, { useState } from "react";
import "./tareas.jsx";

function Botones() {
  const [texto, setText] = useState("");

  const onChangeInput = (e) => {
    setText(e.target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    console.log(texto);
  };
  return (
    <form onSubmit={onSubmit}>
      <input
        onChange={onChangeInput}
        name="descripcion"
        type="text"
        placeholder="Agregue una nueva tarea"
        value={texto}
      />
      <button type="submit">Agregar</button>
    </form>
  );
}
export default Botones;
