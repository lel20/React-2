const Thansk = ({ data, actualizarDatos }) => {
  const handleChanged = (e) => {
    e.preventDefault()
    actualizarDatos(e.target.name, e.target.value)
  }
  return (
    <div className='container flex flex-col w-full gap-y-4 justify-center items-center px-2 py-5'>
      <h1>Datos Domiciliarios</h1>
      <div className='flex flex-col md:flex-row gap-2 w-full'>
        <div className='flex flex-col gap-2 w-full'>
          <label htmlFor='tipo'>Tipo de via</label>
          <select
            id='tipo'
            name='tipo'
            defaultValue={data.tipo}
            onChange={handleChanged}
            className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
          >
            <option value='ns'>No selecionado</option>
            <option value='calle'>Calle</option>
            <option value='avenida'>Avenida</option>
            <option value='via'>Vía</option>
            <option value='paseo'>Paseo</option>
            <option value='plaza'>Plaza</option>
          </select>
        </div>
        <div className='flex flex-col gap-2 w-full'>
          <label htmlFor='via'>Nombre de la vía</label>
          <input
            className='border rounded-md h-9 px-2 w-full'
            id='via'
            name='via'
            type='text'
            placeholder='jardines'
            defaultValue={data.via}
            onChange={handleChanged}
          />
        </div>
        <div className='flex flex-col gap-2 w-full'>
          <label htmlFor='numero'>Número</label>
          <input
            className='border rounded-md h-9 px-4 w-full'
            id='numero'
            name='numero'
            type='number'
            placeholder='0'
            defaultValue={data.numero}
            onChange={handleChanged}
          />
        </div>
        <div className='flex flex-col gap-2 w-full'>
          <label htmlFor='puerta'>Puerta</label>
          <input
            className='border rounded-md h-9 px-4 w-full'
            id='puerta'
            name='puerta'
            type='text'
            placeholder='E'
            defaultValue={data.puerta}
            onChange={handleChanged}
          />
        </div>

      </div>
      <div className='flex flex-col md:flex-row gap-2 w-full'>
        <div className='flex flex-col gap-2 w-full'>
          <label htmlFor='pais'>Pais</label>
          <select
            id='pais'
            name='pais'
            defaultValue={data.pais}
            onChange={handleChanged}
            className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
          >
            <option value='ns'>No selecionado</option>
            <option value='españa'>España</option>
            <option value='ecuador'>Ecuador</option>
            <option value='alemania'>Alemania</option>
            <option value='andorra'>Andorra</option>
            <option value='austria'>Austria</option>
          </select>
        </div>
        <div className='flex flex-col gap-2 w-full'>
          <label htmlFor='ciudad'>Ciudad</label>
          <input
            className='border rounded-md h-9 px-4 w-full'
            id='ciudad'
            name='ciudad'
            type='text'
            defaultValue={data.ciudad}
            onChange={handleChanged}
          />
        </div>
        <div className='flex flex-col gap-2 w-full'>
          <label htmlFor='municipio'>Municipio</label>
          <input
            className='border rounded-md h-9 px-4 w-full'
            id='municipio'
            name='municipio'
            type='text'
            defaultValue={data.municipio}
            onChange={handleChanged}
          />
        </div>
      </div>

    </div>
  )
}
export default Thansk
