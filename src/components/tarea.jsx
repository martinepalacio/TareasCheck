import React, { Component } from "react";
import { FaTrashAlt } from "react-icons/fa";

class Tarea extends Component {
  render() {
    const tached = {
      color: this.props.tarea.estado ? "black" : "#333333",
      textDecoration: this.props.tarea.estado ? "none" : "line-trought"
    };

    return (
      <div>
        <div className="listaTareas">
          <b style={tached}>{this.props.tarea.descripcion}</b>
          <input type="checkbox" />
          <FaTrashAlt />
        </div>
      </div>
    );
  }
}
export default Tarea;
