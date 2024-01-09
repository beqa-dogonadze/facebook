import { CgMenuGridO } from 'react-icons/cg'
import { FaFacebookMessenger } from 'react-icons/fa6'
import { IoNotifications } from 'react-icons/io5'
const ProfileSettings = ({ href }) => {
  return (
    <ul className='flex text-2xl gap-3 text-gray-200'>
      <li className='bg-white bg-opacity-10 p-2 rounded-full'>
        <a href={href}>
          <CgMenuGridO />
        </a>
      </li>
      <li className='bg-white bg-opacity-10 p-2 rounded-full'>
        <a href={href}>
          <FaFacebookMessenger />
        </a>
      </li>
      <li className='bg-white bg-opacity-10 p-2 rounded-full'>
        <a href={href}>
          <IoNotifications />
        </a>
      </li>
      <li>
        <a href={href}>
          <img
            src='https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png'
            width={40}
            className='rounded-full'
            alt=''
          />
        </a>
      </li>
    </ul>
  )
}
export default ProfileSettings
