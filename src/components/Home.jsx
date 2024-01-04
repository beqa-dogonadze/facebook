import LeftSide from './left-side/LeftSide'
import Middle from './middle/Middle'
import RightSide from './right-side/RightSide'

const Home = () => {
  return (
    <div className='flex absolute mt-20 p-3'>
      <LeftSide />
      <Middle />
      <RightSide />
    </div>
  )
}
export default Home
