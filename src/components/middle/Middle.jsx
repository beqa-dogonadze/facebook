import NewPost from './NewPost'
import Posts from './Posts'
import Story from './Story'

const Middle = () => {
  return (
    <div className='m-auto  absolute flex flex-col w-[680px] justify-start left-0 right-0'>
      <Story />
      <NewPost />
      <Posts />
      <Posts />
    </div>
  )
}
export default Middle
