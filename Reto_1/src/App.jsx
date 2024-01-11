import './App.css';
import { useEffect } from "react"
import { useState, } from "react"
const factRandom = 'https://catfact.ninja/fact'
export function App() {
  //se crea un estado para guardar los datos de la api de gatitos
  const [randonGatito, setRandomGatitos] = useState('')
  //se crea un estado para guardar el valor de la primera palabra de la api de gatitos
  const [firstword, getFirstWord] = useState('')

  //se crea una funcion para obtener los datos de la api de gatitos
  const obternerGatitos = () => {
    fetch(factRandom)
      .then((res) => res.json())
      .then((datos) => setRandomGatitos(datos.fact))
  }
  //se crea un useEffect para que se ejecute la funcion de obtener los datos de la api de gatitos. Ca
  useEffect(() => {
    //se ejecuta la funcion de obtener los datos de la api de gatitos
    obternerGatitos()
    // este useEffect se ejecuta cuando se carga la pagina
  }, [])
//se rea un segundo useEffect para que se ejecute la función de obtener la primera palabra de la api de gatitos
  useEffect(() => {
    //si no hay datos dentro del estado de randonGatito no se ejecuta la función
    if (!randonGatito) return
    //si hay datos dentro del estado de randonGatito se obtiene la primera palabra de la api de gatitos mediante el metodo split
    const palabra = randonGatito.split(" ", 1).join(" ")
    //se crea una constante para guardar la url de las imagenes de gatitos y esta se le pasa la constante de palabra para que se muestre en la imagen
    const url = `https://cataas.com/cat/says/${palabra}?fontSize=50&fontColor=red`
    
    getFirstWord(url)
    // este useEffect se ejecuta cuando cambia el estado de randonGatito
  },[randonGatito])

  return (
    <div>
      <p>{randonGatito}</p>
      <img src={firstword} alt="" />
    </div>
  )
}