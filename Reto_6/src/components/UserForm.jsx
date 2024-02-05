function UserForm ({ data, actualizarDatos }) {
  const handleChanged = (e) => {
    e.preventDefault()
    actualizarDatos(e.target.name, e.target.value)
  }

  return (
    <div className='container flex flex-col w-full gap-y-4 justify-center items-center px-2 py-5'>
      <h1>Datos Personales</h1>
      <div className='flex flex-col md:flex-row gap-2 w-full'>
        <div className='flex flex-col gap-2 w-full'>
          <label htmlFor='nombre'>Nombre</label>
          <input
            className='border rounded-md h-9 px-2 w-full'
            name='nombre'
            id='nombre'
            type='text'
            placeholder='Angel Leonardo'
            defaultValue={data.nombre}
            onChange={handleChanged}
          />
        </div>
        <div className='flex flex-col gap-2 w-full'>
          <label htmlFor='apellido1'>
            Primer Apellido
          </label>
          <input
            className='border rounded-md h-9 px-2 w-full'
            name='apellido1'
            id='apellido1'
            type='text'
            placeholder='Jimenez'
            defaultValue={data.apellido1}
            onChange={handleChanged}
          />
        </div>
        <div className='flex flex-col gap-2 w-full'>
          <label htmlFor='apellido2'>Segundo Apellido</label>
          <input
            className='border rounded-md h-9 px-4 w-full'
            id='apellido2'
            name='apellido2'
            type='text'
            placeholder='Rodriguez'
            defaultValue={data.apellido1}
            onChange={handleChanged}
          />
        </div>

      </div>
      <div className='flex flex-col md:flex-row gap-2 w-full'>
        <div className='flex flex-col gap-2 w-full'>
          <label htmlFor='nif'>NIF</label>
          <input
            className='border rounded-md h-9 px-4 w-full'
            id='nif'
            name='nif'
            type='text'
            placeholder='12345678D'
            defaultValue={data.nif}
            onChange={handleChanged}
          />
        </div>
        <div className='flex flex-col gap-2 w-full'>
          <label htmlFor='email'>Email</label>
          <input
            className='border rounded-md h-9 px-4 w-full'
            id='email'
            name='email'
            type='email'
            placeholder='name@gmail.com'
            defaultValue={data.email}
            onChange={handleChanged}
          />
        </div>
        <div className='flex flex-col gap-2 w-full'>
          <label htmlFor='sexo'>Sexo</label>
          <select
            id='sexo'
            name='sexo'
            defaultValue={data.sexo}
            onChange={handleChanged}
            className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
          >
            <option value='ns'>No selecionado</option>
            <option value='m'>Masculino</option>
            <option value='f'>Femenino</option>
          </select>
        </div>
      </div>

      <div className='flex flex-col md:flex-row gap-2 w-full'>
        <div className='flex flex-col gap-2 w-full'>
          <label htmlFor='nacimiento'>Fecha de Nacimiento</label>
          <input
            className='border rounded-md h-9 px-4 w-full'
            id='nacimiento'
            name='nacimiento'
            type='date'
            placeholder='dd/mm/aaaa'
            defaultValue={data.nacimiento}
            onChange={handleChanged}
          />
        </div>

      </div>
    </div>

  )
}

export default UserForm
