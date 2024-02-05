// Estilos
import './App.css'
// Iconos
import { TiArrowLeft, TiArrowRight } from 'react-icons/ti'
import { IoSendSharp } from 'react-icons/io5'
// Componentes
import UserForm from './components/UserForm'
import Thansk from './components/Thanks'
import { Pasos } from './components/Pasos'

// HOOKS
import { userform } from './hooks/userform'
import { useState } from 'react'
const dataForm = {
  nombre: '',
  apellido1: '',
  apellido2: '',
  nif: '',
  email: '',
  sexo: '',
  nacimiento: '',
  tipo: '',
  via: '',
  numero: '',
  puerta: '',
  pais: '',
  ciudad: ''
}
function App () {
  const [data, setData] = useState(dataForm)
  const actualizarDatos = (key, value) => {
    setData((prev) => {
      return { ...prev, [key]: value }
    })
  }
  const formComponents = [
    <UserForm data={data} actualizarDatos={actualizarDatos} />,
    <Thansk data={data} actualizarDatos={actualizarDatos} />
  ]
  const { pasoActual, componeteActual, cambiarPaso, ultimoPaso, primerPaso } = userform(formComponents)
  return (
    <>
      <section>
        <div className='container-fluid mx-auto flex justify-center'>
          <form className='w-4/5 p-2' onSubmit={(e) => cambiarPaso(pasoActual + 1, e)}>
            <Pasos pasosActual={pasoActual} />
            <div className='inputs-container'> {componeteActual}</div>
            <div className='actions flex justify-end gap-8'>
              {!primerPaso &&
                (<button className='flex border  justify-center gap-2 items-center' type='button' onClick={() => cambiarPaso(pasoActual - 1)}>
                  <TiArrowLeft />
                  <span>
                    Atras
                  </span>
                 </button>)}
              {!ultimoPaso
                ? (<button className='flex border justify-center gap-2 items-center'>
                  <span>
                    Siguiente
                  </span>
                  <TiArrowRight />
                </button>)
                : (<button className='flex border justify-center gap-2 items-center'>
                  <span>
                    Enviar
                  </span>
                  <IoSendSharp />
                   </button>)}
            </div>

          </form>
        </div>
      </section>
    </>
  )
}

export default App
