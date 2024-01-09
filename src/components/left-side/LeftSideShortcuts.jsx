import '../../index.css'
import LeftSideShortcutsItem from './LeftSideShortcutsItem'
const LeftSideShortcuts = () => {
  return (
    <div className='main-container w-[350px]'>
      <div className='flex justify-between items-center border-t border-gray-600 pt-2'>
        <h1 className='text-gray-300 text-[18px] p-2'>თქვენი მალსახმობები</h1>
        <button className='hidden text-blue-400 bg-[#1E1E1E] hover:bg-[#2b2b2b] text-[14px] rounded-md p-1 pl-pr-2'>
          ჩასწორება
        </button>
      </div>
      <LeftSideShortcutsItem />
    </div>
  )
}
export default LeftSideShortcuts
