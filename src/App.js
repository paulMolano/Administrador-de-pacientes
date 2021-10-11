import { useState } from "react";
import Formulario from "./Components/Formulario";

function App() {
  //Arreglo de citas
  const [citas, guardasCitas] = useState([]);

  //Función que lea las citas y añada la nueva
  const crearCita = (cita) => {
    guardasCitas([...citas, cita]);
  };

  return (
    <>
      <h1>Administrador de pacientes</h1>
      <div className="container">
        <div className="row">
          <div className="one-half column">
            <Formulario crearCita={crearCita} />
          </div>
          <div className="one-half column">2</div>
        </div>
      </div>
    </>
  );
}

export default App;
