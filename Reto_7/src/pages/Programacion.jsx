import { useEffect, useState } from "react";
import { question } from "./data";
import Question from "../component/Question";
function Programacion() {
  const filtrar = question.filter(
    (programacion) => programacion.categoria === "programacion"
  );
  const [preguta, setPregunta] = useState(filtrar);
  const [indice, setIndice] = useState(0);
  const handleClickAtras = () => {
    if (indice <= 0) return;
    setIndice(indice - 1);
  };
  const handleClickSiguiente = () => {
    if (indice >= preguta.length - 1) return;
    else setIndice(indice + 1);
  };
  return (
    <>
      <Question question={preguta} indice={indice} />
      <div className="gap-x-10 flex justify-end">
        <button onClick={handleClickAtras}>Atras</button>
        <button onClick={handleClickSiguiente}>Siguiente</button>
      </div>
    </>
  );
}

export default Programacion;
