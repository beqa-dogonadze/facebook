import { useState } from 'react'
import { MdKeyboardArrowDown, MdOutlineKeyboardArrowUp } from 'react-icons/md'
import { leftitems } from '../../data'
import LeftSideItem from './LeftSideItem'

const LeftSideItemContainer = () => {
  const [displayedItems, setDisplayedItems] = useState(7)

  //show more logic
  const handleShowMore = () => {
    setDisplayedItems((startItemCount) => startItemCount + leftitems.length)
  }

  //show less logic
  const handleShowLess = () => {
    setDisplayedItems(7)
  }

  return (
    //display all items from "leftitems" array
    <div className='mt-1'>
      {leftitems.slice(0, displayedItems).map((item) => (
        <LeftSideItem
          key={item.id}
          id={item.id}
          desc={item.desc}
          img={item.img}
        />
      ))}

      {/* if items are less than 7, show "show more" button */}
      {displayedItems < leftitems.length && (
        <button
          onClick={handleShowMore}
          className='flex items-center gap-2 mb-1 hover:bg-[#3A3B3C] p-2 pb-1 rounded-md w-[350px] text-white'
        >
          <MdKeyboardArrowDown className='text-3xl' />
          Show More
        </button>
      )}
      {/* if items are more than 7, display "show less" button */}
      {displayedItems > 7 && (
        <button
          onClick={handleShowLess}
          className='flex items-center gap-2 mb-1 hover:bg-[#3A3B3C] p-2 pb-1 rounded-md w-[350px] text-white'
        >
          <MdOutlineKeyboardArrowUp className='text-3xl' />
          Show Less
        </button>
      )}
    </div>
  )
}
export default LeftSideItemContainer
