const LeftSideItem = ({ img, desc }) => {
  return (
    <button className='flex items-center gap-2 mb-1 hover:bg-[#3A3B3C] p-2 pb-1 rounded-md w-[350px]'>
      <img
        src={img}
        alt={desc}
        width={36}
        height={36}
        className='rounded-full'
      />
      <h1 className='text-white text-[15px]'>{desc}</h1>
    </button>
  )
}
export default LeftSideItem
