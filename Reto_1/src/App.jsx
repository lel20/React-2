import { useEffect } from "react"
import { useState, } from "react"
const factRandom= 'https://catfact.ninja/fact'
// const imageRandom=`https://cataas.com/cat/says/${fristword}`
export function App() {
    const [randoGatito, setRandomGatitos]= useState(null)
    const obternerGatitos= ()=>{
        const obtenerDatosGatos= fetch(factRandom)
        .then((res)=>res.json())
        .then(datos=>{
            const {fact}= datos
            setRandomGatitos(fact)
            const fristword= fact.split(' ', 1).join(' ')
            console.log(fristword)
        })
    }
    useEffect(()=>{
        obternerGatitos()
    },[])
    return (
        <div>{randoGatito}</div>
    )
}