import { IoSearchSharp } from 'react-icons/io5'
import NavPages from './NavPages'
import ProfileSettings from './ProfileSettings'
const Navbar = () => {
  return (
    <nav className='p-2 pl-4 bg-[#242526] border-b w-full border-[#38393A] fixed z-50'>
      <div className='flex items-center justify-between'>
        <div className='flex gap-2'>
          <button>
            <img
              src='https://upload.wikimedia.org/wikipedia/commons/6/6c/Facebook_Logo_2023.png'
              alt='facebook_logo'
              width={40}
              height={40}
            />
          </button>
          <form className='bg-[#3A3B3C] rounded-3xl w-[240px] items-center flex pl-3 gap-3 text-sm'>
            <IoSearchSharp className='text-xl text-gray-400' />
            <input
              type='text'
              placeholder='ძიება Facebook-ზე'
              className='bg-[#3A3B3C] w-auto text-gray-500'
            />
          </form>
        </div>
        <NavPages />
        <ProfileSettings />
      </div>
    </nav>
  )
}
export default Navbar
