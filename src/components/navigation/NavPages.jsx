import { AiOutlineShop } from 'react-icons/ai'
import { HiOutlineHome } from 'react-icons/hi2'
import { MdOutlineOndemandVideo, MdOutlinePeopleAlt } from 'react-icons/md'
import { RiGamepadLine } from 'react-icons/ri'

const NavPages = () => {
  return (
    <ul className='flex text-2xl gap-10 text-gray-400'>
      <li className=''>
        <a href='/'>
          <HiOutlineHome />
        </a>
      </li>
      <li>
        <a href='/'>
          <MdOutlinePeopleAlt />
        </a>
      </li>
      <li>
        <a href='/'>
          <MdOutlineOndemandVideo />
        </a>
      </li>
      <li>
        <a href='/'>
          <AiOutlineShop />
        </a>
      </li>
      <li>
        <a href='/'>
          <RiGamepadLine />
        </a>
      </li>
    </ul>
  )
}
export default NavPages
