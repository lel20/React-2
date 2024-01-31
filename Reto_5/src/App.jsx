import React, { useState } from 'react'
import { Datos } from './pages/Thanks'
import list from './assets/images/icon-list.svg'
import desktop from './assets/images/illustration-sign-up-desktop.svg'
import mobile from './assets/images/illustration-sign-up-mobile.svg'
import { useNavigate } from 'react-router-dom'

function App () {
  const navigate = useNavigate()
  const [email, setEmail] = useState('')
  const [valid, setValid] = useState(true)
  const handleChange = (e) => {
    e.preventDefault()
    setEmail(e.target.value)
  }
  const valitadation = async (e) => {
    e.preventDefault()
    const regedix = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9]+\.[A-Za-z]+$/
    if (regedix.test(email)) {
      setValid(valid)
      Datos(email)
      return navigate('/thanks')
    } else {
      setValid(false)
      console.log('no valido')
    }
  }
  return (
    <>
      <div className='w-[100%]  md:w-[80%] md:h-[60%] flex flex-col-reverse md:flex-row  bg-White md:rounded-3xl m-auto pb-2 px-5'>

        <div className='px-8 py-10 text-Charcoal_Grey flex flex-col md:w-[50%]'>
          <h1 className='text-5xl text-start font-extrabold'>   Stay updated!</h1>
          <p className='mt-8'>Join 60,000+ product managers receiving monthly updates on:</p>
          <div className='mt-7'>
            <div className='flex gap-4 py-2'>
              <span>
                <img className='w-6' src={list} alt='list' />
              </span>
              <p className='text-start'>Product discovery and building what matters</p>
            </div>
            <div className='flex gap-4 py-2'>
              <span>
                <img className='w-6' src={list} alt='list' />
              </span>
              <p className='text-start'>Measuring to ensure updates are a success</p>
            </div>
            <div className='flex gap-4 py-2'>
              <span>
                <img className='w-6 md:w-4 lg:w-5' src={list} alt='list' />
              </span>
              <p className='text-start'>And much more!</p>
            </div>
          </div>
          <div className='flex flex-col'>
            {valid
              ? <label className='text-start mt-8 text-sm font-extrabold' htmlFor='email'>Email address</label>
              : <div className='flex justify-between'>
                <label className='text-start  text-sm font-extrabold' htmlFor='email'>Email address</label>
                <p className='text-red-700 text-sm  font-extrabold'> Se requiere un email válido</p>
              </div>}

            <input onChange={handleChange} className='w-full border h-12 rounded-xl px-4' type='email' name='email' id='email' placeholder='email@company.com' />
            <button onClick={valitadation} className='w-full bg-Dark_Slate_Grey text-White mt-6 rounded-lg h-12 hover:bg-gradient-to-r from-Pink via-Tomato to-orange-600 ...'>Subscribe to monthly newsletter</button>
          </div>
        </div>
        <div className=' px-5 md:px-0 py-5 flex w-[95%] md:w-[60%] justify-center'>
          <img className='hidden md:flex' src={desktop} alt='desktop' />
          <img className='md:hidden w-full' src={mobile} alt='mobile' />
        </div>
      </div>
      <div className='text-white w-full text-center mt-8 pb-8'>
        Challenge by <a className='text-orange-700' href='https://www.frontendmentor.io?ref=challenge' target='_blank' rel='noreferrer'>Frontend Mentor</a>.
        Coded by <a className='text-orange-700' href='#'>Leonardo Vicente Paredes Rvas</a>.
      </div>

    </>
  )
}

export default App
