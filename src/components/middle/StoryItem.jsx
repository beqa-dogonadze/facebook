const StoryItem = ({ img, name }) => {
  return (
    <button className='bg-gray-600 w-[140px] h-[250px] rounded-md mb-3 '>
      <div className='flex flex-col justify-between '>
        <img src={img} alt={name} className='h-[250px]' />
      </div>
      <h1>{name}</h1>
    </button>
  )
}
export default StoryItem
