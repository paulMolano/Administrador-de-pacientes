import { useState, useEffect } from "react";
import Cita from "./Components/Cita";
import Formulario from "./Components/Formulario";

function App() {
  //Citas en localStorage
  let citasIniciales = JSON.parse(localStorage.getItem("citas"));
  if (!citasIniciales) {
    citasIniciales = [];
  }

  //Arreglo de citas
  const [citas, guardasCitas] = useState(citasIniciales);

  //Probando el useEffect
  useEffect(() => {
    if (citasIniciales) {
      localStorage.setItem("citas", JSON.stringify(citas));
    } else {
      localStorage.setItem("citas", JSON.stringify([]));
    }
  }, [citas, citasIniciales]);

  //Función que lea las citas y añada la nueva
  const crearCita = (cita) => {
    guardasCitas([...citas, cita]);
  };

  //Función que elimina una cita por su id
  const eliminarCita = (id) => {
    const nuevasCitas = citas.filter((cita) => id !== cita.id);
    guardasCitas(nuevasCitas);
  };

  //Titulo citas condicional
  const titulo = citas.length ? (
    <h2>Administra tus citas</h2>
  ) : (
    <h2>No hay citas</h2>
  );

  return (
    <>
      <h1>Administrador de pacientes</h1>
      <div className="container">
        <div className="row">
          <div className="one-half column">
            <Formulario crearCita={crearCita} />
          </div>
          <div className="one-half column">
            {titulo}
            {citas.map((cita) => (
              <Cita key={cita.id} cita={cita} eliminarCita={eliminarCita} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
