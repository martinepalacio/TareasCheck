import React, {useState} from 'react';
import "./styles.css";
import AddTask from "./components/AddTask.jsx";
import Tareas from "./components/tareas.jsx";
import Filter from "./components/filtro.jsx";
import tareasjson from "./components/tareas.json";

export default function App() {
  const [tasks, setTasks] = useState(tareasjson);

  const onAddTask = (newTask) => {
    setTasks([...tasks, newTask]);
  }

  return (
    <div>
      <h1>Tareas Check</h1>
      <div>
        <Filter />
        <hr />
        <AddTask onAddTask={onAddTask} />
        <Tareas tasks={tasks} />
        <div className="conteiner">
          {/*<Todas />
            <Activos />
          <Completadas />*/}
        </div>
      </div>
    </div>
  );
}
