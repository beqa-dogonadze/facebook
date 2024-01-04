import { users } from "../../data"

const ContacItem = () => {
  return (
  users.map((user) =>  {
    return (
      <div className="flex gap-3 pt-3">
        <img src={user.img} alt="prof-iamge" width={35} className="rounded-full" />
        <h1 className="text-white">{`${user.name} ${user.lastname}`}</h1>
      </div>
    )
  })    
  )
}
export default ContacItem
