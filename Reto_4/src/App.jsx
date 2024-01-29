import { CardJeremy } from './Components/Card-Yeremy'
import { CardTemp } from './Components/Card-temp'
import work from './assets/images/icon-work.svg'
import play from './assets/images/icon-play.svg'
import study from './assets/images/icon-study.svg'
import exercise from './assets/images/icon-exercise.svg'
import social from './assets/images/icon-social.svg'
import self from './assets/images/icon-self-care.svg'
import { data } from './Datos.jsx'
import { useState } from 'react'
function App () {
  // console.log(data)
  const [daily, setDaily] = useState([])
  console.log(daily)
  const handaleSubmint = () => {
    setDaily(data)
  }
  return (
    <>
      <section className='grid grid-cols-12 gap-8 w-4/5 m-auto justify-center bg-white'>
        <CardJeremy
          handle={handaleSubmint}
        />
        <div className='col-span-full md:col-span-7 lg:col-span-8'>
          <div className='grid grid-cols-12 gap-5'>
            <CardTemp
              color='bg-orange-400'
              imagen={work}
              name={daily.map()}
              hours={daily.current}
              previous='last daily - 7hrs'
            />
            <CardTemp
              color='bg-sky-300'
              imagen={play}
              name='Play'
              hours='1hr'
              previous='last daily - 2hrs'
            />
            <CardTemp
              color='bg-rose-300'
              imagen={study}
              name='Study'
              hours='0hrs'
              previous='last daily - 1hr'
            />
            <CardTemp
              color='bg-green-300'
              imagen={exercise}
              name='Exercise'
              hours='1hr'
              previous='last daily - 1hr'
            />
            <CardTemp
              color='bg-violet-600'
              imagen={social}
              name='Social'
              hours='1hr'
              previous='last daily - 3hrs'
            />
            <CardTemp
              color='bg-amber-300'
              imagen={self}
              name='Self Care'
              hours='0hrs'
              previous='last daily - 1hr'
            />
          </div>
        </div>
      </section>
    </>
  )
}

export default App
