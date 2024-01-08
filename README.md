import React, { useState } from 'react';
import LeftSideItem from './LeftSideItem';

const LeftSideItemContainer = () => {
  const initialItemsToShow = 5;
  const [itemsToShow, setItemsToShow] = useState(initialItemsToShow);

  const handleShowMore = () => {
    // You can adjust the step based on how many items you want to show when "Show More" is clicked
    setItemsToShow(itemsToShow + 5);
  };

  return (
    <div>
      {[...Array(itemsToShow)].map((_, index) => (
        <LeftSideItem
          key={index}
          img={`URL_${index}`}  // Replace with the actual image URL logic
          desc={`Description_${index}`}  // Replace with the actual description logic
        />
      ))}

      {itemsToShow < 8 && (
        <button onClick={handleShowMore}>
          Show More
        </button>
      )}
    </div>
  );
};

export default LeftSideItemContainer;