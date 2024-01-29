import list from '../assets/images/icon-list.svg'
import { useNavigate } from 'react-router-dom'

let dato = ''
export function Datos (datos) {
  dato = datos
}
function Thanks () {
  const navigate = useNavigate()
  const handleClick = () => {
    window.alert('Your message has been discarded')
    navigate('/')
  }
  return (
    <div className='bg-white w:full h-screen md:h-[50%] md:w-[40%] m-auto md:rounded-2xl px-8  py-10 text-Dark_Slate_Grey border-b-8 relative md:static'>
      <img className='w-10 py-4' src={list} alt='list' />
      <h1 className='text-3xl font-extrabold py-2'>Thanks for subscribing!</h1>
      <p className='text-sm'>A confirmation email has been sent to <b>{dato}. </b>
        Please open it and click the button inside to confirm your subscription.
      </p>
      <button onClick={handleClick} className='bottom-0 absolute md:static  m-auto right-0 left-0 md:mt-8 bg-Dark_Slate_Grey w-full text-white h-10 rounded-md hover:bg-gradient-to-r from-Pink via-Tomato to-orange-600 ...'> Dismiss message</button>
    </div>
  )
}
export default Thanks
