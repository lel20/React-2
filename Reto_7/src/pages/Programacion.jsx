import { useEffect, useState } from "react";
import { question } from "./data";
function Programacion() {
  const filtrar = question.filter(
    (programacion) => programacion.categoria === "programacion"
  );
  const [preguta, setPregunta] = useState(filtrar);
  const [indice, setIndice] = useState(0);
  console.log(preguta);
  const handleClick = () => {
    setIndice(indice + 1);
  };
  return (
    <div>
      {preguta[indice]["pregunta"]}
      <ul>
        {preguta[indice]["opciones"].map((opcion) => (
          <li key={opcion}>{opcion}</li>
        ))}
      </ul>
      <button onClick={handleClick}>Siguiente</button>
    </div>
  );
}

export default Programacion;
