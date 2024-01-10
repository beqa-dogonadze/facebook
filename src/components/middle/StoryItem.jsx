const StoryItem = ({ img, name }) => {
  return (
    <button
      className={`bg-cover bg-no-repeat w-[140px] h-[250px] rounded-md mb-3 flex flex-col justify-between items-start p-3`}
      style={{ backgroundImage: `url(${img})` }}
    >
      <button>
        <img
          src='https://cdnb.artstation.com/p/assets/images/images/043/475/171/large/howl-random-guy.jpg?1637359240'
          alt={name}
          width={35}
          className='rounded-full '
        />
      </button>
      <h1 className=''>{name}</h1>
    </button>
  )
}

export default StoryItem
