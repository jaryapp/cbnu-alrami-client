import StyledMenu from './style'

interface MenuProps {
  menu: string
}

function Menu({ menu }: MenuProps) {
  return <StyledMenu>{menu}</StyledMenu>
}

export default Menu
