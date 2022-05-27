import React, { Component } from "react";
import tareasjson from "./tareas.json";
import Tarea from "./tarea.jsx";

class Tareas extends Component {
  state = {
    tareas: tareasjson
  };
  agregarTarea = (e) => {
    console.log(e);
  };

  render() {
    return (
      <div>
        {this.state.tareas.map((e) => (
          <Tarea tarea={e} key={e.id} />
        ))}
      </div>
    );
  }
}
export default Tareas;
