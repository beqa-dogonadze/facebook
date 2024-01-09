import { IoIosMore } from 'react-icons/io'
import { IoSearchSharp } from 'react-icons/io5'
import ContacItem from './ContactItem'
const Contacts = () => {
  return (
    <div className='h-screen pt-20 fixed w-[350px] pr-2 right-0 bottom-0 overflow-hidden hover:overflow-y-auto'>
      <div className='text-white flex justify-between items-center gap-12 w-full'>
        <h1 className='text-white items-center text-[17px]'>კონტაქტები</h1>
        <div className='flex gap-4'>
          <IoSearchSharp />
          <IoIosMore />
        </div>
      </div>
      <ContacItem />
      <h1 className='text-white items-center text-md'>ჯგუფური მიმოწერები</h1>
    </div>
  )
}
export default Contacts
