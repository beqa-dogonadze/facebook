import { useState } from 'react'
import { leftItems } from '../../data'
import LeftSideShortcutsItem from './LeftSideShortcutsItem'

const LeftSideItemContainer = () => {
  const [displayedItems, setDisplayedItems] = useState(5)
  const handleShowMore = () => {
    setDisplayedItems((prev) => prev + 5)
  }

  const handleShowLess = () => {
    setDisplayedItems(5)
  }

  return (
    <div>
      {leftItems.slice(0, displayedItems).map((item) => (
        <LeftSideShortcutsItem key={item.id} id={item.id} desc={item.desc} />
      ))}

      {displayedItems < leftItems.length && (
        <button onClick={handleShowMore}>Show More</button>
      )}

      {displayedItems > 5 && (
        <button onClick={handleShowLess}>Show Less</button>
      )}
    </div>
  )
}
export default LeftSideItemContainer
