import { useState } from 'react';
import './App.css'
export default function App() {
  const [clic, setClick] = useState(0);
  const [texto, setTexto] = useState("")
  const [textboton, setTextBoton] = useState("")
  const handleImputChange = (e) => {
    e.preventDefault();
    const valor = e.target.value
    setTexto(valor)
  }
  const enviartexto = () => {
    setTextBoton(texto)
    setTexto("")
  }
  const Incremet = () => {
    setClick(clic + 1);
  }
  const decrement = () => {
    if (clic <= 0) return;
    setClick(clic - 1);
  }
  const resetear = () => {
    setClick(0)
  }
  return (
    <div className='principal'>
      <h1>Reto</h1>
      <div className='head'>
        <input onChange={handleImputChange} value={texto} type="text" placeholder="Escriba aquí" />
        <button onClick={enviartexto}>enviar</button>
      </div>
      <div>
        
        <p>{textboton}</p>
        <button onClick={Incremet}>Incremetar</button>
        <button onClick={decrement}>Decrementar</button>
        <button onClick={resetear}>Resetear</button>
        <p>{clic}</p>
      </div>

    </div>
  );
}