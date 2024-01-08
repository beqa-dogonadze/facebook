const StoryItem = ({ img, name }) => {
  return (
    <div className='bg-gray-600 w-[140px] h-[250px] rounded-md mb-3 '>
      <div className=' flex flex-col justify-between '>
        <img src={img} alt={name} className='h-[250px]' />
      </div>
      <h1 className='absolute pb-10'>{name}</h1>
    </div>
  )
}
export default StoryItem
