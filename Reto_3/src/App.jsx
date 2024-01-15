import './App.css'
import { useState } from 'react'
const initialValues = {
  nombre: '',
  apellido: '',
  edad: '',
  peso: ''
}
export function App () {
  const [usuarios, setUsuarios] = useState(initialValues)
  const [users, setUsers] = useState()
  const handleInput = (e) => {
    e.preventDefault()
    setUsuarios({
      ...usuarios,
      [e.target.name]: e.target.value

    })
  }
  const handleSubmit = (e) => {
    e.preventDefault()
    setUsers(usuarios)
    setUsuarios(initialValues)
  }

  return (
    <>
      <div className='secction'>
        <div className='container'>
          <h1>Formulario</h1>
          <form onSubmit={handleSubmit}>
            <div className='bodyForm'>
              <label htmlFor='nombre'>Nombre
              </label>
              <input
                onChange={handleInput}
                type='text'
                placeholder='nombre'
                id='nombre'
                name='nombre'
                value={usuarios.nombre}
              />
              <label htmlFor='apellidos'>Apellidos
              </label>
              <input
                onChange={handleInput}
                type='text'
                placeholder='apellidos'
                id='apellidos'
                name='apellido'
                value={usuarios.apellido}
              />
              <label htmlFor='edad'> Edad
              </label>
              <input
                onChange={handleInput}
                type='text'
                placeholder='edad'
                id='edad'
                name='edad'
                value={usuarios.edad}
              />
              <label htmlFor='peso'>Peso
              </label>
              <input
                onChange={handleInput}
                type='text'
                placeholder='peso en Kg'
                id='peso'
                name='peso'
                value={usuarios.peso}
              />
            </div>
            <button type='submit'>Enviar</button>
          </form>
        </div>
        <div className='timeReal'>
          <h1>Tiempo real</h1>
          <p>Nombre: {usuarios.nombre}</p>
          <p>Apellidos: {usuarios.apellido}</p>
          <p>Edad: {usuarios.edad}</p>
          <p>Peso: {usuarios.peso}</p>
        </div>
        {users && (
          <div className='timeReal'>
            <h1>Usuarios</h1>
            <p>{users.nombre}</p>
            <p>{users.apellido}</p>
            <p>{users.edad}</p>
            <p>{users.peso}</p>
          </div>
        )}

      </div>
    </>
  )
}
