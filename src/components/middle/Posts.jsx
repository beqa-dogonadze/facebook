import { BiLike } from 'react-icons/bi'
import { BsDot } from 'react-icons/bs'
import { FaGlobeAmericas, FaRegComment } from 'react-icons/fa'
import { IoIosMore } from 'react-icons/io'
import { IoClose } from 'react-icons/io5'
import { PiShareFatLight } from 'react-icons/pi'

const Posts = () => {
  return (
    <section className='mt-3 bg-[#242526] rounded-md'>
      <div className='flex p-3 items-center'>
        <div className='flex w-full'>
          <img
            className='rounded-full'
            src='https://scontent.ftbs9-1.fna.fbcdn.net/v/t39.30808-1/311126239_410750364569189_24758468566028515_n.jpg?stp=cp0_dst-jpg_p40x40&_nc_cat=1&ccb=1-7&_nc_sid=596444&_nc_ohc=5jlBn2EFrAEAX-FJG0l&_nc_ht=scontent.ftbs9-1.fna&oh=00_AfAePhMzF1CJq8SS8u4S0ZoSjLMYBhydlulgCRQo7NRvXg&oe=659D1FB5'
            alt=''
          />
          <div className='ml-2'>
            <h1 className='text-gray-300 hover:underline'>Rap-Hub</h1>
            <div className='flex items-center gap-1'>
              <h1 className='flex text-sm text-gray-400 hover:underline'>
                4 სთ
              </h1>
              <BsDot className='text-[8px] text-white mt-1' />
              <FaGlobeAmericas className='text-gray-400 text-[13px]' />
            </div>
          </div>
        </div>

        <div className='flex text-2xl text-gray-400'>
          <button className='rounded-full hover:bg-[#3A3B3C] p-2'>
            <IoIosMore />
          </button>
          <button className='rounded-full hover:bg-[#3A3B3C] p-2'>
            <IoClose />
          </button>
        </div>
      </div>
      <div className='bg-white flex justify-center'>
        <img
          src='https://scontent.ftbs9-1.fna.fbcdn.net/v/t39.30808-6/416019783_387735503626837_4341676719300432067_n.jpg?stp=dst-jpg_s640x640&_nc_cat=111&ccb=1-7&_nc_sid=3635dc&_nc_ohc=fuJHnim0rcIAX8xRZRZ&_nc_ht=scontent.ftbs9-1.fna&oh=00_AfAEHYk0676ZiijJjIswLX4933JzE_y8OwHH3UwNDFvWKg&oe=659BC55A'
          alt=''
        />
      </div>
      <div>მოწონების, კომენტარის, გაზიარების რაოდენობა</div>
      <div className='flex justify-between border-t border-gray-600 ml-4 mr-4 mt-2 pl-4 pr-4 p-2 text-[#A8AAB1]'>
        <div className='flex items-center gap-2'>
          <BiLike className='text-[20px]' />
          <h1>მოწონება</h1>
        </div>

        <div className='flex items-center gap-2'>
          <FaRegComment className='text-[20px]' />
          <h1>კომენტარის დამატება</h1>
        </div>

        <div className='flex items-center gap-2'>
          <PiShareFatLight className='text-[20px]' />
          <h1>გაზირება</h1>
        </div>
      </div>
    </section>
  )
}
export default Posts
