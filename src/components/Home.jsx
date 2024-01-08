import LeftSide from './left-side/LeftSide'
import Middle from './middle/Middle'
import RightSide from './right-side/RightSide'

const Home = () => {
  return (
    <div className='flex absolute justify-between w-full p-3 mt-16'>
      <LeftSide />
      <Middle />
      <RightSide />
    </div>
  )
}
export default Home
