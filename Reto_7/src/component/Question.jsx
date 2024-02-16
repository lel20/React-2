import React, { useState } from "react";

function Question({ question, indice }) {
  const [color, setColor]= useState(false)
  const handleClick = (e) => {
    e.preventDefault()
    if (question[indice]["respuesta"] === e.target.value)
      setColor(true)
    else
      setColor(false)
  }

  return (
    <div className="bg-cyan-700 text-white min-h-[200px] flex flex-col justify-center px-10 items-center gap-y-9">
      {question[indice]["pregunta"]}
      <ul className="w-full">
        {question[indice]["opciones"].map((opciones) => (
          <li className="mb-7" key={opciones}>
            <button
              value={opciones}
              onClick={handleClick}
              className={color ? "bg-green-500 w-full h-10 rounded-lg gap-10" :"w-full h-10 rounded-lg gap-10 hover:bg-indigo-900"}
            >
              {opciones}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Question;
