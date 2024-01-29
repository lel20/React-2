import jeremy from '../assets/images/image-jeremy.png'
export function CardJeremy ({ handle }) {
  return (
    <div className='container col-span-12  md:col-span-5 lg:col-span-3  bg-indigo-900 rounded-xl min-h-60 text-white'>
      <div className='grid grid-cols-6 ps-4 pt-6 gap-10 pb-20 bg-indigo-600 rounded-xl'>
        <img src={jeremy} alt='Jeremy' className=' border-4 rounded-full col-span-3 ' />
        <div className='col-span-4 md:col-span-5 lg:col-span-full'>
          <span className='text-sm text-slate-200'> Report for</span>
          <h1 className='text-3xl'>Jeremy Robson</h1>
        </div>
      </div>
      <div className='grid grid-cols-12 px-6 gap-2 gap-y-4 text-indigo-300 py-6'>
        <button onClick={handle} className='w-4/5 hover:text-white col-span-4 md:col-span-12 lg:col-span-12 m-auto md:m-0'>Daily</button>
        <button className='w-4/5 hover:text-white  col-span-4 md:col-span-12 lg:col-span-12 m-auto md:m-0'>Weekly</button>
        <button className='w-4/5 hover:text-white col-span-4 md:col-span-12 lg:col-span-12 m-auto md:m-0'>Monthly</button>
      </div>
    </div>
  )
}
  <img src='' alt='imagen' />
