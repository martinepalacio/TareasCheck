import React, { Component } from "react";
import Tarea from "./tarea.jsx";

const Tareas = ({tasks}) => {
  return (
    <div>
      {tasks.map((e) => (
        <Tarea tarea={e} key={e.id} />
      ))}
    </div>
  );
}

export default Tareas;
