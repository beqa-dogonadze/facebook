import Footer from './Footer'
import LeftSideItemContainer from './LeftSideItemContainer'
import LeftSideShortcuts from './LeftSideShortcuts'

const LeftSide = () => {
  return (
    <div className='w-[360px] fixed overflow-hidden hover:overflow-y-auto pt-16 bottom-0 h-screen'>
      <LeftSideItemContainer />
      <LeftSideShortcuts />
      <Footer />
    </div>
  )
}
export default LeftSide
