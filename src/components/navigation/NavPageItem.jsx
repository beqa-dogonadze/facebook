const NavPageItem = (tag) => {
  const cst = `<${tag}/>`
  return (
    <li>
      <a href='/home'>{cst}</a>
    </li>
  )
}
export default NavPageItem
