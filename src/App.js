import "./styles.css";
import Botones from "./components/button.jsx";
import Tareas from "./components/tareas.jsx";
import Filter from "./components/filtro.jsx";

export default function App() {
  return (
    <div>
      <h1>Tareas Check</h1>
      <div>
        <Filter />
        <hr />
        <Botones />
        <Tareas />
        <div className="conteiner">
          {/*<Todas />
            <Activos />
          <Completadas />*/}
        </div>
      </div>
    </div>
  );
}
