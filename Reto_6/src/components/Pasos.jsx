// Iconos
import { CiUser } from 'react-icons/ci'
import { FaRegAddressCard } from 'react-icons/fa'
import { MdIncompleteCircle } from 'react-icons/md'

export const Pasos = ({ pasosActual }) => {
  const activar = 'font-extrabold text-gray-950 flex gap-x-2 items-center'
  const desativar = 'flex gap-2 items-center '
  return (
    <div className='flex justify-around'>
      <div className={` ${pasosActual === 0 ? activar : desativar}`}>
        <CiUser />
        <p>Usuario</p>
      </div>
      <div className={` ${pasosActual === 1 ? activar : desativar}`}>
        <FaRegAddressCard />
        <p>Direción</p>
      </div>
      <div className={` ${pasosActual === 2 ? activar : desativar}`}>
        <MdIncompleteCircle />
        <p>Datos Complementarios</p>
      </div>

    </div>

  )
}
