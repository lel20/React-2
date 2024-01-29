export function CardTemp ({ imagen, color, name, hours, previous }) {
  return (
    <div className={`text-white col-span-12 md:col-span-6 lg:col-span-4 h-60 rounded-xl relative ${color}`}>
      <img className='ms-auto' src={imagen} alt='work' />
      <div className='absolute h-52 bg-indigo-900 hover:bg-indigo-600 rounded-xl z-10 w-full top-9 ps-8 '>
        <p className='py-4'>{name}</p>
        <h2 className='text-6xl'>{hours}</h2>
        <p className='text-sm py-4'>{previous}</p>
      </div>
    </div>

  )
}
