import { IoIosMore } from 'react-icons/io'
import { IoSearchSharp } from 'react-icons/io5'
import ContacItem from './ContacItem'

const Contacts = () => {
  return (
    <div className='overflow-y-auto h-[90%] w-[350px] pr-2 fixed right-0 bottom-3 no-scrollbar hover:overflow-y-auto'>
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
