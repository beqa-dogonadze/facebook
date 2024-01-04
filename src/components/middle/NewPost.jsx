import { IoMdPhotos } from 'react-icons/io'
import { TiVideo } from 'react-icons/ti'

const NewPost = () => {
  return (
    <section className='bg-[#242526] rounded-md w-[680px]'>
      <div className='flex gap-2 ml-4 mr-4 pb-3 pt-3 border-b border-gray-500'>
        <img
          src='https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png'
          alt='profile pic'
          width={40}
          className='rounded-[50%]'
        />
        <button className='text-gray-400 text-md bg-[#3A3B3C] rounded-3xl p-2 w-full text-start'>
          ბექა, საკუთარ აზრს ხომ არ გაგვიზიარებდით?
        </button>
      </div>

      <div className='flex justify-between'>
        <button className='flex gap-2 items-center justify-center w-full m-2 mr-0 p-2 hover:bg-[#3A3B3C] rounded-xl'>
          <TiVideo className='text-red-500 text-2xl' />
          <h1 className='text-gray-400'>პირდაპირი ვიდეომაუწყებლობა</h1>
        </button>
        <button className='flex gap-2 items-center justify-center w-full m-2 p-2 ml-0 hover:bg-[#3A3B3C] rounded-xl '>
          <IoMdPhotos className='text-green-500 text-2xl' />
          <h1 className='text-gray-400'>ფოტო/ვიდეო</h1>
        </button>
      </div>
    </section>
  )
}
export default NewPost
