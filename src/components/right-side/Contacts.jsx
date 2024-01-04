import { IoIosMore } from 'react-icons/io'
import { IoSearchSharp } from 'react-icons/io5'
import ContacItem from './ContacItem'

const Contacts = () => {
  return (
    <div className='overflow-hidden overflow-y-auto max-h-[90vh] pr-2'>
      <div className='text-white flex justify-between items-center gap-12 w-full'>
        <h1 className='text-white items-center text-md'>კონტაქტები</h1>
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
